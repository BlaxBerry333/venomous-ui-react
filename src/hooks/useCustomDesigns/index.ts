"use client";

import React from "react";

import { useThemeProviderContext } from "@/components/Theme/ThemeProvider.hooks";
import type { TThemeDesigns } from "@/constants";

/**
 * 不对外暴露
 */
export default function useCustomDesigns(): Partial<TThemeDesigns> {
  const { customDesigns } = useThemeProviderContext();

  return React.useMemo(() => {
    return customDesigns || {};
  }, [customDesigns]);
}
