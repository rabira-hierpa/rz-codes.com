import React from "react"
import PropTypes from "prop-types"
import "../FeaturedProjectsSection/ProjectCard.css"

/**
 * AppCard Component
 * Displays an individual app with the same stunning effects as Featured Projects
 * Includes hover animations, glow effects, and dynamic icons
 *
 * @param {Object} props - Component props
 * @param {string} props.title - App title
 * @param {string} props.description - App description
 * @param {string} props.image - App thumbnail image URL
 * @param {string} props.demo - Demo URL
 * @param {string} props.link - GitHub/Source link
 * @param {Array<string>} props.tags - Technology tags
 * @param {string} props.appType - App type (location or web)
 * @param {React.ReactNode} props.icon - Icon component
 * @param {number} props.index - Card index for glow color variation
 */
export const AppCard = ({
  title,
  description,
  image,
  demo,
  link,
  tags,
  appType,
  icon,
  index = 0,
}) => {
  const truncatedDescription =
    description.length > 150
      ? description.substring(0, 150) + "..."
      : description

  // Determine glow class based on index (cycle through 0, 1, 2)
  const glowIndex = index % 3

  return (
    <div
      className={`project-card project-card-glow-${glowIndex} bg-white dark:bg-surface-dark rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 flex flex-col border border-gray-100 dark:border-gray-700 transition-all duration-300`}
    >
      {/* App Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        {/* Type Badge */}
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2 shadow-md">
          <div
            className={
              appType === "location"
                ? "text-yellow-600 dark:text-yellow-400"
                : "text-primary-600 dark:text-primary-400"
            }
          >
            {icon}
          </div>
        </div>
      </div>

      {/* App Details */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-text-light dark:text-text-dark">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
          {truncatedDescription}
        </p>

        {/* Action Links */}
        <div className="flex gap-3 mb-4">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white text-center text-sm font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              View Demo
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-center text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center"
              title="View Source"
              aria-label={`View source code for ${title}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-500">
              +{tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

AppCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  demo: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  appType: PropTypes.oneOf(["location", "web"]).isRequired,
  icon: PropTypes.node.isRequired,
  index: PropTypes.number,
}
