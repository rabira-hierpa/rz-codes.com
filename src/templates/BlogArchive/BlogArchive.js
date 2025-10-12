import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import { Layout } from "../../components/layout/Layout"
import { SEO } from "../../components/layout/SEO"
import parse from "html-react-parser"
import "./BlogArchive.css"

const BlogArchive = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const allPosts = data.allWpPost.nodes
  const categories = data.allWpCategory.nodes

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredPosts, setFilteredPosts] = useState(allPosts.slice(1)) // Exclude featured post

  // Featured post (latest)
  const featuredPost = allPosts[0]

  useEffect(() => {
    let filtered = allPosts.slice(1) // Exclude featured post

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(post =>
        post.categories.nodes.some(cat => cat.name === selectedCategory),
      )
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedCategory, allPosts])

  const getReadingTime = excerpt => {
    const words = excerpt.split(" ").length
    const minutes = Math.ceil(words / 200)
    return minutes
  }

  if (!allPosts.length) {
    return (
      <Layout>
        <SEO title="Blog" />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
              No blog posts found
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Check back soon for exciting content!
            </p>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO
        title="Blog - Web Development, GIS & Tech Insights"
        description="Explore articles on web development, GIS technologies, Linux, and open-source tools"
      />

      {/* Hero Section with Featured Post */}
      <section className="blog-hero py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-5"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full mb-4">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.794 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.206 18 16.5 18s-3.332.477-4.5 1.253"
                />
              </svg>
              Latest Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-text-light dark:text-text-dark">
              Tech Blog &{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Insights
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Deep dives into web development, GIS technologies, and open-source
              tools
            </p>
          </div>

          {/* Featured Post Card */}
          {featuredPost && (
            <div className="featured-post-card bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 animate-slide-up">
              <Link
                to={featuredPost.uri}
                className="flex flex-col lg:flex-row group"
              >
                {/* Featured Image */}
                {featuredPost.featuredImage?.node && (
                  <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                    <img
                      src={
                        featuredPost.featuredImage.node.localFile?.publicURL ||
                        featuredPost.featuredImage.node.sourceUrl
                      }
                      alt={
                        featuredPost.featuredImage.node.altText ||
                        featuredPost.title
                      }
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Featured
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.categories.nodes.slice(0, 2).map(category => (
                      <span
                        key={category.id}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-semibold"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {parse(featuredPost.title)}
                  </h2>

                  <div className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {parse(featuredPost.excerpt)}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <span className="flex items-center gap-1">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {getReadingTime(featuredPost.excerpt)} min read
                    </span>
                  </div>

                  <div className="mt-6 inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                    Read Full Article
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-background-light dark:bg-background-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="w-full lg:w-2/3 relative">
              <input
                type="text"
                placeholder="Search articles by title or content..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 bg-surface-light dark:bg-surface-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 transition-colors"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="w-full lg:w-1/3">
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="w-full px-6 py-4 bg-surface-light dark:bg-surface-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 transition-colors cursor-pointer"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
            Showing {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedCategory !== "all" && ` in "${selectedCategory}"`}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="blog-card bg-surface-light dark:bg-surface-dark rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link to={post.uri} className="group flex flex-col h-full">
                    {/* Post Image */}
                    {post.featuredImage?.node && (
                      <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src={
                            post.featuredImage.node.localFile?.publicURL ||
                            post.featuredImage.node.sourceUrl
                          }
                          alt={post.featuredImage.node.altText || post.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Post Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Categories */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.nodes.slice(0, 2).map(category => (
                          <span
                            key={category.id}
                            className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-md text-xs font-medium"
                          >
                            {category.name}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-text-light dark:text-text-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                        {parse(post.title)}
                      </h3>

                      {/* Excerpt */}
                      <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                        {parse(post.excerpt)}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <span className="flex items-center gap-1">
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
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {getReadingTime(post.excerpt)} min
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg
                className="w-20 h-20 mx-auto text-gray-300 dark:text-gray-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 dark:text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Pagination */}
          {(previousPagePath || nextPagePath) && (
            <div className="flex justify-center items-center gap-6 mt-16">
              {previousPagePath && (
                <Link
                  to={previousPagePath}
                  className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                >
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </Link>
              )}
              {nextPagePath && (
                <Link
                  to={nextPagePath}
                  className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                >
                  Next
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default BlogArchive

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(sort: { date: DESC }, limit: $postsPerPage, skip: $offset) {
      nodes {
        id
        title
        excerpt
        uri
        date(formatString: "MMM DD, YYYY")
        categories {
          nodes {
            id
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
            localFile {
              publicURL
            }
          }
        }
      }
    }
    allWpCategory(filter: { count: { gt: 0 } }) {
      nodes {
        id
        name
        count
      }
    }
  }
`
