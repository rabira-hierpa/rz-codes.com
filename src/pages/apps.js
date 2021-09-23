import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppsHome from "./apps/apps-home"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Apps"></SEO>
      <div className="min-h-screen">
        <p className="text-7xl py-5 text-red-600">Apps</p>
        <AppsHome/>
      </div>
    </Layout>
  )
}
export default Projects
