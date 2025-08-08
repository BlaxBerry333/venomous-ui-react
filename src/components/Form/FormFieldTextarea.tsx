"use client";

import React from "react";

import { useElementFocus } from "@/hooks";
import { useFormFieldStyle } from "./_useFormFieldStyle";
import FormField from "./FormField";
import type { FormFieldTextareaProps } from "./index.types";

const FormFieldTextarea = React.memo<FormFieldTextareaProps>(
  ({
    style,
    fullWidth,
    required = false,
    isError = false,
    disabled = false,
    rows = 3,
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
        <textarea
          name={name}
          value={value}
          disabled={disabled}
          onFocus={disabled ? undefined : handleFocus}
          onBlur={disabled ? undefined : handleBlur}
          spellCheck={false}
          rows={rows}
          style={{
            boxSizing: "border-box",
            resize: "none",
            ...commonStyles,
            ...style,
          }}
          {...props}
        />
      </FormField>
    );
  },
);

FormFieldTextarea.displayName = "FormField.Textarea";
export default FormFieldTextarea;
