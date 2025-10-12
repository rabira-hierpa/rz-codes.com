import React from "react"
import "./FeaturedGISProjects.css"

export const FeaturedGISProjects = () => {
  const featuredProjects = [
    {
      id: "lamp",
      title: "LAMP - Location Analytics Management Platform",
      subtitle: "Master's Thesis Project",
      description:
        "A comprehensive platform for managing location-based analytics, enabling organizations to make data-driven decisions through powerful GIS tools. Built with modern web technologies and advanced spatial analysis capabilities, LAMP provides real-time insights into geographic data patterns and trends.",
      longDescription: `LAMP (Location Analytics Management Platform) is my Master's thesis project that represents the culmination of my research in spatial data management and web-based GIS solutions. The platform integrates cutting-edge technologies to provide:
      
• Real-time spatial data visualization and analysis
• Advanced location-based querying and filtering
• Interactive mapping with custom layer management
• User-friendly interface for non-technical stakeholders
• Scalable architecture for handling large datasets
• RESTful API for seamless integration with other systems`,
      technologies: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "PostGIS",
        "Mapbox GL",
        "Python",
        "Docker",
      ],
      highlights: [
        "Thesis project for MSc in Data and Web Engineering",
        "Comprehensive spatial data management system",
        "Real-time location analytics dashboard",
        "Advanced geospatial query capabilities",
        "Scalable architecture for enterprise use",
      ],
      github: "https://github.com/rabira-hierpa/LAMP",
      demo: null,
      image:
        "https://raw.githubusercontent.com/rabira-hierpa/LAMP/main/docs/images/architecture.png",
      type: "thesis",
      color: "primary",
    },
    {
      id: "16-cities",
      title: "16 African Cities Accessibility Analysis",
      subtitle: "World Resources Institute Research Project",
      description:
        "Comprehensive public transport accessibility analysis for 16 major African cities, providing data-driven insights to improve urban mobility and transportation planning. This project visualizes accessibility patterns and identifies underserved areas to support equitable transport development.",
      longDescription: `As part of my work with the World Resources Institute, I conducted an extensive accessibility analysis of public transport systems across 16 major African cities. This research project utilized advanced GIS methodologies and the Conveyal accessibility tool to:

• Map public transport networks and coverage areas
• Calculate travel time matrices for accessibility metrics
• Identify transport deserts and underserved communities
• Generate interactive visualizations for policy makers
• Produce actionable recommendations for transport improvement
• Create ArcGIS web apps for stakeholder engagement`,
      technologies: [
        "Conveyal",
        "ArcGIS Pro",
        "ArcGIS Online",
        "React",
        "Mapbox",
        "Python",
        "GTFS",
        "R",
      ],
      highlights: [
        "16 cities across Africa analyzed",
        "Comprehensive accessibility metrics calculated",
        "Interactive web application for data exploration",
        "Research papers and WRI technical notes published",
        "Collaboration with transport authorities and TUMI",
        "Data-driven policy recommendations",
      ],
      github: null,
      demo: "https://16cities.netlify.app/",
      image:
        "https://blog.rz-codes.com/wp-content/uploads/2024/12/16cities-accessibility.png",
      type: "research",
      color: "secondary",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light dark:text-text-dark">
            Featured{" "}
            <span className="text-primary-600 dark:text-primary-400">
              GIS Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing cutting-edge research and innovative solutions in
            geospatial analysis, transportation planning, and location-based
            services
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`featured-project-card grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                  {/* Project Type Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg ${
                        project.type === "thesis"
                          ? "bg-primary-600"
                          : "bg-secondary-600"
                      }`}
                    >
                      {project.type === "thesis"
                        ? "🎓 Thesis Project"
                        : "🔬 Research"}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                {/* Subtitle */}
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    project.color === "primary"
                      ? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                      : "bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400"
                  }`}
                >
                  {project.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 4).map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                            project.color === "primary"
                              ? "text-primary-600 dark:text-primary-400"
                              : "text-secondary-600 dark:text-secondary-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl flex items-center gap-2 ${
                        project.color === "primary"
                          ? "bg-primary-600 hover:bg-primary-700"
                          : "bg-secondary-600 hover:bg-secondary-700"
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GIS Expertise Statement */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-10">
          <svg
            className="w-16 h-16 mx-auto mb-6 text-primary-600 dark:text-primary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-4">
            GIS Expertise in Action
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            These projects demonstrate my ability to transform complex spatial
            data into actionable insights, combining technical expertise in GIS
            technologies with a deep understanding of urban planning,
            transportation systems, and data visualization. From academic
            research to real-world applications, I bring a comprehensive
            approach to solving location-based challenges.
          </p>
        </div>
      </div>
    </section>
  )
}
