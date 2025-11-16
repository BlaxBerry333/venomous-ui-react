"use client";

import React from "react";

import { useCardStyles } from "@/components/Cards/Card.hooks";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { DialogProps } from "./Dialog.types";

export function useDialogStyles() {
  const { TextColors, ShadowStyles } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Dialog });

  const __cardStyles = useCardStyles({ variant: "contained", clickable: false });

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default style --
      ...__cardStyles.componentStyle,
      userSelect: "text",
      position: "relative",
      overflow: "auto",
      boxShadow: ShadowStyles[2],

      // -- custom style --
      ...customStyle,
    }),
    [__cardStyles.componentStyle, TextColors, ShadowStyles, customStyle],
  );

  return {
    componentStyle,
  };
}

export function useDialogActions({ autoCloseOnClickBackdrop, onClickBackdrop }: Partial<DialogProps>) {
  const handleBackdropClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target !== event.currentTarget) return;
      if (!autoCloseOnClickBackdrop) return;
      onClickBackdrop?.(event);
    },
    [autoCloseOnClickBackdrop, onClickBackdrop],
  );

  return {
    handleBackdropClick,
  };
}
