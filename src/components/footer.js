import React from "react"

export const Footer = () => {
  return (
    <footer className="pt-10">
      {/* create a 3 column div  with tailwindcss classes*/}
      <div className="grid grid-cols-3 my-5">
        <div>
          <h3 className="text-lg font-bold mb-2">About</h3>
          <p className="text-sm">
            I am Rabra Hierpa, a Software Engineer, GIS Developer, and FOSS
            enthusiast!
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-sm">Email:rzcodes.biz@gmail.com</p>
        </div>
        <div className="flex flex-col ">
          <h3 className="text-lg font-bold mb-2">Social</h3>
          <div className="flex space-x-1">
            <a
              href="https://www.youtube.com/@rzcodes"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img
                  className="h-8 w-8"
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
                  className="h-8 w-8"
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
                  className="h-8 w-8"
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
                  className="h-8 w-8"
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
                  className="h-8 w-8"
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
                  className="h-8 w-8"
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
                  className="h-8 w-8"
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
                  className="h-8 w-8"
                  src="https://img.icons8.com/ios-glyphs/90/fa314a/world-map.png"
                  alt="OpenStreetMap Icon"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 pt-10">
        <div className="text-center">
          © {new Date().getFullYear()} Made with &#10084; by
          {` `}
          <a href="https://www.rz-codes.com">Rabra Hierpa</a>
        </div>
      </div>
    </footer>
  )
}
