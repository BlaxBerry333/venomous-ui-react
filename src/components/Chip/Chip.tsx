"use client";

import clsx from "clsx";
import React from "react";

import { BackgroundColors, BorderColors, Shadows, TextColors, ThemeMode } from "@/utils";
import { Icon } from "../Icon";
import { Space } from "../Space";
import { Theme } from "../Theme";
import { Typography } from "../Typography";
import type { ChipProps } from "./index.types";

const Chip = React.memo<ChipProps>(
  ({ text, isDisabled, className, style, closeIcon, closeIconPosition = "end", onClose }) => {
    const { themeMode } = Theme.useThemeMode();

    return (
      <Space.Flex
        row
        gap={4}
        className={clsx("Venomous-UI-React--Chip", className)}
        style={{
          width: "max-content",
          alignItems: "center",
          flexDirection: closeIconPosition === "start" ? "row" : "row-reverse",
          cursor: isDisabled ? "not-allowed" : "default",
          borderRadius: "12px",
          padding: "2px 8px",
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: BorderColors[themeMode].primary,
          boxShadow: Shadows[themeMode].tertiary,
          backgroundColor: BackgroundColors[themeMode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark].secondary,
          color: TextColors[themeMode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark].primary,
          ...style,
        }}
      >
        {closeIcon && <Icon icon={closeIcon} onClick={onClose} style={{ color: "inherit", cursor: "pointer" }} />}
        <Typography.Text as="small" text={text} isEllipsis style={{ color: "inherit" }} />
      </Space.Flex>
    );
  },
);

Chip.displayName = "Chip";
export default Chip;
