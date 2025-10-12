import React from "react"
import { Link } from "gatsby"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero-container min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="hero-content space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-text-light dark:text-text-dark">
              Mapping the{" "}
              <span className="text-primary-600 dark:text-primary-400 block">
                Digital World
              </span>
              <span className="block">One Project at a Time</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-2xl leading-relaxed">
            GIS Developer & Full Stack Engineer specializing in interactive mapping solutions and
            location-based applications
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/projects"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Projects
            </Link>
            <Link
              to="/blog"
              className="px-8 py-3 bg-surface-light dark:bg-surface-dark border-2 border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400 text-text-light dark:text-text-dark font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Read Blog
            </Link>
          </div>
        </div>

        {/* Right Side - Rotating Earth Animation */}
        <div className="hero-animation flex items-center justify-center">
          <div className="rotating-earth-container">
            <div className="earth-wrapper">
              <div className="earth">
                <div className="earth-sphere">
                  {/* Continents overlay */}
                  <div className="continents"></div>
                  {/* Atmosphere glow */}
                  <div className="atmosphere"></div>
                </div>
              </div>
              {/* Orbiting elements */}
              <div className="orbit orbit-1">
                <div className="satellite"></div>
              </div>
              <div className="orbit orbit-2">
                <div className="satellite"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
