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
          images
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Designs"></SEO>
      <div className="min-h-screen">
        <div className="text-9xl text-red-600 mt-5">Designs!</div>
        <p className="pt-5">
          Here are some the designs I made while taking a Graphics Design Course
          @ Berehana Selam Printing Technology college. All of the desings are
          made using Adobe Photoshop,Illustrator and InDesign. Most of them are
          magazine cover,flyers,banners, rollups and postcards
        </p>
        <p className="pt-5 text-blue-800 text-2xl  font-semibold">
          Photoshop Designs
        </p>
        <div className="pt-5">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {DesignData.allDesignsJson.nodes[0].images.map(
                (imageUrl, idx) => {
                  return (
                    <div key={"design_" + idx} className="flex p-2  rounded-lg">
                      <img
                        key={"design_img_" + idx}
                        className=" rounded-lg hover:shadow-2xl duration-300 cursor-pointer"
                        src={imageUrl}
                        alt="Rz-Design"
                      />
                    </div>
                  )
                }
              )}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <p className="pt-5 text-yellow-800 text-2xl  font-semibold">
          Illustrator Designs
        </p>
        <div className="text-5xl text-center font-extrabold text-gray-500 p-10 ">
          Coming Soon!
        </div>
        <p className="pt-5 text-red-800 text-2xl  font-semibold">
          Indesign Designs
        </p>
        <div className="text-5xl text-center font-extrabold text-gray-500 p-10 ">
          Coming Soon!
        </div>
      </div>
    </Layout>
  )
}

export default Designs
