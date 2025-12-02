"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useTypographyTextStyles } from "./TypographyText.hooks";
import { type TypographyTextProps, type TypographyTextRef } from "./TypographyText.types";

const TypographyText = React.memo(
  React.forwardRef<TypographyTextRef, TypographyTextProps>(
    ({ className, style, as: propAs, text, color: propColor, ...props }, ref) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<TypographyTextProps>({
        displayName: COMPONENT_DISPLAY_NAMES.TypographyText,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const __as = propAs ?? customComponentProps.as ?? "span";
      const color = propColor ?? customComponentProps.color;

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
