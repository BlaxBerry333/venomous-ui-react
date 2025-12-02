"use client";

import React from "react";

import { useThemeProviderContext } from "@/components/Theme/ThemeProvider.hooks";
import type { TComponentDisplayName } from "@/constants";

/**
 * 获取组件的自定义 Props
 * 从 customComponentProps[displayName] 中提取
 *
 * 不对外暴露
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useCustomComponentProps<T = Record<string, any>>({
  displayName,
}: {
  displayName: undefined | TComponentDisplayName;
}): Partial<T> {
  const { customComponentProps } = useThemeProviderContext();

  return React.useMemo(() => {
    if (displayName === undefined) {
      return {} as Partial<T>;
    }
    return (customComponentProps?.[displayName] || {}) as Partial<T>;
  }, [customComponentProps, displayName]);
}
