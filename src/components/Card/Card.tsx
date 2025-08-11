"use client";

import clsx from "clsx";
import React from "react";

import useCardStyle from "./_useCardStyle";
import { CardTagMap, CardVariantMap, type CardProps } from "./index.types";

const Card = React.memo<CardProps>(
  ({ children, className, style, as: Tag = CardTagMap.div, variant = CardVariantMap.elevated, ...props }) => {
    const { commonStyles } = useCardStyle({ variant });

    return (
      <Tag
        className={clsx("Venomous-UI-React--Card", className)}
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          ...commonStyles,
          ...style,
        }}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Card.displayName = "Card";
export default Card;
