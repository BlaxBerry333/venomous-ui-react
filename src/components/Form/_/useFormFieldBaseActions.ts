"use client";

import React from "react";

import { useElementHoverEvents, useElementMouseEvents } from "@/hooks";

/**
 * FormField 基础 Actions 参数
 */
export interface UseFormFieldBaseActionsParams<TValue> {
  /** 当前值 */
  value?: TValue;
  /** 值变化回调 */
  onChange?: (value: TValue, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 鼠标进入事件 */
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  /** 鼠标离开事件 */
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  /** 鼠标按下事件 */
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  /** 鼠标抬起事件 */
  onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * FormField 基础 Actions Hook
 *
 * 为 FormFieldText、FormFieldNumber、FormFieldPassword 提供共用的事件处理逻辑。
 *
 * @template TValue - 输入值的类型（string、number | ""等）
 * @template TExtraState - 额外状态的类型（如 Password 的 showPassword，Number 的 min/max）
 *
 * @example
 * ```tsx
 * const baseActions = useFormFieldBaseActions({
 *   value,
 *   onChange,
 *   disabled,
 *   readOnly,
 *   onMouseEnter,
 *   onMouseLeave,
 *   onMouseDown,
 *   onMouseUp,
 *   initialValue: "",
 *   transformInputValue: (event) => event.target.value,
 * });
 * ```
 */
export function useFormFieldBaseActions<TValue>({
  value,
  onChange,
  disabled,
  readOnly,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  initialValue,
  transformInputValue,
}: UseFormFieldBaseActionsParams<TValue> & {
  /** 初始值 */
  initialValue: TValue;
  /** 输入值转换函数 */
  transformInputValue: (event: React.ChangeEvent<HTMLInputElement>) => TValue;
}) {
  const [inputValue, setInputValue] = React.useState<TValue>(value ?? initialValue);
  const [isFocused, setIsFocused] = React.useState(false);

  // disabled、readOnly 状态下禁用交互
  const isInteractionDisabled = disabled || readOnly;

  // 同步外部 value（受控模式）
  React.useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  // ========== 输入处理 ==========
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isInteractionDisabled) return;

      const newValue = transformInputValue(event);
      setInputValue(newValue);
      onChange?.(newValue, event);
    },
    [isInteractionDisabled, onChange, transformInputValue],
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
      MouseUpEvent(e); // 离开时重置按下状态
    },
    [MouseLeaveEvent, MouseUpEvent],
  );

  // ========== 返回基础状态和事件 ==========
  return {
    // 状态
    inputValue,
    setInputValue,
    isFocused,
    isHovered,
    isInteractionDisabled,

    // Input 事件
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
  };
}
