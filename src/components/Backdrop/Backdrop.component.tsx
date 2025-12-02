"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useBackdropStyles } from "./Backdrop.hooks";
import type { BackdropProps, BackdropRef } from "./Backdrop.types";

const Backdrop = React.memo(
  React.forwardRef<BackdropRef, BackdropProps>(
    ({ className, style, children, open: propOpen, opacity: propOpacity, ...props }, ref) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<BackdropProps>({
        displayName: COMPONENT_DISPLAY_NAMES.Backdrop,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const open = propOpen ?? customComponentProps.open ?? false;
      const opacity = propOpacity ?? customComponentProps.opacity;

      const { componentStyle } = useBackdropStyles({ open, opacity });

      return (
        <Box
          as="div"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.Backdrop, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {children}
        </Box>
      );
    },
  ),
);

Backdrop.displayName = COMPONENT_DISPLAY_NAMES.Backdrop;

export default Backdrop;
