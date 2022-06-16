import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import AppCard from "./apps-card"
import { Link } from "gatsby"

const LandingApps = () => {
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
    <div className="py-10 md:py-0">
      <div className="text-4xl font-bold text-red-600 text-center ">
        Web/Mobile Apps
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-stretch pt-5 ">
        {AppsData.allAppsJson.nodes
          .filter((apps, idx) => {
            return idx < 3
          })
          .map((apps, idx) => {
            return <AppCard key={idx} apps={apps} />
          })}
      </div>
      <Link to="/apps">
        <p className="py-3 text-center text-red-600">View More</p>
      </Link>
    </div>
  )
}

export default LandingApps
