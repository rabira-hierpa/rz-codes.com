import React from "react"

export const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="grid grid-rows-2 grid-cols-3">
        <div className=""></div>
        <div className="">
          © {new Date().getFullYear()},Made with :heart: by  
          {` `}
          <a href="https://www.rz-codes.com">Rabra Hierpa</a>
        </div>
      </div>
    </footer>
  )
}
