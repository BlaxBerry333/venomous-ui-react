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

        Copyright,
        Links,

        ...props
      },
      ref,
    ) => {
      const { componentStyle } = useLayoutFooterStyles();

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
              {Copyright}
              {Links}
            </>
          )}
        </Space.Flex>
      );
    },
  ),
);

LayoutFooter.displayName = COMPONENT_DISPLAY_NAMES.LayoutFooter;
export default LayoutFooter;
