"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES, THEME_BREAKPOINTS, type TThemeBreakpoint } from "@/constants";
import { useThemeBreakpoint } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { SpaceGridProps } from "./SpaceGrid.types";

const BREAKPOINT_ORDER: TThemeBreakpoint[] = Object.values(THEME_BREAKPOINTS);

export function useSpaceGridStyles({ columns = 1, spacing = 0 }: Partial<SpaceGridProps>) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.SpaceGrid });
  const { breakpoint } = useThemeBreakpoint();

  const DynamicColumnsValue = React.useMemo(
    () => __getResponsiveValue({ breakpoint, value: columns, defaultValue: 1 }),
    [breakpoint, columns],
  );

  const DynamicSpacingValue = React.useMemo(
    () => __getResponsiveValue({ breakpoint, value: spacing, defaultValue: 16 }),
    [breakpoint, spacing],
  );

  const DynamicGridStyles = React.useMemo<React.CSSProperties>(
    () => ({
      gridTemplateColumns: `repeat(${DynamicColumnsValue}, 1fr)`,
      gap: `${DynamicSpacingValue}px`,
    }),
    [DynamicColumnsValue, DynamicSpacingValue],
  );

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      display: "grid",
      width: "100%",
      ...DynamicGridStyles,

      // -- custom style --
      ...customStyle,
    }),
    [DynamicGridStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicGridStyles,
      DynamicColumnsValue,
      DynamicSpacingValue,
    },
  };
}

const __getResponsiveValue = <T extends number>({
  breakpoint,
  value,
  defaultValue,
}: {
  breakpoint: TThemeBreakpoint;
  value: T | Partial<Record<TThemeBreakpoint, T>>;
  defaultValue: T;
}): T => {
  // 如果是数字，直接返回
  if (typeof value === "number") {
    return value;
  }

  // 如果是响应式配置对象
  if (typeof value === "object" && value !== null) {
    const breakpointConfig = value;

    // 找到当前屏幕尺寸在断点顺序中的位置
    const currentIndex = BREAKPOINT_ORDER.indexOf(breakpoint);
    if (currentIndex === -1) {
      return defaultValue;
    }

    // 从当前断点向上查找（从小屏到大屏），找到最后一个定义的值
    // 例如：当前是 lg，查找顺序：xs -> sm -> md -> lg，返回 lg 或更小断点的值
    for (let i = currentIndex; i >= 0; i--) {
      const currentBreakpoint = BREAKPOINT_ORDER[i];
      const key = Object.keys(THEME_BREAKPOINTS).find(
        (k) => THEME_BREAKPOINTS[k as keyof typeof THEME_BREAKPOINTS] === currentBreakpoint,
      ) as keyof typeof THEME_BREAKPOINTS | undefined;
      if (key && breakpointConfig[key] !== undefined) {
        return breakpointConfig[key];
      }
    }
  }

  return defaultValue;
};
