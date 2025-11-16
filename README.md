# Venomous UI React

A lightweight React component library built entirely with **React Hooks** and **JSX inline styles**.

## About This Project

This is a **personal learning project** focused on exploring UI component architecture, abstraction patterns, and build optimization in React. While it demonstrates production-level code quality in certain aspects, it is **not intended for production use** and remains a learning-focused project.

### Technical Highlights

- **100% TypeScript** - Full type safety with 213 `.d.ts` files and comprehensive type exports
- **Extremely Lightweight** - Main entry at just **2.4KB gzipped**, individual components range 1-4KB
- **Perfect Tree-Shaking** - `preserveModules` build strategy with `sideEffects: false` for optimal code splitting
- **Zero CSS Dependencies** - Pure JSX inline styles, no external CSS files required
- **On-Demand Imports** - Supports multiple import styles for maximum flexibility

---

- [Related Links](#related-links)
- [How to Use](#how-to-use)
  - [Installation](#installation)
  - [Import Modules](#import-modules)
  - [Wrapping Everything](#wrapping-everything)
  - [Used in SSR Frameworks](#used-in-ssr-frameworks)
  - [Error Boundary](#error-boundary-optional)
- [Development](#development)
  - [Tech Stack](#tech-stack)
  - [Development Scripts](#development-scripts)

---

## Related Links

- **Storybook**: [https://blaxberry333.github.io/venomous-ui-react/](https://blaxberry333.github.io/venomous-ui-react/?path=/docs/overview--docs)
- **Repository**: [https://github.com/BlaxBerry333/venomous-ui-react](https://github.com/BlaxBerry333/venomous-ui-react)
- **Issues**: [https://github.com/BlaxBerry333/venomous-ui-react/issues](https://github.com/BlaxBerry333/venomous-ui-react/issues)

## How to Use

### Installation

This is a personal learning project, not published to npm. Install directly from GitHub:

```shell
# Step 1: Install the library from GitHub repository
npm install git+https://github.com/BlaxBerry333/venomous-ui-react

# Step 2: Import Optional peer dependencies ( if you use the corresponding components )
npm install @iconify/react@5
```

---

### Import Modules

This library supports 3 import styles for flexibility and tree-shaking optimization

```tsx
// Style 1:
// Import everything from the root
import { Button, type ButtonProps, useThemeMode, PALETTE_COLORS } from "venomous-ui-react";

// Style 2:
// Import by category
import { Button, type ButtonProps } from "venomous-ui-react/components";
import { useThemeMode } from "venomous-ui-react/hooks";
import { PALETTE_COLORS } from "venomous-ui-react/constants";

// Style 3:
// Import specific components/hooks (finest granularity)
import { Button, type ButtonProps } from "venomous-ui-react/components/Buttons";
import { useThemeMode } from "venomous-ui-react/hooks/useThemeMode";
import { PALETTE_COLORS } from "venomous-ui-react/constants/designs/PALETTE_COLORS";
```

---

### Wrapping Everything

All components rely on a shared React Context for theming and design tokens.

You MUST wrap the root of your application with `<Theme.Provider>` to ensure correct rendering:

```tsx
"use client";

import { Theme } from "venomous-ui-react/components";

export default function App() {
  return (
    <Theme.Provider>
      {/* Your app content */}
      {/* All components go here */}
    </Theme.Provider>
  );
}
```

---

### Used in SSR Frameworks

If you're using a Server-Side Rendering ( SSR ) framework like Next.js, wrap all components with `<NoSSR>` to prevent hydration mismatch errors:

```tsx
"use client";

import { Theme, NoSSR } from "venomous-ui-react/components";

export default function App() {
  return (
    <NoSSR>
      <Theme.Provider>
        {/* Your app content */}
        {/* All components go here */}
      </Theme.Provider>
    </NoSSR>
  );
}
```

---

### Error Boundary (Optional)

This library provides an optional `<ErrorBoundary>` component to catch JavaScript errors in your component tree:

> You can also use your own error boundary implementation.

```tsx
"use client";

import { Theme, ErrorBoundary } from "venomous-ui-react/components";

export default function App() {
  return (
    <Theme.Provider>
      <ErrorBoundary
        fallback={(error, errorInfo, reset) => (
          <div>
            <h2>Oops! Something went wrong.</h2>
            <p>{error.message}</p>
            <button onClick={reset}>Try again</button>
          </div>
        )}
      >
        {/* Your app content */}
        {/* All components go here */}
      </ErrorBoundary>
    </Theme.Provider>
  );
}
```

## Development

### Tech Stack

- [Node.js](https://nodejs.org/) v22
- [React](https://react.dev/) v18
- [TypeScript](https://www.typescriptlang.org/) v5.7
- [Vite](https://vitejs.dev/) v6.2
- [Vitest](https://vitest.dev/) v4
- [Storybook](https://storybook.js.org/) v8.6

---

### Development Scripts

```shell
npm run dev                 # Run Storybook on port 5100
npm run build               # Build everything (libs + types + storybook)
npm run build:libs          # Build library only (ES + CJS)
npm run build:types         # Build TypeScript types only
npm run build:storybook     # Build Storybook static site
npm run check:all           # Run all checks (types + eslint + prettier + cspell)
npm run format:all          # Auto-fix all formatting issues
npm run clean-dist          # Clean build artifacts
npm run clean-cache         # Clean all caches
npm run test                # Run tests
npm run test:all            # Run all tests with coverage
npm run test:all:ui         # Run all tests with coverage and show in UI
```

---
