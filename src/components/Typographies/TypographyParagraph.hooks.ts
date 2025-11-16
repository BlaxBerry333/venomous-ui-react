"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { TypographyParagraphProps } from "./TypographyParagraph.types";

export function useTypographyParagraphStyles({
  ellipsis = 0,
  size = "BASE",
  weight = "normal",
  color,
}: Partial<TypographyParagraphProps>) {
  const { TextColors, TypographySizes, TypographyLineHeights } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TypographyParagraph });

  const DynamicSizeStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      fontSize: TypographySizes.TEXT[size],
      lineHeight: TypographyLineHeights.TEXT[size],
    };
  }, [size, TypographySizes, TypographyLineHeights]);

  const DynamicColorStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      color: color || TextColors[1],
    };
  }, [color, TextColors]);

  const DynamicEllipsisStyles = React.useMemo<React.CSSProperties>(() => {
    if (!ellipsis) {
      return {};
    }

    // Base ellipsis styles for flex/grid compatibility
    const baseEllipsisStyle: React.CSSProperties = {
      overflow: "hidden",
      minWidth: 0, // Flex/Grid 容器兼容：允许收缩到小于内容宽度
      maxWidth: "100%", // 防止溢出父容器
      flex: "1 1 auto", // Flex 容器中自动收缩/扩展
    };

    if (ellipsis === 1) {
      return {
        ...baseEllipsisStyle,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      };
    }

    return {
      ...baseEllipsisStyle,
      display: "-webkit-box",
      WebkitLineClamp: ellipsis,
      WebkitBoxOrient: "vertical",
      textOverflow: "ellipsis",
      wordBreak: "break-word", // 长单词换行
    };
  }, [ellipsis]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      margin: 0,

      // -- default style --
      position: "relative",
      display: ellipsis ? (ellipsis === 1 ? "block" : "-webkit-box") : "block",
      fontWeight: weight || "normal",

      // -- size styles --
      ...DynamicSizeStyles,

      // -- color styles --
      ...DynamicColorStyles,

      // -- ellipsis styles --
      ...DynamicEllipsisStyles,

      // -- custom style --
      ...customStyle,
    }),
    [ellipsis, weight, DynamicSizeStyles, DynamicColorStyles, DynamicEllipsisStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicSizeStyles,
      DynamicColorStyles,
      DynamicEllipsisStyles,
    },
  };
}
