import React from "react"

// Social media links array
const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@rzcodes",
    icon: "https://img.icons8.com/color/96/fa314a/youtube-play.png",
    label: "YouTube Channel",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@rzcodes",
    icon: "https://img.icons8.com/material-rounded/96/fa314a/tiktok.png",
    label: "TikTok Profile",
  },
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

export const Footer = () => {
  return (
    <footer className="pt-10 px-4 md:px-6 lg:px-8 text-text-light dark:text-text-dark transition-colors duration-300">
      {/* Responsive flex layout - stacks on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8 my-5">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">
            About
          </h3>
          <p className="text-sm">
            I am Rabra Hierpa, a Software Engineer, GIS Developer, and FOSS
            enthusiast!
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">
            Contact
          </h3>
          <p className="text-sm">Email: rzcodes.biz@gmail.com</p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">
            Social
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
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
                  className="h-6 w-6 md:h-8 md:w-8"
                  src={link.icon}
                  alt={`${link.name} Icon`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10 pb-4">
        <div className="text-center text-sm md:text-base">
          © {new Date().getFullYear()} Made with &#10084; by
          {` `}
          <a
            href="https://www.rz-codes.com"
            className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Rabra Hierpa
          </a>
        </div>
      </div>
    </footer>
  )
}
