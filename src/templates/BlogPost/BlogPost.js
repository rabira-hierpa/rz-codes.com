import React from "react"
import { Link, graphql } from "gatsby"
import { SEO } from "../../components/layout/SEO"
import { Layout } from "../../components/layout/Layout"
import parse from "html-react-parser"
import { useSyntaxHighlighting } from "../../hooks"
import "./BlogPost.css"

const BlogPostTemplate = ({
  data: { previous, next, post, allWpMediaItem },
}) => {
  // Apply syntax highlighting and add copy buttons
  useSyntaxHighlighting()

  // Create a mapping of WordPress URLs to local file URLs
  const imageMapping = {}
  allWpMediaItem.nodes.forEach(media => {
    if (media.sourceUrl && media.localFile?.publicURL) {
      imageMapping[media.sourceUrl] = media.localFile.publicURL
      // Also map the base URL without size suffix (e.g., -1024x578)
      const baseUrl = media.sourceUrl.replace(
        /-\d+x\d+(\.(png|jpg|jpeg|webp))$/i,
        "$1",
      )
      imageMapping[baseUrl] = media.localFile.publicURL
    }
  })

  // Custom parser to fix WordPress image URLs
  const parseOptions = {
    replace: domNode => {
      if (domNode.name === "img" && domNode.attribs?.src) {
        let src = domNode.attribs.src

        // Check if this is a WordPress image
        if (src.includes("blog.rz-codes.com/wp-content/uploads/")) {
          // Try direct mapping first
          if (imageMapping[src]) {
            return (
              <img
                {...domNode.attribs}
                src={imageMapping[src]}
                alt={domNode.attribs.alt}
              />
            )
          }

          // Try without size suffix
          const baseUrl = src.replace(/-\d+x\d+(\.(png|jpg|jpeg|webp))$/i, "$1")
          if (imageMapping[baseUrl]) {
            return (
              <img
                {...domNode.attribs}
                src={imageMapping[baseUrl]}
                alt={domNode.attribs.alt}
              />
            )
          }
        }
      }
    },
  }

  const featuredImage = {
    localUrl: post.featuredImage?.node?.localFile?.publicURL,
    sourceUrl: post.featuredImage?.node?.sourceUrl,
    alt: post.featuredImage?.node?.altText || ``,
  }

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
        {/* Article Container - Medium-style max width */}
        <article
          itemScope
          className="blog-post-article max-w-3xl mx-auto px-6 md:px-8 py-16"
          itemType="http://schema.org/Article"
        >
          {/* Header Section */}
          <header className="mb-12">
            {/* Title */}
            <h1
              itemProp="headline"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-text-light dark:text-text-dark"
            >
              {parse(post.title)}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{post.author.node.name}</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags?.nodes?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.nodes.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            )}

            {/* Featured Image */}
            {(featuredImage?.localUrl || featuredImage?.sourceUrl) && (
              <div className="blog-post-hero-image">
                <img
                  loading="lazy"
                  src={featuredImage.localUrl || featuredImage.sourceUrl}
                  alt={featuredImage.alt}
                  className="w-full h-auto"
                />
              </div>
            )}
          </header>

          {/* Content Section - Prose styling */}
          {!!post.content && (
            <section
              itemProp="articleBody"
              className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-img:rounded-lg prose-img:shadow-lg max-w-none blog-content"
            >
              {parse(post.content, parseOptions)}
            </section>
          )}

          {/* Divider */}
          <hr className="my-12 border-gray-200 dark:border-gray-700" />

          {/* Author Bio (optional) */}
          <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg mb-12">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {post.author.node.name.charAt(0)}
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 text-text-light dark:text-text-dark">
                {post.author.node.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Software Engineer, GIS Developer, and FOSS enthusiast sharing
                insights on web development, GIS technologies, and open-source
                tools.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation - Outside article for full width */}
        <nav className="max-w-7xl mx-auto px-6 md:px-8 pb-16">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {previous && (
              <Link
                to={previous.uri}
                rel="prev"
                className="flex-1 group p-6 bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 transition-all duration-300"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous Article
                </div>
                <div className="text-lg font-semibold text-text-light dark:text-text-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {parse(previous.title)}
                </div>
              </Link>
            )}

            {next && (
              <Link
                to={next.uri}
                rel="next"
                className="flex-1 group p-6 bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 transition-all duration-300 text-right"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center justify-end gap-2">
                  Next Article
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="text-lg font-semibold text-text-light dark:text-text-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {parse(next.title)}
                </div>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    allWpMediaItem {
      nodes {
        sourceUrl
        localFile {
          publicURL
        }
      }
    }
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      author {
        node {
          avatar {
            url
          }
          name
          roles {
            nodes {
              name
            }
          }
        }
      }
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl
          localFile {
            publicURL
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
