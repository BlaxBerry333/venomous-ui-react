"use client";

import clsx from "clsx";
import React from "react";

import { Backdrop } from "@/components/Backdrop";
import { Box } from "@/components/Box";
import { Portal } from "@/components/Portal";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useDrawerActions, useDrawerStyles } from "./Drawer.hooks";
import { type DrawerProps, type DrawerRef } from "./Drawer.types";

const Drawer = React.memo(
  React.forwardRef<DrawerRef, DrawerProps>(
    (
      {
        className,
        style,
        children,
        as: __as = "div",
        open = false,
        placement = "left",
        onClickBackdrop,
        autoCloseOnClickBackdrop = true,
        ...props
      },
      ref,
    ) => {
      const { componentStyle } = useDrawerStyles({ open, placement });
      const { handleBackdropClick } = useDrawerActions({
        autoCloseOnClickBackdrop,
        onClickBackdrop,
      });

      return (
        <Portal>
          <Backdrop open={open} onClick={handleBackdropClick}>
            <Box
              as={__as}
              ref={ref}
              className={clsx(COMPONENT_CLASSNAME_NAMES.Drawer, className)}
              style={{ ...componentStyle, ...style }}
              {...props}
            >
              {children}
            </Box>
          </Backdrop>
        </Portal>
      );
    },
  ),
);

Drawer.displayName = COMPONENT_DISPLAY_NAMES.Drawer;
export default Drawer;
