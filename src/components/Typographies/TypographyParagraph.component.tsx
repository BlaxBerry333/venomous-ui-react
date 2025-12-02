"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useTypographyParagraphStyles } from "./TypographyParagraph.hooks";
import type { TypographyParagraphProps, TypographyParagraphRef } from "./TypographyParagraph.types";

const TypographyParagraph = React.memo(
  React.forwardRef<TypographyParagraphRef, TypographyParagraphProps>(
    (
      {
        className,
        style,
        text,
        ellipsis: propEllipsis,
        size: propSize,
        weight: propWeight,
        color: propColor,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<TypographyParagraphProps>({
        displayName: COMPONENT_DISPLAY_NAMES.TypographyParagraph,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const ellipsis = propEllipsis ?? customComponentProps.ellipsis ?? 0;
      const size = propSize ?? customComponentProps.size ?? "BASE";
      const weight = propWeight ?? customComponentProps.weight ?? "normal";
      const color = propColor ?? customComponentProps.color;

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
