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

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              GIS Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-600 dark:text-secondary-400">
              16
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Cities Analyzed
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
              10+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Countries Covered
            </div>
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
