"use client";

import React from "react";

import { SemanticColors, TextColors } from "@/utils";
import { Theme } from "../Theme";

type Props = Partial<{
  ellipsis: number;
  semanticColor?: keyof typeof SemanticColors;
}>;

export function useTypographyStyle({ ellipsis = 0, semanticColor }: Props) {
  const { themeMode } = Theme.useThemeMode();

  const fontColor = React.useMemo<React.CSSProperties["color"]>(() => {
    return semanticColor ? SemanticColors[semanticColor] : TextColors[themeMode].primary;
  }, [themeMode, semanticColor]);

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
