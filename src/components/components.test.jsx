import React from "react"
import { describe, expect, it, vi } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

import ClientOnlyGlobe from "./common/ClientOnlyGlobe"
import Globe from "./common/Globe"
import { Footer } from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import Layout from "./layout/Layout/Layout"
import SEO from "./layout/SEO/SEO"
import { AboutHero } from "./sections/AboutSection/AboutHero"
import { AboutStory } from "./sections/AboutSection/AboutStory"
import { CompanyShowcase } from "./sections/AboutSection/CompanyShowcase"
import { ContactForm } from "./sections/AboutSection/ContactForm"
import { WorkExperience } from "./sections/AboutSection/WorkExperience"
import { AppCard } from "./sections/AppsSection/AppCard"
import AppsCard from "./sections/AppsSection/AppsCard"
import { AppsHero } from "./sections/AppsSection/AppsHero"
import AppsHome from "./sections/AppsSection/AppsHome"
import AppsSection from "./sections/AppsSection/AppsSection"
import { DesignModal } from "./sections/DesignsSection/DesignModal"
import { DesignsHero } from "./sections/DesignsSection/DesignsHero"
import { ExpertiseCard } from "./sections/ExpertiseSection/ExpertiseCard"
import { ExpertiseSection } from "./sections/ExpertiseSection/ExpertiseSection"
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection/FeaturedProjectsSection"
import { ProjectCard } from "./sections/FeaturedProjectsSection/ProjectCard"
import { GISProjectCard } from "./sections/GISProjectsSection/GISProjectCard"
import { GISProjectsSection } from "./sections/GISProjectsSection/GISProjectsSection"
import { DesignCard } from "./sections/GraphicsDesignsSection/DesignCard"
import { GraphicsDesignsSection } from "./sections/GraphicsDesignsSection/GraphicsDesignsSection"
import Hero from "./sections/Hero/Hero"
import { InsightCard } from "./sections/LatestInsightsSection/InsightCard"
import { LatestInsightsSection } from "./sections/LatestInsightsSection/LatestInsightsSection"
import NotFoundSection from "./sections/NotFoundSection/NotFoundSection"
import { AllGISProjects } from "./sections/ProjectsPageSection/AllGISProjects"
import { FeaturedGISProjects } from "./sections/ProjectsPageSection/FeaturedGISProjects"
import { ProjectsHero } from "./sections/ProjectsPageSection/ProjectsHero"
import ComingSoon from "./ui/ComingSoon/ComingSoon"
import ThemeToggle from "./ui/ThemeToggle/ThemeToggle"
import { ThemeProvider } from "../context/ThemeContext"
import { mockUseLocation } from "../test/mocks"

const icon = <span aria-label="icon">★</span>

const companies = [
  {
    id: "c1",
    name: "Excellerent Solutions",
    logo: "https://example.com/logo1.png",
    url: "https://example.com/company1",
  },
  {
    id: "c2",
    name: "Unknown Org",
    logo: "https://example.com/logo2.png",
  },
]

const allProjects = [
  {
    id: "gp1",
    title: "Mobility Analysis",
    description: "Project details",
    img: "https://example.com/gp1.png",
    url: "https://example.com/map",
    data: "https://example.com/data.csv",
    tags: ["Transit", "GIS"],
  },
  {
    id: "gp2",
    title: "Schools Map",
    description: "Schools",
    img: "https://example.com/gp2.png",
    url: "https://example.com/map2",
    data: null,
    tags: ["Education"],
  },
]

describe("components smoke and behavior coverage", () => {
  it("renders globe components", async () => {
    render(<Globe className="test-globe" />)
    expect(document.querySelector("canvas")).toBeInTheDocument()

    render(<ClientOnlyGlobe />)
    expect(screen.getByText("Loading globe...")).toBeInTheDocument()
    await waitFor(() => {
      expect(document.querySelector("canvas")).toBeInTheDocument()
    })
  })

  it("renders layout components", () => {
    mockUseLocation.mockReturnValue({ pathname: "/projects/list" })
    render(<Header />)
    expect(screen.getByRole("link", { name: "Projects" })).toHaveClass(
      "text-secondary-600"
    )

    render(<Footer />)
    expect(screen.getByText("Connect With Me")).toBeInTheDocument()

    render(
      <ThemeProvider>
        <Layout>{<div>Layout Child</div>}</Layout>
      </ThemeProvider>
    )
    expect(screen.getByText("Layout Child")).toBeInTheDocument()
  })

  it("renders and builds SEO metadata", async () => {
    render(
      <SEO
        title="SEO Page"
        description="<p>Meta description</p>"
        pathname="/seo-page"
        image="/seo-image.png"
        type="article"
        publishedTime="2026-01-01"
        modifiedTime="2026-01-02"
        authorName="Author"
        keywords={["react", "gatsby"]}
        articleSection="Engineering"
      />
    )
    await waitFor(() => {
      expect(document.title).toContain("SEO Page")
    })
    expect(document.head.innerHTML).toContain("application/ld+json")
  })

  it("renders about section components", async () => {
    render(<AboutHero />)
    expect(screen.getByText("About Me")).toBeInTheDocument()

    render(<AboutStory />)
    expect(screen.getByText("My Story")).toBeInTheDocument()

    render(<CompanyShowcase companies={companies} />)
    expect(screen.getByText("Trusted By Leading Organizations")).toBeInTheDocument()

    render(<WorkExperience />)
    expect(screen.getByText("Professional Journey")).toBeInTheDocument()

    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText("Your Name *"), {
      target: { value: "Tester" },
    })
    fireEvent.change(screen.getByLabelText("Your Email *"), {
      target: { value: "tester@example.com" },
    })
    fireEvent.change(screen.getByLabelText("Subject *"), {
      target: { value: "Hello" },
    })
    fireEvent.change(screen.getByLabelText("Message *"), {
      target: { value: "Hi there" },
    })
    fireEvent.click(screen.getByRole("button", { name: "Send Message" }))
    await waitFor(() => {
      expect(
        screen.getByText("Thank you for reaching out! I'll get back to you soon. 🚀")
      ).toBeInTheDocument()
    })
  })

  it("renders apps section components", () => {
    render(
      <AppCard
        title="App"
        description={"A".repeat(200)}
        image="https://example.com/app.png"
        demo="https://example.com/demo"
        link="https://github.com/example/app"
        tags={["React", "Mapbox", "Archived", "API", "Node", "GraphQL"]}
        appType="location"
        icon={icon}
        index={2}
        discontinued
      />
    )
    expect(screen.getByText("Archived")).toBeInTheDocument()
    expect(screen.getByText("+1")).toBeInTheDocument()

    render(
      <AppsCard
        apps={{
          image: "https://example.com/a.png",
          title: "Card App",
          description: "Card desc",
          discontinued: true,
        }}
      />
    )
    expect(screen.getByText("View details")).toBeInTheDocument()

    render(<AppsHero stats={{ total: 15, location: 6, web: 9, technologies: 20 }} />)
    expect(screen.getByText("Portfolio Showcase")).toBeInTheDocument()

    render(<AppsHome />)
    expect(screen.getAllByText("View Demo").length).toBeGreaterThan(0)

    render(<AppsSection />)
    expect(screen.getByText("Web/Mobile Apps")).toBeInTheDocument()
  })

  it("renders design and graphics components", async () => {
    const onClose = vi.fn()
    const onNext = vi.fn()
    const onPrevious = vi.fn()
    const onShare = vi.fn()
    const onDownload = vi.fn()
    const onHover = vi.fn()
    const onLeave = vi.fn()
    const onClick = vi.fn()

    render(<DesignsHero designCount={56} />)
    expect(screen.getByText("Creative Portfolio")).toBeInTheDocument()

    render(
      <DesignCard
        imageUrl="https://example.com/design.jpg"
        index={0}
        isHovered={false}
        onHover={onHover}
        onLeave={onLeave}
        onClick={onClick}
      />
    )
    fireEvent.mouseEnter(screen.getByRole("button", { name: "View design work 1" }))
    fireEvent.keyDown(screen.getByRole("button", { name: "View design work 1" }), {
      key: "Enter",
    })
    expect(onHover).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalled()

    render(
      <DesignModal
        design="https://example.com/design-1.jpg"
        index={0}
        total={7}
        onClose={onClose}
        onNext={onNext}
        onPrevious={onPrevious}
        onShare={onShare}
        onDownload={onDownload}
      />
    )
    fireEvent.click(screen.getByLabelText("Next design"))
    fireEvent.click(screen.getByLabelText("Previous design"))
    fireEvent.click(screen.getByText("Share"))
    fireEvent.click(screen.getByText("Download"))
    expect(onNext).toHaveBeenCalled()
    expect(onPrevious).toHaveBeenCalled()
    expect(onShare).toHaveBeenCalled()
    expect(onDownload).toHaveBeenCalled()

    render(<GraphicsDesignsSection />)
    expect(screen.getByText("Graphics Design")).toBeInTheDocument()
    fireEvent.click(screen.getAllByRole("button", { name: "View design work 1" })[1])
    expect(screen.getAllByLabelText("Close modal").length).toBeGreaterThan(0)
  })

  it("renders expertise, projects, and insights components", () => {
    render(
      <ExpertiseCard
        icon={icon}
        title="Expertise"
        description="Description"
        color="text-primary-600"
      />
    )
    expect(screen.getByText("Expertise")).toBeInTheDocument()

    render(<ExpertiseSection />)
    expect(screen.getByText("My Expertise")).toBeInTheDocument()

    render(<FeaturedProjectsSection />)
    expect(screen.getByText("Featured Projects")).toBeInTheDocument()

    render(
      <ProjectCard
        title="Project Card"
        description={"P".repeat(170)}
        image="https://example.com/project.png"
        tags={["React", "Node", "Archived"]}
        type="web"
        icon={icon}
        index={1}
        discontinued
      />
    )
    expect(screen.getAllByText("Archived").length).toBeGreaterThan(0)

    render(
      <GISProjectCard
        title="GIS Card"
        description={"G".repeat(140)}
        img="https://example.com/gis.png"
        url="https://example.com/map"
        data="https://example.com/data.csv"
        tags={["GIS", "Transit", "Urban", "OpenData"]}
        index={1}
      />
    )
    expect(screen.getByLabelText("Download data for GIS Card")).toBeInTheDocument()

    render(<GISProjectsSection />)
    expect(screen.getByText("GIS Mapping Projects")).toBeInTheDocument()

    render(
      <InsightCard
        title="Insight"
        excerpt="<p>Insight excerpt with content</p>"
        uri="/blog/insight"
        date="January 01, 2026"
        tags={{ nodes: [{ name: "Web Dev" }] }}
        featuredImage={{ node: { sourceUrl: "", altText: "" } }}
      />
    )
    expect(screen.getByText("Web Dev")).toBeInTheDocument()

    render(<LatestInsightsSection />)
    expect(screen.getByText("Latest Insights")).toBeInTheDocument()
  })

  it("renders not found, hero, projects page, and UI components", async () => {
    render(<Hero />)
    expect(screen.getByText("Rabra Hierpa")).toBeInTheDocument()

    render(<NotFoundSection attemptedPath="/missing-page" />)
    await waitFor(() => {
      expect(screen.getByText("Test joke from API")).toBeInTheDocument()
    })
    fireEvent.click(screen.getByRole("button", { name: "Another joke" }))

    render(<AllGISProjects projects={allProjects} />)
    fireEvent.click(screen.getByRole("button", { name: "Transit (1)" }))
    expect(screen.getByText("Mobility Analysis")).toBeInTheDocument()

    render(<FeaturedGISProjects />)
    expect(
      screen.getByRole("heading", { name: /featured\s+gis projects/i })
    ).toBeInTheDocument()

    render(<ProjectsHero />)
    expect(screen.getByText("GIS Portfolio")).toBeInTheDocument()

    render(<ComingSoon />)
    expect(screen.getByText("Coming Soon!")).toBeInTheDocument()
  })

  it("renders theme toggle inside provider", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole("button", { name: "Toggle theme" })
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
