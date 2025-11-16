"use client";

import React from "react";

import { FORM_FIELD_VARIANT_MAP, useFormFieldBaseActions, useFormFieldBaseStyles } from "@/components/Form/_";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import type { FormFieldPasswordProps } from "./FormFieldPassword.types";

export function useFormFieldPasswordStyles({
  variant = FORM_FIELD_VARIANT_MAP.OUTLINED,
  fullWidth = false,
  error = false,
  disabled = false,
  readOnly = false,
  isFocused,
  isHovered,
}: Partial<FormFieldPasswordProps> & {
  isFocused: boolean;
  isHovered: boolean;
}) {
  return useFormFieldBaseStyles({
    displayNames: {
      wrapper: COMPONENT_DISPLAY_NAMES.FormFieldPassword,
      input: COMPONENT_DISPLAY_NAMES.FormFieldPasswordInput,
      prefix: COMPONENT_DISPLAY_NAMES.FormFieldPasswordPrefix,
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

export function useFormFieldPasswordActions({
  value,
  onChange,
  disabled,
  readOnly,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
}: Partial<FormFieldPasswordProps>) {
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

  // ========== 密码可见性切换 ==========
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = React.useCallback(() => {
    if (!baseActions.isInteractionDisabled) {
      setShowPassword((prev) => !prev);
    }
  }, [baseActions.isInteractionDisabled]);

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

      // 密码可见性
      showPassword,
      togglePasswordVisibility,
    }),
    [
      baseActions.inputValue,
      baseActions.isFocused,
      baseActions.isHovered,
      baseActions.handleChange,
      baseActions.onFocus,
      baseActions.onBlur,
      baseActions.WrapperElementEvents,
      showPassword,
      togglePasswordVisibility,
    ],
  );
}
