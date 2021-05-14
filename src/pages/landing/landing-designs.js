import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../../styles/global.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const LandingDesign = () => {
  const DesignData = useStaticQuery(graphql`
    query {
      allDesignsJson {
        nodes {
          id
          graphics_designs {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: { fit: COVER }
                quality: 100
              )
            }
          }
        }
      }
    }
  `)
  return (
    <div className="">
      <div className="text-4xl font-bold text-red-600 text-center py-10 ">
        Designs
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {DesignData.allDesignsJson.nodes[0].graphics_designs.map(
            ({ childImageSharp }, idx) => {
              return (
                <div key={idx} className="flex p-2 bg-red-100 rounded-lg">
                  <GatsbyImage
                    key={idx}
                    className="px-8 py-6 rounded-lg hover:shadow-2xl duration-300 cursor-pointer"
                    image={childImageSharp.gatsbyImageData}
                    alt="Rz-Design"
                  />
                </div>
              )
            }
          )}
        </Masonry>
      </ResponsiveMasonry>
      <div className=""></div>
    </div>
  )
}

export default LandingDesign
