import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
      <div className="text-4xl font-bold text-red-600 text-center py-10 ">
        GIS Projects
      </div>
      <div className="grid grid-rows gap-y-10">
        {ProjectData.allProjectsJson.nodes.map((project, idx) => {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 shadow-md hover:shadow-lg gap-x-5">
              <div className="rounded-lg h-auto max-w-md p-2">
                <img loading="lazy" alt={project.title} src={project.img} />
              </div>
              <div className="pr-5">
                <div className="text-xl text-red-600 text-left font-bold p-2">
                  {project.title}
                </div>
                <div className="p-2">{project.description}</div>
                <div className="p-2 flex justify-between">
                  <a
                    href={project.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-yellow-600 hover:text-red-600"
                  >
                    View Map
                  </a>
                  <a
                    href={project.data ?? project.url}
                    className="text-yellow-600 hover:text-red-600"
                  >
                    Get the data
                  </a>
                  <a
                    href={project.url}
                    id={project.title}
                    className="text-yellow-600 hover:text-red-600"
                  >
                    Download Map
                  </a>
                </div>
                <div className="col-span-full row-span-1">
                  <ul className="flex flex-row pl-2 align-self-end text-gray-600 overflow-x-scroll hide-scroll-bar">
                    {project.tags.map(tag => {
                      return (
                        <li className="py-1">
                          <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-yellow-200 text-gray-500 hover:text-red-800">
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
      </div>
    </div>
  )
}

export default LandingProjects
