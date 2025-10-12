import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../../styles/global.css"

const LandingProjects = () => {
  const ProjectData = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          id
          title
          description
          data
          tags
          url
          img
        }
      }
    }
  `)
  return (
    <div className="">
      <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 text-center py-10">
        GIS Projects
      </div>
      <div className="grid grid-rows gap-y-10">
        {ProjectData.allProjectsJson.nodes.map((project, idx) => {
          if (idx > 1) return null
          return (
            <div
              key={`projects_${idx}`}
              className="grid grid-cols-1 md:grid-cols-2 shadow-md hover:shadow-lg gap-x-5 bg-surface-light dark:bg-surface-dark transition-colors rounded-lg"
            >
              <div className="rounded-lg h-auto max-w-md p-2">
                <img loading="lazy" alt={project.title} src={project.img} />
              </div>
              <div className="pr-5">
                <div className="text-xl text-primary-600 dark:text-primary-400 text-left font-bold p-2">
                  {project.title}
                </div>
                <div className="p-2 text-text-light dark:text-text-dark">
                  {project.description}
                </div>
                <div className="p-2 flex justify-between">
                  <a
                    href={project.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    View Map
                  </a>
                  <a
                    href={project.data ?? project.url}
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Get the data
                  </a>
                  <a
                    href={project.url}
                    id={project.title}
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Download Map
                  </a>
                </div>
                <div className="col-span-full row-span-1">
                  <ul className="flex flex-row pl-2 align-self-end text-gray-600 dark:text-gray-400 overflow-x-scroll hide-scroll-bar">
                    {project.tags.map((tag, idx) => {
                      return (
                        <li key={idx + "__" + tag} className="py-1">
                          <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-secondary-200 dark:hover:bg-secondary-900 text-gray-500 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-300">
                            <a href="#!">{"#" + tag}</a>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
        <Link to="/projects">
          <p className="py-3 text-center text-primary-600 dark:text-primary-400">
            View More
          </p>
        </Link>
      </div>
    </div>
  )
}

export default LandingProjects
