"use client";

import React from "react";

import { useElementFocus } from "@/hooks";
import FormField from "./FormField";
import type { FormFieldTextProps } from "./index.types";
import { useFormFieldStyle } from "./useFormFieldStyle";

const FormFieldText = React.memo<FormFieldTextProps>(
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

    const { commonStyles } = useFormFieldStyle({
      fullWidth,
      isDisabled: disabled,
      isError,
      isFocused,
    });

    return (
      <FormField
        label={label}
        required={required}
        disabled={disabled}
        isError={isError}
        fullWidth={fullWidth}
        helpText={helpText}
      >
        <input
          type="text"
          name={name}
          value={value}
          autoComplete={autoComplete}
          disabled={disabled}
          onFocus={disabled ? undefined : handleFocus}
          onBlur={disabled ? undefined : handleBlur}
          style={{
            boxSizing: "border-box",
            ...commonStyles,
            ...style,
          }}
          {...props}
        />
      </FormField>
    );
  },
);

FormFieldText.displayName = "FormField.Text";
export default FormFieldText;
