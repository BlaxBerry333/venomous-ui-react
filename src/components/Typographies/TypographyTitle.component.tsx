"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useTypographyTitleStyles } from "./TypographyTitle.hooks";
import { type TypographyTitleProps, type TypographyTitleRef } from "./TypographyTitle.types";

const TypographyTitle = React.memo(
  React.forwardRef<TypographyTitleRef, TypographyTitleProps>(
    ({ className, style, as: __as = "h3", text, color, ...props }, ref) => {
      const { componentStyle } = useTypographyTitleStyles({ as: __as, color });

      const Tag = __as as React.ElementType;

      return (
        <Tag
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.TypographyTitle, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {text}
        </Tag>
      );
    },
  ),
);

TypographyTitle.displayName = COMPONENT_DISPLAY_NAMES.TypographyTitle;
export default TypographyTitle;
