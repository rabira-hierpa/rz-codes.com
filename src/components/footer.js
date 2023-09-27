import React from "react"

export const Footer = () => {
  return (
    <footer className="p-5">
      <div className="grid grid-rows-1 grid-cols-1">
        <div className="text-center">
          © {new Date().getFullYear()} Made with &#10084; by
          {` `}
          <a href="https://www.rz-codes.com">Rabra Hierpa</a>
        </div>
      </div>
    </footer>
  )
}
