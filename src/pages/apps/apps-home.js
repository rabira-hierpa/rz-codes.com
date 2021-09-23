import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AppsHome = () => {
  const AppsData = useStaticQuery(graphql`
    query {
      allAppsJson {
        nodes {
          id
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: { fit: COVER }
                quality: 100
              )
            }
          }
          title
          tags
          description
          demo
          link
        }
      }
    }
  `)
  return (
    <div className="">
      <div className="grid grid-rows gap-y-10">
        {AppsData.allAppsJson.nodes.map((app, idx) => {
          return (
            <div className="grid grid-cols-2 shadow-md hover:shadow-lg gap-x-5">
              <div className="object-cover object-center  grid place-items-center  rounded-lg h-auto max-w-md p-2">
                <GatsbyImage
                  alt={app.title}
                  image={
                    app?.image?.childImageSharp?.gatsbyImageData || app?.image
                  }
                />
              </div>
              <div className="pr-5">
                <div className="text-xl text-red-600 text-left font-bold p-2">
                  {app.title}
                </div>
                <div className="py-2">{app.description}</div>
                <div className="p-2 flex justify-start space-x-5">
                  {app?.demo ? (
                    <a
                      href={app.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-yellow-500 hover:text-red-600"
                    >
                      View Demo
                    </a>
                  ) : null}
                  <a
                    href={app.link}
                    className="text-yellow-500 hover:text-red-600"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub Link
                  </a>
                </div>
                <div className="col-span-full row-span-1">
                  <ul className="flex flex-row pl-2 align-self-end text-gray-600 overflow-x-scroll hide-scroll-bar">
                    {app.tags.map(tag => {
                      return (
                        <li className="py-1">
                          <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-yellow-200 text-gray-500 hover:text-red-800">
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
