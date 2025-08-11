"use client";

import clsx from "clsx";
import React from "react";

import { useElementFocus } from "@/hooks";
import { useFormFieldStyle } from "./_useFormFieldStyle";
import FormField from "./FormField";
import type { FormFieldTextProps } from "./index.types";

const FormFieldText = React.memo<FormFieldTextProps>(
  ({
    className,
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
        isDisabled={disabled}
        isError={isError}
        isFocused={isFocused}
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
          className={clsx("Venomous-UI-React--FormField.Text", className)}
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
