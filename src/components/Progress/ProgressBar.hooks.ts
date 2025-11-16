"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { ProgressBarProps } from "./ProgressBar.types";

export function useProgressBarStyles({
  height = 4,
  color,
  displayValue = 0,
}: {
  height?: number;
  color?: string;
  displayValue?: number;
}) {
  const { PaletteColors, BackgroundColors, BorderColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.ProgressBar });

  const containerStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      borderRadius: 4,
      position: "relative",
      width: "100%",
      height,
      overflow: "hidden",
      backgroundColor: BackgroundColors[2],
      borderWidth: 0.8,
      borderStyle: "solid",
      borderColor: BorderColors[1],

      // -- custom style --
      ...customStyle,
    }),
    [BackgroundColors, BorderColors, height, customStyle],
  );

  const insideBarStyle = React.useMemo<React.CSSProperties>(
    () => ({
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: `${displayValue}%`,
      backgroundColor: color || PaletteColors[1],
      borderRadius: "inherit",
      transition: "width 0.25s ease",
    }),
    [displayValue, color, PaletteColors],
  );

  return {
    containerStyle,
    insideBarStyle,
  };
}

export function useProgressBarActions({ value, onChange, animated }: Partial<ProgressBarProps>) {
  const [internalValue, setInternalValue] = React.useState<number>(0);
  const animationRef = React.useRef<number | null>(null);
  const onChangeRef = React.useRef(onChange);

  React.useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  React.useEffect(() => {
    if (!animated) {
      if (animationRef.current !== null) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    let currentValue = 0;
    animationRef.current = window.setInterval(() => {
      currentValue += 1;
      if (currentValue > 100) {
        currentValue = 0;
      }
      setInternalValue(currentValue);
      onChangeRef.current?.(currentValue);
    }, 20);

    return () => {
      if (animationRef.current !== null) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [animated]);

  const displayValue = React.useMemo<number>(
    () => (animated ? internalValue : Math.min(Math.max(value || 0, 0), 100)),
    [animated, internalValue, value],
  );

  return {
    displayValue,
  };
}
