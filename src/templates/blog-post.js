import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.sourceUrl,
    alt: post.featuredImage?.node?.altText || ``,
  }

  console.log(post)

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <div className="min-h-screen pt-10">
        <article
          className="blog-post bg-white px-20 py-10"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1
              className="text-2xl md:text-5xl font-semibold text-red-600 py-5 text-center "
              itemProp="headline"
            >
              {parse(post.title)}
            </h1>

            <p className="py-2 ">Last updated - {post.date}</p>

            {featuredImage?.data && (
              <GatsbyImage
                image={featuredImage.data.sourceUrl}
                alt={featuredImage.alt}
                style={{ marginBottom: 50 }}
                className="rounded-lg"
              />
            )}
          </header>
          {!!post.content && <p className="py-10">{parse(post.content)}</p>}

          <hr />
        </article>

        <nav className="pt-10 hover:text-red-600 cursor-pointer">
          <ul className="flex flex-wrap justify-between list-none p-0">
            <li>
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
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
          link
          sourceUrl
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
