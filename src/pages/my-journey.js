import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const MyJourney = () => {
  return (
    <Layout>
      <SEO title="My Journey"></SEO>
      <div className="min-h-screen">
        Here are my <span className="text-9xl text-red-600">My Journey!</span>
      </div>
    </Layout>
  )
}

export default MyJourney
