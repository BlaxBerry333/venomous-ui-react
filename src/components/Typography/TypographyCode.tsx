"use client";

import clsx from "clsx";
import React from "react";

import { THEME_COLORS, TYPOGRAPHY_SIZES } from "@/utils";
import type { TypographyCodeProps } from "./index.types";

const TypographyCode = React.memo<TypographyCodeProps>(({ className, style, text, ...props }) => {
  return (
    <code
      className={clsx("Venomous-UI-React--Typography.Code", className)}
      style={{
        color: THEME_COLORS.RubyCopperhead,
        backgroundColor: "#E7E9EB",
        border: "1px solid #CCCCCC",
        borderRadius: "4px",
        padding: "2px 4px",
        fontSize: TYPOGRAPHY_SIZES.small,
        fontWeight: 600,
        ...style,
      }}
      {...props}
    >
      {text}
    </code>
  );
});

TypographyCode.displayName = "Typography.Code";
export default TypographyCode;
