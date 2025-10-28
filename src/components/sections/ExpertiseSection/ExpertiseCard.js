import React from "react"
import PropTypes from "prop-types"

/**
 * ExpertiseCard Component
 * Displays a single expertise area with icon, title, and description
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - SVG icon component
 * @param {string} props.title - Expertise title
 * @param {string} props.description - Expertise description
 * @param {string} props.color - Tailwind color class for icon
 */
export const ExpertiseCard = ({ icon, title, description, color }) => {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-surface-dark rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
      <div className="flex gap-4">
        {/* Icon */}
        <div className={`mb-6 ${color}`}>{icon}</div>

        {/* Title */}
        {/* follow the icon color for the title also */}
        <h3 className={`text-lg md:text-xl font-bold mt-2  ${color}`}>
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-base text-text-light dark:text-text-dark leading-relaxed">
        {description}
      </p>
    </div>
  )
}

ExpertiseCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
