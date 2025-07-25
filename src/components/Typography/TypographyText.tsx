"use client";

import React from "react";

import { TypographySize } from "@/utils";
import { _defaultTypographyColor, useTypographyStyle } from "./_useTypographyStyle";
import type { TypographyTextProps } from "./index.types";

const TypographyText = React.memo<TypographyTextProps>(
  ({ style, text, as: Tag = "span", color = _defaultTypographyColor, ...props }) => {
    const { fontColor } = useTypographyStyle({ color });

    if (Tag === "strong") {
      return (
        <strong
          style={{
            fontSize: TypographySize.text,
            fontWeight: "bold",
            color: fontColor,
            ...style,
          }}
          {...props}
        >
          {text}
        </strong>
      );
    }

    if (Tag === "small") {
      return (
        <small
          style={{
            fontSize: TypographySize.small,
            color: fontColor,
            ...style,
          }}
          {...props}
        >
          {text}
        </small>
      );
    }

    return (
      <span
        style={{
          fontSize: TypographySize.text,
          fontWeight: "normal",
          color: fontColor,
          ...style,
        }}
        {...props}
      >
        {text}
      </span>
    );
  },
);

TypographyText.displayName = "Typography.Text";
export default TypographyText;
