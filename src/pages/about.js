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
        title="About Rabra Hierpa — Software Engineer & GIS Developer"
        brandSuffix={false}
        pathname={location.pathname}
        description="About Rabra Hierpa (Rz Codes): full-stack developer and GIS specialist, companies worked with, and how to get in touch."
        keywords={[
          `Rabra Hierpa`,
          `about`,
          `full-stack developer`,
          `GIS specialist`,
          `software engineer`,
        ]}
        /**
         * Marks /about as a profile page for the Person entity, referenced by
         * @id rather than redeclared. Uses the jsonLdExtra prop SEO.js has
         * always exposed and no page had used.
         */
        jsonLdExtra={{
          "@type": `ProfilePage`,
          "@id": `https://rz-codes.com/about/#profilepage`,
          url: `https://rz-codes.com/about/`,
          mainEntity: { "@id": `https://rz-codes.com/#person` },
        }}
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
