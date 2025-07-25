"use client";

import React from "react";

import { TypographySize } from "@/utils";
import { _defaultTypographyColor, useTypographyStyle } from "./_useTypographyStyle";
import type { TypographyTitleProps } from "./index.types";

const TagMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

const TypographyTitle = React.memo<TypographyTitleProps>(
  ({ text, as = TagMap.h4, color = _defaultTypographyColor, ellipsis = 0, style, ...props }) => {
    const Tag = React.useMemo(() => TagMap[as], [as]);
    const fontSize = React.useMemo(() => TypographySize[as], [as]);

    const { fontColor, ellipsisStyles } = useTypographyStyle({ color, ellipsis });

    return (
      <Tag
        style={{
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          width: "100%",
          fontSize,
          fontFamily: "inherit",
          fontWeight: "bold",
          lineHeight: "inherit",
          textAlign: "inherit",
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

TypographyTitle.displayName = "Typography.Title";
export default TypographyTitle;
