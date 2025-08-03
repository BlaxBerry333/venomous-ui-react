# Venomous UI

`venomous-ui-react` is a React component library built entirely with `React Hooks` and JSX inline styles.

This library is a personal learning project aimed at exploring the architecture and abstraction of UI components in React. It is not meant for production use, and thus, not suitable for commercial applications at this stage.

## Overview

| Server               | Port | Main Skills                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | :--: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Storybook Playground | 5100 | <img src="https://github.com/BlaxBerry333/programming-notes/blob/main/docs/public/static/skill-icons/web-frontend--vite.png?raw=true" style="width:40px;" /> <img src="https://github.com/BlaxBerry333/programming-notes/blob/main/docs/public/static/skill-icons/web-frontend--react.png?raw=true" style="width:40px;" /> <img src="https://github.com/BlaxBerry333/programming-notes/blob/main/docs/public/static/skill-icons/web-frontend--typescript.png?raw=true" style="width:40px;" /> <img src="https://github.com/BlaxBerry333/programming-notes/blob/main/docs/public/static/skill-icons/web-frontend--storybook.png?raw=true" style="width:40px;" /> <img src="https://github.com/BlaxBerry333/programming-notes/blob/main/docs/public/static/skill-icons/web-infrastructure--github-actions.png?raw=true" style="width:40px;" /> |

## Instal

This is a personal learning project, not intended for production or npm distribution.

```shell
# Install the library from Github repository:
% npm install git+https://github.com/BlaxBerry333/venomous-ui-react

# Additionally, install the required peer dependencies:
% npm install @iconify/react@5 react-hook-form@7 motion@12 sonner@2
```

## Usage

This library supports on-demand imports, changing the import style can reduces the final bundle size and improves application performance by eliminating unused code.

```tsx
// 1st import style
import { Button, type ButtonProps, useHandler, TypographySize } from "venomous-ui-react";

// 2nd import style
import { Button, type ButtonProps } from "venomous-ui-react/components";
import { useHandler } from "venomous-ui-react/hooks";
import { TypographySize } from "venomous-ui-react/utils";

// 3rd import style
import { Buttons, type ButtonProps } from "venomous-ui-react/components/Button";
import useHandler from "venomous-ui-react/hooks/useHandler";
import TypographySize from "venomous-ui-react/utils/TypographySize";
```

## Development scripts

```shell
# Run Storybook
% npm run dev

# Build Storybook
% npm run build:storybook

# Build library
% npm run build:libs

# Build types
% npm run build:types

# Clean dist
% npm run clean-dist

# Clean cache
% npm run clean-cache

# Clean linter cache
% npm run clean-linter-cache

# Check
% npm run check:all

# Format
% npm run format:all
```
