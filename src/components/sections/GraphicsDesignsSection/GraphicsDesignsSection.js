import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { DesignCard } from "./DesignCard"

/**
 * GraphicsDesignsSection Component
 * Displays a curated gallery of graphic design works
 * Features an elegant grid layout with hover effects
 */
export const GraphicsDesignsSection = () => {
  const data = useStaticQuery(graphql`
    query GraphicsDesignsQuery {
      allDesignsJson {
        nodes {
          id
          images
        }
      }
    }
  `)

  const designs = data.allDesignsJson.nodes[0].images.slice(0, 6)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with Creative Subtitle */}
        <div className="text-center mb-16">
          <Link to="/designs" className="block group">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-600 dark:to-primary-400"></div>
              <svg
                className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:rotate-180 transition-transform duration-500"
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
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-600 dark:to-primary-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light dark:text-text-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              Graphics Design Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Visual storytelling through creative design - where imagination
              meets pixel perfection
            </p>
          </Link>
        </div>

        {/* Designs Grid - Creative Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {designs.map((imageUrl, index) => (
            <DesignCard
              key={index}
              imageUrl={imageUrl}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* View Gallery Button with Creative Styling */}
        <div className="flex justify-center">
          <Link
            to="/designs"
            className="group relative px-10 py-4 bg-gradient-to-r from-primary-600 to-red-700 hover:from-primary-700 hover:to-red-800 dark:from-primary-500 dark:to-red-600 dark:hover:from-primary-600 dark:hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-3">
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View Full Gallery
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
