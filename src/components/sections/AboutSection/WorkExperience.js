import React from "react"
import "./WorkExperience.css"

export const WorkExperience = () => {
  const experiences = [
    {
      role: "Senior Frontend Software Engineer",
      company: "CONFIDENTIAL",
      location: "Abu Dhabi, UAE (Onsite)",
      period: "06/2025 - Present",
      type: "Full-Time",
      description:
        "Working on AI integration and advanced ESRI features for mapping solutions.",
      achievements: [
        "Integrated AI (LLM/Agent workflow) to maps",
        "Implemented UI design to match business needs",
        "Supported team with advanced ESRI features",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Softpositive",
      location: "Remote",
      period: "08/2022 - Present",
      type: "Full-Time",
      description:
        "Architecting real-time monitoring platforms with Firebase, Next.js, and advanced GIS visualization using Mapbox, Leaflet, Kepler.gl, and Deck.gl.",
      achievements: [
        "Designed platforms for real-time monitoring and historical analysis",
        "Integrated 3D visualization with Kepler and Deck.gl",
        "Implemented GitLab CI/CD pipelines with Nx Monorepo",
        "Built ML models using GCP for noise and vibration forecasting",
        "Optimized data processing with BigQuery and Cloud Functions",
        "Delivered responsive interfaces with React and Next.js",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Excellerent Solutions",
      location: "Remote",
      period: "03/2022 - 03/2023",
      type: "Full-Time",
      description:
        "Led CI/CD automation and developed features for high-volume applications using React Native, Nest.js, Salesforce, and Redis.",
      achievements: [
        "Orchestrated fully automated CI/CD lifecycle",
        "Developed features for SPA using React Native and Nest.js",
        "Delivered five bug-free releases on schedule",
        "Reduced system failure rate by 75% through load testing",
        "Acted as team lead managing requirement changes",
      ],
    },
    {
      role: "Software Engineer",
      company: "Excellerent Solutions",
      location: "Remote",
      period: "03/2021 - 03/2022",
      type: "Full-Time",
      description:
        "Developed complex web applications, Chrome Extensions, and SDKs using React, TypeScript, Node.js, and PostgreSQL.",
      achievements: [
        "Managed complete SDLC for four web apps and Chrome Extensions",
        "Built REST APIs with Node.js, TypeORM, Redis, and PostgreSQL",
        "Established fully automated CI/CD pipelines",
        "Performed Jest and React Testing Library tests",
        "Facilitated onboarding of new team members",
      ],
    },
    {
      role: "GIS Research Analyst",
      company: "World Resources Institute",
      location: "Remote (Freelance)",
      period: "07/2024 - 11/2024",
      type: "Freelance",
      description:
        "Conducted public transport accessibility analyses for 10 African cities and developed ArcGIS web apps for integrated accessibility mapping.",
      achievements: [
        "Analyzed accessibility for 10 cities using Conveyal tool",
        "Developed ArcGIS web apps for integrated platform",
        "Maintained Digital Transport for Africa (DT4A) website",
        "Prepared research papers and WRI technical notes",
        "Provided technical support for AATB transport studies",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Teknika Corporation",
      location: "Panama City Beach, Florida (Remote)",
      period: "03/2022 - 08/2022",
      type: "Contract",
      description:
        "Led development of scalable React applications with Redux and REST APIs within agile teams.",
      achievements: [
        "Spearheaded pivotal projects using React and Redux",
        "Consolidated legacy codebases into unified mono repository",
        "Implemented CI/CD pipelines on Azure DevOps",
        "Led knowledge-sharing sessions",
        "Delivered high-quality solutions on tight timelines",
      ],
    },
    {
      role: "GIS Developer",
      company: "Integration Consulting Group",
      location: "Remote (Freelance)",
      period: "03/2021 - 09/2021",
      type: "Freelance",
      description:
        "Mapped settlements and designed mini-grid power plant maps for rural electrification projects using JOSM and QGIS.",
      achievements: [
        "Mapped ten settlements using JOSM and QGIS",
        "Conducted data analysis for project planning",
        "Planned distribution of mini-grids for business modeling",
        "Designed power plant maps for settlements",
        "Delivered technical presentations on cost estimation",
      ],
    },
    {
      role: "Software Engineer",
      company: "Med Innovations",
      location: "Addis Ababa, Ethiopia",
      period: "01/2018 - 12/2020",
      type: "Full-Time",
      description:
        "Developed restaurant management system features using React and LoopBack with Agile methodologies.",
      achievements: [
        "Developed new software features for restaurant management system",
        "Implemented multiple table reservation features",
        "Introduced state management for class-based components",
        "Added admin panel with dashboard and report generation",
        "Wrote UI component tests using Jest",
      ],
    },
    {
      role: "GIS Developer",
      company: "World Resources Institute",
      location: "Addis Ababa, Ethiopia",
      period: "06/2018 - 12/2019",
      type: "Full-Time",
      description:
        "Supported Federal and Addis Ababa Transport Authority in managing digital public transport GIS and GTFS databases.",
      achievements: [
        "Updated and managed digital public transport databases",
        "Developed tool for accessibility analysis",
        "Built web-based GIS applications",
        "Provided technical support for AddisMap mobile app",
        "Trained volunteers on GIS technologies (Python, QGIS, JOSM, OSM)",
      ],
    },
    {
      role: "Junior Software Engineer",
      company: "Ethiopian Airlines",
      location: "Addis Ababa, Ethiopia",
      period: "06/2017 - 11/2018",
      type: "Internship → Full-Time",
      description:
        "Developed mobile application for Ethiopian e-VISA system using Xamarin, ASP.NET, and C# with SOLID principles and Agile methodologies.",
      achievements: [
        "Developed cross-platform mobile app using Xamarin",
        "Applied SOLID principles and Agile/Scrum methodologies",
        "Refined requirements with business owners",
        "Successfully deployed e-VISA mobile application",
      ],
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-text-light dark:text-text-dark">
          Professional Journey
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">
          7+ years of building innovative solutions across continents
        </p>

        {/* Timeline */}
        <div className="relative timeline-container">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "timeline-left" : "timeline-right"
              }`}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot"></div>

              {/* Card */}
              <div className="timeline-card experience-card bg-white dark:bg-surface-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                {/* Type Badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-3">
                  {exp.type}
                </span>

                {/* Role */}
                <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">
                  {exp.role}
                </h3>

                {/* Company & Period */}
                <div className="mb-1">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-gray-500 dark:text-gray-500 text-sm ml-2">
                    {exp.location && `• ${exp.location}`}
                  </span>
                </div>
                <div className="text-gray-500 dark:text-gray-500 text-sm mb-4">
                  {exp.period}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        className="w-5 h-5 text-secondary-600 dark:text-secondary-400 mr-2 flex-shrink-0 mt-0.5"
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
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
