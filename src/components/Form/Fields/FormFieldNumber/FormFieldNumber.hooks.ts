"use client";

import React from "react";

import { FORM_FIELD_VARIANT_MAP, useFormFieldBaseActions, useFormFieldBaseStyles } from "@/components/Form/_";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import type { FormFieldNumberProps } from "./FormFieldNumber.types";

export function useFormFieldNumberStyles({
  variant = FORM_FIELD_VARIANT_MAP.OUTLINED,
  fullWidth = false,
  error = false,
  disabled = false,
  readOnly = false,
  isFocused,
  isHovered,
}: Partial<FormFieldNumberProps> & {
  isFocused: boolean;
  isHovered: boolean;
}) {
  return useFormFieldBaseStyles({
    displayNames: {
      wrapper: COMPONENT_DISPLAY_NAMES.FormFieldNumber,
      input: COMPONENT_DISPLAY_NAMES.FormFieldNumberInput,
      prefix: COMPONENT_DISPLAY_NAMES.FormFieldNumberPrefix,
      suffix: COMPONENT_DISPLAY_NAMES.FormFieldNumberSuffix,
    },
    variant,
    fullWidth,
    error,
    disabled,
    readOnly,
    isFocused,
    isHovered,
    customConfig: {
      inputExtraStyles: {
        // 隐藏原生 number input 的上下箭头
        MozAppearance: "textfield",
        WebkitAppearance: "none",
      },
    },
  });
}

export function useFormFieldNumberActions({
  value,
  onChange,
  min,
  max,
  step = 1,
  disabled,
  readOnly,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
}: Partial<FormFieldNumberProps>) {
  const baseActions = useFormFieldBaseActions({
    value,
    onChange,
    disabled,
    readOnly,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    initialValue: undefined as number | undefined,
    transformInputValue: (event) => (event.target.value === "" ? undefined : Number(event.target.value)),
  });

  // ========== 数值增减处理 ==========
  const handleIncrement = React.useCallback(() => {
    if (baseActions.isInteractionDisabled) return;

    // 当前值为 undefined 时，从 min 或 0 开始
    const currentValue = baseActions.inputValue !== undefined ? baseActions.inputValue : min !== undefined ? min : 0;
    let newValue = currentValue + step;

    // 限制最大值
    if (max !== undefined && newValue > max) {
      newValue = max;
    }

    baseActions.setInputValue(newValue);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?.(newValue, {} as any);
  }, [baseActions, step, max, min, onChange]);

  const handleDecrement = React.useCallback(() => {
    if (baseActions.isInteractionDisabled) return;

    // 当前值为 undefined 时，从 max 或 0 开始
    const currentValue = baseActions.inputValue !== undefined ? baseActions.inputValue : max !== undefined ? max : 0;
    let newValue = currentValue - step;

    // 限制最小值
    if (min !== undefined && newValue < min) {
      newValue = min;
    }

    baseActions.setInputValue(newValue);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?.(newValue, {} as any);
  }, [baseActions, step, min, max, onChange]);

  // ========== 返回对象使用 useMemo 包装，避免每次渲染创建新对象 ==========
  return React.useMemo(
    () => ({
      // 基础状态和事件
      inputValue: baseActions.inputValue,
      isFocused: baseActions.isFocused,
      isHovered: baseActions.isHovered,
      handleChange: baseActions.handleChange,
      onFocus: baseActions.onFocus,
      onBlur: baseActions.onBlur,
      WrapperElementEvents: baseActions.WrapperElementEvents,

      // 数值增减
      handleIncrement,
      handleDecrement,
    }),
    [
      baseActions.inputValue,
      baseActions.isFocused,
      baseActions.isHovered,
      baseActions.handleChange,
      baseActions.onFocus,
      baseActions.onBlur,
      baseActions.WrapperElementEvents,
      handleIncrement,
      handleDecrement,
    ],
  );
}
