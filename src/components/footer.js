import React from "react"

export const Footer = () => {
  return (
    <footer className="pt-10 px-4 md:px-6 lg:px-8">
      {/* Responsive flex layout - stacks on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8 my-5">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">About</h3>
          <p className="text-sm">
            I am Rabra Hierpa, a Software Engineer, GIS Developer, and FOSS
            enthusiast!
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-sm">Email: rzcodes.biz@gmail.com</p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">Social</h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <a
              href="https://www.youtube.com/@rzcodes"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img
                  className="h-6 w-6 md:h-8 md:w-8"
                  src="https://img.icons8.com/color/96/fa314a/youtube-play.png"
                  alt="YouTube Icon"
                />
              </span>
            </a>
            <a
              href="https://www.tiktok.com/@rzcodes"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img
                  className="h-6 w-6 md:h-8 md:w-8"
                  src="https://img.icons8.com/material-rounded/96/fa314a/tiktok.png"
                  alt="Tiktok Icon"
                />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/rabira"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img
                  className="h-6 w-6 md:h-8 md:w-8"
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
                  className="h-6 w-6 md:h-8 md:w-8"
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
                  className="h-6 w-6 md:h-8 md:w-8"
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
                  className="h-6 w-6 md:h-8 md:w-8"
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
                  className="h-6 w-6 md:h-8 md:w-8"
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
                  className="h-6 w-6 md:h-8 md:w-8"
                  src="https://img.icons8.com/ios-glyphs/90/fa314a/world-map.png"
                  alt="OpenStreetMap Icon"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10 pb-4">
        <div className="text-center text-sm md:text-base">
          © {new Date().getFullYear()} Made with &#10084; by
          {` `}
          <a href="https://www.rz-codes.com">Rabra Hierpa</a>
        </div>
      </div>
    </footer>
  )
}
