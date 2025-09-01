"use client";

import clsx from "clsx";
import React from "react";

import { Theme } from "@/components";
import { BREAK_POINT_NAMES, type BreakPointName } from "@/utils";
import type { SpaceGridProps } from "./index.types";

const SpaceGrid = React.memo<SpaceGridProps>(({ children, className, style, columns = 1, spacing = 16, ...props }) => {
  const { screenSize } = Theme.useThemeBreakpoint();
  const safeScreenSize = screenSize ?? BREAK_POINT_NAMES.xs;

  const columnCount = React.useMemo<number>(
    () => __getCurrentColumns(columns, safeScreenSize),
    [columns, safeScreenSize],
  );
  const spacingValue = React.useMemo<number>(
    () => __getCurrentSpacing(spacing, safeScreenSize),
    [spacing, safeScreenSize],
  );

  return (
    <div
      className={clsx("Venomous-UI-React--Space.Grid", className)}
      style={{
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gap: `${spacingValue}px`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
});

SpaceGrid.displayName = "Space.Grid";
export default SpaceGrid;

const breakpoints = Object.keys(BREAK_POINT_NAMES) as BreakPointName[];

// 获取当前屏幕尺寸对应的列数
function __getCurrentColumns(columns: SpaceGridProps["columns"] = 1, screenSize: BreakPointName): number {
  if (typeof columns === "number") {
    return columns;
  }

  const currentIndex = breakpoints.indexOf(screenSize);
  for (let i = currentIndex; i < breakpoints.length; i++) {
    const val = columns[breakpoints[i]];
    if (val !== undefined) return val;
  }
  return 1;
}

// 获取当前屏幕尺寸对应的间距
function __getCurrentSpacing(spacing: SpaceGridProps["spacing"] = 16, screenSize: BreakPointName): number {
  if (typeof spacing === "number") {
    return spacing;
  }

  const currentIndex = breakpoints.indexOf(screenSize);
  for (let i = currentIndex; i < breakpoints.length; i++) {
    const val = spacing[breakpoints[i]];
    if (val !== undefined) return val;
  }
  return 16;
}
