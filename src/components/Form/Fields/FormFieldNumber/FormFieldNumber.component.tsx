"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Icon } from "@/components/Icon";
import { Space } from "@/components/Space";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useFormFieldNumberActions, useFormFieldNumberStyles } from "./FormFieldNumber.hooks";
import type { FormFieldNumberProps, FormFieldNumberRef } from "./FormFieldNumber.types";

// 注入全局样式以隐藏 number input 的原生箭头（WebKit）
let styleInjected = false;
function injectHideSpinnerStyles() {
  if (styleInjected || typeof document === "undefined") return;

  const styleId = "__venomous-form-field-number-hide-spinner__";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `;
    document.head.appendChild(style);
    styleInjected = true;
  }
}

const FormFieldNumber = React.memo(
  React.forwardRef<FormFieldNumberRef, FormFieldNumberProps>(
    (
      {
        className,
        style,
        wrapperClassName,
        wrapperStyle,
        prefixClassName,
        prefixStyle,
        suffixClassName,
        suffixStyle,
        prefix = null,
        suffix = null,

        value,
        onChange,
        variant = FORM_FIELD_VARIANT_MAP.OUTLINED,
        error = false,
        fullWidth = false,
        disabled,
        readOnly,

        min,
        max,
        step = 1,

        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,

        ...props
      },
      ref,
    ) => {
      // 注入全局样式（仅在首次渲染时）
      React.useEffect(() => {
        injectHideSpinnerStyles();
      }, []);

      const {
        inputValue,
        isFocused,
        isHovered,
        handleChange,
        onFocus,
        onBlur,
        handleIncrement,
        handleDecrement,
        WrapperElementEvents,
      } = useFormFieldNumberActions({
        value,
        onChange,
        min,
        max,
        step,
        disabled,
        readOnly,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
      });

      const {
        wrapperStyle: computedWrapperStyle,
        inputStyle: computedInputStyle,
        prefixStyle: computedPrefixStyle,
        suffixStyle: computedSuffixStyle,
      } = useFormFieldNumberStyles({
        variant,
        fullWidth,
        error,
        disabled,
        readOnly,
        isFocused,
        isHovered,
      });

      // ========== 受控/非受控模式判断 ==========
      const isControlled = value !== undefined;
      const inputValueProps = isControlled ? { value: inputValue } : {};

      return (
        <Space.Flex
          as="div"
          spacing={8}
          className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldNumber, wrapperClassName)}
          style={{ ...computedWrapperStyle, ...wrapperStyle }}
          {...WrapperElementEvents}
        >
          {prefix && (
            <Box
              as="div"
              className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldNumberPrefix, prefixClassName)}
              style={{ ...computedPrefixStyle, ...prefixStyle }}
            >
              {prefix}
            </Box>
          )}

          <input
            type="number"
            ref={ref}
            className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldNumberInput, className)}
            style={{ ...computedInputStyle, ...style }}
            {...inputValueProps}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            readOnly={readOnly}
            min={min}
            max={max}
            step={step}
            {...props}
          />

          {suffix && (
            <Box
              as="div"
              className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldNumberSuffix, suffixClassName)}
              style={{ ...computedSuffixStyle, ...suffixStyle }}
            >
              {suffix}
            </Box>
          )}

          <FormFieldNumberArrows
            disabled={disabled}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </Space.Flex>
      );
    },
  ),
);

FormFieldNumber.displayName = COMPONENT_DISPLAY_NAMES.FormFieldNumber;
export default FormFieldNumber;

const FormFieldNumberArrows = React.memo<{
  disabled?: boolean;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}>(({ disabled, handleIncrement, handleDecrement }) => {
  const containerStyle = React.useMemo<React.CSSProperties>(
    () => ({
      width: "auto",
      color: "inherit",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
    }),
    [disabled],
  );

  const iconStyle = React.useMemo<React.CSSProperties>(
    () => ({
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "opacity 0.25s ease-in-out",
    }),
    [disabled],
  );

  return (
    <Space.Flex column as="div" style={containerStyle}>
      <Icon
        icon="solar:alt-arrow-up-linear"
        width={16}
        onClick={disabled ? undefined : handleIncrement}
        style={iconStyle}
      />
      <Icon
        icon="solar:alt-arrow-down-linear"
        width={16}
        onClick={disabled ? undefined : handleDecrement}
        style={iconStyle}
      />
    </Space.Flex>
  );
});

FormFieldNumberArrows.displayName = COMPONENT_DISPLAY_NAMES.FormFieldNumberArrows;
