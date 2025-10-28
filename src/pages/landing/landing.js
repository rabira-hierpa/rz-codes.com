import React from "react"
import { Hero } from "../../components/sections/Hero"
import { ExpertiseSection } from "../../components/sections/ExpertiseSection"
import { FeaturedProjectsSection } from "../../components/sections/FeaturedProjectsSection"
import { LatestInsightsSection } from "../../components/sections/LatestInsightsSection"
import { GISProjectsSection } from "../../components/sections/GISProjectsSection"
import { GraphicsDesignsSection } from "../../components/sections/GraphicsDesignsSection"
import "../../styles/global.css"

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
