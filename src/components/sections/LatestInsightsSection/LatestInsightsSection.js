import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { InsightCard } from "./InsightCard"

/**
 * LatestInsightsSection Component
 * Displays the latest blog posts from WordPress
 * Uses GraphQL to fetch the 3 most recent posts
 */
export const LatestInsightsSection = () => {
  const data = useStaticQuery(graphql`
    query LatestInsightsQuery {
      allWpPost(sort: { date: DESC }, limit: 3) {
        nodes {
          id
          title
          excerpt
          uri
          date(formatString: "MMMM DD, YYYY")
          tags {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const posts = data.allWpPost.nodes

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <Link to="/blog" className="block group">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-600 dark:to-primary-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light dark:text-text-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughts, tutorials, and stories from the world of software
              development and technology
            </p>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map(post => (
            <InsightCard key={post.id} {...post} />
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="flex justify-center">
          <Link
            to="/blog"
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
