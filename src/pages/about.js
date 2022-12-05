import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ComingSoon from "../utils/coming-soon"

const About = () => {
  return (
    <Layout>
      <Seo title="About"></Seo>
      <div className="min-h-screen">
        <p className="text-9xl text-red-600 mt-5">About!</p>
        <ComingSoon />
      </div>
    </Layout>
  )
}
export default About
