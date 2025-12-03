"use client";

import React from "react";

import clsx from "clsx";

import { FormLabel } from "@/components/Form/FormLabel";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES, SEMANTIC_COLORS } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import type { FormControlProps, FormControlRef } from "./FormControl.types";

const FormControl = React.memo(
  React.forwardRef<FormControlRef, FormControlProps>(
    (
      {
        className,
        style,
        label,
        LabelExtra,
        children,
        message,
        column: propColumn,
        spacing: propSpacing,
        reverse: propReverse,
        required: propRequired,
        isError: propIsError,
        disabled: propDisabled,
        onMouseEnter,
        onMouseLeave,
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<FormControlProps>({
        displayName: COMPONENT_DISPLAY_NAMES.FormControl,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const column = propColumn ?? customComponentProps.column ?? true;
      const spacing = propSpacing ?? customComponentProps.spacing ?? 4;
      const reverse = propReverse ?? customComponentProps.reverse ?? false;
      const required = propRequired ?? customComponentProps.required ?? false;
      const isError = propIsError ?? customComponentProps.isError ?? false;
      const disabled = propDisabled ?? customComponentProps.disabled ?? false;

      const fieldId = React.useId();
      const { TextColors } = useThemeDesigns();

      const messageColor = React.useMemo<string>(() => {
        if (disabled) return TextColors.disabled;
        if (isError) return SEMANTIC_COLORS.ERROR;
        return TextColors[2];
      }, [disabled, isError, TextColors]);

      const fieldElement = React.useMemo<React.ReactNode>(() => children(fieldId), [children, fieldId]);

      // Label 行：包含 label 和 LabelExtra（如果有）
      const labelRowElement = React.useMemo<React.JSX.Element | null>(() => {
        if (!label && !LabelExtra) return null;

        const labelNode = label ? (
          <FormLabel text={label} required={required} disabled={disabled} isError={isError} htmlFor={fieldId} />
        ) : null;

        // 如果只有 label 没有 LabelExtra，直接返回 label
        if (!LabelExtra) return labelNode;

        // 如果有 LabelExtra，使用 flex 布局
        // column=true 时：width: 100% + space-between（LabelExtra 右对齐）
        // column=false 时：自适应宽度 + gap（label 和 LabelExtra 紧凑排列）
        const labelRowStyle = column ? __LABEL_ROW_STYLE_COLUMN : __LABEL_ROW_STYLE_ROW;

        return (
          <div style={labelRowStyle}>
            {labelNode ?? <span />}
            {LabelExtra}
          </div>
        );
      }, [label, LabelExtra, required, disabled, isError, fieldId, column]);

      // message 元素
      const messageElement = React.useMemo<React.JSX.Element | null>(
        () => (message ? <Typography.Text text={message} as="small" color={messageColor} /> : null),
        [message, messageColor],
      );

      // 垂直布局（column=true）：labelRow -> field -> message
      if (column) {
        return (
          <Space.Flex
            ref={ref}
            column
            spacing={spacing}
            className={clsx(COMPONENT_CLASSNAME_NAMES.FormControl, className)}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {labelRowElement}
            {fieldElement}
            {messageElement}
          </Space.Flex>
        );
      }

      // 水平布局（column=false）
      // reverse=false: [Label] [Field + Message]  → field 占据剩余空间（flex: 1）
      // reverse=true:  [Field] [Label]            → field 自适应宽度（用于 Checkbox/Switch）
      // alignItems: flex-start 确保顶部对齐
      if (reverse) {
        // reverse=true: field 自适应，label 自适应
        // 典型用例：[✓] [同意服务条款...]
        return (
          <Space.Flex
            ref={ref}
            column={false}
            spacing={spacing}
            className={clsx(COMPONENT_CLASSNAME_NAMES.FormControl, className)}
            style={{ alignItems: "center", ...style }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {fieldElement}
            {labelRowElement}
          </Space.Flex>
        );
      }

      // reverse=false: label 固定宽度，field 占据剩余空间
      // 典型用例：[Label *] [Input Field...........]
      //                     [Message]
      return (
        <Space.Flex
          ref={ref}
          column={false}
          spacing={spacing}
          className={clsx(COMPONENT_CLASSNAME_NAMES.FormControl, className)}
          style={{ alignItems: "flex-start", ...style }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {labelRowElement}
          <div style={__FIELD_FLEX_STYLE}>
            {fieldElement}
            {messageElement}
          </div>
        </Space.Flex>
      );
    },
  ),
);

FormControl.displayName = COMPONENT_DISPLAY_NAMES.FormControl;

export default FormControl;

// ========== 私有常量 ==========
// column=true 时：width: 100% + space-between（LabelExtra 右对齐）
const __LABEL_ROW_STYLE_COLUMN: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

// column=false 时：自适应宽度 + gap（label 和 LabelExtra 紧凑排列）
const __LABEL_ROW_STYLE_ROW: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const __FIELD_FLEX_STYLE: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 4,
};
