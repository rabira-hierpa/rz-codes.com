import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "../components/layout/Layout"
import { SEO } from "../components/layout/SEO"
import {
  ProjectsHero,
  FeaturedGISProjects,
  AllGISProjects,
} from "../components/sections/ProjectsPageSection"

const Projects = ({ location }) => {
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
  const projects = ProjectData.allProjectsJson.nodes
  const creativeWorkSchema = {
    "@type": `ItemList`,
    name: `GIS Projects by Rz Codes`,
    itemListElement: projects.map((project, index) => ({
      "@type": `ListItem`,
      position: index + 1,
      item: {
        "@type": `CreativeWork`,
        name: project.title,
        description: project.description,
        url: project.url,
        creator: {
          "@type": `Person`,
          name: `Rabra Hierpa`,
        },
        keywords: project.tags?.join(`, `),
      },
    })),
  }

  return (
    <Layout>
      <SEO
        title="GIS Projects | Mapping the World with Data"
        pathname={location.pathname}
        description="GIS and mapping projects: spatial analysis, interactive maps, and data visualization work by Rabra Hierpa."
        keywords={[
          `GIS`,
          `mapping`,
          `spatial analysis`,
          `QGIS`,
          `geospatial`,
          `Rz Codes`,
        ]}
        jsonLdExtra={creativeWorkSchema}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <ProjectsHero />

        {/* Featured GIS Projects */}
        <FeaturedGISProjects />

        {/* All GIS Projects */}
        <AllGISProjects projects={projects} />
      </div>
    </Layout>
  )
}

export default Projects
