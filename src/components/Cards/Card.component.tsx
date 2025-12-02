"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useCardStyles } from "./Card.hooks";
import { type CardProps, type CardRef, CARD_VARIANT_MAP } from "./Card.types";

const Card = React.memo(
  React.forwardRef<CardRef, CardProps>(
    ({ className, style, variant: propVariant, children, onClick, as: propAs, ...props }, ref) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<CardProps>({
        displayName: COMPONENT_DISPLAY_NAMES.Card,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const variant = propVariant ?? customComponentProps.variant ?? CARD_VARIANT_MAP.CONTAINED;
      const as = propAs ?? customComponentProps.as ?? "div";

      const clickable: boolean = !!onClick;

      const { componentStyle } = useCardStyles({ variant, clickable });

      return (
        <Box
          as={as}
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.Card, className)}
          style={{ ...componentStyle, ...style }}
          onClick={onClick}
          {...props}
        >
          {children}
        </Box>
      );
    },
  ),
);

Card.displayName = COMPONENT_DISPLAY_NAMES.Card;
export default Card;
