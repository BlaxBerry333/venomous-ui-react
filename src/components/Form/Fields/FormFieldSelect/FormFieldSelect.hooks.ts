"use client";

import React from "react";

import { FORM_FIELD_VARIANT_MAP, useFormFieldBaseStyles } from "@/components/Form/_";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useElementHoverEvents, useElementMouseEvents } from "@/hooks";
import type { FormFieldSelectOption, FormFieldSelectProps, FormFieldSelectRef } from "./FormFieldSelect.types";

export function useFormFieldSelectStyles({
  variant = FORM_FIELD_VARIANT_MAP.OUTLINED,
  fullWidth = false,
  error = false,
  disabled = false,
  open = false,
  width,
  maxDropdownHeight = 300,
  isHovered,
}: Pick<FormFieldSelectProps, "variant" | "fullWidth" | "error" | "disabled" | "maxDropdownHeight"> & {
  open: boolean;
  isHovered: boolean;
  width?: number | undefined;
}) {
  return useFormFieldBaseStyles({
    displayNames: {
      wrapper: COMPONENT_DISPLAY_NAMES.FormFieldSelect,
      dropdown: COMPONENT_DISPLAY_NAMES.FormFieldSelectDropdown,
    },
    variant,
    fullWidth,
    error,
    disabled,
    readOnly: disabled,
    isFocused: open, // 使用 open 状态模拟 focus
    isHovered,
    customConfig: {
      wrapperExtraStyles: {
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none",
      },
      dropdownExtraStyles: {
        maxHeight: maxDropdownHeight,
        width,
      },
    },
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useFormFieldSelectActions<T = any>({
  options,
  multiple = false,
  value: controlledValue,
  defaultValue,
  onChange,
  autoCloseOnSelect,
  disabled = false,
  isControlled,
  selectRef,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
}: {
  options: FormFieldSelectOption<T>[];
  multiple?: boolean;
  value?: T | T[];
  defaultValue?: T | T[];
  onChange?:
    | ((value: T, option: FormFieldSelectOption<T>) => void)
    | ((values: T[], options: FormFieldSelectOption<T>[]) => void);
  autoCloseOnSelect?: boolean;
  disabled?: boolean;
  isControlled: boolean;
  selectRef?: React.RefObject<HTMLSelectElement | null>;
  onMouseEnter?: React.MouseEventHandler<FormFieldSelectRef>;
  onMouseLeave?: React.MouseEventHandler<FormFieldSelectRef>;
  onMouseDown?: React.MouseEventHandler<FormFieldSelectRef>;
  onMouseUp?: React.MouseEventHandler<FormFieldSelectRef>;
}) {
  // ========== 内部状态（非受控模式） ==========
  const [internalValue, setInternalValue] = React.useState<T | T[] | undefined>(
    multiple ? ((defaultValue as T[] | undefined) ?? []) : (defaultValue as T | undefined),
  );
  const [open, setOpen] = React.useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState<number>(-1);

  // 受控/非受控模式的值
  const value = isControlled ? controlledValue : internalValue;

  // ========== 监听 form.reset() 事件 ==========
  React.useEffect(() => {
    const selectElement = selectRef?.current;
    if (!selectElement || isControlled) return;

    const form = selectElement.form;
    if (!form) return;

    const handleReset = () => {
      // 重置内部状态到 defaultValue
      const initialValue = multiple ? ((defaultValue as T[] | undefined) ?? []) : (defaultValue as T | undefined);
      setInternalValue(initialValue);
      setOpen(false);
      setHighlightedIndex(-1);
    };

    form.addEventListener("reset", handleReset);
    return () => form.removeEventListener("reset", handleReset);
  }, [isControlled, defaultValue, multiple, selectRef]);

  // ========== Hover 和 Mouse 事件处理 ==========
  const { isHovered, MouseEnterEvent, MouseLeaveEvent } = useElementHoverEvents<FormFieldSelectRef>({
    disabled: disabled,
    onMouseEnter,
    onMouseLeave,
  });

  const { MouseDownEvent, MouseUpEvent } = useElementMouseEvents<FormFieldSelectRef>({
    disabled: disabled,
    onMouseDown,
    onMouseUp,
  });

  // 组合 MouseLeave 和 MouseUp 事件
  const combinedMouseLeave = React.useCallback(
    (e: React.MouseEvent<FormFieldSelectRef>) => {
      MouseLeaveEvent(e);
      MouseUpEvent(e);
    },
    [MouseLeaveEvent, MouseUpEvent],
  );

  const WrapperElementEvents = React.useMemo(
    () => ({
      onMouseEnter: MouseEnterEvent,
      onMouseLeave: combinedMouseLeave,
      onMouseDown: MouseDownEvent,
      onMouseUp: MouseUpEvent,
    }),
    [MouseEnterEvent, combinedMouseLeave, MouseDownEvent, MouseUpEvent],
  );

  // ========== 获取选中的选项 ==========
  const selectedOptions = React.useMemo(() => {
    if (multiple) {
      // 确保 values 一定是数组
      const values = Array.isArray(value) ? value : [];
      return options.filter((option) => values.includes(option.value));
    } else {
      const singleValue = value as T;
      const option = options.find((opt) => opt.value === singleValue);
      return option ? [option] : [];
    }
  }, [options, value, multiple]);

  const selectedOption = multiple ? undefined : selectedOptions[0];

  // ========== 选项选择处理 ==========
  const handleSelect = React.useCallback(
    (option: FormFieldSelectOption<T>) => {
      if (option.disabled) return;

      if (multiple) {
        // 多选逻辑
        // 使用最新的 value（避免闭包陷阱）
        const getCurrentValues = () => {
          const currentValue = isControlled ? controlledValue : internalValue;
          return Array.isArray(currentValue) ? currentValue : [];
        };

        const currentValues = getCurrentValues();
        const isSelected = currentValues.includes(option.value);
        const newValues = isSelected
          ? currentValues.filter((v) => v !== option.value)
          : [...currentValues, option.value];

        if (!isControlled) {
          setInternalValue(newValues);
        }

        const newOptions = options.filter((opt) => newValues.includes(opt.value));
        (onChange as ((values: T[], options: FormFieldSelectOption<T>[]) => void) | undefined)?.(newValues, newOptions);

        // 多选模式默认不关闭下拉框，除非设置了 autoCloseOnSelect
        if (autoCloseOnSelect) {
          setOpen(false);
          setHighlightedIndex(-1);
        }
      } else {
        // 单选逻辑
        if (!isControlled) {
          setInternalValue(option.value);
        }
        (onChange as ((value: T, option: FormFieldSelectOption<T>) => void) | undefined)?.(option.value, option);
        setOpen(false);
        setHighlightedIndex(-1);
      }
    },
    [multiple, isControlled, controlledValue, internalValue, onChange, options, autoCloseOnSelect],
  );

  // ========== Popover 开关处理 ==========
  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      if (disabled) return;
      setOpen(newOpen);
      if (!newOpen) {
        setHighlightedIndex(-1);
      }
    },
    [disabled],
  );

  // ========== 键盘导航 ==========
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (!open) {
            setOpen(true);
          } else {
            setHighlightedIndex((prev) => {
              const nextIndex = prev + 1;
              return nextIndex >= options.length ? 0 : nextIndex;
            });
          }
          break;

        case "ArrowUp":
          e.preventDefault();
          if (!open) {
            setOpen(true);
          } else {
            setHighlightedIndex((prev) => {
              const prevIndex = prev - 1;
              return prevIndex < 0 ? options.length - 1 : prevIndex;
            });
          }
          break;

        case "Enter":
          e.preventDefault();
          if (open && highlightedIndex >= 0 && options[highlightedIndex]) {
            handleSelect(options[highlightedIndex]);
          } else if (!open) {
            setOpen(true);
          }
          break;

        case "Escape":
          e.preventDefault();
          setOpen(false);
          setHighlightedIndex(-1);
          break;

        case "Tab":
          if (open) {
            setOpen(false);
            setHighlightedIndex(-1);
          }
          break;

        default:
          break;
      }
    },
    [disabled, open, highlightedIndex, options, handleSelect],
  );

  // ========== 性能优化：返回对象使用 useMemo 包装 ==========
  return React.useMemo(
    () => ({
      // 状态
      value,
      selectedOption,
      selectedOptions,
      open,
      filteredOptions: options, // 直接返回 options，不再过滤
      highlightedIndex,
      isHovered,

      // 事件处理
      handleSelect,
      handleOpenChange,
      handleKeyDown,

      // Wrapper 事件
      WrapperElementEvents,
    }),
    [
      value,
      selectedOption,
      selectedOptions,
      open,
      options,
      highlightedIndex,
      isHovered,
      handleSelect,
      handleOpenChange,
      handleKeyDown,
      WrapperElementEvents,
    ],
  );
}

export function useFormFieldSelectDisplay({
  options,
  multiple = false,
  value,
  defaultValue,
  onChange,
  placeholder = "",
  variant = FORM_FIELD_VARIANT_MAP.OUTLINED,
  error = false,
  fullWidth = false,
  disabled = false,
  maxDropdownHeight = 300,
  width,
  autoCloseOnSelect,
  isControlled,
  selectRef,
  dropdownClassName,
  dropdownStyle,
  optionClassName,
  optionStyle,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
}: Pick<
  FormFieldSelectProps,
  | "options"
  | "multiple"
  | "value"
  | "defaultValue"
  | "onChange"
  | "placeholder"
  | "variant"
  | "error"
  | "fullWidth"
  | "disabled"
  | "maxDropdownHeight"
  | "dropdownClassName"
  | "dropdownStyle"
  | "optionClassName"
  | "optionStyle"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onMouseDown"
  | "onMouseUp"
> & {
  width?: number | undefined;
  autoCloseOnSelect?: boolean;
  isControlled: boolean;
  selectRef?: React.RefObject<HTMLSelectElement | null>;
}) {
  // ========== 调用基础 hooks ==========
  const {
    selectedOption,
    selectedOptions,
    open,
    filteredOptions,
    isHovered,
    handleSelect,
    handleOpenChange,
    handleKeyDown,
    WrapperElementEvents,
  } = useFormFieldSelectActions({
    options,
    multiple,
    value,
    defaultValue,
    onChange,
    autoCloseOnSelect,
    disabled,
    isControlled,
    selectRef,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
  });

  const { wrapperStyle: computedWrapperStyle, dropdownStyle: computedDropdownStyle } = useFormFieldSelectStyles({
    variant,
    fullWidth,
    error,
    disabled,
    open,
    width,
    maxDropdownHeight,
    isHovered,
  });

  // ========== 计算 actualValue 和 selectedValuesSet ==========
  const { actualValue, selectedValuesSet } = React.useMemo(() => {
    // 单选模式
    if (!multiple)
      return {
        actualValue: selectedOption?.value ?? "",
        selectedValuesSet: null,
      };

    // 多选模式 - 单循环优化
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const values: any[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const valuesSet = new Set<any>();
    for (const opt of selectedOptions) {
      values.push(opt.value);
      valuesSet.add(opt.value);
    }
    return { actualValue: values, selectedValuesSet: valuesSet };
  }, [multiple, selectedOption, selectedOptions]);

  // ========== 显示文本 ==========
  const displayText = React.useMemo(() => {
    if (!multiple) {
      return selectedOption?.label || placeholder;
    }
    if (selectedOptions.length === 0) {
      return placeholder;
    }
    // 手动拼接（性能优化）
    let text = selectedOptions[0].label;
    for (let i = 1; i < selectedOptions.length; i++) {
      text += ", " + selectedOptions[i].label;
    }
    return text;
  }, [multiple, selectedOption, selectedOptions, placeholder]);

  // ========== 显示内容的数据 ==========
  const displayContentData = React.useMemo(() => {
    const hasValue = multiple ? selectedOptions.length > 0 : !!selectedOption;
    const widthValue = Number(width) * 0.8;

    return {
      text: displayText,
      width: widthValue,
      opacity: hasValue ? 1 : 0.5,
    };
  }, [displayText, multiple, selectedOption, selectedOptions, width]);

  // ========== 预计算合并样式 ==========
  const mergedDropdownStyle = React.useMemo(
    () => ({ ...computedDropdownStyle, ...dropdownStyle }),
    [computedDropdownStyle, dropdownStyle],
  );

  const mergedOptionStyle = React.useMemo(() => optionStyle, [optionStyle]);

  // ========== 下拉内容数据（返回渲染所需的数据，而非 JSX） ==========
  const dropdownContentData = React.useMemo(
    () => ({
      filteredOptions,
      selectedValuesSet,
      selectedOption,
      multiple,
      handleSelect,
      dropdownClassName,
      mergedDropdownStyle,
      optionClassName,
      mergedOptionStyle,
    }),
    [
      filteredOptions,
      selectedValuesSet,
      selectedOption,
      multiple,
      handleSelect,
      dropdownClassName,
      mergedDropdownStyle,
      optionClassName,
      mergedOptionStyle,
    ],
  );

  // ========== 返回所有 UI 资源 ==========
  return React.useMemo(
    () => ({
      // 状态
      open,
      actualValue,

      // 样式
      computedWrapperStyle,

      // 数据
      displayContentData,
      dropdownContentData,

      // 事件
      handleOpenChange,
      handleKeyDown,
      WrapperElementEvents,
    }),
    [
      open,
      actualValue,
      computedWrapperStyle,
      displayContentData,
      dropdownContentData,
      handleOpenChange,
      handleKeyDown,
      WrapperElementEvents,
    ],
  );
}
