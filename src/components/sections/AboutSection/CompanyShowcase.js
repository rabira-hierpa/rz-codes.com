import React from "react"
import PropTypes from "prop-types"
import "./CompanyShowcase.css"

export const CompanyShowcase = ({ companies }) => {
  // Categorize companies by type
  const categorizedCompanies = {
    tech: ["Excellerent Solutions", "DevCrew", "Softpositive", "Upwork"],
    government: ["Ethiopian Airlines", "Addis Ababa University"],
    ngo: ["World Resources Institute"],
    consulting: ["Integration Consultant", "Teknika Corp"],
    healthcare: ["Med Innovations"],
    education: ["HiLCoE School of Computer Science and Technology"],
    other: ["Code Blue Computer Services"],
  }

  const getCategoryForCompany = name => {
    for (const [category, companyList] of Object.entries(
      categorizedCompanies,
    )) {
      if (companyList.includes(name)) return category
    }
    return "other"
  }

  const categoryColors = {
    tech: "from-blue-500 to-purple-600",
    government: "from-red-500 to-orange-600",
    ngo: "from-green-500 to-teal-600",
    consulting: "from-yellow-500 to-orange-500",
    healthcare: "from-pink-500 to-red-500",
    education: "from-indigo-500 to-purple-600",
    other: "from-gray-500 to-gray-700",
  }

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-text-light dark:text-text-dark">
          Trusted By Leading Organizations
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg max-w-3xl mx-auto">
          Throughout my journey, I've had the honor of collaborating with
          diverse organizations - from innovative startups to established
          institutions, across multiple industries and continents.
        </p>

        {/* Company Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {companies.map((company, index) => {
            const category = getCategoryForCompany(company.name)
            const gradientColor = categoryColors[category]

            return (
              <div
                key={company.id}
                className="company-card group relative"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <a
                  href={company.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary-200 dark:hover:border-primary-700 h-full flex flex-col items-center justify-center ${
                    !company.url ? "pointer-events-none" : ""
                  }`}
                >
                  {/* Company Logo */}
                  <div className="w-full h-24 flex items-center justify-center mb-3 relative">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Company Name */}
                  <h3 className="text-sm font-semibold text-center text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {company.name}
                  </h3>

                  {/* Gradient Border on Hover */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                  ></div>

                  {/* Link Icon */}
                  {company.url && (
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4 text-primary-600 dark:text-primary-400"
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
                    </div>
                  )}
                </a>
              </div>
            )
          })}
        </div>

        {/* Industry Diversity Statement */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              Cross-industry expertise:
            </span>{" "}
            Technology Companies • Government Institutions • NGOs • Consulting
            Firms • Healthcare • Education • International Organizations
          </p>
        </div>
      </div>
    </section>
  )
}

CompanyShowcase.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      url: PropTypes.string,
    }),
  ).isRequired,
}
