import React from "react";

import { BackgroundColors, BorderColors, getDarkerHex, TextColors, ThemeShadow, TypographySize } from "@/utils";
import { Theme } from "../Theme";
import type { ButtonProps } from "./index.types";

export function useButtonStyle({
  isLoading,
  isDisabled,
  color = "auto",
  variant,
}: Pick<ButtonProps, "isLoading" | "isDisabled" | "color" | "variant">) {
  const { themeColor } = Theme.useThemeColor();
  const { themeMode, isDarkThemeMode } = Theme.useThemeMode();

  const backgroundColor = React.useMemo<React.CSSProperties["backgroundColor"]>(() => {
    switch (variant) {
      case "contained":
        return themeColor;
      case "outlined":
        return BackgroundColors[themeMode].secondary;
      case "ghost":
      default:
        return BackgroundColors[themeMode].primary;
    }
  }, [variant, color, themeColor, themeMode]);

  const borderColor = React.useMemo<React.CSSProperties["borderColor"]>(() => {
    switch (variant) {
      case "contained":
        return isDarkThemeMode ? getDarkerHex(themeColor, 0.025) : getDarkerHex(themeColor, 0.25);
      case "outlined":
        return themeColor;
      case "ghost":
      default:
        return BorderColors[themeMode].secondary;
    }
  }, [variant, color, themeColor, themeMode]);

  const textColor = React.useMemo<React.CSSProperties["color"]>(() => {
    switch (variant) {
      case "contained":
        return "#ffffff";
      case "outlined":
        return themeColor;
      case "ghost":
      default:
        return TextColors[themeMode].primary;
    }
  }, [variant, color, themeColor, themeMode]);

  const boxShadow = React.useMemo<React.CSSProperties["boxShadow"]>(() => {
    return ThemeShadow[themeMode].sm;
  }, [variant, color, themeColor, themeMode]);

  const buttonStyles = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      width: "auto",
      minWidth: "40px",
      height: "40px",
      padding: "0px 16px",
      textTransform: "capitalize",
      fontSize: TypographySize.text,
      fontWeight: "bold",
      cursor: isLoading ? "wait" : isDisabled ? "not-allowed" : "pointer",
      borderRadius: "8px",
      borderWidth: 2,
      borderColor,
      boxShadow,
      backgroundColor,
      color: textColor,
    }),
    [isLoading, isDisabled, borderColor, backgroundColor, textColor, boxShadow],
  );

  return {
    buttonStyles,
  };
}
