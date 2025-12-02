"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useBoxStyles } from "./Box.hooks";
import type { BoxProps, BoxRef } from "./Box.types";

const Box = React.memo(
  React.forwardRef<BoxRef, BoxProps>(({ className, style, as: propAs, maxWidth: propMaxWidth, ...props }, ref) => {
    // ========== 获取 customComponentProps ==========
    const customComponentProps = useCustomComponentProps<BoxProps>({
      displayName: COMPONENT_DISPLAY_NAMES.Box,
    });

    // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
    const __as = propAs ?? customComponentProps.as ?? "div";
    const maxWidth = propMaxWidth ?? customComponentProps.maxWidth;

    const { componentStyle } = useBoxStyles({ maxWidth });

    const Tag = __as as React.ElementType;

    return (
      <Tag
        ref={ref}
        className={clsx(COMPONENT_CLASSNAME_NAMES.Box, className)}
        style={{ ...componentStyle, ...style }}
        {...props}
      />
    );
  }),
);

Box.displayName = COMPONENT_DISPLAY_NAMES.Box;
export default Box;
