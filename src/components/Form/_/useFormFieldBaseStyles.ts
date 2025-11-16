"use client";

import React from "react";

import { SEMANTIC_COLORS, type TComponentDisplayName } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { hexToRgba } from "@/tools";
import { FORM_FIELD_VARIANT_MAP } from "./FormFieldBase.types";

/**
 * FormField 基础样式参数
 */
export interface UseFormFieldBaseStylesParams {
  /** 组件 displayName，用于自定义样式 */
  displayNames: Partial<Record<"wrapper" | "input" | "prefix" | "suffix" | "dropdown", TComponentDisplayName>>;

  /** 样式参数 */
  variant: string;
  fullWidth?: boolean;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  isFocused: boolean;
  isHovered: boolean;

  /** 可选的自定义配置 */
  customConfig?: {
    /** field 的最小宽度，默认 300 */
    minWidth?: number;
    /** field Wrapper 的额外样式 */
    wrapperExtraStyles?: React.CSSProperties;
    /** field Input 的额外样式 */
    inputExtraStyles?: React.CSSProperties;
    /** field Prefix 的额外样式 */
    prefixExtraStyles?: React.CSSProperties;
    /** field Suffix 的额外样式 */
    suffixExtraStyles?: React.CSSProperties;
    /** field Dropdown 的额外样式 */
    dropdownExtraStyles?: React.CSSProperties;
  };
}

/**
 * FormField 基础样式 Hook
 */
export function useFormFieldBaseStyles({
  displayNames,
  variant,
  fullWidth = false,
  error = false,
  disabled = false,
  readOnly = false,
  isFocused,
  isHovered,
  customConfig,
}: UseFormFieldBaseStylesParams) {
  const { PaletteColors, TextColors, BackgroundColors, BorderColors, TypographySizes, ShadowStyles } =
    useThemeDesigns();

  const customStyle = useCustomStyle({ displayName: displayNames.wrapper });
  const customInputStyle = useCustomStyle({ displayName: displayNames.input });
  const customPrefixStyle = useCustomStyle({ displayName: displayNames.prefix });
  const customSuffixStyle = useCustomStyle({ displayName: displayNames.suffix });
  const customDropdownStyle = useCustomStyle({ displayName: displayNames.wrapper });

  // ========== Dynamic Styles ==========

  const DynamicVariantStyles = React.useMemo<React.CSSProperties>(() => {
    switch (variant) {
      case FORM_FIELD_VARIANT_MAP.TEXT:
        return {
          backgroundColor: "transparent",
          border: "none",
          borderRadius: 0,
        };
      case FORM_FIELD_VARIANT_MAP.OUTLINED:
      default:
        return {
          backgroundColor: BackgroundColors[1],
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: BorderColors[2],
          borderRadius: 8,
        };
    }
  }, [variant, BackgroundColors, BorderColors]);

  const DynamicStateStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled || readOnly) {
      switch (variant) {
        case FORM_FIELD_VARIANT_MAP.TEXT:
          return {
            cursor: "not-allowed",
            opacity: 0.6,
            color: TextColors.disabled,
            backgroundColor: "transparent",
          };
        default:
          return {
            cursor: "not-allowed",
            opacity: 0.6,
            color: TextColors.disabled,
            backgroundColor: BackgroundColors[2],
            borderColor: BorderColors[2],
          };
      }
    }

    return {};
  }, [disabled, readOnly, variant, BackgroundColors, BorderColors, TextColors]);

  const DynamicErrorStyles = React.useMemo<React.CSSProperties>(() => {
    if (!error) return {};
    switch (variant) {
      case FORM_FIELD_VARIANT_MAP.TEXT:
        return {
          color: SEMANTIC_COLORS.ERROR,
          backgroundColor: hexToRgba(SEMANTIC_COLORS.ERROR, 0.05),
        };
      default:
        return {
          color: SEMANTIC_COLORS.ERROR,
          borderColor: SEMANTIC_COLORS.ERROR,
        };
    }
  }, [error, variant]);

  const DynamicInteractionStyles = React.useMemo<React.CSSProperties>(() => {
    const interactionColor: string = error ? SEMANTIC_COLORS.ERROR : PaletteColors[1];

    if (isFocused) {
      if (variant === FORM_FIELD_VARIANT_MAP.TEXT) {
        return {
          color: interactionColor,
          backgroundColor: hexToRgba(interactionColor, 0.05),
          outline: "none",
        };
      } else {
        return {
          color: interactionColor,
          borderColor: interactionColor,
          backgroundColor: BackgroundColors[1],
          boxShadow: `0 0 0 2px ${hexToRgba(interactionColor, 0.2)}`,
          outline: "none",
        };
      }
    }

    if (isHovered) {
      if (variant === FORM_FIELD_VARIANT_MAP.TEXT) {
        return {
          color: interactionColor,
          backgroundColor: hexToRgba(interactionColor, 0.05),
        };
      } else {
        return {
          color: interactionColor,
          borderColor: interactionColor,
          backgroundColor: hexToRgba(interactionColor, 0.05),
        };
      }
    }

    return {};
  }, [error, isFocused, isHovered, variant, PaletteColors, BackgroundColors]);

  // ========== Composed Styles ==========

  const wrapperStyle = React.useMemo<React.CSSProperties>(
    () =>
      !displayNames.wrapper
        ? {}
        : {
            // -- default styles --
            position: "relative",
            display: "inline-flex",
            minWidth: customConfig?.minWidth ?? 300,
            maxWidth: fullWidth ? "100%" : 300,
            width: fullWidth ? "100%" : "auto",
            height: 40,
            padding: "0 8px",
            fontSize: TypographySizes.TEXT.BASE,
            color: TextColors[2],
            transition: "border-color 0.25s ease-in-out, color 0.25s ease-in-out",
            ...DynamicVariantStyles,
            ...DynamicErrorStyles,
            ...DynamicInteractionStyles,
            ...DynamicStateStyles,
            ...customConfig?.wrapperExtraStyles,

            // -- custom styles --
            ...customStyle,
          },
    [
      fullWidth,
      customConfig?.minWidth,
      TextColors,
      TypographySizes,
      DynamicVariantStyles,
      DynamicErrorStyles,
      DynamicInteractionStyles,
      DynamicStateStyles,
      displayNames.wrapper,
      customConfig?.wrapperExtraStyles,
      customStyle,
    ],
  );

  const inputStyle = React.useMemo<React.CSSProperties>(
    () =>
      !displayNames.input
        ? {}
        : {
            // -- default styles --
            boxSizing: "border-box",
            flex: 1,
            width: "100%",
            height: "100%",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            color: "inherit",
            fontSize: "inherit",
            fontFamily: "inherit",
            cursor: "inherit",
            ...customConfig?.inputExtraStyles,

            // -- custom styles --
            ...customInputStyle,
          },
    [customInputStyle, customConfig?.inputExtraStyles, displayNames.input],
  );

  const prefixStyle = React.useMemo<React.CSSProperties>(
    () =>
      !displayNames.prefix
        ? {}
        : {
            // -- default styles --
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            color: "inherit",
            ...customConfig?.prefixExtraStyles,

            // -- custom styles --
            ...customPrefixStyle,
          },
    [customPrefixStyle, customConfig?.prefixExtraStyles, displayNames.prefix],
  );

  const suffixStyle = React.useMemo<React.CSSProperties>(
    () =>
      !displayNames.suffix
        ? {}
        : {
            // -- default styles --
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            color: "inherit",
            ...customConfig?.suffixExtraStyles,

            // -- custom styles --
            ...customSuffixStyle,
          },
    [customSuffixStyle, customConfig?.suffixExtraStyles, displayNames.suffix],
  );

  const dropdownStyle = React.useMemo<React.CSSProperties>(
    () =>
      !displayNames.dropdown
        ? {}
        : {
            // -- default styles --
            boxSizing: "border-box",
            backgroundColor: BackgroundColors[1],
            borderRadius: 8,
            boxShadow: ShadowStyles[2],
            overflow: "hidden",
            padding: 4,
            overflowY: "auto",
            ...customConfig?.dropdownExtraStyles,

            // -- custom styles --
            ...customDropdownStyle,
          },
    [customDropdownStyle, BackgroundColors, ShadowStyles, customConfig?.dropdownExtraStyles, displayNames.dropdown],
  );

  return {
    wrapperStyle,
    inputStyle,
    prefixStyle,
    suffixStyle,
    dropdownStyle,
    __: {
      DynamicVariantStyles,
      DynamicStateStyles,
      DynamicErrorStyles,
      DynamicInteractionStyles,
    },
  };
}
