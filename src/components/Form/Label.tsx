"use client";

import clsx from "clsx";
import React from "react";

import { useDesign } from "@/hooks";
import { SEMANTIC_COLORS } from "@/utils";
import { Space } from "../Space";
import { Typography } from "../Typography";
import { LabelPositionMap, type LabelProps } from "./index.types";

const Label = React.memo<LabelProps>(
  ({
    children,
    className,
    style,
    htmlFor,
    label = "",
    isError = false,
    required = false,
    position = LabelPositionMap.top,
    ...props
  }) => {
    const design = useDesign();

    return (
      <label
        htmlFor={htmlFor}
        className={clsx("Venomous-UI-React--Form.Label", className)}
        style={{
          width: "max-content",
          display: "flex",
          gap: "8px",
          ...(position === LabelPositionMap.top && { flexDirection: "column", alignItems: "flex-start" }),
          ...(position === LabelPositionMap.left && { flexDirection: "row", alignItems: "center" }),
          ...(position === LabelPositionMap.right && { flexDirection: "row-reverse", alignItems: "center" }),
          color: isError ? SEMANTIC_COLORS.error : design.TextColors.primary,
          ...style,
        }}
        {...props}
      >
        {/* required star + label */}
        <Space.Flex gap={0} style={{ width: "100%", alignItems: "center" }}>
          {/* required star */}
          {required && (
            <Typography.Text as="small" text="*" style={{ color: SEMANTIC_COLORS.error, marginRight: "2px" }} />
          )}
          {/* label text */}
          <Typography.Text
            as="small"
            text={label}
            style={{ color: "inherit", fontWeight: "bold", paddingLeft: required ? 0 : "4px" }}
          />
        </Space.Flex>

        {children}
      </label>
    );
  },
);

Label.displayName = "Form.Label";
export default Label;
