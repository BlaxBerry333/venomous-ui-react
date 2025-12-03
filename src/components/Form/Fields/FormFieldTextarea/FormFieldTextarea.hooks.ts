"use client";

import React from "react";

import { FORM_FIELD_VARIANT_MAP, useFormFieldBaseStyles } from "@/components/Form/_";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useElementHoverEvents, useElementMouseEvents, useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { FormFieldTextareaProps } from "./FormFieldTextarea.types";

// ============================
// useFormFieldTextareaActions
// ============================
export function useFormFieldTextareaActions({
  value,
  onChange,
  disabled,
  readOnly,
  autoSize,
  minRows,
  maxRows,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
}: Pick<FormFieldTextareaProps, "value" | "onChange" | "disabled" | "readOnly" | "autoSize" | "minRows" | "maxRows"> & {
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
}) {
  const [inputValue, setInputValue] = React.useState<string>(value ?? "");
  const [isFocused, setIsFocused] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

  // disabled、readOnly 状态下禁用交互
  const isInteractionDisabled = disabled || readOnly;

  // 同步外部 value（受控模式）
  React.useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  // ========== Auto Size 逻辑 ==========
  const adjustHeight = React.useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea || !autoSize) return;

    // 获取行高
    const computedStyle = window.getComputedStyle(textarea);
    const lineHeight = parseFloat(computedStyle.lineHeight) || 20;
    const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
    const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
    const borderTop = parseFloat(computedStyle.borderTopWidth) || 0;
    const borderBottom = parseFloat(computedStyle.borderBottomWidth) || 0;

    // 计算最小和最大高度
    const minHeight = minRows ? minRows * lineHeight + paddingTop + paddingBottom + borderTop + borderBottom : 0;
    const maxHeight = maxRows ? maxRows * lineHeight + paddingTop + paddingBottom + borderTop + borderBottom : Infinity;

    // 重置高度以获取实际内容高度
    textarea.style.height = "auto";
    const scrollHeight = textarea.scrollHeight;

    // 应用高度限制
    const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
    textarea.style.height = `${newHeight}px`;
  }, [autoSize, minRows, maxRows]);

  // 值变化时调整高度
  React.useEffect(() => {
    adjustHeight();
  }, [inputValue, adjustHeight]);

  // ========== 输入处理 ==========
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (isInteractionDisabled) return;

      const newValue = event.target.value;
      setInputValue(newValue);
      onChange?.(newValue, event);
    },
    [isInteractionDisabled, onChange],
  );

  // ========== 焦点处理 ==========
  const handleFocus = React.useCallback(() => {
    if (!isInteractionDisabled) {
      setIsFocused(true);
    }
  }, [isInteractionDisabled]);

  const handleBlur = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  // ========== Hover 和 Active 处理（使用全局 hooks）==========
  const { isHovered, MouseEnterEvent, MouseLeaveEvent } = useElementHoverEvents<HTMLDivElement>({
    disabled: isInteractionDisabled,
    onMouseEnter,
    onMouseLeave,
  });

  const { MouseDownEvent, MouseUpEvent } = useElementMouseEvents<HTMLDivElement>({
    disabled: isInteractionDisabled,
    onMouseDown,
    onMouseUp,
  });

  // 组合 MouseLeave 和 MouseUp 事件
  const combinedMouseLeave = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      MouseLeaveEvent(e);
      MouseUpEvent(e);
    },
    [MouseLeaveEvent, MouseUpEvent],
  );

  // ========== 返回对象使用 useMemo 包装 ==========
  return React.useMemo(
    () => ({
      // Ref
      textareaRef,

      // 状态
      inputValue,
      isFocused,
      isHovered,

      // Textarea 事件
      handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,

      // Wrapper 事件
      WrapperElementEvents: {
        onMouseEnter: MouseEnterEvent,
        onMouseLeave: combinedMouseLeave,
        onMouseDown: MouseDownEvent,
        onMouseUp: MouseUpEvent,
      },
    }),
    [
      inputValue,
      isFocused,
      isHovered,
      handleChange,
      handleFocus,
      handleBlur,
      MouseEnterEvent,
      combinedMouseLeave,
      MouseDownEvent,
      MouseUpEvent,
    ],
  );
}

// ============================
// useFormFieldTextareaStyles
// ============================
export function useFormFieldTextareaStyles({
  variant = FORM_FIELD_VARIANT_MAP.OUTLINED,
  fullWidth = false,
  error = false,
  disabled = false,
  readOnly = false,
  isFocused,
  isHovered,
}: Pick<FormFieldTextareaProps, "variant" | "fullWidth" | "error" | "disabled" | "readOnly"> & {
  isFocused: boolean;
  isHovered: boolean;
}) {
  const { TypographyLineHeights } = useThemeDesigns();

  // 复用 FormFieldBase 的样式逻辑
  const baseStyles = useFormFieldBaseStyles({
    displayNames: {
      wrapper: COMPONENT_DISPLAY_NAMES.FormFieldTextarea,
      input: COMPONENT_DISPLAY_NAMES.FormFieldTextareaInput,
    },
    variant,
    fullWidth,
    error,
    disabled,
    readOnly,
    isFocused,
    isHovered,
    customConfig: {
      // Textarea 不需要固定高度
      wrapperExtraStyles: {
        height: "auto",
        minHeight: "auto",
        alignItems: "stretch",
      },
    },
  });

  const customTextareaStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.FormFieldTextareaInput });

  // Textarea 特有样式
  const textareaStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default styles --
      ...baseStyles.inputStyle,
      resize: "none",
      lineHeight: TypographyLineHeights.TEXT.BASE,
      padding: "8px 0",
      verticalAlign: "top",

      // -- custom styles --
      ...customTextareaStyle,
    }),
    [baseStyles.inputStyle, TypographyLineHeights, customTextareaStyle],
  );

  return {
    wrapperStyle: baseStyles.wrapperStyle,
    textareaStyle,
    __: baseStyles.__,
  };
}
