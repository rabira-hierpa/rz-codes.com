import React from "react"
import { Layout } from "../components/layout/Layout"
import { SEO } from "../components/layout/SEO"
import { WorkExperience } from "../components/sections/AboutSection/WorkExperience"

const MyJourney = () => {
  return (
    <Layout>
      <SEO title="My Journey | Professional Experience & Career Timeline" />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-light dark:text-text-dark">
              My{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              From junior engineer to senior architect - a story of continuous
              growth, learning, and impact across continents
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  10+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Roles
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">
                  15+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Companies
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  4
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Countries
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Timeline */}
        <WorkExperience />
      </div>
    </Layout>
  )
}

export default MyJourney
