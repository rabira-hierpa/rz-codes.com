# Proposed Folder Structure

## Overview

This document outlines an industry-standard folder structure for better organization and open-source collaboration.

## Proposed Structure

```
src/
├── assets/                    # Static assets
│   ├── images/               # Images, logos, icons
│   ├── fonts/                # Custom fonts
│   └── icons/                # SVG icons
│
├── components/               # Reusable UI components
│   ├── common/              # Common/shared components
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   ├── Button.test.js
│   │   │   └── index.js
│   │   ├── Card/
│   │   └── Link/
│   │
│   ├── layout/              # Layout components
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   ├── Header.test.js
│   │   │   └── index.js
│   │   ├── Footer/
│   │   ├── Layout/
│   │   └── SEO/
│   │
│   ├── sections/            # Page section components
│   │   ├── Hero/
│   │   ├── AppsSection/
│   │   ├── ProjectsSection/
│   │   └── DesignsSection/
│   │
│   └── ui/                  # UI-specific components
│       ├── ThemeToggle/
│       ├── ComingSoon/
│       └── Modal/
│
├── config/                   # Configuration files
│   ├── theme.js             # Theme configuration
│   ├── constants.js         # App constants
│   └── site.js              # Site metadata
│
├── context/                  # React Context providers
│   ├── ThemeContext/
│   │   ├── ThemeContext.js
│   │   ├── ThemeProvider.js
│   │   └── index.js
│   └── index.js             # Export all contexts
│
├── data/                     # Static data files
│   ├── about.json
│   ├── apps.json
│   ├── projects.json
│   ├── designs.json
│   └── blog/
│
├── hooks/                    # Custom React hooks
│   ├── useTheme.js
│   ├── useLocalStorage.js
│   └── index.js
│
├── lib/                      # Utility libraries
│   ├── analytics.js
│   ├── helpers.js
│   └── validators.js
│
├── pages/                    # Gatsby page components (routes)
│   ├── index.js             # Home page
│   ├── about.js
│   ├── blog.js
│   ├── projects.js
│   ├── apps.js
│   ├── designs.js
│   ├── my-journey.js
│   └── 404.js
│
├── styles/                   # Global styles
│   ├── global.css
│   ├── variables.css
│   └── typography.css
│
├── templates/                # Gatsby templates
│   ├── BlogPost/
│   │   ├── BlogPost.js
│   │   └── index.js
│   └── BlogArchive/
│
├── types/                    # TypeScript types (if using TS)
│   └── index.d.ts
│
└── utils/                    # Utility functions
    ├── formatters.js
    ├── validators.js
    └── index.js
```

## Current vs Proposed Structure Mapping

### Components to Move/Reorganize

**Layout Components:**

- `src/components/header.js` → `src/components/layout/Header/Header.js`
- `src/components/footer.js` → `src/components/layout/Footer/Footer.js`
- `src/components/layout.js` → `src/components/layout/Layout/Layout.js`
- `src/components/seo.js` → `src/components/layout/SEO/SEO.js`
- `src/components/theme-toggle.js` → `src/components/ui/ThemeToggle/ThemeToggle.js`

**Section Components (from pages/landing):**

- `src/pages/landing/hero.js` → `src/components/sections/Hero/Hero.js`
- `src/pages/landing/apps-card.js` → `src/components/sections/AppsSection/AppsCard.js`
- `src/pages/landing/landing-apps.js` → `src/components/sections/AppsSection/AppsSection.js`
- `src/pages/landing/landing-projects.js` → `src/components/sections/ProjectsSection/ProjectsSection.js`
- `src/pages/landing/landing-designs.js` → `src/components/sections/DesignsSection/DesignsSection.js`

**Page Components:**

- `src/pages/apps/apps-home.js` → `src/components/sections/AppsSection/AppsHome.js`

**Context:**

- `src/context/theme-context.js` → `src/context/ThemeContext/ThemeContext.js`

**Utils:**

- `src/utils/coming-soon.js` → `src/components/ui/ComingSoon/ComingSoon.js`
- `src/utils/stop-propagation.js` → `src/utils/dom.js` (or remove if not used)

**Assets:**

- `src/images/` → `src/assets/images/`

## Benefits of This Structure

### 1. **Component Co-location**

Each component has its own folder with:

- Component file
- Test file
- Styles (if needed)
- Index file for clean imports

### 2. **Clear Separation of Concerns**

- **components/**: Pure UI components
- **pages/**: Gatsby pages (routes only)
- **templates/**: Gatsby templates
- **sections/**: Larger page sections
- **layout/**: Layout-specific components

### 3. **Better for Open Source**

- Easy to navigate
- Clear where to add new files
- Follows React/Gatsby community standards
- Better for code review and contributions

### 4. **Scalability**

- Easy to add new features
- Clear organization prevents clutter
- Supports growth without restructuring

### 5. **Developer Experience**

- Intuitive folder names
- Consistent patterns
- Easy to find components
- Better IDE autocomplete

## Import Examples

### Before:

```javascript
import Header from "../components/header"
import Hero from "./landing/hero"
import AppsCard from "./landing/apps-card"
```

### After:

```javascript
import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { AppsCard } from "@/components/sections/AppsSection"
```

## Additional Recommendations

### 1. Add Path Aliases

Update `gatsby-config.js`:

```javascript
module.exports = {
  // ... other config
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/utils": path.resolve(__dirname, "src/utils"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/context": path.resolve(__dirname, "src/context"),
      "@/config": path.resolve(__dirname, "src/config"),
      "@/lib": path.resolve(__dirname, "src/lib"),
    },
  },
}
```

### 2. Create Index Files

Each folder should have an `index.js` for cleaner imports:

```javascript
// src/components/layout/index.js
export { Header } from "./Header"
export { Footer } from "./Footer"
export { Layout } from "./Layout"
export { SEO } from "./SEO"
```

### 3. Add Documentation

Each major folder should have a `README.md`:

- Explain what goes in that folder
- Provide examples
- List naming conventions

### 4. Component Template

Create a component template for consistency:

```javascript
// ComponentName/ComponentName.js
import React from "react"
import PropTypes from "prop-types"

export const ComponentName = ({ prop1, prop2 }) => {
  return <div>{/* Component content */}</div>
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.bool,
}

ComponentName.defaultProps = {
  prop2: false,
}
```

### 5. Add Storybook (Optional)

For component documentation and testing:

```
src/components/common/Button/
├── Button.js
├── Button.test.js
├── Button.stories.js
└── index.js
```

## Migration Strategy

### Phase 1: Setup New Structure

1. Create new folder structure
2. Set up path aliases
3. Add index files

### Phase 2: Move Components

1. Move layout components
2. Move section components
3. Update imports

### Phase 3: Move Utilities

1. Reorganize utils
2. Reorganize context
3. Move assets

### Phase 4: Update Pages

1. Update page imports
2. Update template imports
3. Test all pages

### Phase 5: Documentation

1. Add README files
2. Update main README
3. Add contributing guide

## Next Steps

1. Review and approve this structure
2. Create a migration branch
3. Execute migration in phases
4. Update documentation
5. Test thoroughly
6. Merge to main

Would you like me to help execute this migration?
