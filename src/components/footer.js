import React from "react"

export const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://www.rz-codes.com">Rabra Hierpa</a>
    </footer>
  )
}
