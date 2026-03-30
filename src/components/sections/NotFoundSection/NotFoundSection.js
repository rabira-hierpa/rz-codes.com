import React, { useState, useEffect, useCallback } from "react"
import { Link } from "gatsby"

const LOCAL_JOKES = [
  `Why do programmers prefer dark mode? Because light attracts bugs.`,
  `There are 10 kinds of people: those who understand binary and those who do not.`,
  `A SQL query walks into a bar, walks up to two tables, and asks: "Can I join you?"`,
  `I would tell you a UDP joke, but you might not get it.`,
  `Git commit -m "fix typo" — the lie I tell myself most often.`,
]

async function fetchDadJoke() {
  const res = await fetch(`https://icanhazdadjoke.com/`, {
    headers: { Accept: `application/json` },
  })
  if (!res.ok) throw new Error(`dad joke`)
  const data = await res.json()
  if (!data?.joke) throw new Error(`dad joke shape`)
  return { text: data.joke, source: `icanhazdadjoke.com` }
}

async function fetchProgrammingJoke() {
  const url = `https://v2.jokeapi.dev/joke/Programming,Misc?safe-mode&type=single`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`jokeapi`)
  const data = await res.json()
  if (data.error) throw new Error(`jokeapi error`)
  if (data.type === `twopart`)
    return { text: `${data.setup} ${data.delivery}`, source: `v2.jokeapi.dev` }
  if (data.joke) return { text: data.joke, source: `v2.jokeapi.dev` }
  throw new Error(`jokeapi shape`)
}

/**
 * Full-width 404 content: brand styling, optional attempted path, random jokes from public APIs.
 */
function NotFoundSection({ attemptedPath }) {
  const [joke, setJoke] = useState(null)
  const [source, setSource] = useState(null)
  const [loading, setLoading] = useState(true)

  const loadJoke = useCallback(async () => {
    setLoading(true)
    try {
      const j = await fetchDadJoke()
      setJoke(j.text)
      setSource(j.source)
    } catch {
      try {
        const j = await fetchProgrammingJoke()
        setJoke(j.text)
        setSource(j.source)
      } catch {
        setJoke(LOCAL_JOKES[Math.floor(Math.random() * LOCAL_JOKES.length)])
        setSource(null)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadJoke()
  }, [loadJoke])

  const showPath =
    attemptedPath &&
    attemptedPath !== `/` &&
    attemptedPath !== `/404/` &&
    attemptedPath !== `/404`

  return (
    <section
      className="relative w-full max-w-3xl mx-auto px-4 py-12 sm:py-20 flex flex-col items-center text-center font-poppins"
      aria-labelledby="not-found-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-25"
        aria-hidden
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(90vw,28rem)] h-[min(90vw,28rem)] rounded-full bg-gradient-to-br from-primary-400/30 via-secondary-400/20 to-transparent blur-3xl" />
      </div>

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
        Error 404
      </p>

      <h1
        id="not-found-heading"
        className="text-5xl sm:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400 bg-clip-text text-transparent"
      >
        Lost link
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-2">
        This URL is not in the bundle. While we figure that out, here is
        something sillier to read.
      </p>

      {showPath ? (
        <p className="mb-10 text-sm font-mono text-gray-500 dark:text-gray-400 break-all max-w-full px-2">
          <span className="text-gray-400 dark:text-gray-500">Tried: </span>
          {attemptedPath}
        </p>
      ) : (
        <div className="mb-10" />
      )}

      <div
        className="w-full max-w-lg rounded-2xl border border-gray-200 dark:border-gray-600 bg-surface-light dark:bg-surface-dark shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] px-6 py-8 sm:px-10 sm:py-10"
        role="status"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary-600 dark:text-secondary-400 mb-3">
          Random joke
        </p>

        {loading ? (
          <div
            className="space-y-3 animate-pulse"
            aria-busy="true"
            aria-label="Loading joke"
          >
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-11/12 mx-auto" />
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/5 mx-auto" />
          </div>
        ) : (
          <blockquote className="text-lg sm:text-xl text-gray-800 dark:text-gray-100 font-medium leading-relaxed">
            <span
              className="text-primary-500 dark:text-primary-400 mr-1"
              aria-hidden
            >
              &ldquo;
            </span>
            {joke}
            <span
              className="text-primary-500 dark:text-primary-400 ml-1"
              aria-hidden
            >
              &rdquo;
            </span>
          </blockquote>
        )}

        {source && !loading ? (
          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
            via {source}
          </p>
        ) : null}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl w-full sm:w-auto"
        >
          Back home
        </Link>
        <button
          type="button"
          onClick={loadJoke}
          disabled={loading}
          className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Another joke
        </button>
      </div>
    </section>
  )
}

export default NotFoundSection
