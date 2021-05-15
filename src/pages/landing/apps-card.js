import React from "react"
import Truncate from "react-truncate"
import { GatsbyImage } from "gatsby-plugin-image"

const AppCards = ({ apps }) => {
  // const { apps } = props
  return (
    <div
      key={apps.id}
      className="overflow-hidden shadow-md rounded-md hover:shadow-2xl duration-300 justify-self-stretch flex flex-col"
    >
      <div className="h-36 w-full flex flex-col items-center justify-center overflow-hidden">
        <GatsbyImage
          style={{ maxHeight: "10rem" }}
          className="h-auto w-auto bg-cover mx-auto"
          image={apps.image.childImageSharp.gatsbyImageData}
          alt={apps.title}
        />
      </div>
      <div className="text-center p-5 ">
        <div className="text-lg font-semibold text-red-600 pb-2">
          {apps.title}
        </div>
        <div className="text-align-left">
          <Truncate lines={3} ellipsis="...">
            {apps.description}
          </Truncate>
        </div>
        <div className="my-2 text-white  rounded-full  bg-yellow-400 hover:bg-yellow-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1  opacity-90 hover:opacity-100 ">
          <a href={apps.link[0]}>View details</a>
        </div>
      </div>
    </div>
  )
}

export default AppCards
