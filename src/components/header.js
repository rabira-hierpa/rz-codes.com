import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import RzCodesLogo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header className="lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2">
    <div className="flex-1 flex justify-between items-center">
      <Link to="/" className="flex text-lg font-semibold">
        <img
          src={RzCodesLogo}
          width="50"
          height="50"
          className="p-2"
          alt="Rz Codes Logo"
        />
        <div className="mt-3 text-red-600">Rz Codes</div>
      </Link>
    </div>
    <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
      <svg
        className="fill-current text-gray-900"
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
    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav className="flex items-center ">
        <ul className="lg:flex items-center text-red-600 space-x-4 text-gray-700 pt-4 lg:pt-0">
          <li>
            <Link
              className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
              to="/blogs"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
              to="/apps"
            >
              Apps
            </Link>
          </li>
          <li>
            <Link
              className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
              to="/designs"
            >
              Designs
            </Link>
          </li>
          <li>
            <Link
              className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
              to="/my-journey"
            >
              My Journey
            </Link>
          </li>
          <li>
            <Link
              className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
