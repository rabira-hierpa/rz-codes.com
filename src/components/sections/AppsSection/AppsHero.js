import React from "react"
import PropTypes from "prop-types"
import "./AppsHero.css"

/**
 * AppsHero Component
 * Stunning hero section that showcases expertise and project statistics
 *
 * @param {Object} props - Component props
 * @param {Object} props.stats - Statistics object with total, location, web, technologies
 */
export const AppsHero = ({ stats }) => {
  return (
    <section className="apps-hero relative overflow-hidden py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 apps-hero-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
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
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span className="font-semibold">Portfolio Showcase</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-light dark:text-text-dark animate-slide-up">
            Crafting Digital
            <span className="block text-primary-600 dark:text-primary-400 mt-2">
              Experiences
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
            From location-based solutions to full-stack applications, explore a
            collection of projects that solve real-world problems with elegant
            code and intuitive design.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up">
          {/* Total Apps */}
          <div className="stat-card bg-white dark:bg-surface-dark rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {stats.total}
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
              Total Projects
            </div>
            <div className="mt-3 w-12 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          </div>

          {/* Location Apps */}
          <div className="stat-card bg-white dark:bg-surface-dark rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
              {stats.location}
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
              Location-Based
            </div>
            <div className="mt-3 w-12 h-1 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Web Apps */}
          <div className="stat-card bg-white dark:bg-surface-dark rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {stats.web}
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
              Web Applications
            </div>
            <div className="mt-3 w-12 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          </div>

          {/* Technologies */}
          <div className="stat-card bg-white dark:bg-surface-dark rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="text-4xl md:text-5xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
              {stats.technologies}+
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
              Technologies
            </div>
            <div className="mt-3 w-12 h-1 bg-secondary-600 dark:bg-secondary-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Absolutely positioned */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-8 h-8 text-primary-400 dark:text-primary-500 drop-shadow-lg"
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

AppsHero.propTypes = {
  stats: PropTypes.shape({
    total: PropTypes.number.isRequired,
    location: PropTypes.number.isRequired,
    web: PropTypes.number.isRequired,
    technologies: PropTypes.number.isRequired,
  }).isRequired,
}
