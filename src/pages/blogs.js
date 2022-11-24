import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ComingSoon from "../utils/coming-soon"
import BlogTemplate from "../templates/blog-post"

const Blog = () => {
  return (
    <Layout>
      <Seo title="Blog"></Seo>
      <div className="min-h-screen">
        <p className="text-9xl text-red-600 pt-5">Blogs!</p>
        <BlogTemplate/>
        <ComingSoon/>
      </div>
    </Layout>
  )
}
export default Blog
