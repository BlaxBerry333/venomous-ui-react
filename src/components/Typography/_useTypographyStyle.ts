"use client";

import React from "react";

import { useDesign } from "@/hooks";
import { SemanticColors } from "@/utils";

type Props = Partial<{
  ellipsis: number;
  semanticColor?: keyof typeof SemanticColors;
}>;

export function useTypographyStyle({ ellipsis = 0, semanticColor }: Props) {
  const design = useDesign();

  const fontColor = React.useMemo<React.CSSProperties["color"]>(() => {
    return semanticColor ? SemanticColors[semanticColor] : design.TextColors.primary;
  }, [design, semanticColor]);

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
