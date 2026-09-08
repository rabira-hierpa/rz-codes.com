import React from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"

const mockUseLocation = vi.fn()

vi.mock("@reach/router", () => ({
  useLocation: () => mockUseLocation(),
}))

import Header from "./Header"

describe("Header", () => {
  beforeEach(() => {
    mockUseLocation.mockReset()
    mockUseLocation.mockReturnValue({ pathname: "/" })
  })

  it("renders logo and menu links", () => {
    render(React.createElement(Header))

    expect(screen.getByAltText("Rz Codes Logo")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/projects"
    )
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "href",
      "https://blog.rz-codes.com"
    )
  })

  it("highlights the active menu item", () => {
    mockUseLocation.mockReturnValue({ pathname: "/projects/details" })
    render(React.createElement(Header))

    expect(screen.getByRole("link", { name: "Projects" })).toHaveClass(
      "text-secondary-600"
    )
    expect(screen.getByRole("link", { name: "About" })).toHaveClass(
      "text-primary-600"
    )
  })
})
