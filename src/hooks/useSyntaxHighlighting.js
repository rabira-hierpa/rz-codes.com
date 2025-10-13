import { useEffect } from "react"
import Prism from "prismjs"
// Import Prism CSS theme (dark theme)
import "prismjs/themes/prism-tomorrow.css"
// Import common language support
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-css"
import "prismjs/components/prism-scss"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-json"
import "prismjs/components/prism-markdown"
import "prismjs/components/prism-python"
import "prismjs/components/prism-java"
import "prismjs/components/prism-c"
import "prismjs/components/prism-cpp"
import "prismjs/components/prism-csharp"
import "prismjs/components/prism-php"
import "prismjs/components/prism-ruby"
import "prismjs/components/prism-go"
import "prismjs/components/prism-rust"
import "prismjs/components/prism-sql"
import "prismjs/components/prism-yaml"
import "prismjs/components/prism-docker"
import "prismjs/components/prism-git"

const useSyntaxHighlighting = () => {
  useEffect(() => {
    // Highlight all code blocks
    Prism.highlightAll()

    // Add copy buttons to all pre elements
    const preElements = document.querySelectorAll("pre[class*='language-']")

    preElements.forEach(pre => {
      // Skip if copy button already exists
      if (pre.querySelector(".copy-button")) return

      // Create copy button
      const button = document.createElement("button")
      button.className = "copy-button"
      button.innerHTML = `
        <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span class="copy-text">Copy</span>
      `
      button.setAttribute("aria-label", "Copy code to clipboard")

      // Copy functionality
      button.addEventListener("click", async () => {
        const code = pre.querySelector("code")
        if (!code) return

        try {
          await navigator.clipboard.writeText(code.textContent)

          // Update button to show success
          button.innerHTML = `
            <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="copy-text">Copied!</span>
          `
          button.classList.add("copied")

          // Reset button after 2 seconds
          setTimeout(() => {
            button.innerHTML = `
              <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span class="copy-text">Copy</span>
            `
            button.classList.remove("copied")
          }, 2000)
        } catch (err) {
          console.error("Failed to copy code:", err)
        }
      })

      // Create wrapper for positioning
      const wrapper = document.createElement("div")
      wrapper.className = "code-block-wrapper"
      pre.parentNode.insertBefore(wrapper, pre)
      wrapper.appendChild(pre)
      wrapper.appendChild(button)
    })
  }, [])
}

export default useSyntaxHighlighting
