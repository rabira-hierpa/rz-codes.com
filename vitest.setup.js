import "@testing-library/jest-dom/vitest"
import React from "react"
import { cleanup } from "@testing-library/react"
import { vi } from "vitest"
import { afterEach } from "vitest"
import { beforeEach } from "vitest"
import {
  mockUseLocation,
  mockUseStaticQuery,
  staticQueryData,
} from "./src/test/mocks"

afterEach(() => {
  cleanup()
})

vi.mock("gatsby", () => ({
  graphql: vi.fn(),
  useStaticQuery: (...args) => mockUseStaticQuery(...args),
  Link: ({ children, to, ...props }) =>
    React.createElement("a", { ...props, href: to }, children),
}))

vi.mock("@reach/router", () => ({
  useLocation: () => mockUseLocation(),
}))

vi.mock("framer-motion", () => {
  const motion = new Proxy(
    {},
    {
      get: (_, tag) => {
        const element = typeof tag === "string" ? tag : "div"
        return ({ children, ...props }) =>
          React.createElement(element, props, children)
      },
    }
  )

  return {
    motion,
    AnimatePresence: ({ children }) =>
      React.createElement(React.Fragment, null, children),
  }
})

vi.mock("react-type-animation", () => ({
  TypeAnimation: ({ sequence, ...props }) =>
    React.createElement(
      "span",
      props,
      Array.isArray(sequence) && sequence.length ? sequence[0] : ""
    ),
}))

vi.mock("cobe", () => ({
  default: vi.fn(() => ({
    destroy: vi.fn(),
  })),
}))

beforeEach(() => {
  mockUseStaticQuery.mockReturnValue(staticQueryData)
  mockUseLocation.mockReturnValue({ pathname: "/" })
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation(() => ({
      matches: false,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  )
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => ({
      ok: true,
      json: async () => ({ joke: "Test joke from API" }),
    }))
  )
  vi.stubGlobal(
    "alert",
    vi.fn()
  )
})
