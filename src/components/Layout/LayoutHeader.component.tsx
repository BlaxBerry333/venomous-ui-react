"use client";

import React from "react";

import clsx from "clsx";

import { PageScrollProgressBar } from "@/components/Progress";
import { Space } from "@/components/Space";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useLayoutHeaderStyles } from "./LayoutHeader.hooks";
import type { LayoutHeaderProps, LayoutHeaderRef } from "./LayoutHeader.types";

const LayoutHeader = React.memo(
  React.forwardRef<LayoutHeaderRef, LayoutHeaderProps>(
    (
      {
        className,
        style,
        children,

        renderLogo,
        renderActions,

        showProgressBar: propShowProgressBar,
        ProgressBarProps,

        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<LayoutHeaderProps>({
        displayName: COMPONENT_DISPLAY_NAMES.LayoutHeader,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const showProgressBar = propShowProgressBar ?? customComponentProps.showProgressBar ?? true;

      const { componentStyle } = useLayoutHeaderStyles();

      const logo = renderLogo?.();
      const actions = renderActions?.();

      return (
        <Space.Flex
          as="header"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.LayoutHeader, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {showProgressBar && (
            <PageScrollProgressBar
              disablePortal
              style={{
                borderWidth: 0,
                borderStyle: "none",
                backgroundColor: "transparent",
                ...ProgressBarProps?.style,
              }}
              {...ProgressBarProps}
            />
          )}

          {children || (
            <>
              {logo}
              {actions}
            </>
          )}
        </Space.Flex>
      );
    },
  ),
);

LayoutHeader.displayName = COMPONENT_DISPLAY_NAMES.LayoutHeader;
export default LayoutHeader;
