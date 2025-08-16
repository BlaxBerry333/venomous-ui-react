"use client";

import clsx from "clsx";
import React from "react";

import { Buttons } from "../Button";
import { Space } from "../Space";
import { Typography } from "../Typography";
import Card from "./Card";
import { CardTagMap, type CardsProductProps } from "./index.types";

const Popover = React.lazy(() => import("../Popover").then((module) => ({ default: module.Popover })));

const CardsProduct = React.memo<CardsProductProps>(({ className, title = "", description = "", renderMenu }) => {
  return (
    <Card
      as={CardTagMap.article}
      className={clsx("Venomous-UI-React--Cards.Book", className)}
      style={{ position: "relative" }}
    >
      {(title || description) && (
        <Space.Flex column gap={2} style={{ paddingRight: "48px" }}>
          <Typography.Title as="h6" text={title} ellipsis={1} />
          <Typography.Paragraph ellipsis={3}>{description}</Typography.Paragraph>
        </Space.Flex>
      )}

      <React.Suspense fallback={null}>
        <Popover
          direction="left"
          renderTrigger={({ isOpen }) => (
            <Buttons.Icon
              icon="solar:hamburger-menu-line-duotone"
              variant="ghost"
              isDisabled={isOpen}
              style={{ boxShadow: "none" }}
            />
          )}
          style={{
            position: "absolute",
            top: "4px",
            right: "4px",
            zIndex: 1,
          }}
        >
          {renderMenu?.()}
        </Popover>
      </React.Suspense>
    </Card>
  );
});

CardsProduct.displayName = "Cards.Product";
export default CardsProduct;
