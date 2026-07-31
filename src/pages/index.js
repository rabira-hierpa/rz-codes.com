import * as React from "react"
import { Layout } from "../components/layout/Layout"
import { SEO } from "../components/layout/SEO"
import Landing from "./landing/landing"

const IndexPage = ({ location }) => (
  <Layout>
    <SEO
      title="Home"
      pathname={location.pathname}
      description="Rabra Hierpa (Rz Codes) — full-stack developer and GIS specialist. Explore apps, mapping projects, the tech blog, graphic design work, and professional experience."
      keywords={[
        `Rabra Hierpa`,
        `Rz Codes`,
        `rzcodes`,
        `full-stack developer`,
        `GIS developer`,
        `portfolio`,
        `web development`,
      ]}
    />
    <Landing />
  </Layout>
)

export default IndexPage
