import React from "react"
import { Layout } from "../components/layout/Layout"
import { SEO } from "../components/layout/SEO"
import { graphql, useStaticQuery } from "gatsby"
import { AboutHero } from "../components/sections/AboutSection/AboutHero"
import { AboutStory } from "../components/sections/AboutSection/AboutStory"
import { CompanyShowcase } from "../components/sections/AboutSection/CompanyShowcase"

const About = ({ location }) => {
  const aboutMeData = useStaticQuery(graphql`
    query aboutMeQuery {
      allAboutJson {
        nodes {
          id
          name
          logo
          url
        }
      }
    }
  `)

  const companies = aboutMeData.allAboutJson.nodes

  return (
    <Layout>
      <SEO
        title="About Me"
        pathname={location.pathname}
        description="About Rabra Hierpa (Rz Codes): full-stack developer and GIS specialist, companies worked with, and how to get in touch."
        keywords={[
          `Rabra Hierpa`,
          `about`,
          `full-stack developer`,
          `GIS specialist`,
          `software engineer`,
        ]}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <AboutHero />

        {/* About Story */}
        <AboutStory />

        {/* Companies I've Worked With */}
        <CompanyShowcase companies={companies} />
      </div>
    </Layout>
  )
}

export default About
