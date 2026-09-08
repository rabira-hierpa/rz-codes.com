#!/usr/bin/env node
/**
 * Post-build SEO assertions against the generated static HTML.
 *
 * Why this exists: the repo's `test` script is `echo "Write tests!" && exit 1`,
 * and prod.yml runs `npm run build` and then FTP-syncs `public/` with nothing
 * in between. There was no gate that could stop a bad deploy, so every SEO
 * claim was verified by hand, once, and then drifted.
 *
 * Two of the defects this catches are ones that actually shipped:
 *   - /landing/landing/ : a 176KB untitled clone of the homepage, in the sitemap
 *   - <title> and og:title disagreeing, which is silent and invisible
 *
 * Usage:  node scripts/assert-seo.mjs [publicDir]
 * Exit 0 = pass, 1 = fail. Wire between build and deploy.
 */

import { readFileSync, existsSync } from 'node:fs'
import path from 'node:path'

const PUBLIC = process.argv[2] || 'public'
const spec = JSON.parse(readFileSync('seo/pages.json', 'utf8'))

let failures = 0
const fail = (route, msg) => {
  failures++
  console.log(`  \x1b[31m✗\x1b[0m ${route}\n      ${msg}`)
}
const pass = (route, msg) => console.log(`  \x1b[32m✓\x1b[0m ${route}  ${msg}`)

/** Minimal entity decode - enough for titles, which is all we compare. */
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(d))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))

const attr = (html, re) => {
  const m = html.match(re)
  return m ? decode(m[1]) : null
}

console.log('\nSEO assertions\n')

for (const route of spec.routes) {
  const file = path.join(PUBLIC, route.path, 'index.html')
  if (!existsSync(file)) {
    fail(route.path, `missing built file: ${file}`)
    continue
  }
  const html = readFileSync(file, 'utf8')

  // <title> - exact match. react-helmet emits data-react-helmet on the tag.
  const title = attr(html, /<title[^>]*>([^<]*)<\/title>/)
  if (title !== route.title) {
    fail(route.path, `title mismatch\n        expected: ${route.title}\n        actual:   ${title}`)
  }

  // The desync this codebase is structurally prone to: fullTitle and
  // titleTemplate are separate code paths in SEO.js.
  const ogTitle = attr(html, /<meta[^>]*property="og:title"[^>]*content="([^"]*)"/)
  if (ogTitle !== title) {
    fail(route.path, `og:title !== <title> (SEO.js brandSuffix desync)\n        title:    ${title}\n        og:title: ${ogTitle}`)
  }

  // Canonical must carry the trailing slash Gatsby emits, or the eventual
  // Next cutover silently changes every indexed URL.
  const canonical = attr(html, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/)
  const expected = spec.siteUrl + route.path
  if (canonical !== expected) {
    fail(route.path, `canonical mismatch\n        expected: ${expected}\n        actual:   ${canonical}`)
  }

  const robots = attr(html, /<meta[^>]*name="robots"[^>]*content="([^"]*)"/)
  if (robots !== 'index, follow') {
    fail(route.path, `robots should be "index, follow", got: ${robots}`)
  }

  // The share card. Guards the specific regression that shipped: a square PWA
  // icon served while twitter:card claimed summary_large_image.
  if (spec.ogImage) {
    const ogImage = attr(html, /<meta[^>]*property="og:image"[^>]*content="([^"]*)"/)
    const expectedImg = spec.siteUrl + spec.ogImage.path
    if (ogImage !== expectedImg) {
      fail(route.path, `og:image mismatch\n        expected: ${expectedImg}\n        actual:   ${ogImage}`)
    }
    const w = attr(html, /<meta[^>]*property="og:image:width"[^>]*content="([^"]*)"/)
    const h = attr(html, /<meta[^>]*property="og:image:height"[^>]*content="([^"]*)"/)
    if (w !== String(spec.ogImage.width) || h !== String(spec.ogImage.height)) {
      fail(route.path, `og:image dimensions wrong or missing (LinkedIn needs them): got ${w}x${h}, expected ${spec.ogImage.width}x${spec.ogImage.height}`)
    }
    const card = attr(html, /<meta[^>]*name="twitter:card"[^>]*content="([^"]*)"/)
    if (card === 'summary_large_image' && spec.ogImage.width < 600) {
      fail(route.path, `twitter:card claims summary_large_image but the image is only ${spec.ogImage.width}px wide`)
    }
  }

  // Exactly one parseable JSON-LD block containing a Person with the name.
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  if (blocks.length !== 1) {
    fail(route.path, `expected exactly 1 ld+json block, found ${blocks.length}`)
  } else {
    try {
      const data = JSON.parse(blocks[0][1])
      const nodes = data['@graph'] || [data]
      const person = nodes.find((n) => n['@type'] === 'Person')
      if (!person) fail(route.path, 'no Person node in JSON-LD')
      else if (!person.name) fail(route.path, 'Person node has no name')
      else if (!person.sameAs?.length) fail(route.path, 'Person node has no sameAs profiles')
    } catch (e) {
      fail(route.path, `JSON-LD does not parse: ${e.message}`)
    }
  }

  if (!failures) pass(route.path, `"${title}"`)
}

// Sitemap must contain exactly the expected set. This check alone would have
// caught /landing/landing/ the day it appeared.
const sitemap = path.join(PUBLIC, 'sitemap-0.xml')
if (existsSync(sitemap)) {
  const urls = [...readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  for (const bad of spec.forbiddenSitemapPaths || []) {
    if (urls.some((u) => u.endsWith(bad))) {
      fail('sitemap', `contains forbidden path ${bad} - a duplicate route is being submitted to Google`)
    }
  }
  for (const route of spec.routes) {
    if (!urls.includes(spec.siteUrl + route.path)) {
      fail('sitemap', `missing ${spec.siteUrl}${route.path}`)
    }
  }
  if (!failures) console.log(`  \x1b[32m✓\x1b[0m sitemap  ${urls.length} URLs, no forbidden paths`)
} else {
  console.log(`  \x1b[33m!\x1b[0m sitemap-0.xml not found at ${sitemap} (skipped)`)
}

console.log('')
if (failures) {
  console.log(`\x1b[31m${failures} SEO assertion(s) failed. Deploy blocked.\x1b[0m\n`)
  process.exit(1)
}
console.log('\x1b[32mAll SEO assertions passed.\x1b[0m\n')
