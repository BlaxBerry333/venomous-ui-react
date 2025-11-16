"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useCardStyles } from "./Card.hooks";
import { type CardProps, type CardRef, CARD_VARIANT_MAP } from "./Card.types";

const Card = React.memo(
  React.forwardRef<CardRef, CardProps>(
    ({ className, style, variant = CARD_VARIANT_MAP.CONTAINED, children, onClick, as = "div", ...props }, ref) => {
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
