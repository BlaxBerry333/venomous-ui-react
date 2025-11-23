"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useProgressBarActions, useProgressBarStyles } from "./ProgressBar.hooks";
import type { ProgressBarProps, ProgressBarRef } from "./ProgressBar.types";

const ProgressBar = React.memo(
  React.forwardRef<ProgressBarRef, ProgressBarProps>(
    ({ className, style, value, onChange, animated = false, color, ...props }, ref) => {
      const { displayValue } = useProgressBarActions({ value, onChange, animated });
      const { containerStyle, insideBarStyle } = useProgressBarStyles({
        height: 8,
        color,
        displayValue,
      });

      return (
        <Box
          as="div"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.ProgressBar, className)}
          style={{ ...containerStyle, ...style }}
          {...props}
        >
          <Box as="div" style={{ ...insideBarStyle }} />
        </Box>
      );
    },
  ),
);

ProgressBar.displayName = COMPONENT_DISPLAY_NAMES.ProgressBar;
export default ProgressBar;
