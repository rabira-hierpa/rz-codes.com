import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
  return (
    <div
      style={{
        height: "700px",
      }}
      className="grid grid-cols-1  align-items-center "
    >
      <div className="p-10">
        <div className="rounded-full flex items-center justify-center ">
          <StaticImage
            loading="lazy"
            className="rounded-full border-2 border-grey-600 shadow-sm h-72 w-72"
            src="https://blog.rz-codes.com/wp-content/uploads/2022/11/rabira-hierpa-web.jpg"
            alt="rzcodes"
          />
        </div>
        <div className="text-center">
          <div className=" font-extrabold text-6xl pt-5 text-yellow-600">
            Hello !
          </div>
          <div className="font-bold text-4xl py-5 text-red-600">
          <TypeAnimation sequence={
            [
              "I'm Rabra Hierpa ...",
             2000,
              "A Software Engineer...",
              2000,
              "GIS Developer... ",
              2000,
              "and FOSS enthusiast!",
              2000
            ]
          } 
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{fontSize: '2rem'}}
          />
           
          </div>
          {/* <div className="font-bold text-2xl text-yellow-600">
            FOSS Enthusiast,
            <span className="text-yellow-600">Full-stack Web Developer</span> &
            GIS Developer
          </div> */}
        </div>
        <div className="flex justify-center space-x-5 pt-5">
          <a
            href="https://www.linkedin.com/in/rabira"
            target="_blank"
            rel="noreferrer"
            style={{ cursor: "pointer" }}
          >
            <span>
              <img
                className="h-12 w-12"
                src="https://img.icons8.com/material-outlined/96/fa314a/linkedin--v1.png"
                alt="Linkedin Icon"
              />
            </span>
          </a>
          <a
            href="https://www.github.com/rabira-hierpa"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img
                className="h-12 w-12 text-red-600"
                src="https://img.icons8.com/material-outlined/96/fa314a/github.png"
                alt="GitHub Icon"
              />
            </span>
          </a>
          <a
            href="https://twitter.com/rzcodes"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img
                className="h-12 w-12"
                src="https://img.icons8.com/material-outlined/96/fa314a/twitter.png"
                alt="Twitter Icon"
              />
            </span>
          </a>
          <a
            href="https://www.facebook.com/rzcodes"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img
                className="h-12 w-12"
                src="https://img.icons8.com/ios-filled/100/fa314a/facebook--v1.png"
                alt="Facebook Icon"
              />
            </span>
          </a>
          <a
            href="https://dev.to/rabra_hierpa"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img
                className="h-12 w-12"
                src="https://img.icons8.com/windows/96/fa314a/dev.png"
                alt="DEV.to Icon"
              />
            </span>
          </a>
          <a
            href="https://www.openstreetmap.org/user/Rabira%20Hierpa"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img
                className="h-12 w-12"
                src="https://img.icons8.com/ios-glyphs/90/fa314a/world-map.png"
                alt="OpenStreetMap Icon"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
