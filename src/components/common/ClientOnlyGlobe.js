import React, { useState, useEffect } from "react"

/**
 * Client-only wrapper for Globe component
 * Prevents SSR issues with WebGL canvas rendering
 */
const ClientOnlyGlobe = ({ className = "" }) => {
  const [Globe, setGlobe] = useState(null)

  useEffect(() => {
    // Only import and render Globe on client-side
    import("./Globe").then(module => {
      setGlobe(() => module.default)
    })
  }, [])

  if (!Globe) {
    // Placeholder during SSR and initial load
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ minHeight: "400px" }}
      >
        <div className="text-gray-400 dark:text-gray-600 animate-pulse">
          Loading globe...
        </div>
      </div>
    )
  }

  return <Globe className={className} />
}

export default ClientOnlyGlobe
