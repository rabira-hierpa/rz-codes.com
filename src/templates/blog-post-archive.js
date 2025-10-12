import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo"
import parse from "html-react-parser"

const PageTemplate = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="Blogs related to web dev,linux and QGIS" />
      <div className="min-h-screen">
        <div className="grid grid-cols-1 align-items-center">
          <p className="text-4xl pt-10 text-primary-600 dark:text-primary-400">
            Recent Articles
          </p>
          <ol className="py-10">
            {posts.map(post => {
              const title = post.title
              return (
                <li
                  className="my-5 p-5 bg-surface-light dark:bg-surface-dark border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all rounded-lg"
                  key={post.uri}
                >
                  <article
                    itemScope
                    className="flex space-x-5"
                    itemType="http://schema.org/Article"
                  >
                    <div className="flex flex-col">
                      <header>
                        <h2 className="text-primary-600 dark:text-primary-400 text-4xl">
                          <Link to={post.uri} itemProp="url">
                            <span itemProp="headline">{parse(title)}</span>
                          </Link>
                        </h2>
                        <small className="flex justify-right text-gray-600 dark:text-gray-400">
                          {post.date}
                        </small>
                      </header>
                      <section
                        itemProp="description"
                        className="text-lg text-text-light dark:text-text-dark"
                      >
                        {parse(post.excerpt)}
                      </section>
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
          <div className="flex space-x-4">
            {previousPagePath && (
              <Link
                to={previousPagePath}
                className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Previous page
              </Link>
            )}
            {nextPagePath && (
              <Link
                to={nextPagePath}
                className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Next page
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(sort: { date: DESC }, limit: $postsPerPage, skip: $offset) {
      nodes {
        id
        title
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
      }
      nodes {
        id
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
        content
        contentType {
          node {
            labels {
              featuredImage
            }
            name
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
          }
        }
      }
    }
  }
`
