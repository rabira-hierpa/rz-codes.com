# Landing Page Sections

This directory contains reusable section components for the landing page. Each section follows SOLID principles and clean code architecture.

## 📁 Directory Structure

```
sections/
├── AppsSection/          # Web/Mobile apps showcase
├── DesignsSection/       # Graphics designs gallery
├── ExpertiseSection/     # Professional expertise cards
├── FeaturedProjectsSection/  # Featured projects showcase
├── Hero/                 # Hero section with animation
├── LatestInsightsSection/    # Blog posts preview
└── ProjectsSection/      # GIS projects showcase
```

## 🎨 New Sections

### ExpertiseSection
**Purpose**: Displays professional expertise areas with icons and descriptions.

**Features**:
- ✅ Two expertise cards (GIS Development & Web Development)
- ✅ SVG icons (Heroicons-inspired)
- ✅ Responsive grid layout
- ✅ Theme-aware colors
- ✅ Hover animations

**Components**:
- `ExpertiseSection.js` - Main container
- `ExpertiseCard.js` - Individual expertise card
- `index.js` - Barrel export

**Props** (`ExpertiseCard`):
- `icon` (ReactNode) - SVG icon component
- `title` (string) - Expertise title
- `description` (string) - Detailed description
- `color` (string) - Tailwind color class for icon

---

### FeaturedProjectsSection
**Purpose**: Showcases a curated selection of featured projects from apps and GIS projects.

**Features**:
- ✅ GraphQL data fetching from `apps.json` and `projects.json`
- ✅ 3-column responsive grid
- ✅ Project type badges (GIS/Web)
- ✅ Featured images with lazy loading
- ✅ Technology tags
- ✅ Truncated descriptions (150 chars)

**Components**:
- `FeaturedProjectsSection.js` - Main container with GraphQL query
- `ProjectCard.js` - Individual project card
- `index.js` - Barrel export

**GraphQL Query**:
```graphql
query FeaturedProjectsQuery {
  appsData: allAppsJson(limit: 2) {
    nodes {
      title
      description
      image
      demo
      link
      tags
    }
  }
  projectsData: allProjectsJson(limit: 1) {
    nodes {
      title
      description
      img
      url
      tags
    }
  }
}
```

**Props** (`ProjectCard`):
- `title` (string) - Project title
- `description` (string) - Project description
- `image` (string) - Thumbnail image URL
- `tags` (string[]) - Technology tags
- `type` ("gis" | "web") - Project type
- `icon` (ReactNode) - Type icon component

---

### LatestInsightsSection
**Purpose**: Displays the latest blog posts from WordPress.

**Features**:
- ✅ GraphQL data fetching from WordPress
- ✅ 3 most recent posts
- ✅ Featured images with placeholder fallback
- ✅ Category badges (color-coded)
- ✅ Clean excerpt extraction (HTML stripped)
- ✅ "View All Posts" CTA button
- ✅ Date formatting

**Components**:
- `LatestInsightsSection.js` - Main container with GraphQL query
- `InsightCard.js` - Individual blog post card
- `index.js` - Barrel export

**GraphQL Query**:
```graphql
query LatestInsightsQuery {
  allWpPost(sort: { date: DESC }, limit: 3) {
    nodes {
      id
      title
      excerpt
      uri
      date(formatString: "MMMM DD, YYYY")
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
}
```

**Props** (`InsightCard`):
- `title` (string) - Post title
- `excerpt` (string) - Post excerpt (HTML)
- `uri` (string) - Post URI/slug
- `date` (string) - Formatted post date
- `tags` (object) - Post tags object
- `featuredImage` (object) - Featured image object

**Category Colors**:
- GIS: Yellow
- Web Dev: Red (Primary)
- Database: Red
- Default: Yellow (Secondary)

---

## 🎯 SOLID Principles Applied

### Single Responsibility Principle (SRP)
- Each component has one clear purpose
- Separate files for main containers and individual cards
- GraphQL queries are colocated with their components

### Open/Closed Principle (OCP)
- Components are extensible through props
- New sections can be added without modifying existing code
- Data structure changes don't affect component logic

### Liskov Substitution Principle (LSP)
- All card components follow similar interfaces
- Components can be composed and replaced easily

### Interface Segregation Principle (ISP)
- Clean, minimal prop interfaces
- No forced dependencies on unused props
- PropTypes validation for type safety

### Dependency Inversion Principle (DIP)
- Components depend on abstractions (props)
- No direct dependencies on data sources
- GraphQL queries abstracted behind hooks

---

## 🎨 Design Patterns

### Component Composition
```javascript
<ExpertiseSection>
  <ExpertiseCard />
  <ExpertiseCard />
</ExpertiseSection>
```

### Data Fetching Pattern
```javascript
const data = useStaticQuery(graphql`...`)
// Transform and render
```

### Barrel Exports
```javascript
export { SectionContainer } from "./SectionContainer"
export { CardComponent } from "./CardComponent"
```

---

## 🚀 Usage

### Adding Sections to Landing Page

```javascript
import { ExpertiseSection } from "../../components/sections/ExpertiseSection"
import { FeaturedProjectsSection } from "../../components/sections/FeaturedProjectsSection"
import { LatestInsightsSection } from "../../components/sections/LatestInsightsSection"

const Landing = () => {
  return (
    <div>
      <Hero />
      <ExpertiseSection />
      <FeaturedProjectsSection />
      <LatestInsightsSection />
      {/* Other sections */}
    </div>
  )
}
```

---

## 🎨 Styling

All sections use:
- **Tailwind CSS** for utility-first styling
- **Theme-aware colors** via custom color palette
- **Responsive design** (mobile-first approach)
- **Smooth transitions** and hover effects

### Theme Colors
- `primary-*` - Red shades (600 for light, 400 for dark)
- `secondary-*` - Yellow shades (400 for light, 300 for dark)
- `background-light/dark` - Page backgrounds
- `surface-light/dark` - Card backgrounds
- `text-light/dark` - Text colors

---

## 📦 Dependencies

- **React** - Component library
- **Gatsby** - Static site generator
- **GraphQL** - Data fetching
- **PropTypes** - Runtime type checking
- **Tailwind CSS** - Styling

---

## 🔧 Configuration

Ensure `gatsby-config.js` includes:
```javascript
{
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/src/data/`,
  },
},
`gatsby-transformer-json`,
```

---

## 🧪 Testing Checklist

- [ ] Sections render without errors
- [ ] GraphQL queries return data
- [ ] Responsive design works on all breakpoints
- [ ] Theme toggle updates colors correctly
- [ ] Images load with lazy loading
- [ ] Links navigate correctly
- [ ] Hover effects are smooth
- [ ] PropTypes validation works

---

## 📝 Notes

- Free SVG icons (Heroicons-inspired) for zero licensing concerns
- All images use lazy loading for performance
- Text truncation ensures consistent card heights
- Placeholder images for missing featured images
- All sections follow the established color theme

