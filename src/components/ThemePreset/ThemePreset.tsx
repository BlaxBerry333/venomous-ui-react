"use client";

import React from "react";

import { useThemeInit } from "./_useThemeInit";
import { useThemeInjectToHTML } from "./_useThemeInjectToHTML";
import type { ThemePresetProps } from "./index.types";

const ThemePreset = React.memo<ThemePresetProps>(({ defaultThemeColor, defaultThemeMode }) => {
  useThemeInjectToHTML();
  useThemeInit({ defaultThemeColor, defaultThemeMode });

  return null;
});

ThemePreset.displayName = "ThemePreset";
export default ThemePreset;
