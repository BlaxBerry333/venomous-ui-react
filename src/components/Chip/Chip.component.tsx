"use client";

import clsx from "clsx";
import React from "react";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { Typography } from "../Typographies";
import { useChipActions, useChipStyles } from "./Chip.hooks";
import type { ChipProps, ChipRef } from "./Chip.types";

const Chip = React.memo(
  React.forwardRef<ChipRef, ChipProps>(
    ({ className, style, label, StartIcon, EndIcon, variant, color, onClick, ...props }, ref) => {
      const clickable: boolean = !!onClick;

      const { isHovered, isClicked, ElementEvents } = useChipActions({
        clickable,
        onClick,
      });

      const { componentStyle } = useChipStyles({
        variant,
        clickable,
        color,
        isHovered,
        isClicked,
      });

      return (
        <Box
          as="div"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.Chip, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
          {...ElementEvents}
        >
          {StartIcon}
          <Typography.Text as="small" text={label} style={{ color: "inherit" }} />
          {EndIcon}
        </Box>
      );
    },
  ),
);

Chip.displayName = COMPONENT_DISPLAY_NAMES.Chip;
export default Chip;
