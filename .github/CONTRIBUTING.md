# Contributing to rz-codes.com

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## 📁 Folder Structure

Please refer to [FOLDER_STRUCTURE.md](../FOLDER_STRUCTURE.md) for our organization guidelines.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/rz-codes.com.git

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run develop
```

## 📝 Coding Guidelines

### Component Guidelines

1. **Component Structure**: Each component should have its own folder

```
ComponentName/
├── ComponentName.js
├── ComponentName.test.js
├── index.js
└── README.md (optional for complex components)
```

2. **Naming Conventions**:
   - Components: PascalCase (`Button.js`, `UserCard.js`)
   - Utilities: camelCase (`formatDate.js`, `validateEmail.js`)
   - Constants: UPPER_SNAKE_CASE (`API_URL`, `MAX_ITEMS`)

3. **Imports Order**:

```javascript
// 1. External dependencies
import React from "react"
import { Link } from "gatsby"

// 2. Internal components
import { Header } from "@/components/layout/Header"

// 3. Context and hooks
import { useTheme } from "@/context/ThemeContext"

// 4. Utils and helpers
import { formatDate } from "@/utils"

// 5. Styles and assets
import "@/styles/component.css"
```

### Theme System

Always use theme-aware classes:

```javascript
// ✅ Good
<div className="text-primary-600 dark:text-primary-400">

// ❌ Avoid
<div className="text-red-600">
```

Refer to [THEME_GUIDE.md](../THEME_GUIDE.md) for theme usage.

## 🧪 Testing

- Write tests for all new components
- Run tests before submitting PR: `npm test`
- Ensure all tests pass

## 📊 Pull Request Process

1. **Create a branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Follow coding guidelines
   - Add tests
   - Update documentation

3. **Commit your changes**:
   - Use conventional commits with emojis
   - Each file change should be a separate commit

   ```bash
   git commit -m "✨ Add new feature component"
   git commit -m "📝 Update documentation"
   git commit -m "🐛 Fix bug in header"
   ```

4. **Push and create PR**:
   ```bash
   git push origin feature/your-feature-name
   ```

## 🎨 Commit Message Guidelines

Use these emojis for commit messages:

- ✨ `:sparkles:` - New feature
- 🐛 `:bug:` - Bug fix
- 📝 `:memo:` - Documentation
- 💄 `:lipstick:` - UI/Style updates
- ♻️ `:recycle:` - Refactoring
- ⚡️ `:zap:` - Performance improvements
- 🔧 `:wrench:` - Configuration changes
- 🧪 `:test_tube:` - Tests
- ⬆️ `:arrow_up:` - Dependency upgrades
- 🚀 `:rocket:` - Deployment
- 📱 `:iphone:` - Responsive design

## 🔍 Code Review

All submissions require review. We'll provide feedback and may request changes.

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## 💬 Questions?

Feel free to open an issue for any questions or concerns.

---

Thank you for contributing! 🎉
