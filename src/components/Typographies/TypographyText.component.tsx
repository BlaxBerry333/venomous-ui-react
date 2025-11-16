"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useTypographyTextStyles } from "./TypographyText.hooks";
import { type TypographyTextProps, type TypographyTextRef } from "./TypographyText.types";

const TypographyText = React.memo(
  React.forwardRef<TypographyTextRef, TypographyTextProps>(
    ({ className, style, as: __as = "span", text, color, ...props }, ref) => {
      const { componentStyle } = useTypographyTextStyles({ as: __as, color });

      const Tag = __as as React.ElementType;

      return (
        <Tag
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.TypographyText, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {text}
        </Tag>
      );
    },
  ),
);

TypographyText.displayName = COMPONENT_DISPLAY_NAMES.TypographyText;
export default TypographyText;
