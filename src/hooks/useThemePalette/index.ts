"use client";

import React from "react";

import { __clearPersistedThemePalette, useThemeProviderContext } from "@/components/Theme/ThemeProvider.hooks";
import { PALETTE_COLORS } from "@/constants";

export default function useThemePalette() {
  const { themePalette, setThemePalette } = useThemeProviderContext();

  // 重置到默认调色板（PALETTE_COLORS.WOLFSBANE）
  const resetToDefaultPalette = React.useCallback(() => {
    __clearPersistedThemePalette();
    setThemePalette(PALETTE_COLORS.WOLFSBANE);
  }, [setThemePalette]);

  return React.useMemo(
    () => ({
      themePalette,
      setThemePalette,
      resetToDefaultPalette,
    }),
    [themePalette, setThemePalette, resetToDefaultPalette],
  );
}
