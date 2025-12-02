"use client";

import clsx from "clsx";
import React from "react";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { Typography } from "../Typographies";
import { useChipActions, useChipStyles } from "./Chip.hooks";
import type { ChipProps, ChipRef } from "./Chip.types";

const Chip = React.memo(
  React.forwardRef<ChipRef, ChipProps>(
    (
      {
        className,
        style,
        label: propLabel,
        StartIcon,
        EndIcon,
        variant: propVariant,
        color: propColor,
        onClick,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<ChipProps>({
        displayName: COMPONENT_DISPLAY_NAMES.Chip,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const label = propLabel ?? customComponentProps.label;
      const variant = propVariant ?? customComponentProps.variant;
      const color = propColor ?? customComponentProps.color;

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
