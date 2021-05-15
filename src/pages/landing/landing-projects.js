import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

const LandingProjects = () => {
  const ProjectData = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          id
          title
          description
          data
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                quality: 100
                transformOptions: { fit: COVER }
              )
            }
          }
        }
      }
    }
  `)
  console.log(ProjectData)
  return <div className="border border-gray-100 hover:shadow-sm"></div>
}

export default LandingProjects
