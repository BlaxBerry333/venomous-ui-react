"use client";

import clsx from "clsx";
import React from "react";

import { useDesign } from "@/hooks";
import { TEXT_COLORS } from "@/utils/design";
import { Icon } from "../Icon";
import { Space } from "../Space";
import { Theme } from "../Theme";
import { Typography } from "../Typography";
import type { ChipProps } from "./index.types";

const Chip = React.memo<ChipProps>(
  ({ text, isDisabled, className, style, closeIcon, closeIconPosition = "end", onClose }) => {
    const { themeColor } = Theme.useThemeColor();
    const design = useDesign();

    return (
      <Space.Flex
        gap={4}
        className={clsx("Venomous-UI-React--Chip", className)}
        style={{
          WebkitTapHighlightColor: "transparent",
          width: "max-content",
          alignItems: "center",
          flexDirection: closeIconPosition === "start" ? "row" : "row-reverse",
          justifyContent: closeIcon ? "space-between" : "center",
          cursor: isDisabled ? "not-allowed" : "default",
          borderRadius: "12px",
          padding: "2px 8px",
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: design.BorderColors.tertiary,
          boxShadow: design.Shadows.tertiary,
          backgroundColor: themeColor,
          color: TEXT_COLORS["dark"].primary,
          ...style,
        }}
      >
        {closeIcon && <Icon icon={closeIcon} onClick={onClose} style={{ color: "inherit", cursor: "pointer" }} />}
        <Typography.Text as="small" text={text} isEllipsis style={{ color: "inherit", fontWeight: "inherit" }} />
      </Space.Flex>
    );
  },
);

Chip.displayName = "Chip";
export default Chip;
