import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div className="gird grid-cols-1 md:grid-cols-2 min-h-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="rounded-full flex items-center justify-center ">
          <StaticImage
            className="rounded-full border border-gray-100 shadow-sm"
            src="../../images/landing/rabira-hierpa-web.jpg"
            alt="Mesobe hasab"
          />
        </div>
        <div className="p-10 pt-40">
          <div className="font-extrabold text-6xl text-yellow-400">Selam!</div>
          <div className="font-bold text-4xl pt-20 pb-10 text-red-600">
            I'm Rabra Hierpa ...
          </div>
          <div className="font-bold text-2xl text-yellow-500">
            FOSS Enthusiast,
            <span className="text-red-600">Full-stack Web Developer</span>,GIS
            Expert & <span className="text-black">Graphics Designer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
