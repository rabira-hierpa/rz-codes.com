import React, { useState } from "react"
import "./DesignModal.css"

export const DesignModal = ({
  design,
  index,
  total,
  onClose,
  onNext,
  onPrevious,
  onShare,
  onDownload,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="design-modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          onClose()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Close modal overlay"
    >
      <div
        className="design-modal-container relative w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={e => e.stopPropagation()}
        onKeyDown={e => e.stopPropagation()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="presentation"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-full font-semibold">
          {index + 1} / {total}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={onPrevious}
          className={`absolute left-4 z-10 p-4 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110 transform ${
            isHovered
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
          aria-label="Previous design"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={onNext}
          className={`absolute right-4 z-10 p-4 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110 transform ${
            isHovered ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
          aria-label="Next design"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Image Container */}
        <div className="relative max-w-7xl max-h-full flex items-center justify-center">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
          <img
            src={design}
            alt={`Design ${index + 1}`}
            className={`max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={onShare}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Share
          </button>

          <button
            onClick={onDownload}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </button>
        </div>

        {/* Keyboard shortcuts hint */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 text-sm flex gap-6">
          <span className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">←</kbd>{" "}
            Previous
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">→</kbd> Next
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd>{" "}
            Close
          </span>
        </div>
      </div>
    </div>
  )
}
