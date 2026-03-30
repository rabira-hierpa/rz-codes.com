import * as React from "react"

import { Layout } from "../components/layout/Layout"
import { SEO } from "../components/layout/SEO"
import { NotFoundSection } from "../components/sections/NotFoundSection"

const NotFoundPage = ({ location }) => {
  const pathname = location?.pathname ?? ``

  return (
    <Layout>
      <SEO
        title="Page not found"
        pathname={pathname || undefined}
        description="The page you are looking for does not exist or has been moved."
        noindex
      />
      <NotFoundSection attemptedPath={pathname} />
    </Layout>
  )
}

export default NotFoundPage
