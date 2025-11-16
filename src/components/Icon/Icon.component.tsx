"use client";

import React from "react";

import { Icon as Iconify } from "@iconify/react";
import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants/names";
import { useIconStyles } from "./Icon.hooks";
import type { IconProps, IconRef } from "./Icon.types";

const Icon = React.memo(
  React.forwardRef<IconRef, IconProps>(({ className, style, width = 24, color, ...props }, ref) => {
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
