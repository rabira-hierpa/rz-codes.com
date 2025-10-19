import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "../components/layout/Layout"
import { SEO } from "../components/layout/SEO"
import { AppsHero } from "../components/sections/AppsSection/AppsHero"
import { AppCard } from "../components/sections/AppsSection/AppCard"

const AppsPage = () => {
  const data = useStaticQuery(graphql`
    query AllAppsQuery {
      allAppsJson {
        nodes {
          id
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

  const [filter, setFilter] = useState("all")
  const apps = data.allAppsJson.nodes

  // Get icon based on app type
  const getIconForAppType = appType => {
    if (appType === "location") {
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

  // Filter apps
  const filteredApps = apps.filter(app => {
    if (filter === "all") return true
    if (filter === "location") return app.appType === "location"
    if (filter === "web") return app.appType === "web"
    return true
  })

  // Calculate stats
  const stats = {
    total: apps.length,
    location: apps.filter(a => a.appType === "location").length,
    web: apps.filter(a => a.appType === "web").length,
    technologies: new Set(apps.flatMap(a => a.tags)).size,
  }

  return (
    <Layout>
      <SEO title="Apps & Projects Portfolio" />
      <div className="min-h-screen">
        {/* Hero Section */}
        <AppsHero stats={stats} />

        {/* Main Content */}
        <section className="py-12 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Filter Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-surface-light dark:bg-surface-dark rounded-lg p-2 shadow-lg border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    filter === "all"
                      ? "bg-primary-600 dark:bg-primary-500 text-white shadow-md transform scale-105"
                      : "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                >
                  All Apps ({stats.total})
                </button>
                <button
                  onClick={() => setFilter("location")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    filter === "location"
                      ? "bg-yellow-500 dark:bg-yellow-400 text-white shadow-md transform scale-105"
                      : "text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400"
                  }`}
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Location ({stats.location})
                </button>
                <button
                  onClick={() => setFilter("web")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    filter === "web"
                      ? "bg-primary-600 dark:bg-primary-500 text-white shadow-md transform scale-105"
                      : "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
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
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                  Web Apps ({stats.web})
                </button>
              </div>
            </div>

            {/* Apps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredApps.map((app, index) => (
                <AppCard
                  key={app.id}
                  index={index}
                  title={app.title}
                  description={app.description}
                  image={app.image}
                  demo={app.demo}
                  link={app.link}
                  tags={app.tags}
                  appType={app.appType || "web"}
                  icon={getIconForAppType(app.appType)}
                  discontinued={app.discontinued}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredApps.length === 0 && (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-500 dark:text-gray-400">
                  No apps found in this category
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AppsPage
