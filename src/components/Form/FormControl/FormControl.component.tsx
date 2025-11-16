"use client";

import React from "react";

import clsx from "clsx";

import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES, SEMANTIC_COLORS } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import { FormLabel } from "../FormLabel";
import type { FormControlProps, FormControlRef } from "./FormControl.types";

const FormControl = React.memo(
  React.forwardRef<FormControlRef, FormControlProps>(
    (
      {
        className,
        style,
        label,
        children,
        message,
        column = true,
        spacing = 4,
        reverse = false,
        required = false,
        isError = false,
        disabled = false,
        onMouseEnter,
        onMouseLeave,
      },
      ref,
    ) => {
      const fieldId = React.useId();
      const { TextColors } = useThemeDesigns();

      const messageColor = React.useMemo<string>(() => {
        if (disabled) return TextColors.disabled;
        if (isError) return SEMANTIC_COLORS.ERROR;
        return TextColors[2];
      }, [disabled, isError, TextColors]);

      const fieldElement = React.useMemo<React.ReactNode>(() => children(fieldId), [children, fieldId]);

      const labelElement = React.useMemo<React.JSX.Element | null>(
        () =>
          label ? (
            <FormLabel text={label} required={required} disabled={disabled} isError={isError} htmlFor={fieldId} />
          ) : null,
        [label, required, disabled, isError, fieldId],
      );

      const labelAndField = React.useMemo<React.JSX.Element>(() => {
        if (column) {
          // 垂直布局：label 永远在上，不受 reverse 影响
          return (
            <>
              {labelElement}
              {fieldElement}
            </>
          );
        }
        // 水平布局：field -> label
        if (reverse) {
          return (
            <>
              {fieldElement}
              {labelElement}
            </>
          );
        }
        // 水平布局：label -> field
        return (
          <>
            {labelElement}
            {fieldElement}
          </>
        );
      }, [column, reverse, labelElement, fieldElement]);

      return (
        <Space.Flex
          ref={ref}
          column={column}
          spacing={spacing}
          className={clsx(COMPONENT_CLASSNAME_NAMES.FormControl, className)}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {labelAndField}

          {message && <Typography.Text text={message} as="small" color={messageColor} />}
        </Space.Flex>
      );
    },
  ),
);

FormControl.displayName = COMPONENT_DISPLAY_NAMES.FormControl;

export default FormControl;
