import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { TypeAnimation } from "react-type-animation"

// Social media links array
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rabira",
    icon: "https://img.icons8.com/material-outlined/96/fa314a/linkedin--v1.png",
    label: "LinkedIn Profile",
  },
  {
    name: "GitHub",
    url: "https://www.github.com/rabira-hierpa",
    icon: "https://img.icons8.com/material-outlined/96/fa314a/github.png",
    label: "GitHub Profile",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rzcodes",
    icon: "https://img.icons8.com/material-outlined/96/fa314a/twitter.png",
    label: "Twitter Profile",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/rzcodes",
    icon: "https://img.icons8.com/ios-filled/100/fa314a/facebook--v1.png",
    label: "Facebook Page",
  },
  {
    name: "DEV.to",
    url: "https://dev.to/rabra_hierpa",
    icon: "https://img.icons8.com/windows/96/fa314a/dev.png",
    label: "DEV.to Profile",
  },
  {
    name: "OpenStreetMap",
    url: "https://www.openstreetmap.org/user/Rabira%20Hierpa",
    icon: "https://img.icons8.com/ios-glyphs/90/fa314a/world-map.png",
    label: "OpenStreetMap Profile",
  },
]

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="p-10 flex-grow">
        <div className="rounded-full flex items-center justify-center">
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            className="rounded-full border-2 border-gray-600 dark:border-gray-400 shadow-sm h-72 w-72"
            src="https://blog.rz-codes.com/wp-content/uploads/2024/03/profile-pic-2024.jpeg"
            alt="rzcodes"
          />
        </div>
        <div className="text-center">
          <div className="font-extrabold text-6xl pt-5 text-secondary-600 dark:text-secondary-400">
            Hey there!
          </div>
          <div className="font-bold text-4xl py-5 text-primary-600 dark:text-primary-400">
            <TypeAnimation
              sequence={[
                "I'm Rabra Hierpa ...",
                2000,
                "A Software Engineer...",
                2000,
                "GIS Developer... ",
                2000,
                "and FOSS enthusiast!",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2rem" }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center space-x-3 md:space-x-5 pt-5">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="transition-transform hover:scale-110 duration-200"
              >
                <img
                  className="h-8 w-8 md:h-10 md:w-10"
                  src={link.icon}
                  alt={`${link.name} Icon`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
