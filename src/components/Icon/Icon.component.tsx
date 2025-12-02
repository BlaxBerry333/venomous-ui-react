"use client";

import React from "react";

import { Icon as Iconify } from "@iconify/react";
import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants/names";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useIconStyles } from "./Icon.hooks";
import type { IconProps, IconRef } from "./Icon.types";

const Icon = React.memo(
  React.forwardRef<IconRef, IconProps>(({ className, style, width: propWidth, color: propColor, ...props }, ref) => {
    // ========== 获取 customComponentProps ==========
    const customComponentProps = useCustomComponentProps<IconProps>({
      displayName: COMPONENT_DISPLAY_NAMES.Icon,
    });

    // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
    const width = propWidth ?? customComponentProps.width ?? 24;
    const color = propColor ?? customComponentProps.color;

    const { componentStyle } = useIconStyles({ width, color });

    return (
      <Iconify
        ref={ref}
        className={clsx(COMPONENT_CLASSNAME_NAMES.Icon, className)}
        style={{ ...componentStyle, ...style }}
        {...props}
      />
    );
  }),
);

Icon.displayName = COMPONENT_DISPLAY_NAMES.Icon;
export default Icon;
