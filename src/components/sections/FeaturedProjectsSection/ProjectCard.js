import React from "react"
import PropTypes from "prop-types"

/**
 * ProjectCard Component
 * Displays a single featured project with image, title, description, and tags
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string} props.image - Project thumbnail image URL
 * @param {Array<string>} props.tags - Project technology tags
 * @param {string} props.type - Project type (gis or web)
 * @param {React.ReactNode} props.icon - Icon component
 */
export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  type,
  icon,
}) => {
  const truncatedDescription =
    description.length > 150
      ? description.substring(0, 150) + "..."
      : description

  return (
    <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        {/* Type Badge */}
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
          <div
            className={
              type === "gis"
                ? "text-yellow-600 dark:text-yellow-400"
                : "text-primary-600 dark:text-primary-400"
            }
          >
            {icon}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
          {truncatedDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.oneOf(["gis", "web"]).isRequired,
  icon: PropTypes.node.isRequired,
}

