import React from "react"
import { describe, expect, it, vi } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

import Globe from "./common/Globe"
import { ContactForm } from "./sections/AboutSection/ContactForm"
import { DesignModal } from "./sections/DesignsSection/DesignModal"
import { GISProjectCard } from "./sections/GISProjectsSection/GISProjectCard"
import { GraphicsDesignsSection } from "./sections/GraphicsDesignsSection/GraphicsDesignsSection"
import Hero from "./sections/Hero/Hero"
import NotFoundSection from "./sections/NotFoundSection/NotFoundSection"

describe("component branch coverage", () => {
  it("handles globe pointer and touch interactions", () => {
    render(<Globe />)
    const canvas = document.querySelector("canvas")
    expect(canvas).toBeInTheDocument()

    fireEvent.pointerDown(canvas, { clientX: 10 })
    fireEvent.mouseMove(canvas, { clientX: 30 })
    fireEvent.touchMove(canvas, { targetTouches: [{ clientX: 40 }] })
    fireEvent.pointerUp(canvas)
    fireEvent.pointerOut(canvas)
  })

  it("handles contact form error state", async () => {
    global.fetch = vi.fn(async () => ({
      ok: false,
      json: async () => ({}),
    }))

    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText("Your Name *"), {
      target: { value: "Tester" },
    })
    fireEvent.change(screen.getByLabelText("Your Email *"), {
      target: { value: "tester@example.com" },
    })
    fireEvent.change(screen.getByLabelText("Subject *"), {
      target: { value: "Error path" },
    })
    fireEvent.change(screen.getByLabelText("Message *"), {
      target: { value: "Please fail" },
    })

    fireEvent.click(screen.getByRole("button", { name: "Send Message" }))
    await waitFor(() => {
      expect(
        screen.getByText(
          "Oops! Something went wrong. Please try again or email me directly at rzcodesbiz@gmail.com"
        )
      ).toBeInTheDocument()
    })
  })

  it("handles design modal keyboard and image load events", () => {
    const onClose = vi.fn()
    const onNext = vi.fn()
    const onPrevious = vi.fn()
    const onShare = vi.fn()
    const onDownload = vi.fn()

    render(
      <DesignModal
        design="https://example.com/design.jpg"
        index={0}
        total={5}
        onClose={onClose}
        onNext={onNext}
        onPrevious={onPrevious}
        onShare={onShare}
        onDownload={onDownload}
      />
    )

    fireEvent.keyDown(screen.getByLabelText("Close modal overlay"), {
      key: "Enter",
    })
    fireEvent.mouseEnter(document.querySelector(".design-modal-container"))
    fireEvent.mouseLeave(document.querySelector(".design-modal-container"))
    fireEvent.click(screen.getByLabelText("Next design"))
    fireEvent.click(screen.getByLabelText("Previous design"))
    fireEvent.load(screen.getByAltText("Design 1"))

    expect(onClose).toHaveBeenCalled()
    expect(onNext).toHaveBeenCalled()
    expect(onPrevious).toHaveBeenCalled()
  })

  it("handles graphics modal share, download, and keyboard controls", async () => {
    const writeText = vi.fn()
    Object.defineProperty(window.navigator, "share", {
      configurable: true,
      value: undefined,
    })
    Object.defineProperty(window.navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    })

    render(<GraphicsDesignsSection />)
    fireEvent.click(screen.getByRole("button", { name: "View design work 1" }))
    fireEvent.click(screen.getByText("Share"))
    fireEvent.click(screen.getByText("Download"))
    fireEvent.keyDown(window, { key: "ArrowRight" })
    fireEvent.keyDown(window, { key: "ArrowLeft" })
    fireEvent.keyDown(window, { key: "Escape" })

    expect(writeText).toHaveBeenCalled()
    await waitFor(() => {
      expect(screen.queryByLabelText("Close modal")).not.toBeInTheDocument()
    })
  })

  it("handles not found joke API fallback paths", async () => {
    global.fetch = vi
      .fn()
      .mockResolvedValueOnce({ ok: false, json: async () => ({}) })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          error: false,
          type: "single",
          joke: "Programming fallback joke",
        }),
      })

    render(<NotFoundSection attemptedPath="/missing-api" />)
    await waitFor(() => {
      expect(screen.getByText("Programming fallback joke")).toBeInTheDocument()
    })
  })

  it("handles not found local joke fallback", async () => {
    const randomSpy = vi.spyOn(Math, "random").mockReturnValue(0)
    global.fetch = vi.fn(async () => ({
      ok: false,
      json: async () => ({}),
    }))

    render(<NotFoundSection attemptedPath="/missing-local" />)
    await waitFor(() => {
      expect(
        screen.getByText(
          "Why do programmers prefer dark mode? Because light attracts bugs."
        )
      ).toBeInTheDocument()
    })
    randomSpy.mockRestore()
  })

  it("switches hero panels and renders panel-specific content", () => {
    render(<Hero />)
    fireEvent.click(screen.getByLabelText("Go to Full Stack Developer"))
    expect(screen.getByText("15+ Apps")).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText("Go to Graphic Designer"))
    expect(screen.getByText("50+ Designs")).toBeInTheDocument()
  })

  it("handles GIS card quick action clicks", () => {
    render(
      <GISProjectCard
        title="Card"
        description="GIS project"
        img="https://example.com/map.png"
        url="https://example.com/map"
        data="https://example.com/data.csv"
        tags={["GIS", "Map", "Transit", "Urban"]}
        index={0}
      />
    )

    fireEvent.click(screen.getByText("View Map"))
    fireEvent.click(screen.getByLabelText("Download data for Card"))
  })
})
