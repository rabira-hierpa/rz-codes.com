import React from "react"
import { Hero } from "../Hero"
import { ExpertiseSection } from "../ExpertiseSection"
import { FeaturedProjectsSection } from "../FeaturedProjectsSection"
import { LatestInsightsSection } from "../LatestInsightsSection"
import { GISProjectsSection } from "../GISProjectsSection"
import { GraphicsDesignsSection } from "../GraphicsDesignsSection"
import "../../../styles/global.css"

const landing = () => {
  return (
    <div>
      <Hero />
      <ExpertiseSection />
      <FeaturedProjectsSection />
      <LatestInsightsSection />
      <GISProjectsSection />
      <GraphicsDesignsSection />
    </div>
  )
}

export default landing
