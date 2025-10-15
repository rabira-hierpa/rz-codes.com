import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import "./Hero.css"

// Tech stack skills
const skills = [
  { name: "React", color: "from-blue-400 to-cyan-400" },
  { name: "Node.js", color: "from-green-400 to-emerald-400" },
  { name: "PostGIS", color: "from-purple-400 to-pink-400" },
  { name: "Leaflet", color: "from-yellow-400 to-orange-400" },
  { name: "Python", color: "from-indigo-400 to-blue-400" },
  { name: "QGIS", color: "from-teal-400 to-green-400" },
  { name: "Ruby on Rails", color: "from-red-400 to-rose-400" },
  { name: "Photoshop", color: "from-blue-500 to-indigo-600" },
]

// Real projects from your portfolio
const panels = [
  {
    id: 1,
    title: "GIS Expert",
    subtitle: "Transforming Cities Across Africa",
    type: "gis",
    stat: "16 Cities",
    description: "Public transport accessibility analysis",
    projects: [
      { city: "Addis Ababa", population: "4.5M", color: "#dc2626" },
      { city: "Lagos", population: "14M", color: "#ea580c" },
      { city: "Nairobi", population: "4.4M", color: "#ca8a04" },
      { city: "Dar es Salaam", population: "5.4M", color: "#16a34a" },
      { city: "Kigali", population: "1.3M", color: "#0891b2" },
    ],
    thumbnail:
      "https://blog.rz-codes.com/wp-content/uploads/2022/11/taxi-route-network-map-am-min.png",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    subtitle: "Building Scalable Web Solutions",
    type: "developer",
    stat: "15+ Apps",
    description: "From startups to enterprise",
    apps: [
      {
        name: "SoundSite",
        icon: "🎵",
        tech: "React • Firebase • Mapbox",
        category: "Location Intelligence",
      },
      {
        name: "MarketPros",
        icon: "🏘️",
        tech: "React • .NET • Azure",
        category: "Real Estate",
      },
      {
        name: "Cleos Welt",
        icon: "🐾",
        tech: "Rails • TailwindCSS",
        category: "Insurance",
      },
      {
        name: "Fatch",
        icon: "🤝",
        tech: "Rails • AI • Postgres",
        category: "B2B Platform",
      },
    ],
    thumbnail:
      "https://blog.rz-codes.com/wp-content/uploads/2022/11/soundsite.png",
  },
  {
    id: 3,
    title: "Graphic Designer",
    subtitle: "Crafting Visual Stories",
    type: "designer",
    stat: "50+ Designs",
    description: "From concept to creation",
    designs: [
      "https://blog.rz-codes.com/wp-content/uploads/2022/11/Ye-Enat-Aynoch-Movie-Poster-scaled.jpg",
      "https://blog.rz-codes.com/wp-content/uploads/2022/11/Afro-Fashion-Mag-scaled.jpg",
      "https://blog.rz-codes.com/wp-content/uploads/2022/11/Pizza-Corner-Banner-1-scaled.jpg",
      "https://blog.rz-codes.com/wp-content/uploads/2022/11/Century-Cinima-scaled.jpg",
      "https://blog.rz-codes.com/wp-content/uploads/2022/11/Roll-up-Pizza-Corner-scaled.jpg",
      "https://blog.rz-codes.com/wp-content/uploads/2022/11/Black-Salon-Banner-scaled.jpg",
    ],
  },
]

const Hero = () => {
  const [activePanel, setActivePanel] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Auto-rotate panels
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePanel(prev => (prev + 1) % panels.length)
    }, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [])

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="hero-container relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-300 dark:bg-secondary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Dynamic Text & CTAs */}
          <motion.div
            className="hero-content space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 font-mono">
                &gt; Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                Rabra Hierpa
              </h1>
            </motion.div>

            {/* Typewriter effect */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold h-12 md:h-14">
              <TypeAnimation
                sequence={[
                  "GIS Developer",
                  2000,
                  "Full Stack Engineer",
                  2000,
                  "Graphic Designer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent"
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              Mapping cities, building applications, designing experiences.
              Transforming complex spatial data into elegant solutions across
              Africa and beyond.
            </p>

            {/* Floating skill pills */}
            <div className="flex flex-wrap gap-3 py-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`skill-pill px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} text-white text-sm font-semibold shadow-lg cursor-pointer`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/projects">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 dark:from-primary-500 dark:to-secondary-500 dark:hover:from-primary-600 dark:hover:to-secondary-600 text-white font-semibold rounded-lg shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore My Work
                </motion.button>
              </Link>
              <Link to="/blog">
                <motion.button
                  className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400 text-gray-900 dark:text-white font-semibold rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, borderWidth: "3px" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Blog
                </motion.button>
              </Link>
            </div>

            {/* Stats counter */}
            <motion.div
              className="flex gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { label: "Cities Mapped", value: "16+" },
                { label: "Apps Built", value: "15+" },
                { label: "Designs Created", value: "50+" },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Real Work Carousel */}
          <motion.div
            className="hero-animation relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg)`,
            }}
          >
            <div className="carousel-container relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePanel}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Panel 1: GIS Expert - Real African Cities */}
                  {panels[activePanel].type === "gis" && (
                    <div className="gis-panel h-full bg-gradient-to-br from-blue-600 to-cyan-700 dark:from-blue-800 dark:to-cyan-900 p-8 relative overflow-hidden">
                      {/* Background map image */}
                      <div
                        className="absolute inset-0 opacity-20 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${panels[activePanel].thumbnail})`,
                        }}
                      />

                      {/* Animated grid overlay */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid-pattern" />
                      </div>

                      <div className="relative z-10 h-full flex flex-col justify-between text-white">
                        <div>
                          <motion.div
                            className="text-6xl mb-4"
                            animate={{
                              rotate: [0, 3, -3, 0],
                              y: [0, -8, 0],
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            🗺️
                          </motion.div>

                          <h3 className="text-4xl font-bold mb-2">
                            {panels[activePanel].title}
                          </h3>
                          <p className="text-xl opacity-90 mb-2">
                            {panels[activePanel].subtitle}
                          </p>
                          <div className="text-3xl font-bold text-yellow-300 mb-4">
                            {panels[activePanel].stat}
                          </div>
                          <p className="text-sm opacity-80">
                            {panels[activePanel].description}
                          </p>
                        </div>

                        {/* City badges */}
                        <div className="space-y-2">
                          {panels[activePanel].projects.map((project, i) => (
                            <motion.div
                              key={project.city}
                              className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: project.color }}
                                />
                                <span className="font-semibold">
                                  {project.city}
                                </span>
                              </div>
                              <span className="text-sm opacity-80">
                                {project.population}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Panel 2: Developer - Real Apps */}
                  {panels[activePanel].type === "developer" && (
                    <div className="developer-panel h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 text-white relative overflow-hidden">
                      {/* Background thumbnail */}
                      <div
                        className="absolute inset-0 opacity-10 bg-cover bg-center blur-sm"
                        style={{
                          backgroundImage: `url(${panels[activePanel].thumbnail})`,
                        }}
                      />

                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                          <motion.div
                            className="text-6xl mb-4"
                            animate={{
                              scale: [1, 1.08, 1],
                              y: [0, -10, 0],
                              rotateY: [0, 5, 0, -5, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            💻
                          </motion.div>

                          <h3 className="text-4xl font-bold mb-2">
                            {panels[activePanel].title}
                          </h3>
                          <p className="text-xl opacity-90 mb-2">
                            {panels[activePanel].subtitle}
                          </p>
                          <div className="text-3xl font-bold text-green-400 mb-4">
                            {panels[activePanel].stat}
                          </div>
                          <p className="text-sm opacity-80 mb-6">
                            {panels[activePanel].description}
                          </p>
                        </div>

                        {/* App cards */}
                        <div className="grid grid-cols-2 gap-3">
                          {panels[activePanel].apps.map((app, i) => (
                            <motion.div
                              key={app.name}
                              className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-4 border border-gray-600 hover:border-primary-500 transition-colors"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              whileHover={{ scale: 1.05, y: -5 }}
                            >
                              <div className="text-3xl mb-2">{app.icon}</div>
                              <h4 className="font-bold text-sm mb-1">
                                {app.name}
                              </h4>
                              <p className="text-xs text-gray-400 mb-2">
                                {app.category}
                              </p>
                              <div className="text-xs text-primary-400">
                                {app.tech}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Panel 3: Designer - Real Designs */}
                  {panels[activePanel].type === "designer" && (
                    <div className="designer-panel h-full bg-gradient-to-br from-purple-700 via-pink-600 to-rose-600 dark:from-purple-900 dark:via-pink-800 dark:to-rose-800 p-8 text-white relative overflow-hidden">
                      {/* Animated background shapes */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-32 h-32 rounded-full bg-white/20"
                            style={{
                              top: `${20 + i * 15}%`,
                              left: `${10 + i * 20}%`,
                            }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                          <motion.div
                            className="text-6xl mb-4"
                            animate={{
                              rotate: [0, 8, -8, 0],
                              scale: [1, 1.1, 1],
                              y: [0, -12, 0],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            🎨
                          </motion.div>

                          <h3 className="text-4xl font-bold mb-2">
                            {panels[activePanel].title}
                          </h3>
                          <p className="text-xl opacity-90 mb-2">
                            {panels[activePanel].subtitle}
                          </p>
                          <div className="text-3xl font-bold text-yellow-300 mb-4">
                            {panels[activePanel].stat}
                          </div>
                          <p className="text-sm opacity-80 mb-6">
                            {panels[activePanel].description}
                          </p>
                        </div>

                        {/* Design grid showcase */}
                        <div className="grid grid-cols-3 gap-2">
                          {panels[activePanel].designs
                            .slice(0, 6)
                            .map((design, i) => (
                              <motion.div
                                key={i}
                                className="aspect-square rounded-lg overflow-hidden shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                whileHover={{ scale: 1.1, zIndex: 10 }}
                              >
                                <img
                                  src={design}
                                  alt={`Design ${i + 1}`}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              </motion.div>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Progress indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {panels.map((panel, index) => (
                  <button
                    key={panel.id}
                    onClick={() => setActivePanel(index)}
                    className={`transition-all duration-300 ${
                      index === activePanel
                        ? "bg-white w-8 h-3"
                        : "bg-white/50 hover:bg-white/75 w-3 h-3"
                    } rounded-full`}
                    aria-label={`Go to ${panel.title}`}
                  />
                ))}
              </div>
            </div>

            {/* Panel labels */}
            <motion.div
              className="mt-6 text-center"
              key={activePanel}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                {panels[activePanel].title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {panels[activePanel].subtitle}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
