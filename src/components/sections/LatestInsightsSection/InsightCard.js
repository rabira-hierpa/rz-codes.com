import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

/**
 * InsightCard Component
 * Displays a single blog post card with featured image, category badge, title, excerpt, and date
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Post title
 * @param {string} props.excerpt - Post excerpt (HTML)
 * @param {string} props.uri - Post URI/slug
 * @param {string} props.date - Formatted post date
 * @param {Object} props.tags - Post tags object
 * @param {Object} props.featuredImage - Featured image object
 */
export const InsightCard = ({
  title,
  excerpt,
  uri,
  date,
  tags,
  featuredImage,
}) => {
  // Extract plain text from excerpt HTML
  const plainExcerpt = excerpt
    .replace(/<[^>]+>/g, "")
    .substring(0, 120)
    .trim()

  // Get the first tag as category badge
  const categoryTag = tags?.nodes?.[0]?.name || "Blog"

  // Define category colors
  const categoryColors = {
    GIS: "bg-yellow-500 dark:bg-yellow-600",
    "Web Dev": "bg-primary-500 dark:bg-primary-600",
    Database: "bg-red-500 dark:bg-red-600",
    default: "bg-secondary-500 dark:bg-secondary-600",
  }

  const getBadgeColor = tag => {
    const normalizedTag = tag.toLowerCase()
    if (normalizedTag.includes("gis")) return categoryColors.GIS
    if (normalizedTag.includes("web")) return categoryColors["Web Dev"]
    if (normalizedTag.includes("database") || normalizedTag.includes("sql"))
      return categoryColors.Database
    return categoryColors.default
  }

  // Placeholder for missing featured image
  const placeholderImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%239ca3af'%3ENo Image%3C/text%3E%3C/svg%3E"

  return (
    <Link to={uri} className="block group">
      <article className="bg-white dark:bg-surface-dark rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700">
        {/* Featured Image */}
        <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={featuredImage?.node?.sourceUrl || placeholderImage}
            alt={featuredImage?.node?.altText || title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-md ${getBadgeColor(categoryTag)}`}
            >
              {categoryTag}
            </span>
          </div>
        </div>

        {/* Post Details */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-text-light dark:text-text-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
            {plainExcerpt}...
          </p>

          {/* Date */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mt-auto">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <time dateTime={date}>{date}</time>
          </div>
        </div>
      </article>
    </Link>
  )
}

InsightCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
  }),
  featuredImage: PropTypes.shape({
    node: PropTypes.shape({
      altText: PropTypes.string,
      sourceUrl: PropTypes.string,
    }),
  }),
}
