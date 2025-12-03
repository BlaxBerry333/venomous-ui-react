"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import {
  useFormFieldRadioGroupActions,
  useFormFieldRadioGroupStyles,
  useFormFieldRadioItemActions,
  useFormFieldRadioItemStyles,
} from "./FormFieldRadioGroup.hooks";
import {
  FORM_FIELD_RADIO_GROUP_DIRECTION_MAP,
  type FormFieldRadioGroupProps,
  type FormFieldRadioGroupRef,
  type FormFieldRadioItemProps,
} from "./FormFieldRadioGroup.types";

// ============================
// FormFieldRadioItem (内部组件)
// ============================
function FormFieldRadioItemInner<T>({ option, name, checked, disabled, onChange }: FormFieldRadioItemProps<T>) {
  const isDisabled = disabled || option.disabled;

  const { isFocused, isHovered, handleFocus, handleBlur, LabelElementEvents } = useFormFieldRadioItemActions({
    disabled: isDisabled,
  });

  const { labelStyle, radioStyle, radioDotStyle } = useFormFieldRadioItemStyles({
    checked,
    disabled: isDisabled,
    isHovered,
    isFocused,
  });

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isDisabled) {
        onChange(option.value, event);
      }
    },
    [isDisabled, onChange, option.value],
  );

  return (
    <label className={COMPONENT_CLASSNAME_NAMES.FormFieldRadioItem} style={labelStyle} {...LabelElementEvents}>
      {/* 隐藏原生 radio input */}
      <input
        type="radio"
        name={name}
        checked={checked}
        disabled={isDisabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={__HIDDEN_INPUT_STYLE}
      />

      {/* 自定义 Radio UI */}
      <span className={COMPONENT_CLASSNAME_NAMES.FormFieldRadioItemRadio} style={radioStyle}>
        <span style={radioDotStyle} />
      </span>

      {/* Label */}
      {option.label}
    </label>
  );
}

const FormFieldRadioItem = React.memo(FormFieldRadioItemInner) as typeof FormFieldRadioItemInner;

// ============================
// FormFieldRadioGroup
// ============================
function FormFieldRadioGroupInner<T = string>(
  {
    className,
    style,

    name: propName,
    options,
    value,
    defaultValue,
    onChange,
    disabled: propDisabled,
    direction: propDirection,
    spacing: propSpacing,

    ...props
  }: FormFieldRadioGroupProps<T>,
  ref: React.ForwardedRef<FormFieldRadioGroupRef>,
) {
  // ========== 获取 customComponentProps ==========
  const customComponentProps = useCustomComponentProps<FormFieldRadioGroupProps<T>>({
    displayName: COMPONENT_DISPLAY_NAMES.FormFieldRadioGroup,
  });

  // ========== 合并 Props ==========
  const disabled = propDisabled ?? customComponentProps.disabled ?? false;
  const direction = propDirection ?? customComponentProps.direction ?? FORM_FIELD_RADIO_GROUP_DIRECTION_MAP.VERTICAL;
  const spacing = propSpacing ?? customComponentProps.spacing ?? 8;

  // 自动生成 name
  const autoName = React.useId();
  const name = propName ?? autoName;

  const { internalValue, handleChange } = useFormFieldRadioGroupActions({
    value,
    defaultValue,
    onChange,
    disabled,
  });

  const { groupStyle } = useFormFieldRadioGroupStyles({
    direction,
    spacing,
  });

  return (
    <Box
      as="div"
      ref={ref}
      role="radiogroup"
      className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldRadioGroup, className)}
      style={{ ...groupStyle, ...style }}
      {...props}
    >
      {options.map((option) => (
        <FormFieldRadioItem
          key={String(option.value)}
          option={option}
          name={name}
          checked={internalValue === option.value}
          disabled={disabled}
          onChange={handleChange}
        />
      ))}
    </Box>
  );
}

const FormFieldRadioGroup = React.memo(React.forwardRef(FormFieldRadioGroupInner)) as <T = string>(
  props: FormFieldRadioGroupProps<T> & { ref?: React.ForwardedRef<FormFieldRadioGroupRef> },
) => React.ReactElement;

(FormFieldRadioGroup as React.FC).displayName = COMPONENT_DISPLAY_NAMES.FormFieldRadioGroup;

export default FormFieldRadioGroup;

// ========== 私有常量 ==========
const __HIDDEN_INPUT_STYLE: React.CSSProperties = {
  position: "absolute",
  opacity: 0,
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};
