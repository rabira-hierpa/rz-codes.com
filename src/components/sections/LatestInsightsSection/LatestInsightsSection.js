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
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background-light dark:bg-background-dark transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Latest Insights
        </h2>

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
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

