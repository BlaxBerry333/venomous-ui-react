"use client";

import clsx from "clsx";
import React from "react";

import { Avatar } from "@/components/Avatar";
import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { Typography } from "../Typographies";
import { useChipActions, useChipStyles } from "./Chip.hooks";
import type { ChipProps, ChipRef } from "./Chip.types";

const Chip = React.memo(
  React.forwardRef<ChipRef, ChipProps>(({ className, style, text, AvatarProps, color, onClick, ...props }, ref) => {
    const clickable: boolean = !!onClick;

    const { isHovered, isClicked, ElementEvents } = useChipActions({
      clickable,
      onClick,
    });

    const { componentStyle } = useChipStyles({
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
        {AvatarProps && <Avatar {...AvatarProps} width={20} style={{ marginLeft: -8, ...AvatarProps.style }} />}
        <Typography.Text as="small" text={text} style={{ color: "inherit" }} />
      </Box>
    );
  }),
);

Chip.displayName = COMPONENT_DISPLAY_NAMES.Chip;
export default Chip;
