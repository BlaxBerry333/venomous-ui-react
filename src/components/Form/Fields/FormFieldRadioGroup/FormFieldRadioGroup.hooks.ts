"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useElementHoverEvents, useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { hexToRgba } from "@/tools";
import { FORM_FIELD_RADIO_GROUP_DIRECTION_MAP, type FormFieldRadioGroupProps } from "./FormFieldRadioGroup.types";

// ============================
// useFormFieldRadioGroupActions
// ============================
export function useFormFieldRadioGroupActions<T = string>({
  value,
  defaultValue,
  onChange,
  disabled,
}: Pick<FormFieldRadioGroupProps<T>, "value" | "defaultValue" | "onChange" | "disabled">) {
  // ========== 内部状态 ==========
  const [internalValue, setInternalValue] = React.useState<T | undefined>(value ?? defaultValue);

  // 判断是否为受控模式
  const isControlled = value !== undefined;

  // 同步受控模式的值
  React.useEffect(() => {
    if (isControlled) {
      setInternalValue(value);
    }
  }, [isControlled, value]);

  // ========== 事件处理 ==========
  const handleChange = React.useCallback(
    (optionValue: T, event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      if (!isControlled) {
        setInternalValue(optionValue);
      }

      onChange?.(optionValue, event);
    },
    [disabled, isControlled, onChange],
  );

  return React.useMemo(
    () => ({
      internalValue,
      handleChange,
    }),
    [internalValue, handleChange],
  );
}

// ============================
// useFormFieldRadioItemActions
// ============================
export function useFormFieldRadioItemActions({ disabled }: { disabled?: boolean }) {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = React.useCallback(() => {
    if (!disabled) {
      setIsFocused(true);
    }
  }, [disabled]);

  const handleBlur = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  const { isHovered, MouseEnterEvent, MouseLeaveEvent } = useElementHoverEvents<HTMLLabelElement>({
    disabled,
  });

  return React.useMemo(
    () => ({
      isFocused,
      isHovered,
      handleFocus,
      handleBlur,
      LabelElementEvents: {
        onMouseEnter: MouseEnterEvent,
        onMouseLeave: MouseLeaveEvent,
      },
    }),
    [isFocused, isHovered, handleFocus, handleBlur, MouseEnterEvent, MouseLeaveEvent],
  );
}

// ============================
// useFormFieldRadioGroupStyles
// ============================
export function useFormFieldRadioGroupStyles({
  direction = FORM_FIELD_RADIO_GROUP_DIRECTION_MAP.VERTICAL,
  spacing = 8,
}: Pick<FormFieldRadioGroupProps, "direction" | "spacing">) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.FormFieldRadioGroup });

  const groupStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default styles --
      display: "flex",
      flexDirection: direction === FORM_FIELD_RADIO_GROUP_DIRECTION_MAP.VERTICAL ? "column" : "row",
      flexWrap: "wrap",
      gap: spacing,

      // -- custom styles --
      ...customStyle,
    }),
    [direction, spacing, customStyle],
  );

  return { groupStyle };
}

// ============================
// useFormFieldRadioItemStyles
// ============================
export function useFormFieldRadioItemStyles({
  checked,
  disabled = false,
  isHovered,
  isFocused,
}: {
  checked: boolean;
  disabled?: boolean;
  isHovered: boolean;
  isFocused: boolean;
}) {
  const { PaletteColors, TextColors, BorderColors } = useThemeDesigns();
  const customLabelStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.FormFieldRadioItem });
  const customRadioStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.FormFieldRadioItemRadio });

  // ========== 主题色 ==========
  const themeColor = PaletteColors[1];

  // ========== Label 样式 ==========
  const labelColor = React.useMemo(() => {
    if (disabled) return TextColors.disabled;
    return TextColors[1];
  }, [disabled, TextColors]);

  const labelStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default styles --
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      color: labelColor,
      fontSize: 14,
      transition: "color 0.2s ease-in-out",
      userSelect: "none",

      // -- custom styles --
      ...customLabelStyle,
    }),
    [disabled, labelColor, customLabelStyle],
  );

  // ========== Radio 样式 ==========
  const DynamicRadioVariantStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      borderColor: checked ? themeColor : BorderColors[2],
      backgroundColor: "transparent",
    };
  }, [checked, themeColor, BorderColors]);

  const DynamicRadioInteractionStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled) return {};

    // Focus 状态（优先级最高）
    if (isFocused) {
      return {
        boxShadow: `0 0 0 3px ${hexToRgba(themeColor, 0.25)}`,
        borderColor: themeColor,
        outline: "none",
      };
    }

    // Hover 状态
    if (isHovered) {
      return {
        borderColor: themeColor,
        filter: "brightness(1.1)",
      };
    }

    return {};
  }, [disabled, isFocused, isHovered, themeColor]);

  const radioStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default styles --
      boxSizing: "border-box",
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: "50%",
      borderWidth: 2,
      borderStyle: "solid",
      flexShrink: 0,
      transition: "all 0.2s ease-in-out",
      ...DynamicRadioVariantStyles,
      ...DynamicRadioInteractionStyles,

      // -- custom styles --
      ...customRadioStyle,
    }),
    [DynamicRadioVariantStyles, DynamicRadioInteractionStyles, customRadioStyle],
  );

  // ========== Radio 内部圆点样式 ==========
  const radioDotStyle = React.useMemo<React.CSSProperties>(
    () => ({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: checked ? themeColor : "transparent",
      transition: "background-color 0.2s ease-in-out",
    }),
    [checked, themeColor],
  );

  return {
    labelStyle,
    radioStyle,
    radioDotStyle,
    __: {
      DynamicRadioVariantStyles,
      DynamicRadioInteractionStyles,
    },
  };
}
