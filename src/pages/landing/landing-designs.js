import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
        Graphics Designs
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {DesignData.allDesignsJson.nodes[0].graphics_designs.map(
            ({ childImageSharp }, idx) => {
              return idx < 3 ? (
                <div
                  key={idx}
                  className="flex  space-x-2 space-y-2 p-1 border-4 border-gray-100 rounded-lg"
                >
                  <GatsbyImage
                    key={idx}
                    className="px-8 py-6 rounded-lg hover:shadow-2xl duration-300 cursor-pointer"
                    image={childImageSharp.gatsbyImageData}
                    alt="Rz-Design"
                  />
                </div>
              ) : null
            }
          )}
        </Masonry>
      </ResponsiveMasonry>
      <Link to="/designs">
        <p className="py-2 text-center text-red-600">View More</p>
      </Link>
    </div>
  )
}

export default LandingDesign
