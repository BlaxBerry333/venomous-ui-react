"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useFormFieldSwitchActions, useFormFieldSwitchStyles } from "./FormFieldSwitch.hooks";
import type { FormFieldSwitchProps, FormFieldSwitchRef } from "./FormFieldSwitch.types";

const FormFieldSwitch = React.memo(
  React.forwardRef<FormFieldSwitchRef, FormFieldSwitchProps>(
    (
      {
        className,
        style,

        checked,
        defaultChecked,
        onChange,
        disabled: propDisabled,

        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<FormFieldSwitchProps>({
        displayName: COMPONENT_DISPLAY_NAMES.FormFieldSwitch,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const disabled = propDisabled ?? customComponentProps.disabled ?? false;

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
      } = useFormFieldSwitchActions({
        checked,
        defaultChecked,
        onChange,
        disabled,
        externalRef: ref,
      });

      const { trackStyle, handleStyle } = useFormFieldSwitchStyles({
        checked: internalChecked,
        disabled,
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

          {/* 自定义 Switch UI */}
          <Box
            as="div"
            className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldSwitch, className)}
            style={{ ...trackStyle, ...style }}
            onClick={handleClick}
            {...WrapperElementEvents}
          >
            {/* Handle（滑块） */}
            <span className={COMPONENT_CLASSNAME_NAMES.FormFieldSwitchHandle} style={handleStyle} />
          </Box>
        </>
      );
    },
  ),
);

FormFieldSwitch.displayName = COMPONENT_DISPLAY_NAMES.FormFieldSwitch;
export default FormFieldSwitch;

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
