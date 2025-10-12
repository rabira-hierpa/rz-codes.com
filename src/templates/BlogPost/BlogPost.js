import React from "react"
import { Link, graphql } from "gatsby"
import { SEO } from "../../components/layout/SEO"
import { Layout } from "../../components/layout/Layout"
import parse from "html-react-parser"

const BlogPostTemplate = ({
  data: { previous, next, post, allWpMediaItem },
}) => {
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
      <div className="min-h-screen pt-10">
        <article
          itemScope
          className="blog-post bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors px-5 py-0 md:px-20 md:py-10 rounded-lg"
          itemType="http://schema.org/Article"
        >
          <header>
            <h1
              itemProp="headline"
              className="text-2xl md:text-5xl font-semibold text-primary-600 dark:text-primary-400 py-5 text-center"
            >
              {parse(post.title)}
            </h1>

            <div className="flex flex-wrap space-x-10 py-2 text-gray-600 dark:text-gray-400">
              <span>Last updated - {post.date}</span>
              <span>Author {`${post.author.node.name}`}</span>
            </div>

            <div className="border border-1 border-b-neutral-400 dark:border-b-neutral-600 mb-5"></div>
            {(featuredImage?.localUrl || featuredImage?.sourceUrl) && (
              <div className="py-10">
                <img
                  loading="lazy"
                  src={featuredImage.localUrl || featuredImage.sourceUrl}
                  alt={featuredImage.alt}
                />
              </div>
            )}
          </header>
          {!!post.content && (
            <section
              itemProp="articleBody"
              className="flex flex-wrap space-y-10 text-justify text-md md:text-lg"
            >
              {parse(post.content, parseOptions)}
            </section>
          )}

          <hr className="py-5 mt-5 border-neutral-400 dark:border-neutral-600" />
        </article>

        <nav className="pt-10 cursor-pointer">
          <ul className="flex flex-wrap justify-between list-none p-0">
            <li className="hover:text-primary-600 dark:hover:text-primary-400 text-secondary-600 dark:text-secondary-400 transition-colors">
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li className="hover:text-primary-600 dark:hover:text-primary-400 text-secondary-600 dark:text-secondary-400 transition-colors">
              {next && (
                <Link to={next.uri} rel="next">
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
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
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
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
