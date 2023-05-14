import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import parse from "html-react-parser"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    url: post.featuredImage?.node?.sourceUrl,
    alt: post.featuredImage?.node?.altText || ``,
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <div className="min-h-screen pt-10">
        <article
          itemScope
          className="blog-post bg-white px-20 py-10"
          itemType="http://schema.org/Article"
        >
          <header>
            <h1
              itemProp="headline"
              className="text-2xl md:text-5xl font-semibold text-red-600 py-5 text-center "
            >
              {parse(post.title)}
            </h1>

            <div className="flex flex-wrap space-x-10 py-2">
              <span>Last updated - {post.date}</span>
              <span>Author {`${post.author.node.name}`}</span>
            </div>

            <div className="border border-1 border-b-neutral-400 mb-5"></div>
            {!!featuredImage?.data && (
              <div className="py-10">
                <img
                  loading="lazy"
                  src={featuredImage.url}
                  alt={featuredImage.alt}
                />
              </div>
            )}
          </header>
          {!!post.content && (
            <section
              itemProp="articleBody"
              className="flex flex-wrap space-y-10 text-justify"
            >
              {parse(post.content)}
            </section>
          )}

          <hr className="py-5 mt-5" />
        </article>

        <nav className="pt-10  cursor-pointer">
          <ul className="flex flex-wrap justify-between list-none p-0">
            <li className="hover:text-red-600">
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li className="hover:text-red-600">
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
