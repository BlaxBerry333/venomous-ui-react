"use client";

import clsx from "clsx";
import React from "react";

import { TextColors, ThemeColor } from "@/utils";
import { Space } from "../Space";
import { Theme } from "../Theme";
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
    const { themeMode } = Theme.useThemeMode();

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
          color: isError ? ThemeColor.RubyCopperhead : TextColors[themeMode].primary,
          ...style,
        }}
        {...props}
      >
        {/* required star + label */}
        <Space.Flex row gap={0} style={{ width: "100%", alignItems: "center" }}>
          {/* required star */}
          {required && (
            <Typography.Text as="small" text="*" style={{ color: ThemeColor.RubyCopperhead, marginRight: "2px" }} />
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
