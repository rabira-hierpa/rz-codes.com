import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog"></SEO>
      <div className="min-h-screen">
        Here are my <span className="text-9xl text-red-600">Blogs!</span>
      </div>
    </Layout>
  )
}
export default Blog
