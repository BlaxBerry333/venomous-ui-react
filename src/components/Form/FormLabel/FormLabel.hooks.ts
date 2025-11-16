"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES, SEMANTIC_COLORS } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { FormLabelProps } from "./FormLabel.types";

export function useFormLabelStyles({ disabled, isError }: Pick<FormLabelProps, "disabled" | "isError">) {
  const { TextColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.FormLabel });

  const DynamicColor = React.useMemo<string>(() => {
    if (disabled) return TextColors.disabled;
    if (isError) return SEMANTIC_COLORS.ERROR;
    return TextColors[2];
  }, [disabled, isError, TextColors.disabled]);

  const DynamicCursor = React.useMemo<string>(() => {
    return disabled ? "not-allowed" : "pointer";
  }, [disabled]);

  return {
    componentStyle: customStyle,
    __: {
      DynamicColor,
      DynamicCursor,
    },
  };
}
