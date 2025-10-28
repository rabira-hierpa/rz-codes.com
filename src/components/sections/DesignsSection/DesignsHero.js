import React from "react"
import "./DesignsHero.css"

export const DesignsHero = ({ designCount }) => {
  return (
    <section className="designs-hero py-20 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
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
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
          Creative Portfolio
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-text-light dark:text-text-dark animate-fade-in-up">
          Graphic Design{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
            Showcase
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 animate-fade-in-up delay-100">
          A collection of creative works including posters, banners, flyers, and
          magazine covers crafted with Adobe Photoshop, Illustrator, and
          InDesign
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto animate-fade-in-up delay-200">
          <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
            <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">
              {designCount}+
            </p>
            <p className="text-gray-600 dark:text-gray-400">Design Works</p>
          </div>
          <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
            <p className="text-4xl font-bold text-secondary-600 dark:text-secondary-400">
              3
            </p>
            <p className="text-gray-600 dark:text-gray-400">Adobe Tools</p>
          </div>
          <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
            <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">
              100%
            </p>
            <p className="text-gray-600 dark:text-gray-400">Creative</p>
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto animate-fade-in-up delay-300">
          {[
            "Photoshop",
            "Illustrator",
            "InDesign",
            "Magazine Covers",
            "Flyers",
            "Banners",
            "Roll-ups",
            "Postcards",
          ].map(tool => (
            <span
              key={tool}
              className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-800 dark:text-yellow-400 rounded-full text-sm font-medium shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-primary-600 dark:text-primary-400"
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
