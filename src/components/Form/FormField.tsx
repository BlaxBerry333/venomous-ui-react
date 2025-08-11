"use client";

import clsx from "clsx";
import React from "react";

import { TextColors, ThemeColor, TypographySize } from "@/utils";
import { Icon } from "../Icon";
import { Space } from "../Space";
import { Theme } from "../Theme";
import { Typography } from "../Typography";
import { useFormFieldStyle } from "./_useFormFieldStyle";
import type { FormFieldProps } from "./index.types";

const FormField = React.memo<FormFieldProps>(
  ({
    children,
    className,
    style,
    fullWidth = false,
    required = false,
    isDisabled = false,
    isError = false,
    isFocused = false,
    label,
    helpText,
    ...props
  }) => {
    const { themeColor } = Theme.useThemeColor();
    const { themeMode } = Theme.useThemeMode();

    const { helperTextColor } = useFormFieldStyle({
      fullWidth,
      isDisabled,
      isError,
    });

    return (
      <fieldset
        disabled={isDisabled}
        className={clsx("Venomous-UI-React--FormField", className)}
        style={{
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: fullWidth ? "100%" : "max-content",
          color: isError
            ? ThemeColor.RubyCopperhead
            : isDisabled
              ? TextColors[themeMode].disabled
              : isFocused
                ? themeColor
                : TextColors[themeMode].primary,
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
            <Typography.Paragraph
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: TypographySize.small,
                color: helperTextColor,
                paddingLeft: "4px",
              }}
            >
              {isError && (
                <Icon
                  icon="solar:danger-triangle-outline"
                  width={14}
                  semanticColor="error"
                  style={{ marginRight: "4px" }}
                />
              )}
              {helpText}
            </Typography.Paragraph>
          )}
        </Space.Flex>
      </fieldset>
    );
  },
);

FormField.displayName = "FormField";
export default FormField;
