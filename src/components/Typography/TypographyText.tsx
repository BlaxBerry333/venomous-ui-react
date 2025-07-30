"use client";

import React from "react";

import { TypographySize, TypographySizeName } from "@/utils";
import { useTypographyStyle } from "./_useTypographyStyle";
import { TypographyTextTagMap, type TypographyTextProps } from "./index.types";

const TypographyText = React.memo<TypographyTextProps>(
  ({ style, text, as: Tag = TypographyTextTagMap.span, semanticColor, ...props }) => {
    const { fontColor } = useTypographyStyle({ ellipsis: 0, semanticColor });

    if (Tag === TypographyTextTagMap.strong) {
      return (
        <strong
          style={{
            fontSize: TypographySize[TypographySizeName.strong],
            fontWeight: "bold",
            color: fontColor,
            ...style,
          }}
          {...props}
        >
          {text}
        </strong>
      );
    }

    if (Tag === TypographyTextTagMap.small) {
      return (
        <small
          style={{
            fontSize: TypographySize[TypographySizeName.small],
            color: fontColor,
            ...style,
          }}
          {...props}
        >
          {text}
        </small>
      );
    }

    return (
      <span
        style={{
          fontSize: TypographySize[TypographySizeName.text],
          fontWeight: "normal",
          color: fontColor,
          ...style,
        }}
        {...props}
      >
        {text}
      </span>
    );
  },
);

TypographyText.displayName = "Typography.Text";
export default TypographyText;
