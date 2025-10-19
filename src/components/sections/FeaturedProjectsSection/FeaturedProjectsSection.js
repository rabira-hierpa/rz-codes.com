import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ProjectCard } from "./ProjectCard"

/**
 * FeaturedProjectsSection Component
 * Displays a curated selection of featured projects
 * Fetches data from both apps.json and projects.json
 */
export const FeaturedProjectsSection = () => {
  const data = useStaticQuery(graphql`
    query FeaturedProjectsQuery {
      appsData: allAppsJson(limit: 3) {
        nodes {
          title
          description
          image
          demo
          link
          tags
          appType
          discontinued
        }
      }
    }
  `)

  // Icon components based on app type
  const getIconForAppType = appType => {
    if (appType === "location") {
      // Location/Map icon for location-based apps
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      )
    }
    // Stack/Layers icon for web apps (default)
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    )
  }

  // Combine and format data from both sources
  const featuredProjects = data.appsData.nodes.map(app => ({
    title: app.title,
    description: app.description,
    image: app.image,
    url: app.demo || app.link,
    tags: app.tags,
    type: app.appType || "web",
    icon: getIconForAppType(app.appType),
    discontinued: app.discontinued,
  }))

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <Link to="/apps" className="block group">
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-600 dark:to-primary-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light dark:text-text-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Showcase of innovative web and mobile applications built with
              cutting-edge technologies
            </p>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/apps"
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  )
}
