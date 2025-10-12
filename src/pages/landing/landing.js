import React from "react"
import { Hero } from "../../components/sections/Hero"
import { ExpertiseSection } from "../../components/sections/ExpertiseSection"
import { FeaturedProjectsSection } from "../../components/sections/FeaturedProjectsSection"
import { LatestInsightsSection } from "../../components/sections/LatestInsightsSection"
import { DesignsSection } from "../../components/sections/DesignsSection"
import { ProjectsSection } from "../../components/sections/ProjectsSection"
import "../../styles/global.css"

const landing = () => {
  return (
    <div>
      <Hero />
      <ExpertiseSection />
      <FeaturedProjectsSection />
      <LatestInsightsSection />
      <ProjectsSection />
      <DesignsSection />
    </div>
  )
}

export default landing
