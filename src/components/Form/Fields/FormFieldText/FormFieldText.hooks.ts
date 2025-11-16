"use client";

import React from "react";

import { FORM_FIELD_VARIANT_MAP, useFormFieldBaseActions, useFormFieldBaseStyles } from "@/components/Form/_";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import type { FormFieldTextProps } from "./FormFieldText.types";

export function useFormFieldTextStyles({
  variant = FORM_FIELD_VARIANT_MAP.OUTLINED,
  fullWidth = false,
  error = false,
  disabled = false,
  readOnly = false,
  isFocused,
  isHovered,
}: Partial<FormFieldTextProps> & {
  isFocused: boolean;
  isHovered: boolean;
}) {
  return useFormFieldBaseStyles({
    displayNames: {
      wrapper: COMPONENT_DISPLAY_NAMES.FormFieldText,
      input: COMPONENT_DISPLAY_NAMES.FormFieldTextInput,
      prefix: COMPONENT_DISPLAY_NAMES.FormFieldTextPrefix,
      suffix: COMPONENT_DISPLAY_NAMES.FormFieldTextSuffix,
    },
    variant,
    fullWidth,
    error,
    disabled,
    readOnly,
    isFocused,
    isHovered,
  });
}

export function useFormFieldTextActions({
  value,
  onChange,
  disabled,
  readOnly,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
}: Partial<FormFieldTextProps>) {
  const baseActions = useFormFieldBaseActions({
    value,
    onChange,
    disabled,
    readOnly,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    initialValue: "",
    transformInputValue: (event) => event.target.value,
  });

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
    }),
    [
      baseActions.inputValue,
      baseActions.isFocused,
      baseActions.isHovered,
      baseActions.handleChange,
      baseActions.onFocus,
      baseActions.onBlur,
      baseActions.WrapperElementEvents,
    ],
  );
}
