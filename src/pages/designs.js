import React, { useState, useEffect, useCallback } from "react"
import { Layout } from "../components/layout/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { SEO } from "../components/layout/SEO"
import { DesignsHero } from "../components/sections/DesignsSection/DesignsHero"
import { DesignModal } from "../components/sections/DesignsSection/DesignModal"
import "./designs.css"

const Designs = () => {
  const DesignData = useStaticQuery(graphql`
    query {
      allDesignsJson {
        nodes {
          id
          images
        }
      }
    }
  `)

  const designs = DesignData.allDesignsJson.nodes[0].images
  const [selectedDesign, setSelectedDesign] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Define functions before useEffects to avoid initialization issues
  const openModal = (design, index) => {
    setSelectedDesign(design)
    setSelectedIndex(index)
  }

  const closeModal = useCallback(() => {
    setSelectedDesign(null)
  }, [])

  const navigateNext = useCallback(() => {
    const nextIndex = (selectedIndex + 1) % designs.length
    setSelectedIndex(nextIndex)
    setSelectedDesign(designs[nextIndex])
  }, [selectedIndex, designs])

  const navigatePrevious = useCallback(() => {
    const prevIndex = (selectedIndex - 1 + designs.length) % designs.length
    setSelectedIndex(prevIndex)
    setSelectedDesign(designs[prevIndex])
  }, [selectedIndex, designs])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = e => {
      if (selectedDesign === null) return

      if (e.key === "Escape") {
        closeModal()
      } else if (e.key === "ArrowLeft") {
        navigatePrevious()
      } else if (e.key === "ArrowRight") {
        navigateNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [
    selectedDesign,
    selectedIndex,
    closeModal,
    navigatePrevious,
    navigateNext,
  ])

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedDesign !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedDesign])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this design by Rz Codes",
          text: `Amazing design work by Rabra Hierpa - Design ${selectedIndex + 1}`,
          url: selectedDesign,
        })
      } catch {
        // User cancelled or error occurred
        copyToClipboard()
      }
    } else {
      copyToClipboard()
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedDesign)
    // You could add a toast notification here
    alert("Link copied to clipboard!")
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = selectedDesign
    link.download = `rz-codes-design-${selectedIndex + 1}.jpg`
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Get design category from filename
  const getDesignCategory = url => {
    const filename = url.split("/").pop().toLowerCase()
    if (filename.includes("poster") || filename.includes("movie"))
      return "Posters"
    if (filename.includes("magazine") || filename.includes("mag"))
      return "Magazines"
    if (
      filename.includes("banner") ||
      filename.includes("rollup") ||
      filename.includes("roll-up")
    )
      return "Banners"
    if (filename.includes("flyer")) return "Flyers"
    if (filename.includes("brochure") || filename.includes("tri-fold"))
      return "Brochures"
    if (filename.includes("salon") || filename.includes("beauty"))
      return "Beauty & Fashion"
    return "Other Designs"
  }

  // Group designs by category
  const groupedDesigns = designs.reduce((acc, design, index) => {
    const category = getDesignCategory(design)
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push({ url: design, index })
    return acc
  }, {})

  return (
    <Layout>
      <SEO
        title="Graphic Designs | Portfolio Showcase"
        description="Explore creative graphic design works including posters, banners, flyers, and magazine covers made with Adobe Photoshop and Illustrator"
      />

      <DesignsHero designCount={designs.length} />

      {/* Designs Gallery */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-background-light dark:bg-background-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {Object.entries(groupedDesigns).map(([category, categoryDesigns]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                  {category}
                </h2>
                <span className="px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
                  {categoryDesigns.length} designs
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryDesigns.map(({ url, index }) => (
                  <div
                    key={index}
                    className="design-card group cursor-pointer relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    onClick={() => openModal(url, index)}
                    onKeyDown={e => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        openModal(url, index)
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open design ${index + 1}`}
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={url}
                        alt={`Design ${index + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <p className="text-white font-semibold text-lg mb-2">
                          Design #{index + 1}
                        </p>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-sm hover:bg-white/30 transition-colors">
                            View
                          </button>
                          <button
                            onClick={e => {
                              e.stopPropagation()
                              handleShare()
                            }}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-sm hover:bg-white/30 transition-colors"
                          >
                            Share
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-secondary-600 dark:bg-secondary-500 text-white rounded-full text-xs font-bold shadow-lg">
                      {category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedDesign && (
        <DesignModal
          design={selectedDesign}
          index={selectedIndex}
          total={designs.length}
          onClose={closeModal}
          onNext={navigateNext}
          onPrevious={navigatePrevious}
          onShare={handleShare}
          onDownload={handleDownload}
        />
      )}
    </Layout>
  )
}

export default Designs
