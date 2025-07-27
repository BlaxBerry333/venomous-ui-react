"use client";

import React from "react";

import { Buttons } from "../Button";
import { Space } from "../Space";
import { Typography } from "../Typography";
import Card from "./Card";
import type { CardsProductProps } from "./index.types";

const CardsProduct = React.memo<CardsProductProps>(({ children, title = "", description = "" }) => {
  return (
    <Card style={{ position: "relative" }}>
      {(title || description) && (
        <Space.Flex column gap={2} style={{ paddingRight: "48px" }}>
          <Typography.Title as="h6" text={title} ellipsis={1} />
          <Typography.Paragraph ellipsis={3}>{description}</Typography.Paragraph>
        </Space.Flex>
      )}

      <Buttons.Icon
        icon="solar:hamburger-menu-line-duotone"
        variant="ghost"
        style={{ position: "absolute", top: "4px", right: "4px" }}
      />

      {children && <Space.Flex column>{children}</Space.Flex>}
    </Card>
  );
});

CardsProduct.displayName = "Cards.Product";
export default CardsProduct;
