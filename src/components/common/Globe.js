import React, { useEffect, useRef, useState } from "react"
import createGlobe from "cobe"

/**
 * Interactive 3D Globe Component
 * Built on COBE - displays African cities with markers
 */
const Globe = ({ className = "" }) => {
  const canvasRef = useRef()
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [isDark, setIsDark] = useState(false)

  // African cities coordinates (latitude, longitude in degrees)
  const cities = [
    // East Africa
    {
      name: "Addis Ababa",
      country: "Ethiopia",
      lat: 9.03,
      lon: 38.74,
      size: 0.08,
    },
    { name: "Nairobi", country: "Kenya", lat: -1.29, lon: 36.82, size: 0.08 },
    { name: "Kampala", country: "Uganda", lat: 0.35, lon: 32.58, size: 0.07 },
    { name: "Kigali", country: "Rwanda", lat: -1.95, lon: 30.06, size: 0.07 },
    // West Africa
    {
      name: "Abidjan",
      country: "Côte d'Ivoire",
      lat: 5.36,
      lon: -4.01,
      size: 0.08,
    },
    { name: "Accra", country: "Ghana", lat: 5.56, lon: -0.2, size: 0.08 },
    { name: "Bamako", country: "Mali", lat: 12.65, lon: -8.0, size: 0.07 },
    {
      name: "Freetown",
      country: "Sierra Leone",
      lat: 8.48,
      lon: -13.23,
      size: 0.07,
    },
    { name: "Kumasi", country: "Ghana", lat: 6.69, lon: -1.62, size: 0.07 },
    // North Africa
    { name: "Alexandria", country: "Egypt", lat: 31.2, lon: 29.92, size: 0.08 },
    { name: "Cairo", country: "Egypt", lat: 30.04, lon: 31.24, size: 0.09 },
    { name: "Tetouan", country: "Morocco", lat: 35.59, lon: -5.37, size: 0.06 },
    // Central Africa
    { name: "Douala", country: "Cameroon", lat: 4.05, lon: 9.7, size: 0.08 },
    { name: "Kinshasa", country: "DRC", lat: -4.32, lon: 15.31, size: 0.09 },
    // Southern Africa
    {
      name: "Harare",
      country: "Zimbabwe",
      lat: -17.83,
      lon: 31.05,
      size: 0.07,
    },
    { name: "Lusaka", country: "Zambia", lat: -15.42, lon: 28.29, size: 0.07 },
  ]

  // Convert degrees to radians
  const toRadians = deg => (deg * Math.PI) / 180

  // Convert city coordinates to phi/theta for COBE
  const markers = cities.map(city => ({
    location: [toRadians(city.lat), toRadians(city.lon)],
    size: city.size,
  }))

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    checkDarkMode()

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    let phi = 0
    let width = 0

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: isDark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: isDark ? 2.5 : 6,
      baseColor: isDark ? [0.3, 0.3, 0.3] : [0.95, 0.95, 0.95],
      markerColor: isDark ? [0.87, 0.26, 0.15] : [0.86, 0.15, 0.15], // Red markers
      glowColor: isDark ? [0.2, 0.2, 0.3] : [0.8, 0.9, 1.0],
      markers: markers,
      onRender: state => {
        // Auto-rotation, slowed when interacting
        if (!pointerInteracting.current) {
          phi += 0.003
        }
        state.phi = phi + pointerInteractionMovement.current

        // Keep focus on Africa (slightly rotate to center)
        state.theta = 0.3

        // Update width on window resize
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1"
      }
    }, 100)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
      observer.disconnect()
    }
  }, [isDark])

  return (
    <div className={`globe-container ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={e => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing"
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab"
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab"
          }
        }}
        onMouseMove={e => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
          }
        }}
        onTouchMove={e => {
          if (pointerInteracting.current !== null && e.targetTouches[0]) {
            const delta =
              e.targetTouches[0].clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  )
}

export default Globe
