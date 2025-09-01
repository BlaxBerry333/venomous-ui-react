"use client";

import React from "react";

import { useDesign } from "@/hooks";
import { ThemeColor, TypographySize } from "@/utils";
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
  const { themeColor } = Theme.useThemeColor();
  const design = useDesign();

  const backgroundColor = React.useMemo<React.CSSProperties["backgroundColor"]>(() => {
    if (isDisabled) return design.BackgroundColors.secondary;
    else return "transparent";
  }, [isDisabled, design]);

  const textColor = React.useMemo<React.CSSProperties["color"]>(() => {
    if (isError) return ThemeColor.RubyCopperhead;
    if (isDisabled) return design.TextColors.disabled;
    else return design.TextColors.primary;
  }, [isError, isDisabled, design]);

  const helperTextColor = React.useMemo<React.CSSProperties["color"]>(() => {
    if (isError) return ThemeColor.RubyCopperhead;
    if (isDisabled) return design.TextColors.disabled;
    else return design.TextColors.quaternary;
  }, [isError, isDisabled, design]);

  const borderColor = React.useMemo<React.CSSProperties["borderColor"]>(() => {
    if (isError) return ThemeColor.RubyCopperhead;
    if (isDisabled) return design.BorderColors.tertiary;
    else return design.BorderColors.secondary;
  }, [isError, design]);

  const outlineColor = React.useMemo<React.CSSProperties["color"]>(() => {
    if (isError) return ThemeColor.RubyCopperhead;
    else return themeColor;
  }, [isError, design, themeColor]);

  const commonStyles = React.useMemo(
    () => ({
      display: fullWidth ? "block" : "inline-block",
      width: fullWidth ? "100%" : "auto",
      minWidth: fullWidth ? "100%" : 200,
      minHeight: 40,
      padding: "8px",
      fontSize: TypographySize.text,
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
    helperTextColor,
    borderColor,
    outlineColor,
    commonStyles,
  };
}
