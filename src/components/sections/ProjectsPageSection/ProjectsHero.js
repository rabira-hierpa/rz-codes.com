import React from "react"
import "./ProjectsHero.css"

export const ProjectsHero = () => {
  return (
    <section className="projects-hero py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-5"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <svg
            className="w-5 h-5"
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
          <span className="text-sm font-medium">GIS Portfolio</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-light dark:text-text-dark leading-tight">
          Mapping the{" "}
          <span className="text-primary-600 dark:text-primary-400">World</span>{" "}
          with Data
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Transforming complex spatial data into actionable insights through
          innovative GIS solutions, interactive mapping, and accessibility
          analysis
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto animate-fade-in-up">
          <div className="stat-card bg-white dark:bg-surface-dark rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 will-change-transform">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              15+
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
              GIS Projects
            </div>
            <div className="mt-3 w-12 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          </div>
          <div className="stat-card bg-white dark:bg-surface-dark rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 will-change-transform">
            <div className="text-4xl md:text-5xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
              16
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
              Cities Analyzed
            </div>
            <div className="mt-3 w-12 h-1 bg-secondary-600 dark:bg-secondary-400 mx-auto rounded-full"></div>
          </div>
          <div className="stat-card bg-white dark:bg-surface-dark rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 will-change-transform">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              10+
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
              Countries Covered
            </div>
            <div className="mt-3 w-12 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* GIS Technologies */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "QGIS",
            "ArcGIS",
            "Mapbox",
            "Leaflet",
            "PostGIS",
            "Python",
            "JOSM",
            "OSM",
          ].map(tech => (
            <span
              key={tech}
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-600 dark:text-primary-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
