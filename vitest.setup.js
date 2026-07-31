import "@testing-library/jest-dom/vitest"
import React from "react"
import { cleanup } from "@testing-library/react"
import { vi } from "vitest"
import { afterEach } from "vitest"

afterEach(() => {
  cleanup()
})

vi.mock("gatsby", () => ({
  Link: ({ children, to, ...props }) =>
    React.createElement("a", { ...props, href: to }, children),
}))
