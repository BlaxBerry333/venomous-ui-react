"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { LayoutSideProps } from "./LayoutSide.types";

// ============================
// useLayoutSideActions
// ============================
export function useLayoutSideActions({
  collapsed,
  onCollapsedChange,
}: Pick<LayoutSideProps, "collapsed" | "onCollapsedChange">) {
  const [internalCollapsed, setInternalCollapsed] = React.useState(false);

  React.useEffect(() => {
    if (collapsed !== undefined) {
      setInternalCollapsed(collapsed);
    }
  }, [collapsed]);

  const toggle = React.useCallback(() => {
    const newState = !internalCollapsed;
    setInternalCollapsed(newState);
    onCollapsedChange?.(newState);
  }, [internalCollapsed, onCollapsedChange]);

  return React.useMemo(
    () => ({
      collapsed: internalCollapsed,
      toggle,
    }),
    [internalCollapsed, toggle],
  );
}

export function useLayoutSideStyles({
  expandedWidth = 280,
  collapsedWidth = 80,
  collapsed,
}: Pick<LayoutSideProps, "expandedWidth" | "collapsedWidth"> & { collapsed: boolean }) {
  const { BackgroundColors, BorderColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.LayoutSide });

  const DynamicDimensionStyles = React.useMemo<React.CSSProperties>(() => {
    const currentWidth = collapsed ? collapsedWidth : expandedWidth;

    return {
      width: `${currentWidth}px`,
      minWidth: `${currentWidth}px`,
      height: "100dvh",
    };
  }, [collapsed, collapsedWidth, expandedWidth]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default styles --
      display: "flex",
      flexDirection: "column",
      overflow: "visible",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
      ...DynamicDimensionStyles,
      transition: "width 0.25s ease-in-out",
      backgroundColor: BackgroundColors[1],
      borderRight: `1px solid ${BorderColors[1]}`,

      // -- custom styles --
      ...customStyle,
    }),
    [BackgroundColors, BorderColors, DynamicDimensionStyles, customStyle],
  );

  const wrapperStyle = React.useMemo<React.CSSProperties>(
    () => ({
      position: "relative",
      width: "100%",
      flex: 1,
      overflowX: "hidden",
      overflowY: "auto",
      zIndex: 1,
    }),
    [],
  );

  const collapseButtonStyle = React.useMemo<React.CSSProperties>(
    () => ({
      position: "absolute",
      top: 8,
      right: 0,
      transform: "translateX(50%)",
      zIndex: 101,
    }),
    [],
  );

  const bottomStyle = React.useMemo<React.CSSProperties>(
    () => ({
      position: "relative",
      width: "100%",
      flexShrink: 0,
      zIndex: 1,
    }),
    [],
  );

  return {
    componentStyle,
    wrapperStyle,
    collapseButtonStyle,
    bottomStyle,
  };
}
