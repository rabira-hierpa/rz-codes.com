import React from "react"
import { ExpertiseCard } from "./ExpertiseCard"

const expertiseData = [
  {
    id: "web-development",
    title: "Web Development",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    description:
      "Building modern, responsive web applications with cutting-edge technologies to deliver seamless user experiences and powerful functionality.",
    color: "text-primary-600 dark:text-primary-400",
  },
  {
    id: "gis-development",
    title: "GIS Development",
    icon: (
      <svg
        className="w-12 h-12"
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
    ),
    description:
      "Specialized in creating interactive mapping solutions, spatial analysis tools, and location-based services that transform complex geographical data into actionable insights.",
    color: "text-yellow-600 dark:text-yellow-400",
  },
]

export const ExpertiseSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-text-light dark:text-text-dark">
          My Expertise
        </h2>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {expertiseData.map(expertise => (
            <ExpertiseCard key={expertise.id} {...expertise} />
          ))}
        </div>
      </div>
    </section>
  )
}
