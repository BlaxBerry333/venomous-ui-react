"use client";

import clsx from "clsx";
import React from "react";

import { TYPOGRAPHY_SIZES } from "@/utils";
import { useTypographyStyle } from "./_useTypographyStyle";
import { TypographyTitleTagMap, type TypographyTitleProps } from "./index.types";

const TypographyTitle = React.memo<TypographyTitleProps>(
  ({ text, as = TypographyTitleTagMap.h4, ellipsis = 0, className, style, semanticColor, ...props }) => {
    const Tag = React.useMemo(() => TypographyTitleTagMap[as], [as]);
    const fontSize = React.useMemo(() => TYPOGRAPHY_SIZES[as], [as]);

    const { fontColor, ellipsisStyles } = useTypographyStyle({ ellipsis, semanticColor });

    return (
      <Tag
        className={clsx("Venomous-UI-React--Typography.Title", className)}
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
