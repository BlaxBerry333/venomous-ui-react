"use client";

import React from "react";

import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useFormFieldCheckboxActions, useFormFieldCheckboxStyles } from "./FormFieldCheckbox.hooks";
import type { FormFieldCheckboxProps, FormFieldCheckboxRef } from "./FormFieldCheckbox.types";

const FormFieldCheckbox = React.memo(
  React.forwardRef<FormFieldCheckboxRef, FormFieldCheckboxProps>(
    (
      {
        className,
        style,

        checked,
        defaultChecked,
        onChange,
        disabled: propDisabled,
        error: propError,

        onMouseEnter,
        onMouseLeave,

        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<FormFieldCheckboxProps>({
        displayName: COMPONENT_DISPLAY_NAMES.FormFieldCheckbox,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const disabled = propDisabled ?? customComponentProps.disabled ?? false;
      const error = propError ?? customComponentProps.error ?? false;

      const {
        internalChecked,
        isFocused,
        isHovered,
        setRefs,
        handleChange,
        handleFocus,
        handleBlur,
        handleClick,
        WrapperElementEvents,
      } = useFormFieldCheckboxActions({
        checked,
        defaultChecked,
        onChange,
        disabled,
        onMouseEnter,
        onMouseLeave,
        externalRef: ref,
      });

      const { checkboxStyle } = useFormFieldCheckboxStyles({
        checked: internalChecked,
        disabled,
        error,
        isHovered,
        isFocused,
      });

      // 受控模式：传递 checked；非受控模式：传递 defaultChecked
      const isControlled = checked !== undefined;
      const inputProps = isControlled ? { checked } : { defaultChecked };

      return (
        <>
          {/* 隐藏原生 checkbox input */}
          <input
            type="checkbox"
            ref={setRefs}
            {...inputProps}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            style={__HIDDEN_INPUT_STYLE}
            {...props}
          />

          {/* 自定义 UI */}
          <Icon
            className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldCheckbox, className)}
            style={{ ...checkboxStyle, ...style }}
            icon={internalChecked ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-filled"}
            onClick={handleClick}
            onMouseEnter={WrapperElementEvents.onMouseEnter}
            onMouseLeave={WrapperElementEvents.onMouseLeave}
          />
        </>
      );
    },
  ),
);

FormFieldCheckbox.displayName = COMPONENT_DISPLAY_NAMES.FormFieldCheckbox;
export default FormFieldCheckbox;

// ========== 私有常量（文件底部，使用 __ 前缀）==========
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
