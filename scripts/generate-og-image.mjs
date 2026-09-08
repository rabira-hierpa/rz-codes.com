#!/usr/bin/env node
/**
 * Generates static/og-image.png — the 1200x630 social share card.
 *
 * Why: the site previously served /icons/icon-512x512.png as og:image, a square
 * PWA icon, while twitter:card claimed "summary_large_image". Every share on
 * X, LinkedIn, Slack and iMessage rendered wrong.
 *
 * The card is committed as a PNG, so CI does not need fonts or sharp. Only
 * regeneration does. Regenerating requires Poppins installed locally (the site
 * font) — otherwise sharp/librsvg silently substitutes a system face and the
 * card stops matching the site.
 *
 * Colours are read from tailwind.config.js rather than hardcoded, so the card
 * cannot drift from the design system.
 *
 * Usage: node scripts/generate-og-image.mjs
 */

import { writeFileSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import sharp from 'sharp'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const colors = require('../tailwind.config.js').theme.extend.colors

const PRIMARY = colors.primary[600] // #dc2626
const SECONDARY = colors.secondary[400] // #facc15
const BG = colors.background.dark // #1a1a1a
const TEXT = colors.text.dark // #f3f3f3

const W = 1200
const H = 630

// Fail loudly rather than shipping a card in the wrong typeface.
try {
  const fonts = execSync('fc-list 2>/dev/null || true', { encoding: 'utf8' })
  if (!/poppins/i.test(fonts)) {
    console.warn(
      '\n\x1b[33mWARNING: Poppins not found. librsvg will substitute a system font\n' +
        'and the card will not match the site. Install Poppins before regenerating.\x1b[0m\n',
    )
  }
} catch {
  /* fc-list unavailable; continue */
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${PRIMARY}"/>
      <stop offset="100%" stop-color="${SECONDARY}"/>
    </linearGradient>
    <radialGradient id="blobA" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${PRIMARY}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${PRIMARY}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blobB" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${SECONDARY}" stop-opacity="0.40"/>
      <stop offset="100%" stop-color="${SECONDARY}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="${BG}"/>

  <!-- Echoes the animated blob gradients in the site hero. -->
  <circle cx="1010" cy="140" r="300" fill="url(#blobA)"/>
  <circle cx="1150" cy="520" r="260" fill="url(#blobB)"/>

  <!-- Brand bar, same gradient as the hero headline and CTA button. -->
  <rect x="0" y="0" width="14" height="${H}" fill="url(#brand)"/>

  <text x="88" y="252" font-family="Poppins, Helvetica, Arial, sans-serif"
        font-size="96" font-weight="700" fill="${TEXT}">Rabra Hierpa</text>

  <text x="90" y="322" font-family="Poppins, Helvetica, Arial, sans-serif"
        font-size="42" font-weight="400" fill="#d1d5db">Software Engineer &amp; GIS Developer</text>

  <rect x="90" y="368" width="132" height="5" rx="2.5" fill="url(#brand)"/>

  <text x="90" y="446" font-family="Poppins, Helvetica, Arial, sans-serif"
        font-size="30" font-weight="400" fill="#9ca3af">Mapping cities · Building applications · Designing experiences</text>

  <text x="90" y="546" font-family="Poppins, Helvetica, Arial, sans-serif"
        font-size="34" font-weight="700" fill="${SECONDARY}">rz-codes.com</text>
</svg>`

const out = 'static/og-image.png'

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out)

const meta = await sharp(out).metadata()
if (meta.width !== W || meta.height !== H) {
  console.error(`\nERROR: expected ${W}x${H}, got ${meta.width}x${meta.height}\n`)
  process.exit(1)
}
if (!existsSync(out)) {
  console.error('\nERROR: file not written\n')
  process.exit(1)
}

console.log(`\n  wrote ${out}  ${meta.width}x${meta.height}  ${meta.size} bytes\n`)
