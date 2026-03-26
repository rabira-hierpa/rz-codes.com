/**
 * SEO: meta tags, canonical, Open Graph, Twitter Cards, JSON-LD.
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function stripHtml(html) {
  if (!html || typeof html !== `string`) return ``
  return html
    .replace(/<[^>]*>/g, ` `)
    .replace(/&nbsp;/gi, ` `)
    .replace(/\s+/g, ` `)
    .trim()
}

function absoluteUrl(siteUrl, pathOrUrl) {
  if (!pathOrUrl) return ``
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  const base = (siteUrl || ``).replace(/\/$/, ``)
  const path = pathOrUrl.startsWith(`/`) ? pathOrUrl : `/${pathOrUrl}`
  return `${base}${path}`
}

function compactJsonLd(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function SEO({
  description,
  lang,
  meta = [],
  title,
  pathname,
  image,
  type = `website`,
  publishedTime,
  modifiedTime,
  authorName,
  keywords,
  noindex = false,
  pagination,
  articleSection,
  jsonLdExtra,
}) {
  const { site } = useStaticQuery(graphql`
    query SeoSiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          defaultOgImage
          locale
          twitterUsername
          sameAs
        }
      }
    }
  `)

  const sm = site.siteMetadata
  const siteTitle = sm.title || ``
  const siteDesc = sm.description || ``
  const siteUrl = (sm.siteUrl || ``).replace(/\/$/, ``)
  const defaultOgImage = sm.defaultOgImage || `/icons/icon-512x512.png`
  const locale = sm.locale || `en_US`
  const twitterUsername = sm.twitterUsername || ``
  const sameAs = Array.isArray(sm.sameAs) ? sm.sameAs.filter(Boolean) : []

  const metaDescription = stripHtml(description || siteDesc).slice(0, 320)
  const pageTitleRaw = stripHtml(title || ``)
  const fullTitle =
    siteTitle && pageTitleRaw
      ? `${pageTitleRaw} | ${siteTitle}`
      : pageTitleRaw || siteTitle

  const pathForCanonical =
    pathname != null && pathname !== ``
      ? pathname.startsWith(`/`)
        ? pathname
        : `/${pathname}`
      : ``
  const canonical =
    siteUrl && pathForCanonical ? `${siteUrl}${pathForCanonical}` : ``

  const defaultImageUrl = absoluteUrl(siteUrl, defaultOgImage)
  const ogImageUrl = image ? absoluteUrl(siteUrl, image) : defaultImageUrl

  const keywordList =
    keywords != null
      ? Array.isArray(keywords)
        ? keywords
        : [keywords]
      : []
  const keywordContent = keywordList.filter(Boolean).join(`, `)

  const twitterCard = ogImageUrl ? `summary_large_image` : `summary`
  const twitterHandle = twitterUsername.startsWith(`@`)
    ? twitterUsername
    : twitterUsername
      ? `@${twitterUsername}`
      : ``

  const baseMeta = [
    noindex
      ? { name: `robots`, content: `noindex, follow` }
      : { name: `robots`, content: `index, follow` },
    { name: `description`, content: metaDescription },
    { name: `author`, content: sm.author || `` },
    { property: `og:site_name`, content: siteTitle },
    { property: `og:locale`, content: locale },
    { property: `og:title`, content: fullTitle },
    { property: `og:description`, content: metaDescription },
    { property: `og:type`, content: type },
    ...(canonical ? [{ property: `og:url`, content: canonical }] : []),
    { property: `og:image`, content: ogImageUrl },
    { property: `og:image:alt`, content: pageTitleRaw || siteTitle },
    ...(type === `article` && publishedTime
      ? [{ property: `article:published_time`, content: publishedTime }]
      : []),
    ...(type === `article` && modifiedTime
      ? [{ property: `article:modified_time`, content: modifiedTime }]
      : []),
    ...(type === `article` && authorName
      ? [{ property: `article:author`, content: authorName }]
      : []),
    ...(type === `article` && articleSection
      ? [{ property: `article:section`, content: articleSection }]
      : []),
    { name: `twitter:card`, content: twitterCard },
    ...(twitterHandle ? [{ name: `twitter:site`, content: twitterHandle }] : []),
    ...(twitterHandle ? [{ name: `twitter:creator`, content: twitterHandle }] : []),
    { name: `twitter:title`, content: fullTitle },
    { name: `twitter:description`, content: metaDescription },
    { name: `twitter:image`, content: ogImageUrl },
    ...(keywordContent ? [{ name: `keywords`, content: keywordContent }] : []),
  ]

  const links = [
    ...(canonical ? [{ rel: `canonical`, href: canonical }] : []),
    ...(pagination?.previous
      ? [{ rel: `prev`, href: pagination.previous }]
      : []),
    ...(pagination?.next ? [{ rel: `next`, href: pagination.next }] : []),
  ]

  const personId = `${siteUrl}/#person`
  const websiteId = `${siteUrl}/#website`

  const graph = [
    {
      "@type": `WebSite`,
      "@id": websiteId,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: stripHtml(siteDesc),
      publisher: { "@id": personId },
      inLanguage: lang || `en`,
    },
    {
      "@type": `Person`,
      "@id": personId,
      name: sm.author || siteTitle,
      url: `${siteUrl}/`,
      ...(sameAs.length ? { sameAs } : {}),
    },
  ]

  if (
    type === `article` &&
    canonical &&
    pageTitleRaw &&
    publishedTime
  ) {
    const posting = {
      "@type": `BlogPosting`,
      headline: pageTitleRaw,
      description: metaDescription,
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      author: {
        "@type": `Person`,
        name: authorName || sm.author || siteTitle,
      },
      publisher: { "@id": personId },
      mainEntityOfPage: { "@type": `WebPage`, "@id": canonical },
      url: canonical,
    }
    if (ogImageUrl) posting.image = [ogImageUrl]
    if (articleSection) posting.articleSection = articleSection
    graph.push(posting)
  }

  if (jsonLdExtra) {
    const extra = Array.isArray(jsonLdExtra) ? jsonLdExtra : [jsonLdExtra]
    graph.push(...extra.filter(Boolean))
  }

  const jsonLd = compactJsonLd({
    "@context": `https://schema.org`,
    "@graph": graph,
  })

  const helmetTitle = pageTitleRaw || siteTitle

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={helmetTitle}
      titleTemplate={
        siteTitle && pageTitleRaw ? `%s | ${siteTitle}` : null
      }
      meta={baseMeta.concat(meta).filter(Boolean)}
      link={links}
    >
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export { SEO }
export default SEO
