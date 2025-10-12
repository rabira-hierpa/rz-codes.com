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
