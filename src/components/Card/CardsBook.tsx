"use client";

import React from "react";

import { Space } from "../Space";
import { Typography } from "../Typography";
import Card from "./Card";
import { CardTagMap, type CardsBookProps } from "./index.types";

const CardsBook = React.memo<CardsBookProps>(({ children, height = 300, width = 200, title, coverImage }) => {
  return (
    <Card
      as={CardTagMap.article}
      style={{
        height,
        width,
        padding: "16px 24px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        backgroundColor: "transparent",
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
      }}
    >
      {/* Book 内容 */}
      {children}

      {/* Book 订装线 */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 1,
          width: "16px",
          height: "100%",
          background:
            "linear-gradient(-90deg, #fff0, #ffffff1a 80%, #ffffff4d 95%, #fff6 96.5%, #cbcbcb14 98%, #6a6a6a1a)",
          borderRadius: "8px",
        }}
      />

      {/* Book 标题 */}
      <Space.Flex
        column
        style={{
          height: "max-content",
          width: "100%",
          position: "relative",
          zIndex: 1,
          left: 6,
          top: 40,
        }}
      >
        {title && (
          <Typography.Title
            text={title}
            as="h4"
            ellipsis={4}
            style={{
              lineHeight: 1.15,
              color: "#ffffff",
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
            }}
          />
        )}
      </Space.Flex>
    </Card>
  );
});

CardsBook.displayName = "Cards.Book";
export default CardsBook;
