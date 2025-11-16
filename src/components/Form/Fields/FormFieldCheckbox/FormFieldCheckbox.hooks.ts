"use client";

import React from "react";

import { SEMANTIC_COLORS } from "@/constants";
import { useElementHoverEvents, useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { hexToRgba } from "@/tools";
import type { FormFieldCheckboxProps } from "./FormFieldCheckbox.types";

// ============================
// useFormFieldCheckboxActions - 所有状态和事件逻辑
// ============================
export function useFormFieldCheckboxActions({
  checked,
  defaultChecked,
  onChange,
  disabled,
  onMouseEnter,
  onMouseLeave,
  externalRef,
}: Pick<
  FormFieldCheckboxProps,
  "checked" | "defaultChecked" | "onChange" | "disabled" | "onMouseEnter" | "onMouseLeave"
> & {
  externalRef?: React.ForwardedRef<HTMLInputElement>;
}) {
  // ========== 内部状态 ==========
  const [isFocused, setIsFocused] = React.useState(false);
  const [internalChecked, setInternalChecked] = React.useState<boolean>(defaultChecked ?? false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  // 判断是否为受控模式
  const isControlled = checked !== undefined;

  // 同步受控模式的值
  React.useEffect(() => {
    if (isControlled) {
      setInternalChecked(checked);
    }
  }, [isControlled, checked]);

  // ========== 监听 form.reset() 事件 ==========
  React.useEffect(() => {
    const inputElement = inputRef.current;
    if (!inputElement || isControlled) return;

    const form = inputElement.form;
    if (!form) return;

    const handleReset = () => {
      // 重置内部状态到 defaultChecked
      setInternalChecked(defaultChecked ?? false);
    };

    form.addEventListener("reset", handleReset);
    return () => form.removeEventListener("reset", handleReset);
  }, [isControlled, defaultChecked]);

  // 判断是否禁用交互
  const isInteractionDisabled = disabled;

  // ========== 事件处理 ==========
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isInteractionDisabled) return;
      const newChecked = event.target.checked;

      // 非受控模式下，更新内部状态
      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onChange?.(newChecked, event);
    },
    [isInteractionDisabled, isControlled, onChange],
  );

  const handleFocus = React.useCallback(() => {
    if (!isInteractionDisabled) {
      setIsFocused(true);
    }
  }, [isInteractionDisabled]);

  const handleBlur = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleClick = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_: React.MouseEvent<SVGSVGElement>) => {
      if (isInteractionDisabled) return;
      if (inputRef.current) {
        inputRef.current.click();
      }
    },
    [isInteractionDisabled],
  );

  // 合并 ref
  const setRefs = React.useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node;
      if (typeof externalRef === "function") {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    [externalRef],
  );

  // ========== 复用全局 hooks 处理 hover ==========
  const { isHovered, MouseEnterEvent, MouseLeaveEvent } = useElementHoverEvents<SVGSVGElement>({
    disabled: isInteractionDisabled,
    onMouseEnter,
    onMouseLeave,
  });

  return React.useMemo(
    () => ({
      // 状态
      internalChecked,
      isFocused,
      isHovered,

      // Ref
      setRefs,

      // 事件处理函数
      handleChange,
      handleFocus,
      handleBlur,
      handleClick,

      // Wrapper 事件（供组件 spread）
      WrapperElementEvents: {
        onMouseEnter: MouseEnterEvent,
        onMouseLeave: MouseLeaveEvent,
      },
    }),
    [
      internalChecked,
      isFocused,
      isHovered,
      setRefs,
      handleChange,
      handleFocus,
      handleBlur,
      handleClick,
      MouseEnterEvent,
      MouseLeaveEvent,
    ],
  );
}

// ============================
// useFormFieldCheckboxStyles - 仅样式计算
// ============================
export function useFormFieldCheckboxStyles({
  checked,
  disabled = false,
  error = false,
  isHovered,
  isFocused,
}: Pick<FormFieldCheckboxProps, "checked" | "disabled" | "error"> & {
  isHovered: boolean;
  isFocused: boolean;
}) {
  const { PaletteColors, TextColors } = useThemeDesigns();
  const customCheckboxStyle = useCustomStyle({ displayName: "FormField.Checkbox" });

  // ✅ 按功能拆分多个 Dynamic Styles，每个用 useMemo 优化

  // Checkbox 视觉元素样式（Icon 组件颜色）
  const DynamicCheckboxVariantStyles = React.useMemo<React.CSSProperties>(() => {
    const themeColor = error ? SEMANTIC_COLORS.ERROR : PaletteColors[1];

    // 无论选中与否，都使用易识别的颜色
    // 选中状态：主题色填充
    // 未选中状态：使用深色边框，确保可见性
    return {
      color: checked ? themeColor : TextColors[2],
    };
  }, [checked, error, PaletteColors, TextColors]);

  const DynamicCheckboxStateStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled) {
      return {
        opacity: 0.6,
        cursor: "not-allowed",
      };
    }
    return {
      cursor: "pointer",
    };
  }, [disabled]);

  const DynamicCheckboxInteractionStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled) return {};

    const themeColor = error ? SEMANTIC_COLORS.ERROR : PaletteColors[1];

    // Focus 状态（优先级最高）- 类似其他 FormField 的外圈阴影
    if (isFocused) {
      return {
        color: themeColor,
        filter: `drop-shadow(0 0 0 ${hexToRgba(themeColor, 0.3)}) drop-shadow(0 0 4px ${hexToRgba(themeColor, 0.3)})`,
        outline: "none",
      };
    }

    // Hover 状态 - 显示主题色高亮
    if (isHovered) {
      return {
        color: themeColor,
        filter: "brightness(1.1)",
      };
    }

    return {};
  }, [disabled, error, isFocused, isHovered, PaletteColors]);

  const DynamicCheckboxErrorStyles = React.useMemo<React.CSSProperties>(() => {
    if (!error) return {};
    return {
      color: SEMANTIC_COLORS.ERROR,
    };
  }, [error]);

  // ✅ 最终合并所有样式
  const checkboxStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // 基础样式
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default styles --
      display: "inline-flex",
      flexShrink: 0,
      fontSize: 20,
      transition: "all 0.25s ease-in-out",
      ...DynamicCheckboxVariantStyles,
      ...DynamicCheckboxStateStyles,
      ...DynamicCheckboxInteractionStyles,
      ...DynamicCheckboxErrorStyles,

      // -- custom styles --
      ...customCheckboxStyle,
    }),
    [
      DynamicCheckboxVariantStyles,
      DynamicCheckboxStateStyles,
      DynamicCheckboxInteractionStyles,
      DynamicCheckboxErrorStyles,
      customCheckboxStyle,
    ],
  );

  return {
    checkboxStyle,
    __: {
      DynamicCheckboxVariantStyles,
      DynamicCheckboxStateStyles,
      DynamicCheckboxInteractionStyles,
      DynamicCheckboxErrorStyles,
    },
  };
}
