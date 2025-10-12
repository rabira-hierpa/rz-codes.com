import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProjectCard } from "./ProjectCard"

/**
 * FeaturedProjectsSection Component
 * Displays a curated selection of featured projects
 * Fetches data from both apps.json and projects.json
 */
export const FeaturedProjectsSection = () => {
  const data = useStaticQuery(graphql`
    query FeaturedProjectsQuery {
      appsData: allAppsJson(limit: 2) {
        nodes {
          title
          description
          image
          demo
          link
          tags
        }
      }
      projectsData: allProjectsJson(limit: 1) {
        nodes {
          title
          description
          img
          url
          tags
        }
      }
    }
  `)

  // Combine and format data from both sources
  const featuredProjects = [
    ...data.appsData.nodes.map(app => ({
      title: app.title,
      description: app.description,
      image: app.image,
      url: app.demo || app.link,
      tags: app.tags,
      type: "web", // Web development project
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    })),
    ...data.projectsData.nodes.map(project => ({
      title: project.title,
      description: project.description,
      image: project.img,
      url: project.url,
      tags: project.tags,
      type: "gis", // GIS project
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    })),
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-text-light dark:text-text-dark">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
