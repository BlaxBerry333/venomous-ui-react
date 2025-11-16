"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES, SEMANTIC_COLORS } from "@/constants";
import { useBadgeStyles } from "./Badge.hooks";
import { type BadgeProps, type BadgeRef, BADGE_PLACEMENT_MAP, BADGE_VARIANT_MAP } from "./Badge.types";

const Badge = React.memo(
  React.forwardRef<BadgeRef, BadgeProps>(
    (
      {
        className,
        style,
        children,
        text,
        variant = BADGE_VARIANT_MAP.TEXT,
        placement = BADGE_PLACEMENT_MAP.TOP_RIGHT,
        offset = 65,
        color = SEMANTIC_COLORS.ERROR,
        ...props
      },
      ref,
    ) => {
      // ========== 判断模式 ==========
      const isStandalone = !children;

      const { componentStyle } = useBadgeStyles({ variant, placement, offset, color, isStandalone });

      // ========== 独立模式（无 children）==========
      if (isStandalone) {
        return (
          <Typography.Text
            as="strong"
            ref={ref}
            className={clsx(COMPONENT_CLASSNAME_NAMES.Badge, className)}
            style={{ ...componentStyle, ...style }}
            text={String(text || "")}
            {...props}
          />
        );
      }

      // ========== 包裹模式（有 children）==========
      return (
        <Box
          as="div"
          className={clsx(COMPONENT_CLASSNAME_NAMES.BadgeContainer)}
          style={{ position: "relative", display: "inline-block" }}
        >
          <Typography.Text
            as="strong"
            ref={ref}
            className={clsx(COMPONENT_CLASSNAME_NAMES.Badge, className)}
            style={{ ...componentStyle, ...style }}
            text={variant === BADGE_VARIANT_MAP.TEXT ? String(text || "") : ""}
            {...props}
          />

          {children}
        </Box>
      );
    },
  ),
);

Badge.displayName = COMPONENT_DISPLAY_NAMES.Badge;
export default Badge;
