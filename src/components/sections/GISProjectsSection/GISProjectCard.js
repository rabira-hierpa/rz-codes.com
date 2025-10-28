import React from "react"
import PropTypes from "prop-types"
import "./GISProjectCard.css"

/**
 * GISProjectCard Component
 * Displays a single GIS project with map preview and interactive actions
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string} props.img - Project map image URL
 * @param {string} props.url - Project map URL
 * @param {string} props.data - Data download URL
 * @param {Array<string>} props.tags - Project tags
 * @param {number} props.index - Card index for staggered animation
 */
export const GISProjectCard = ({
  title,
  description,
  img,
  url,
  data,
  tags,
  index = 0,
}) => {
  const truncatedDescription =
    description.length > 120
      ? description.substring(0, 120) + "..."
      : description

  return (
    <div
      className="gis-project-card bg-white dark:bg-surface-dark rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Map Preview with Overlay */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {/* Quick Action Buttons */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/90 hover:bg-white text-gray-900 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1 transform hover:scale-105"
              onClick={e => e.stopPropagation()}
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
            {data && (
              <a
                href={data}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500/90 hover:bg-yellow-500 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center transform hover:scale-105"
                onClick={e => e.stopPropagation()}
                aria-label={`Download data for ${title}`}
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
              </a>
            )}
          </div>
        </div>
        {/* Map Icon Badge */}
        <div className="absolute top-4 left-4 bg-yellow-500 dark:bg-yellow-400 text-white rounded-full p-3 shadow-lg">
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
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-text-light dark:text-text-dark line-clamp-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
          {truncatedDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full border border-yellow-200 dark:border-yellow-800/50"
            >
              #{tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-500">
              +{tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

GISProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  data: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number,
}
