"use client";

import React from "react";

import { TextColors, ThemeColor } from "@/utils";
import { Space } from "../Space";
import { Theme } from "../Theme";
import { Typography } from "../Typography";
import type { FormFieldProps } from "./index.types";
import { useFormFieldStyle } from "./useFormFieldStyle";

const FormField = React.memo<FormFieldProps>(
  ({
    children,
    style,
    fullWidth = false,
    required = false,
    disabled = false,
    isError = false,
    label,
    helpText,
    ...props
  }) => {
    const { themeMode } = Theme.useThemeMode();

    const { helperTextColor } = useFormFieldStyle({
      fullWidth,
      isDisabled: disabled,
      isError,
    });

    return (
      <fieldset
        disabled={disabled}
        style={{
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: fullWidth ? "100%" : "max-content",
          color: isError ? ThemeColor.RubyCopperhead : TextColors[themeMode].primary,
          ...style,
        }}
        {...props}
      >
        {label && (
          <legend style={{ padding: 0, color: "inherit" }}>
            {/* required star */}
            {required && (
              <Typography.Text
                as="small"
                text="*"
                style={{
                  color: ThemeColor.RubyCopperhead,
                  fontWeight: "bold",
                  verticalAlign: "text-bottom",
                }}
              />
            )}
            {/* label text */}
            <Typography.Text
              as="small"
              text={label}
              style={{
                color: "inherit",
                fontWeight: "bold",
                paddingLeft: required ? "2px" : "4px",
              }}
            />
          </legend>
        )}

        <Space.Flex column gap={0} style={{ width: "100%" }}>
          {/* field component */}
          {children}

          {/* help text */}
          {helpText && (
            <Typography.Text
              as="small"
              text={helpText}
              style={{
                color: helperTextColor,
                paddingLeft: "4px",
              }}
            />
          )}
        </Space.Flex>
      </fieldset>
    );
  },
);

FormField.displayName = "FormField";
export default FormField;
