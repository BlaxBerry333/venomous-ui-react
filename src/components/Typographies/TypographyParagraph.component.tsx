"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useTypographyParagraphStyles } from "./TypographyParagraph.hooks";
import type { TypographyParagraphProps, TypographyParagraphRef } from "./TypographyParagraph.types";

const TypographyParagraph = React.memo(
  React.forwardRef<TypographyParagraphRef, TypographyParagraphProps>(
    ({ className, style, text, ellipsis = 0, size = "BASE", weight = "normal", color, ...props }, ref) => {
      const { componentStyle } = useTypographyParagraphStyles({ ellipsis, size, weight, color });

      return (
        <p
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.TypographyParagraph, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {text}
        </p>
      );
    },
  ),
);

TypographyParagraph.displayName = COMPONENT_DISPLAY_NAMES.TypographyParagraph;
export default TypographyParagraph;
