import { graphql, useStaticQuery } from "gatsby"
import Truncate from "react-truncate"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Apps = () => {
  const AppsData = useStaticQuery(graphql`
    query {
      allAppsJson {
        nodes {
          id
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, transformOptions: {fit: COVER}, quality:100)
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
    <>
      <div className="text-4xl font-bold text-yellow-400 text-center">Apps</div>
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-5 space-y-10 justify-items-stretch ">
        {AppsData.allAppsJson.nodes.map(apps => {
          return (
            <div
              key={apps.id}
              className="overflow-hidden max-w-xs shadow-md rounded-md overflow-hidden hover:shadow-2xl duration-300 justify-self-stretch fle flex-col"
            >
              <div className="h-36 w-full flex flex-col items-center justify-center overflow-hidden">
                <GatsbyImage
                  style={{ maxHeight: '10rem' }}
                  className="h-auto w-auto bg-cover mx-auto"
                  image={apps.image.childImageSharp.gatsbyImageData}
                  alt={apps.title}
                />
              </div>
              <div className="text-center p-5 relative">
                <div className="text-lg font-semibold text-red-600 pb-2">
                  {apps.title}
                </div>
                <div className="text-justify">
                  <Truncate lines={3} ellipsis="...">
                    {apps.description}
                  </Truncate>
                </div>
                <div className="my-2 bg-red-500 text-white text-sm inline-block rounded-full  bg-yellow-400 hover:bg-yellow-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1  opacity-90 hover:opacity-100 ">
                  <a href={apps.link[0]}>View details</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Apps
