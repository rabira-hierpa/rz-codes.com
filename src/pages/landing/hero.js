import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div
      style={{
        height: "700px",
      }}
      className="grid grid-cols-1  align-items-center "
    >
      <div className="p-10 ">
        <div className="rounded-full flex items-center justify-center ">
          <StaticImage
            className="rounded-full border-2 border-grey-600 shadow-sm h-72 w-72"
            src="../../images/landing/rabira-hierpa-web.jpg"
            alt="rzcodes"
          />
        </div>
        <div className="text-center font-extrabold text-6xl pt-5 text-yellow-400">
          Selam!
        </div>
        <div className="text-center font-bold text-4xl py-5 text-red-600">
          I'm Rabra Hierpa ...
        </div>
        <div className="font-bold text-2xl text-yellow-500">
          FOSS Enthusiast,
          <span className="text-red-600">Full-stack Web Developer</span>,GIS
          Expert & <span className="text-black">Graphics Designer</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
