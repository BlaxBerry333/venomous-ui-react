"use client";

import clsx from "clsx";
import React from "react";

import { TypographySize, TypographySizeName } from "@/utils";
import { useTypographyStyle } from "./_useTypographyStyle";
import { TypographyTextTagMap, type TypographyTextProps } from "./index.types";

const TypographyText = React.memo<TypographyTextProps>(
  ({ className, style, text, as: Tag = TypographyTextTagMap.span, isEllipsis = false, semanticColor, ...props }) => {
    const { fontColor, ellipsisStyles } = useTypographyStyle({ ellipsis: isEllipsis ? 1 : 0, semanticColor });

    const fontWeight = React.useMemo<React.CSSProperties["fontWeight"]>(() => {
      return Tag === TypographyTextTagMap.strong ? "bold" : "normal";
    }, [Tag]);

    const fontSize = React.useMemo<React.CSSProperties["fontSize"]>(() => {
      switch (Tag) {
        case TypographyTextTagMap.strong:
          return TypographySize[TypographySizeName.strong];
        case TypographyTextTagMap.small:
          return TypographySize[TypographySizeName.small];
        case TypographyTextTagMap.span:
        default:
          return TypographySize[TypographySizeName.text];
      }
    }, [Tag]);

    return (
      <Tag
        className={clsx("Venomous-UI-React--Typography.Text", className)}
        style={{
          fontSize,
          fontWeight,
          color: fontColor,
          ...ellipsisStyles,
          ...style,
        }}
        {...props}
      >
        {text}
      </Tag>
    );
  },
);

TypographyText.displayName = "Typography.Text";
export default TypographyText;
