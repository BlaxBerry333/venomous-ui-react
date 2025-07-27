"use client";

import React from "react";

import { TextColors } from "@/utils";
import { Theme } from "../Theme";

type Props = Partial<{
  ellipsis: number;
}>;

export function useTypographyStyle({ ellipsis = 0 }: Props) {
  const { themeMode } = Theme.useThemeMode();

  const fontColor = React.useMemo<React.CSSProperties["color"]>(() => {
    return TextColors[themeMode].primary;
  }, [themeMode]);

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
