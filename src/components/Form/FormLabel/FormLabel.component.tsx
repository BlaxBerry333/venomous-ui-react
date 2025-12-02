"use client";

import React from "react";

import clsx from "clsx";

import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES, SEMANTIC_COLORS } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useFormLabelStyles } from "./FormLabel.hooks";
import type { FormLabelProps, FormLabelRef } from "./FormLabel.types";

const FormLabel = React.memo(
  React.forwardRef<FormLabelRef, FormLabelProps>(
    (
      {
        className,
        style,
        text,
        required: propRequired,
        disabled: propDisabled,
        isError: propIsError,
        htmlFor,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<FormLabelProps>({
        displayName: COMPONENT_DISPLAY_NAMES.FormLabel,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const required = propRequired ?? customComponentProps.required ?? false;
      const disabled = propDisabled ?? customComponentProps.disabled ?? false;
      const isError = propIsError ?? customComponentProps.isError ?? false;

      const {
        componentStyle,
        __: { DynamicColor, DynamicCursor },
      } = useFormLabelStyles({ disabled, isError });

      return (
        <label
          ref={ref}
          htmlFor={htmlFor}
          className={clsx(COMPONENT_CLASSNAME_NAMES.FormLabel, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {required && <Typography.Text text="*" as="strong" color={SEMANTIC_COLORS.ERROR} />}
          <Typography.Text
            text={text}
            as="strong"
            color={DynamicColor}
            style={{ cursor: DynamicCursor, marginLeft: 4 }}
          />
        </label>
      );
    },
  ),
);

FormLabel.displayName = COMPONENT_DISPLAY_NAMES.FormLabel;
export default FormLabel;
