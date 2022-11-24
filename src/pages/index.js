import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "./landing/landing"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landing />
  </Layout>
)

export default IndexPage
