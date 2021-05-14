import React from "react"
import Hero from "./hero"
import Apps from "../apps"
import "../../styles/global.css";
import LandingDesign from "./landing-designs";
// import { StaticImage } from "gatsby-plugin-image";

const landing = () => {
  return (
    <div>
      <Hero />
      <Apps />
      <LandingDesign />
      <div className=" container md:flex md:items-center mx-auto shadow-2xl sm:shadow-none mb-5">
        {/* <StaticImage
          alt="poster"
          className="absolute backdrop-filter z-0 left-0 w-full h-vw-50 sm:h-vw-40 md:h-80 lg:h-88 xl:h-96 2xl:h-112 object-cover"
          src="../../images/landing/rabira-hierpa-web.jpg"
        /> */}
      </div>
    </div>
  )
}

export default landing
