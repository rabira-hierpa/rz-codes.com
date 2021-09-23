import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ComingSoon from "../utils/coming-soon"
const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects"></SEO>
      <div className="min-h-screen">
        <p className="text-9xl text-red-600 pt-5">Projects</p>
        <ComingSoon/>
      </div>
    </Layout>
  )
}
export default Projects
