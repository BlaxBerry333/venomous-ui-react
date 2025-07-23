"use client";

import React from "react";

import { TypographySize } from "@/utils";
import { _defaultTypographyColor, useTypographyStyle } from "./_useTypographyStyle";
import type { TypographyParagraphProps } from "./index.types";

const TypographyParagraph = React.memo<TypographyParagraphProps>(
  ({ children, style, color = _defaultTypographyColor, ellipsis = 0, ...props }) => {
    const { fontColor, ellipsisStyles } = useTypographyStyle({ color, ellipsis });

    return (
      <p
        style={{
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: TypographySize.text,
          lineHeight: 1.5,
          color: fontColor,
          ...ellipsisStyles,
          ...style,
        }}
        {...props}
      >
        {children}
      </p>
    );
  },
);

TypographyParagraph.displayName = "Typography.Paragraph";
export default TypographyParagraph;
