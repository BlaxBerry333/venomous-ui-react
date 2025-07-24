"use client";

import React from "react";

import { useThemeColor, useThemeMode } from "@/hooks";
import type { ThemePresetProps } from "./index.types";

export function useThemeInit({
  defaultThemeColor,
  defaultThemeMode,
}: Pick<ThemePresetProps, "defaultThemeColor" | "defaultThemeMode">) {
  const { setThemeMode } = useThemeMode();
  const { setThemeColor } = useThemeColor();

  React.useEffect(() => {
    if (defaultThemeMode) setThemeMode(defaultThemeMode);
    if (defaultThemeColor) setThemeColor(defaultThemeColor);
  }, [defaultThemeMode, defaultThemeColor, setThemeMode, setThemeColor]);
}
