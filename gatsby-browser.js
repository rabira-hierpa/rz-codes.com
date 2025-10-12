/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
import "./src/styles/global.css"

// Wrap the entire app with ThemeProvider
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
