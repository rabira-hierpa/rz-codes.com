import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import AppCard from "./landing/apps-card"

const Apps = () => {
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
    <>
      <div className="text-4xl font-bold text-red-600 text-center ">Apps</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-stretch pt-5 ">
        {AppsData.allAppsJson.nodes.map(apps => {
          return <AppCard apps={apps} />
        })}
      </div>
    </>
  )
}

export default Apps
