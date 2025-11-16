"use client";

import React from "react";

import { useThemeProviderContext } from "@/components/Theme/ThemeProvider.hooks";
import type { TComponentDisplayName } from "@/constants";

/**
 * 不对外暴露
 */
export default function useCustomStyle({
  displayName,
}: {
  displayName: undefined | TComponentDisplayName;
}): React.CSSProperties {
  const { customStyles } = useThemeProviderContext();

  return React.useMemo(() => {
    if (displayName === undefined) {
      return {};
    }
    return customStyles?.[displayName] || {};
  }, [customStyles, displayName]);
}
