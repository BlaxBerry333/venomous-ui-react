"use client";

import React from "react";

import { ThemeColor, TypographySize } from "@/utils";
import type { TypographyCodeProps } from "./index.types";

const TypographyCode = React.memo<TypographyCodeProps>(({ style, text, ...props }) => {
  return (
    <code
      style={{
        color: ThemeColor.TourmalineStiletto,
        backgroundColor: "#E7E9EB",
        border: "1px solid #CCCCCC",
        borderRadius: "4px",
        padding: "2px 4px",
        fontSize: TypographySize.small,
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
