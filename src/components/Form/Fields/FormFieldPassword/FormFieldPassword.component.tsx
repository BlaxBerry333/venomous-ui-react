"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Icon } from "@/components/Icon";
import { Space } from "@/components/Space";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useFormFieldPasswordActions, useFormFieldPasswordStyles } from "./FormFieldPassword.hooks";
import type { FormFieldPasswordProps, FormFieldPasswordRef } from "./FormFieldPassword.types";

const FormFieldPassword = React.memo(
  React.forwardRef<FormFieldPasswordRef, FormFieldPasswordProps>(
    (
      {
        className,
        style,
        wrapperClassName,
        wrapperStyle,
        prefixClassName,
        prefixStyle,
        prefix: propPrefix,

        value,
        onChange,
        variant: propVariant,
        error: propError,
        fullWidth: propFullWidth,
        disabled,
        readOnly,

        showVisibilityToggle: propShowVisibilityToggle,

        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,

        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<FormFieldPasswordProps>({
        displayName: COMPONENT_DISPLAY_NAMES.FormFieldPassword,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const prefix = propPrefix ?? customComponentProps.prefix ?? null;
      const variant = propVariant ?? customComponentProps.variant ?? FORM_FIELD_VARIANT_MAP.OUTLINED;
      const error = propError ?? customComponentProps.error ?? false;
      const fullWidth = propFullWidth ?? customComponentProps.fullWidth ?? false;
      const showVisibilityToggle = propShowVisibilityToggle ?? customComponentProps.showVisibilityToggle ?? true;

      const {
        inputValue,
        isFocused,
        isHovered,
        showPassword,
        handleChange,
        onFocus,
        onBlur,
        togglePasswordVisibility,
        WrapperElementEvents,
      } = useFormFieldPasswordActions({
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
      } = useFormFieldPasswordStyles({
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
          className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldPassword, wrapperClassName)}
          style={{ ...computedWrapperStyle, ...wrapperStyle }}
          {...WrapperElementEvents}
        >
          {prefix && (
            <Box
              as="div"
              className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldPasswordPrefix, prefixClassName)}
              style={{ ...computedPrefixStyle, ...prefixStyle }}
            >
              {prefix}
            </Box>
          )}

          <input
            type={showPassword ? "text" : "password"}
            ref={ref}
            className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldPasswordInput, className)}
            style={{ ...computedInputStyle, ...style }}
            {...inputValueProps}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            readOnly={readOnly}
            {...props}
          />

          {showVisibilityToggle && (
            <FormFieldPasswordVisibilityToggle
              disabled={disabled}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          )}
        </Space.Flex>
      );
    },
  ),
);

FormFieldPassword.displayName = COMPONENT_DISPLAY_NAMES.FormFieldPassword;
export default FormFieldPassword;

const FormFieldPasswordVisibilityToggle = React.memo<{
  disabled?: boolean;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}>(({ disabled, showPassword, togglePasswordVisibility }) => {
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
    <Space.Flex as="div" style={containerStyle}>
      <Icon
        icon={showPassword ? "solar:eye-linear" : "solar:eye-closed-linear"}
        width={20}
        onClick={disabled ? undefined : togglePasswordVisibility}
        style={iconStyle}
      />
    </Space.Flex>
  );
});

FormFieldPasswordVisibilityToggle.displayName = COMPONENT_DISPLAY_NAMES.FormFieldPasswordVisibilityToggle;
