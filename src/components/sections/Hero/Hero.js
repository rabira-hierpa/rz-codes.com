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
  { name: "TypeScript", color: "from-blue-500 to-blue-600" },
  { name: "Docker", color: "from-cyan-400 to-blue-500" },
  { name: "GraphQL", color: "from-pink-400 to-rose-400" },
]

// Carousel panels
const panels = [
  {
    id: 1,
    title: "The Mapper",
    subtitle: "Building Location Intelligence",
    icon: "🗺️",
    type: "map",
  },
  {
    id: 2,
    title: "The Developer",
    subtitle: "Crafting Scalable Solutions",
    icon: "💻",
    type: "code",
  },
  {
    id: 3,
    title: "The Designer",
    subtitle: "Creating Beautiful Experiences",
    icon: "🎨",
    type: "design",
  },
]

// Code snippet for developer panel
const codeSnippet = `import { MapContainer, TileLayer } from 'react-leaflet';

const InteractiveMap = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};`

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
                  "UI/UX Enthusiast",
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
              Transforming complex spatial data into intuitive, scalable
              solutions. Bridging the gap between maps and modern web
              applications.
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
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
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
                { label: "Projects", value: "50+" },
                { label: "Blog Posts", value: "25+" },
                { label: "Technologies", value: "30+" },
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

          {/* RIGHT SIDE - Animated Carousel */}
          <motion.div
            className="hero-animation relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg)`,
            }}
          >
            <div className="carousel-container relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePanel}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Panel 1: The Mapper */}
                  {panels[activePanel].type === "map" && (
                    <div className="mapper-panel h-full bg-gradient-to-br from-blue-500 to-cyan-600 dark:from-blue-700 dark:to-cyan-800 p-8 flex flex-col justify-center items-center text-white relative overflow-hidden">
                      {/* Animated map grid */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="grid-pattern" />
                      </div>
                      
                      <motion.div
                        className="text-8xl mb-6"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {panels[activePanel].icon}
                      </motion.div>
                      
                      <h3 className="text-4xl font-bold mb-4">
                        {panels[activePanel].title}
                      </h3>
                      <p className="text-xl opacity-90">
                        {panels[activePanel].subtitle}
                      </p>

                      {/* Animated markers */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 bg-white rounded-full"
                          style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 18}%`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Panel 2: The Developer */}
                  {panels[activePanel].type === "code" && (
                    <div className="developer-panel h-full bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-white relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-700 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-4 text-sm text-gray-400">InteractiveMap.jsx</span>
                      </div>

                      <div className="mt-12 font-mono text-sm">
                        <motion.pre
                          className="text-left"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <code className="language-javascript">
                            {codeSnippet.split('\n').map((line, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                              >
                                {line}
                              </motion.div>
                            ))}
                          </code>
                        </motion.pre>
                      </div>

                      <motion.div
                        className="absolute bottom-8 left-8 right-8 bg-gray-700 rounded p-4 font-mono text-xs"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                      >
                        <div className="text-green-400">&gt; npm run dev</div>
                        <div className="text-gray-400 mt-2">✓ Ready in 1.2s</div>
                        <div className="text-blue-400">ℹ Local: http://localhost:3000</div>
                      </motion.div>
                    </div>
                  )}

                  {/* Panel 3: The Designer */}
                  {panels[activePanel].type === "design" && (
                    <div className="designer-panel h-full bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 p-8 flex flex-col justify-center items-center text-white relative overflow-hidden">
                      <motion.div
                        className="text-8xl mb-6"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {panels[activePanel].icon}
                      </motion.div>
                      
                      <h3 className="text-4xl font-bold mb-4">
                        {panels[activePanel].title}
                      </h3>
                      <p className="text-xl opacity-90 mb-8">
                        {panels[activePanel].subtitle}
                      </p>

                      {/* Color palette */}
                      <div className="flex gap-4">
                        {["#dc2626", "#eab308", "#3b82f6", "#8b5cf6", "#ec4899"].map(
                          (color, i) => (
                            <motion.div
                              key={color}
                              className="w-16 h-16 rounded-lg shadow-lg"
                              style={{ backgroundColor: color }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              whileHover={{ scale: 1.2, rotate: 10 }}
                            />
                          )
                        )}
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activePanel
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
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
