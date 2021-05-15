import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import SEO from "../components/seo"


const Designs = () => {
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
    <Layout>
      <SEO title="Designs"></SEO>
      <div className="min-h-screen">
        <span className="text-9xl text-red-600">Designs!</span>
        <div className="pt-5">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {DesignData.allDesignsJson.nodes[0].graphics_designs.map(
                ({ childImageSharp }, idx) => {
                  return (
                    <div key={idx} className="flex p-2  rounded-lg">
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
        </div>
      </div>
    </Layout>
  )
}

export default Designs
