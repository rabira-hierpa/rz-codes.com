# Components Directory

This directory contains all reusable UI components organized by category.

## Structure

### `/layout`

Layout-related components that structure the page.

- **Header/** - Site navigation header with menu
- **Footer/** - Site footer with social links and info
- **Layout/** - Main layout wrapper component
- **SEO/** - SEO meta tags component

### `/sections`

Large page sections used across different pages.

- **Hero/** - Landing page hero section
- **AppsSection/** - Apps showcase section with cards
- **ProjectsSection/** - GIS projects display section
- **DesignsSection/** - Design portfolio section

### `/ui`

UI-specific components and widgets.

- **ThemeToggle/** - Floating theme switcher button
- **ComingSoon/** - Coming soon placeholder component

### `/common`

Common reusable components (to be added as needed).

Examples: Button, Card, Link, Input, etc.

## Usage

Import components using their folder name:

```javascript
import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
```

## Component Structure

Each component folder contains:

- `ComponentName.js` - The component file
- `ComponentName.test.js` - Tests (if applicable)
- `index.js` - Export file for clean imports
- `README.md` - Documentation (for complex components)

## Adding New Components

1. Create a new folder in the appropriate category
2. Add the component file
3. Create an `index.js` export file
4. Add tests if applicable
5. Update this README

## Guidelines

- Keep components focused and single-responsibility
- Use theme-aware classes for colors
- Add PropTypes for type checking
- Document complex props and usage
- Write tests for critical functionality
