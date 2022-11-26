import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import parse from "html-react-parser"

const PageTemplate = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="Blogs related to web dev,linux and QGIS" />
      <div className="min-h-screen">
        <div className="grid grid-cols-1 align-items-center">
          <p className="text-4xl pt-10 text-red-600">Recent Articles</p>
          <ol className="py-10">
            {posts.map(post => {
              const title = post.title
              return (
                <li className="py-2" key={post.uri}>
                  <article
                    itemScope
                    className=""
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2 className="text-red-600 text-lg">
                        <Link to={post.uri} itemProp="url">
                          <span itemProp="headline">{parse(title)}</span>
                        </Link>
                      </h2>
                      <small className="flex justify-right">{post.date}</small>
                    </header>
                    <section itemProp="description">
                      {parse(post.excerpt)}
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
          {previousPagePath && (
            <>
              <Link to={previousPagePath}>Previous page</Link>
              <br />
            </>
          )}
          {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
        </div>
      </div>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
