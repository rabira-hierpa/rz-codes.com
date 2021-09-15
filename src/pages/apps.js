import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppsHome from "./apps/apps-home"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Apps"></SEO>
      <div className="min-h-screen">
        <span className="text-7xl py-2 text-red-600">Apps</span>
        <AppsHome/>
      </div>
    </Layout>
  )
}
export default Projects
