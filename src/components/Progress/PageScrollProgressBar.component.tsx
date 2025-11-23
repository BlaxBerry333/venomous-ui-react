"use client";

import React from "react";

import clsx from "clsx";

import { Portal } from "@/components/Portal";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { usePageScrollProgressActions, usePageScrollProgressBarStyles } from "./PageScrollProgressBar.hooks";
import type { PageScrollProgressBarProps, PageScrollProgressBarRef } from "./PageScrollProgressBar.types";
import ProgressBar from "./ProgressBar.component";

const PageScrollProgressBar = React.memo(
  React.forwardRef<PageScrollProgressBarRef, PageScrollProgressBarProps>(
    ({ className, style, color, disablePortal = false, ...props }, ref) => {
      const { displayValue } = usePageScrollProgressActions();
      const { containerStyle } = usePageScrollProgressBarStyles({ color, disablePortal });

      const progressBar = (
        <ProgressBar
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar, className)}
          style={{ ...containerStyle, ...style }}
          value={displayValue}
          color={color}
          animated={false}
          {...props}
        />
      );

      // 如果禁用 Portal，直接渲染
      if (disablePortal) {
        return progressBar;
      }

      // 默认使用 Portal 渲染到 body
      return <Portal>{progressBar}</Portal>;
    },
  ),
);

PageScrollProgressBar.displayName = COMPONENT_DISPLAY_NAMES.PageScrollProgressBar;
export default PageScrollProgressBar;
