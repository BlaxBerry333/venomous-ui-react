"use client";

import React from "react";

import { TypographySize } from "@/utils";
import { useTypographyStyle } from "./_useTypographyStyle";
import { TypographyTitleTagMap, type TypographyTitleProps } from "./index.types";

const TypographyTitle = React.memo<TypographyTitleProps>(
  ({ text, as = TypographyTitleTagMap.h4, ellipsis = 0, style, semanticColor, ...props }) => {
    const Tag = React.useMemo(() => TypographyTitleTagMap[as], [as]);
    const fontSize = React.useMemo(() => TypographySize[as], [as]);

    const { fontColor, ellipsisStyles } = useTypographyStyle({ ellipsis, semanticColor });

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
