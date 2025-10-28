import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const AppsHome = () => {
  const AppsData = useStaticQuery(graphql`
    query {
      allAppsJson {
        nodes {
          id
          image
          title
          tags
          description
          demo
          link
          discontinued
        }
      }
    }
  `)
  return (
    <div className="">
      <div className="grid grid-rows gap-y-10">
        {AppsData.allAppsJson.nodes.map((app, idx) => {
          return (
            <div
              key={`app_${idx}`}
              className="grid grid-cols-1 md:grid-cols-2 shadow-md hover:shadow-lg gap-x-5 bg-surface-light dark:bg-surface-dark transition-colors p-1 rounded-lg"
            >
              <div className="object-cover object-center grid place-items-center rounded-lg h-auto p-2 relative">
                <img alt={app.title} src={app?.image} className="" />
                {/* Archived Badge - Top Left */}
                {app?.discontinued && (
                  <div className="absolute top-4 left-4 bg-secondary-600 dark:bg-secondary-500 text-white px-3 py-1 rounded-full shadow-md text-xs font-semibold">
                    Archived
                  </div>
                )}
              </div>
              <div className="pr-5">
                <div className="text-xl text-primary-600 dark:text-primary-400 text-center md:text-left font-bold p-2">
                  {app.title}
                </div>
                <div className="py-2 text-text-light dark:text-text-dark">
                  {app.description}
                </div>
                <div className="p-2 flex justify-start space-x-5">
                  {app?.demo ? (
                    <a
                      href={app.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-secondary-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      View Demo
                    </a>
                  ) : null}
                  {app?.link ? (
                    <a
                      href={app.link}
                      className="text-secondary-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      GitHub Link
                    </a>
                  ) : null}
                </div>
                <div className="col-span-full row-span-1">
                  <ul className="flex flex-row pl-2 align-self-end text-gray-600 dark:text-gray-400 overflow-x-scroll hide-scroll-bar">
                    {app.tags
                      .filter(tag => tag !== "Archived")
                      .map(tag => {
                        return (
                          <li key={tag} className="py-1">
                            <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-secondary-200 dark:hover:bg-secondary-900 text-gray-500 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-300">
                              <span>{"#" + tag}</span>
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

export default AppsHome
