"use client";

import React from "react";

import clsx from "clsx";
import { Chip } from "../Chip";
import Card from "./Card";
import { CardTagMap, type CardsTitleBlockProps } from "./index.types";

const CardsTitleBlock = React.memo<CardsTitleBlockProps>(
  ({ children, className, style, title, titleStyle, ...props }) => {
    return (
      <Card
        as={CardTagMap.article}
        variant="outlined"
        className={clsx("Venomous-UI-React--Cards.TitleBlock", className)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          padding: "24px 16px 16px",
          ...style,
        }}
        {...props}
      >
        <Chip
          text={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(8px, -50%)",
            padding: "4px 8px",
            borderRadius: "16px",
            fontWeight: "bold",
            maxWidth: "100px",
            ...titleStyle,
          }}
        />

        {children}
      </Card>
    );
  },
);

CardsTitleBlock.displayName = "Cards.TitleBlock";
export default CardsTitleBlock;
