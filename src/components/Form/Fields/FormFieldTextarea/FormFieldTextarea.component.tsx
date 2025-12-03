"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useFormFieldTextareaActions, useFormFieldTextareaStyles } from "./FormFieldTextarea.hooks";
import type { FormFieldTextareaProps, FormFieldTextareaRef } from "./FormFieldTextarea.types";

const FormFieldTextarea = React.memo(
  React.forwardRef<FormFieldTextareaRef, FormFieldTextareaProps>(
    (
      {
        className,
        style,
        wrapperClassName,
        wrapperStyle,

        value,
        onChange,
        variant: propVariant,
        error: propError,
        fullWidth: propFullWidth,
        disabled,
        readOnly,

        rows: propRows,
        autoSize: propAutoSize,
        minRows,
        maxRows,

        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,

        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<FormFieldTextareaProps>({
        displayName: COMPONENT_DISPLAY_NAMES.FormFieldTextarea,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const variant = propVariant ?? customComponentProps.variant ?? FORM_FIELD_VARIANT_MAP.OUTLINED;
      const error = propError ?? customComponentProps.error ?? false;
      const fullWidth = propFullWidth ?? customComponentProps.fullWidth ?? false;
      const rows = propRows ?? customComponentProps.rows ?? 3;
      const autoSize = propAutoSize ?? customComponentProps.autoSize ?? false;

      const { textareaRef, inputValue, isFocused, isHovered, handleChange, onFocus, onBlur, WrapperElementEvents } =
        useFormFieldTextareaActions({
          value,
          onChange,
          disabled,
          readOnly,
          autoSize,
          minRows,
          maxRows,
          onMouseEnter: onMouseEnter as React.MouseEventHandler<HTMLDivElement> | undefined,
          onMouseLeave: onMouseLeave as React.MouseEventHandler<HTMLDivElement> | undefined,
          onMouseDown: onMouseDown as React.MouseEventHandler<HTMLDivElement> | undefined,
          onMouseUp: onMouseUp as React.MouseEventHandler<HTMLDivElement> | undefined,
        });

      const { wrapperStyle: computedWrapperStyle, textareaStyle } = useFormFieldTextareaStyles({
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
      const textareaValueProps = isControlled ? { value: inputValue } : {};

      // ========== 合并 ref ==========
      const mergedRef = React.useCallback(
        (node: HTMLTextAreaElement | null) => {
          textareaRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        },
        [ref, textareaRef],
      );

      return (
        <Box
          as="div"
          className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldTextarea, wrapperClassName)}
          style={{ ...computedWrapperStyle, ...wrapperStyle }}
          {...WrapperElementEvents}
        >
          <textarea
            ref={mergedRef}
            className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldTextareaInput, className)}
            style={{ ...textareaStyle, ...style }}
            rows={autoSize ? undefined : rows}
            {...textareaValueProps}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            readOnly={readOnly}
            {...props}
          />
        </Box>
      );
    },
  ),
);

FormFieldTextarea.displayName = COMPONENT_DISPLAY_NAMES.FormFieldTextarea;
export default FormFieldTextarea;
