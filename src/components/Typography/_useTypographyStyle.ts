"use client";

import React from "react";

import { TextColors } from "@/utils";
import { Theme } from "../Theme";

type Props = Partial<{
  color: keyof typeof TextColors;
  ellipsis: number;
}>;

export const _defaultTypographyColor: keyof typeof TextColors = "lightMode";

export function useTypographyStyle({ color = _defaultTypographyColor, ellipsis = 0 }: Props) {
  const { isDarkThemeMode } = Theme.useThemeMode();

  const fontColor = React.useMemo<React.CSSProperties["color"]>(() => {
    if (isDarkThemeMode) return color === "lightMode" ? TextColors.darkMode : TextColors[color];
    return TextColors[color];
  }, [color, isDarkThemeMode]);

  const ellipsisStyles = React.useMemo<React.CSSProperties>(() => {
    return ellipsis
      ? {
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: ellipsis,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }
      : {};
  }, [ellipsis]);

  return {
    fontColor,
    ellipsisStyles,
  };
}
