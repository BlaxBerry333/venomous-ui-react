"use client";

import React from "react";

import { useElementFocus } from "@/hooks";
import { Icon } from "../Icon";
import FormField from "./FormField";
import type { FormFieldTextProps } from "./index.types";
import { useFormFieldStyle } from "./useFormFieldStyle";

const FormFieldPassword = React.memo<FormFieldTextProps>(
  ({
    style,
    fullWidth,
    autoComplete = "off",
    required = false,
    isError = false,
    disabled = false,
    name,
    value,
    label,
    helpText,
    ...props
  }) => {
    const { isFocused, handleFocus, handleBlur } = useElementFocus();

    const { outlineColor, commonStyles, textColor } = useFormFieldStyle({
      fullWidth,
      isDisabled: disabled,
      isError,
      isFocused,
    });

    const { isPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility(false);

    return (
      <FormField
        label={label}
        required={required}
        disabled={disabled}
        isError={isError}
        fullWidth={fullWidth}
        helpText={helpText}
        spellCheck={false}
      >
        <div
          style={{
            ...commonStyles,
            position: "relative",
            overflow: "hidden",
            padding: 0,
          }}
        >
          <input
            type={isPasswordVisible ? "text" : "password"}
            name={name}
            value={value}
            autoComplete={autoComplete}
            disabled={disabled}
            onFocus={disabled ? undefined : handleFocus}
            onBlur={disabled ? undefined : handleBlur}
            style={{
              boxSizing: "border-box",
              border: "none",
              outline: "none",
              position: "relative",
              width: "calc(100% - 34px)",
              minHeight: commonStyles.minHeight,
              color: textColor,
              backgroundColor: commonStyles.backgroundColor,
              padding: commonStyles.padding,
              paddingRight: 0,
              ...style,
            }}
            {...props}
          />
          <Icon
            icon={isPasswordVisible ? "solar:eye-linear" : "solar:eye-closed-broken"}
            width={20}
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: outlineColor,
              padding: commonStyles.padding,
            }}
          />
        </div>
      </FormField>
    );
  },
);

FormFieldPassword.displayName = "FormField.Password";
export default FormFieldPassword;

function useTogglePasswordVisibility(defaultValue: boolean = false) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(defaultValue);
  const togglePasswordVisibility: React.MouseEventHandler<HTMLDivElement | SVGSVGElement> = React.useCallback((e) => {
    React.startTransition(() => {
      e.preventDefault();
      e.stopPropagation();
      setIsPasswordVisible((s) => !s);
    });
  }, []);
  return {
    isPasswordVisible,
    togglePasswordVisibility,
  };
}
