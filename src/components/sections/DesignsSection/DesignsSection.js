import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import "../../../styles/global.css"

const LandingDesign = () => {
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
    <div className="">
      <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 text-center py-10 ">
        Graphics Designs
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {DesignData.allDesignsJson.nodes[0].images.map((imageUrl, idx) => {
            return idx < 3 ? (
              <div
                key={"img_" + idx}
                className="flex  space-x-2 space-y-2 p-1 border-4 border-gray-100 rounded-lg"
              >
                <img
                  key={"graphics_img" + idx}
                  className="rounded-lg hover:shadow-2xl duration-300 cursor-pointer"
                  src={imageUrl}
                  loading="lazy"
                  alt="Rz-Design"
                />
              </div>
            ) : null
          })}
        </Masonry>
      </ResponsiveMasonry>
      <Link to="/designs">
        <p className="py-2 text-center text-red-600">View More</p>
      </Link>
    </div>
  )
}

export default LandingDesign
