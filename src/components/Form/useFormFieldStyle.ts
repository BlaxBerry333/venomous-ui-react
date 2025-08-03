"use client";

import React from "react";

import { BackgroundColors, BorderColors, TextColors, ThemeColor } from "@/utils";
import { Theme } from "../Theme";

export function useFormFieldStyle({
  fullWidth = false,
  isDisabled = false,
  isError = false,
  isFocused = false,
}: {
  fullWidth?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  isFocused?: boolean;
}) {
  const { themeMode } = Theme.useThemeMode();
  const { themeColor } = Theme.useThemeColor();

  const backgroundColor = React.useMemo<React.CSSProperties["backgroundColor"]>(() => {
    if (isDisabled) return BackgroundColors[themeMode].secondary;
    else return "transparent";
  }, [isDisabled, themeMode]);

  const textColor = React.useMemo<React.CSSProperties["color"]>(() => {
    if (isError) return ThemeColor.RubyCopperhead;
    if (isDisabled) return TextColors[themeMode].disabled;
    else return TextColors[themeMode].primary;
  }, [isError, isDisabled, themeMode]);

  const borderColor = React.useMemo<React.CSSProperties["borderColor"]>(() => {
    if (isError) return ThemeColor.RubyCopperhead;
    else return BorderColors[themeMode].primary;
  }, [isError, themeMode]);

  const outlineColor = React.useMemo<React.CSSProperties["color"]>(() => {
    if (isError) return ThemeColor.RubyCopperhead;
    else return themeColor;
  }, [isError, themeMode]);

  const commonStyles = React.useMemo(
    () => ({
      display: fullWidth ? "block" : "inline-block",
      width: fullWidth ? "100%" : "auto",
      minWidth: fullWidth ? "100%" : 200,
      minHeight: 40,
      padding: "8px",
      backgroundColor,
      color: textColor,
      borderRadius: "8px",
      borderWidth: 1.5,
      borderStyle: "solid",
      borderColor,
      ...(isFocused && {
        outlineOffset: -1.5,
        outlineWidth: 1.5,
        outlineStyle: "solid",
        outlineColor,
      }),
      ...(isDisabled && {
        cursor: "not-allowed",
        outline: "none",
      }),
    }),
    [fullWidth, isFocused, isDisabled, backgroundColor, textColor, borderColor, outlineColor],
  );

  return {
    backgroundColor,
    textColor,
    borderColor,
    outlineColor,
    commonStyles,
  };
}
