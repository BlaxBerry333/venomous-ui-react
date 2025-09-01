"use client";

import React from "react";

import { useDesign } from "@/hooks";
import { SEMANTIC_COLORS, type SemanticColorName } from "@/utils";

type Props = Partial<{
  ellipsis: number;
  semanticColor?: SemanticColorName;
}>;

export function useTypographyStyle({ ellipsis = 0, semanticColor }: Props) {
  const design = useDesign();

  const fontColor = React.useMemo<React.CSSProperties["color"]>(() => {
    return semanticColor ? SEMANTIC_COLORS[semanticColor] : design.TextColors.primary;
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
