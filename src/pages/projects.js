import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "../components/layout/Layout"
import { SEO } from "../components/layout/SEO"
import {
  ProjectsHero,
  FeaturedGISProjects,
  AllGISProjects,
} from "../components/sections/ProjectsPageSection"

const Projects = () => {
  const ProjectData = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          id
          title
          description
          data
          tags
          url
          img
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="GIS Projects | Mapping the World with Data" />
      <div className="min-h-screen">
        {/* Hero Section */}
        <ProjectsHero />

        {/* Featured GIS Projects */}
        <FeaturedGISProjects />

        {/* All GIS Projects */}
        <AllGISProjects projects={ProjectData.allProjectsJson.nodes} />
      </div>
    </Layout>
  )
}

export default Projects
