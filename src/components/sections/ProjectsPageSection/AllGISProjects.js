import React, { useState } from "react"
import PropTypes from "prop-types"
import "./AllGISProjects.css"

export const AllGISProjects = ({ projects }) => {
  const [filter, setFilter] = useState("all")

  // Get unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags || []))]

  // Filter projects based on selected tag
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(project => project.tags?.includes(filter))

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light dark:text-text-dark">
            All{" "}
            <span className="text-primary-600 dark:text-primary-400">
              GIS Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore the full portfolio of mapping solutions, spatial analysis,
            and location-based applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === "all"
                ? "bg-primary-600 text-white shadow-lg transform scale-105"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            All Projects ({projects.length})
          </button>
          {allTags.slice(0, 6).map(tag => {
            const count = projects.filter(p => p.tags?.includes(tag)).length
            return (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === tag
                    ? "bg-primary-600 text-white shadow-lg transform scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {tag} ({count})
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="gis-project-card group bg-white dark:bg-surface-dark rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold text-sm">
                    View Project
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-text-light dark:text-text-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                  {project.tags?.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm flex items-center gap-1 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
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
                    View Map
                  </a>
                  {project.data && (
                    <a
                      href={project.data}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm flex items-center gap-1 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Get Data
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <svg
              className="w-20 h-20 mx-auto mb-4 text-gray-400 dark:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No projects found with this filter
            </p>
            <button
              onClick={() => setFilter("all")}
              className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

AllGISProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      data: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
}
