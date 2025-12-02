"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useTypographyTitleStyles } from "./TypographyTitle.hooks";
import { type TypographyTitleProps, type TypographyTitleRef } from "./TypographyTitle.types";

const TypographyTitle = React.memo(
  React.forwardRef<TypographyTitleRef, TypographyTitleProps>(
    ({ className, style, as: propAs, text, color: propColor, ...props }, ref) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<TypographyTitleProps>({
        displayName: COMPONENT_DISPLAY_NAMES.TypographyTitle,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const __as = propAs ?? customComponentProps.as ?? "h3";
      const color = propColor ?? customComponentProps.color;

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
