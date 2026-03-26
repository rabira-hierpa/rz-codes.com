import * as React from "react"

import { Layout } from "../components/layout/Layout"
import { SEO } from "../components/layout/SEO"

const NotFoundPage = ({ location }) => (
  <Layout>
    <SEO
      title="Page not found"
      pathname={location.pathname}
      description="The page you are looking for does not exist or has been moved."
      noindex
    />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
