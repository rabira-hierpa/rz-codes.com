import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import RzCodesLogo from "../../../assets/images/logo.svg"

// Menu items array
const menuItems = [
  { path: "/blog", label: "Blog" },
  { path: "/projects", label: "Projects" },
  { path: "/apps", label: "Apps" },
  { path: "/designs", label: "Designs" },
  { path: "/my-journey", label: "My Journey" },
  { path: "/about", label: "About" },
]

/**
 * Represents the header section of a website.
 * @param {Object} props - The props object.
 * @param {string} props.siteTitle - The title of the website.
 * @returns {JSX.Element} The rendered header section of the website.
 */
const Header = ({ siteTitle: _siteTitle }) => {
  const location = useLocation()

  // Helper function to check if a path is active
  const isActive = path => {
    return location.pathname.startsWith(path)
  }

  return (
    <header className="lg:px-16 px-6 bg-surface-light dark:bg-surface-dark shadow-md flex flex-wrap items-center lg:py-0 py-2 transition-colors duration-300">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/" className="flex text-lg font-semibold">
          <img
            src={RzCodesLogo}
            width="50"
            height="50"
            className="p-2"
            alt="Rz Codes Logo"
          />
          <div className="mt-3 text-primary-600 dark:text-primary-400">
            Rz Codes
          </div>
        </Link>
      </div>

      <label
        htmlFor="menu-toggle"
        className="cursor-pointer lg:hidden block"
        aria-label="Menu"
      >
        <svg
          className="fill-current text-gray-900 dark:text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>

      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
            {menuItems.map(item => (
              <li key={item.path} className="py-2 lg:py-0">
                <Link
                  className={`hover:pb-4 hover:border-b-4 hover:border-secondary-400 transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-secondary-600 dark:text-secondary-300 pb-4 border-b-4 border-primary-600 dark:border-primary-400"
                      : "text-primary-600 dark:text-primary-400"
                  }`}
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
