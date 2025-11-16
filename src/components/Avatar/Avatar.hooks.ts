"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { AVATAR_SHAPE_MAP, type AvatarProps } from "./Avatar.types";

export function useAvatarStyles({ shape = "circle", width = 40 }: Partial<AvatarProps>) {
  const { BackgroundColors, BorderColors, TypographySizes } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Avatar });

  const DynamicVariantStyles = React.useMemo<React.CSSProperties>(() => {
    const isCircle = shape === AVATAR_SHAPE_MAP.CIRCLE;
    return {
      borderRadius: isCircle ? "50%" : 8,
    };
  }, [shape]);

  const DynamicSizeStyles = React.useMemo<React.CSSProperties>(() => {
    let fontSize: React.CSSProperties["fontSize"];
    if (width <= 32) fontSize = TypographySizes.TEXT.CAPTION;
    else if (width <= 40) fontSize = TypographySizes.TEXT.SMALL;
    else if (width <= 48) fontSize = TypographySizes.TEXT.BASE;
    else fontSize = TypographySizes.TEXT.LARGE;
    return {
      width,
      height: width,
      minWidth: width,
      minHeight: width,
      fontSize,
    };
  }, [width, TypographySizes]);

  const insideImageStyle = React.useMemo<React.CSSProperties>(
    () => ({
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }),
    [],
  );

  const insideIconStyle = React.useMemo<React.CSSProperties>(
    () => ({
      color: "inherit",
    }),
    [],
  );

  const insideTextStyle = React.useMemo<React.CSSProperties>(
    () => ({
      fontSize: width / 2,
      color: "inherit",
    }),
    [width],
  );

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: BackgroundColors[2],
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: BorderColors[1],
      fontWeight: "bold",
      lineHeight: 1,
      textAlign: "center",
      verticalAlign: "middle",
      ...DynamicVariantStyles,
      ...DynamicSizeStyles,

      // -- custom style --
      ...customStyle,
    }),
    [BackgroundColors, BorderColors, DynamicVariantStyles, DynamicSizeStyles, customStyle],
  );

  return {
    componentStyle,
    insideImageStyle,
    insideIconStyle,
    insideTextStyle,
    __: {
      DynamicVariantStyles,
      DynamicSizeStyles,
    },
  };
}

export function useAvatarActions({ src }: Partial<AvatarProps>) {
  const [isImageLoadError, setIsImageError] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsImageError(false);
  }, [src]);

  return {
    isImageLoadError,
    setIsImageError,
  };
}
