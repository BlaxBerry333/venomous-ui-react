"use client";

import React from "react";

import { ThemeProviderContext } from "./ThemeProvider.context";

/**
 * 不对外暴露
 */
export function useThemeProviderContext() {
  const context = React.useContext(ThemeProviderContext); // eslint-disable-line react-x/no-use-context

  if (context === undefined) {
    throw new Error("useThemeProvider must be used within a <ThemeProvider>");
  }

  return context;
}
