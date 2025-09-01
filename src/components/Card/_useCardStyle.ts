"use client";

import React from "react";

import { useDesign } from "@/hooks";
import { CardVariantMap, type CardProps } from "./index.types";

export default function useCardStyle({ variant }: Pick<CardProps, "variant">) {
  const design = useDesign();

  const backgroundColor = React.useMemo<React.CSSProperties["backgroundColor"]>(() => {
    switch (variant) {
      case CardVariantMap.transparent:
        return "transparent";
      case CardVariantMap.elevated:
      case CardVariantMap.outlined:
      case CardVariantMap.frostedGlass:
      default:
        return design.BackgroundColors.secondary;
    }
  }, [design, variant]);

  const borderColor = React.useMemo<React.CSSProperties["borderColor"]>(() => {
    switch (variant) {
      case CardVariantMap.outlined:
      case CardVariantMap.transparent:
        return design.BorderColors.tertiary;
      case CardVariantMap.elevated:
      case CardVariantMap.frostedGlass:
      default:
        return "transparent";
    }
  }, [design, variant]);

  const boxShadow = React.useMemo<React.CSSProperties["boxShadow"]>(() => {
    switch (variant) {
      case CardVariantMap.outlined:
      case CardVariantMap.transparent:
        return "none";
      case CardVariantMap.elevated:
      case CardVariantMap.frostedGlass:
      default:
        return design.Shadows.primary;
    }
  }, [design, variant]);

  const commonStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      borderRadius: "8px",
      padding: "16px",
      outlineWidth: 1.5,
      outlineStyle: "solid",
      outlineColor: borderColor,
      backgroundColor: backgroundColor,
      boxShadow: boxShadow,
      ...(variant === CardVariantMap.frostedGlass && {
        backdropFilter: "blur(8px) brightness(0.8)",
        WebkitBackdropFilter: "blur(8px) brightness(0.8)",
      }),
    };
  }, [borderColor, backgroundColor, boxShadow, variant]);

  return {
    backgroundColor,
    borderColor,
    boxShadow,
    commonStyles,
  };
}
