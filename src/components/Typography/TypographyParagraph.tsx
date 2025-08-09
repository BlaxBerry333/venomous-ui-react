"use client";

import clsx from "clsx";
import React from "react";

import { TypographySize } from "@/utils";
import { useTypographyStyle } from "./_useTypographyStyle";
import type { TypographyParagraphProps } from "./index.types";

const TypographyParagraph = React.memo<TypographyParagraphProps>(
  ({ children, className, style, ellipsis = 0, semanticColor, ...props }) => {
    const { fontColor, ellipsisStyles } = useTypographyStyle({ ellipsis, semanticColor });

    return (
      <p
        className={clsx("Venomous-UI-React--Typography.Paragraph", className)}
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
