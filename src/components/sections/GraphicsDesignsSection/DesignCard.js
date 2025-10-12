import React from "react"
import PropTypes from "prop-types"
import "./DesignCard.css"

/**
 * DesignCard Component
 * Displays a single design work with creative hover effects
 *
 * @param {Object} props - Component props
 * @param {string} props.imageUrl - Design image URL
 * @param {number} props.index - Card index for layout variations
 * @param {boolean} props.isHovered - Whether card is being hovered
 * @param {Function} props.onHover - Hover callback
 * @param {Function} props.onLeave - Leave callback
 */
export const DesignCard = ({
  imageUrl,
  index,
  isHovered: _isHovered,
  onHover,
  onLeave,
}) => {
  // Determine card size based on index for varied layout
  const getCardClass = index => {
    // Make first and fourth cards larger for visual interest
    if (index === 0 || index === 3) {
      return "md:col-span-2 md:row-span-2"
    }
    return "col-span-1 row-span-1"
  }

  // Determine height based on card size
  const getHeightClass = index => {
    if (index === 0 || index === 3) {
      return "h-80 md:h-full"
    }
    return "h-64"
  }

  return (
    <div
      className={`design-card ${getCardClass(index)} relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${getHeightClass(index)}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Design Image */}
      <img
        src={imageUrl}
        alt={`Design work ${index + 1}`}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* View Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 dark:bg-gray-900/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl">
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
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </div>

        {/* Design Number Badge */}
        <div className="absolute top-4 right-4 bg-primary-600 dark:bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          #{String(index + 1).padStart(2, "0")}
        </div>

        {/* View Text */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
          <p className="text-white font-semibold text-lg flex items-center gap-2">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            View Design
          </p>
        </div>
      </div>

      {/* Border glow effect on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-400 dark:group-hover:border-primary-500 rounded-xl transition-all duration-300 pointer-events-none"></div>

      {/* Corner accent - Top Left */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary-600 dark:border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-xl"></div>

      {/* Corner accent - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary-600 dark:border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-xl"></div>
    </div>
  )
}

DesignCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isHovered: PropTypes.bool,
  onHover: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
}
