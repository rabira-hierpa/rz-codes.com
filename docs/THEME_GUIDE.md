# Theme System Documentation

## Overview

This project now has a comprehensive light/dark theme system with the following features:

- 🌓 Light and Dark mode support
- 🎨 Centralized color management
- 💾 Theme persistence in localStorage
- 🖥️ System preference detection
- 🔄 Smooth transitions between themes
- 📱 Fully responsive

## Color Palette

### Primary Colors (Red)

- **Primary 600** (`#dc2626`) - Main primary color (light mode)
- **Primary 400** (`#ef4444`) - Main primary color (dark mode)
- Full range: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

### Secondary Colors (Yellow)

- **Secondary 400** (`#facc15`) - Main secondary color
- **Secondary 600** (`#ca8a04`) - Secondary dark shade
- Full range: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

### Theme-Specific Colors

#### Light Theme

- Background: `#f3f3f3`
- Surface: `#ffffff`
- Text Primary: `#1a1a1a`
- Text Secondary: `#6b7280`
- Border: `#e5e7eb`

#### Dark Theme

- Background: `#1a1a1a`
- Surface: `#2d2d2d`
- Text Primary: `#f3f3f3`
- Text Secondary: `#d1d5db`
- Border: `#374151`

## Usage

### Using Theme Context

```jsx
import { useTheme } from "../context/ThemeContext"

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme()

  return <button onClick={toggleTheme}>Current theme: {theme}</button>
}
```

### Using Tailwind Classes

#### Primary Colors

```jsx
// Light mode
<div className="text-primary-600">Primary text</div>
<div className="bg-primary-600">Primary background</div>

// Dark mode aware
<div className="text-primary-600 dark:text-primary-400">
  Adapts to theme
</div>
```

#### Secondary Colors

```jsx
<div className="text-secondary-400">Secondary text</div>
<div className="bg-secondary-600">Secondary background</div>
```

#### Background Colors

```jsx
<div className="bg-background-light dark:bg-background-dark">
  Theme-aware background
</div>
```

#### Surface Colors (for cards, modals, etc.)

```jsx
<div className="bg-surface-light dark:bg-surface-dark">Card content</div>
```

### CSS Variables

You can also use CSS variables directly:

```css
.my-element {
  color: var(--color-primary);
  background-color: var(--color-surface);
  border-color: var(--color-border);
}
```

## File Structure

```
src/
├── context/
│   └── ThemeContext.js          # Theme state management
├── components/
│   ├── ThemeToggle.js           # Theme toggle button
│   ├── header.js                # Updated with theme support
│   ├── footer.js                # Updated with theme support
│   └── layout.js                # Wrapped with ThemeProvider
├── styles/
│   └── global.css               # CSS variables & dark mode styles
└── tailwind.config.js           # Theme colors configuration
```

## Components

### ThemeProvider

Wraps your app and provides theme context.

```jsx
import { ThemeProvider } from "../context/ThemeContext"
;<ThemeProvider>
  <YourApp />
</ThemeProvider>
```

### ThemeToggle

Ready-to-use toggle button with sun/moon icons.

```jsx
import ThemeToggle from "./ThemeToggle"
;<ThemeToggle />
```

## Best Practices

1. **Always use theme-aware classes** for colors that should change with theme:

   ```jsx
   // ✅ Good
   <div className="text-primary-600 dark:text-primary-400">

   // ❌ Avoid
   <div className="text-red-600">
   ```

2. **Add transition classes** for smooth theme switching:

   ```jsx
   <div className="transition-colors duration-300">
   ```

3. **Use semantic color names**:
   - `primary-*` for main brand color (red)
   - `secondary-*` for accent color (yellow)
   - `background-*` for page backgrounds
   - `surface-*` for component backgrounds
   - `text-*` for text colors

4. **Test both themes** when adding new UI elements

## Migration Guide

To update existing components:

1. Replace hardcoded color classes:

   ```jsx
   // Before
   <div className="text-red-600">

   // After
   <div className="text-primary-600 dark:text-primary-400">
   ```

2. Replace hardcoded backgrounds:

   ```jsx
   // Before
   <div className="bg-white">

   // After
   <div className="bg-surface-light dark:bg-surface-dark">
   ```

3. Add transition classes for smooth changes:
   ```jsx
   <div className="transition-colors duration-300">
   ```

## Browser Support

- Modern browsers with CSS custom properties support
- localStorage for theme persistence
- Respects `prefers-color-scheme` media query

## Future Enhancements

Potential additions:

- Additional theme variants (e.g., high contrast)
- Per-component theme customization
- Theme-specific images/assets
- Automatic theme scheduling
