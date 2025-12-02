"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useDividerStyles } from "./Divider.hooks";
import type { DividerProps, DividerRef } from "./Divider.types";

const Divider = React.memo(
  React.forwardRef<DividerRef, DividerProps>(({ className, style, column: propColumn, ...props }, ref) => {
    // ========== 获取 customComponentProps ==========
    const customComponentProps = useCustomComponentProps<DividerProps>({
      displayName: COMPONENT_DISPLAY_NAMES.Divider,
    });

    // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
    const column = propColumn ?? customComponentProps.column ?? false;

    const { componentStyle } = useDividerStyles({ column });

    return (
      <hr
        ref={ref}
        className={clsx(COMPONENT_CLASSNAME_NAMES.Divider, className)}
        style={{ ...componentStyle, ...style }}
        {...props}
      />
    );
  }),
);

Divider.displayName = COMPONENT_DISPLAY_NAMES.Divider;
export default Divider;
