import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ComingSoon from "../utils/coming-soon"
const MyJourney = () => {
  return (
    <Layout>
      <SEO title="My Journey"></SEO>
      <div className="min-h-screen">
        <p className="text-9xl text-red-600 pt-5">My Journey!</p>
        <ComingSoon/>
      </div>
    </Layout>
  )
}

export default MyJourney
