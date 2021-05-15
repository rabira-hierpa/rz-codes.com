import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About"></SEO>
      <div className="min-h-screen">
        Here are my <span className="text-9xl text-red-600">About!</span>
      </div>
    </Layout>
  )
}
export default About
