"use client";

import React from "react";

import clsx from "clsx";

import { Space } from "@/components/Space";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useLayoutFooterStyles } from "./LayoutFooter.hooks";
import type { LayoutFooterProps, LayoutFooterRef } from "./LayoutFooter.types";

const LayoutFooter = React.memo(
  React.forwardRef<LayoutFooterRef, LayoutFooterProps>(
    (
      {
        className,
        style,
        children,

        renderCopyright,
        renderLinks,

        ...props
      },
      ref,
    ) => {
      const { componentStyle } = useLayoutFooterStyles();

      const copyright = renderCopyright?.();
      const links = renderLinks?.();

      return (
        <Space.Flex
          as="footer"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.LayoutFooter, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {children || (
            <>
              {copyright}
              {links}
            </>
          )}
        </Space.Flex>
      );
    },
  ),
);

LayoutFooter.displayName = COMPONENT_DISPLAY_NAMES.LayoutFooter;
export default LayoutFooter;
