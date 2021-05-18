import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects"></SEO>
      <div className="min-h-screen">
        Here are my <span className="text-9xl text-red-600">Projects</span>
      </div>
    </Layout>
  )
}
export default Projects
