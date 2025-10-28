import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GISProjectCard } from "./GISProjectCard"

/**
 * GISProjectsSection Component
 * Displays a showcase of GIS mapping projects
 * Features interactive map previews with data access links
 */
export const GISProjectsSection = () => {
  const data = useStaticQuery(graphql`
    query GISProjectsQuery {
      allProjectsJson(limit: 3) {
        nodes {
          id
          title
          description
          url
          data
          img
          tags
        }
      }
    }
  `)

  const gisProjects = data.allProjectsJson.nodes

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with Subtitle */}
        <div className="text-center mb-16">
          <Link to="/projects" className="block group">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-600 dark:to-secondary-400"></div>
              <svg
                className="w-8 h-8 text-secondary-600 dark:text-secondary-400 group-hover:rotate-180 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-600 dark:to-secondary-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light dark:text-text-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              GIS Mapping Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transforming spatial data into actionable insights through
              interactive mapping solutions
            </p>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gisProjects.map((project, index) => (
            <GISProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center">
          <Link
            to="/projects"
            className="group relative px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 dark:from-yellow-400 dark:to-yellow-500 dark:hover:from-yellow-500 dark:hover:to-yellow-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore All Maps
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
