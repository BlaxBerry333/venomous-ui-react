"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Space } from "@/components/Space";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useFormFieldTextActions, useFormFieldTextStyles } from "./FormFieldText.hooks";
import type { FormFieldTextProps, FormFieldTextRef } from "./FormFieldText.types";

const FormFieldText = React.memo(
  React.forwardRef<FormFieldTextRef, FormFieldTextProps>(
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
        variant: propVariant,
        error: propError,
        fullWidth: propFullWidth,
        disabled,
        readOnly,

        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,

        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<FormFieldTextProps>({
        displayName: COMPONENT_DISPLAY_NAMES.FormFieldText,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const variant = propVariant ?? customComponentProps.variant ?? FORM_FIELD_VARIANT_MAP.OUTLINED;
      const error = propError ?? customComponentProps.error ?? false;
      const fullWidth = propFullWidth ?? customComponentProps.fullWidth ?? false;

      const { inputValue, isFocused, isHovered, handleChange, onFocus, onBlur, WrapperElementEvents } =
        useFormFieldTextActions({
          value,
          onChange,
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
      } = useFormFieldTextStyles({
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
          className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldText, wrapperClassName)}
          style={{ ...computedWrapperStyle, ...wrapperStyle }}
          {...WrapperElementEvents}
        >
          {prefix && (
            <Box
              as="div"
              className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldTextPrefix, prefixClassName)}
              style={{ ...computedPrefixStyle, ...prefixStyle }}
            >
              {prefix}
            </Box>
          )}

          <input
            type="text"
            ref={ref}
            className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldTextInput, className)}
            style={{ ...computedInputStyle, ...style }}
            {...inputValueProps}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            readOnly={readOnly}
            {...props}
          />

          {suffix && (
            <Box
              as="div"
              className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldTextSuffix, suffixClassName)}
              style={{ ...computedSuffixStyle, ...suffixStyle }}
            >
              {suffix}
            </Box>
          )}
        </Space.Flex>
      );
    },
  ),
);

FormFieldText.displayName = COMPONENT_DISPLAY_NAMES.FormFieldText;
export default FormFieldText;
