"use client";

import React from "react";

import { _setStoredThemeColor } from "@/components/ThemeProvider/_store";
import { useThemeContext } from "@/components/ThemeProvider/_useThemeContext";
import type { ThemeColor } from "@/utils";

export default function useThemeColor() {
  const context = useThemeContext();

  const setThemeColor = React.useCallback(
    (color: ThemeColor) => {
      context.setThemeColor(color);
      _setStoredThemeColor(color);
    },
    [context],
  );

  return {
    themeColor: context.themeColor,
    setThemeColor,
  };
}
