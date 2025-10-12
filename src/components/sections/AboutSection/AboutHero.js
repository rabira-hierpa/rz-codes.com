import React from "react"
import "./AboutHero.css"

export const AboutHero = () => {
  return (
    <section className="about-hero py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-5"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="font-semibold">About Me</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-light dark:text-text-dark animate-slide-up">
          Hi, I'm{" "}
          <span className="text-primary-600 dark:text-primary-400">
            Rabra Hierpa
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed animate-slide-up-delay">
          A Full-Stack Developer & GIS Specialist crafting innovative solutions
          at the intersection of technology and geospatial intelligence
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in-up">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
              7+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-600 dark:text-secondary-400">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Companies & Organizations
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
              20+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Projects Delivered
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
