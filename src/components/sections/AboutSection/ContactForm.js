import React, { useState } from "react"
import "./ContactForm.css"

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: false, message: "" })

    try {
      // Using Formspree for form submission
      const response = await fetch("https://formspree.io/f/xanyzbzw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      })

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: "Thank you for reaching out! I'll get back to you soon. 🚀",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({
            submitting: false,
            submitted: false,
            error: false,
            message: "",
          })
        }, 5000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (err) {
      console.error("Form submission error:", err)
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message:
          "Oops! Something went wrong. Please try again or email me directly at rzcodesbiz@gmail.com",
      })
    }
  }

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light dark:text-text-dark">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Looking for a collaborator? Or just want to
            say hi? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:rzcodesbiz@gmail.com"
            className="flex flex-col items-center p-6 bg-white dark:bg-surface-dark rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">
              Email
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              rzcodesbiz@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/rabira"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center p-6 bg-white dark:bg-surface-dark rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">
              LinkedIn
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              @rabira
            </p>
          </a>

          <a
            href="https://github.com/rabira-hierpa"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center p-6 bg-white dark:bg-surface-dark rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
          >
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">
              GitHub
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              @rabira-hierpa
            </p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center ${
                status.submitting ? "animate-pulse" : ""
              }`}
            >
              {status.submitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {status.submitted && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-center animate-fade-in">
                {status.message}
              </div>
            )}

            {status.error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-center animate-fade-in">
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
