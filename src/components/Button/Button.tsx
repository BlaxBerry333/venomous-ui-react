"use client";

import clsx from "clsx";
import React from "react";

import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { useButtonStyle } from "./_useButtonStyle";
import type { ButtonProps } from "./index.types";

const Button = React.memo<ButtonProps>(
  ({
    className,
    type = "button",
    style,
    text,
    variant = "contained",
    isLoading,
    isDisabled,
    icon,
    iconPosition = "start",
    iconWidth = 20,
    semanticColor,
    ...props
  }) => {
    const { buttonStyles } = useButtonStyle({
      isLoading,
      isDisabled: isDisabled || props.disabled,
      variant,
      semanticColor,
    });

    return (
      <button
        className={clsx("Venomous-UI-React--Button", className)}
        type={type}
        disabled={isLoading || isDisabled}
        style={{
          flexDirection: iconPosition === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...buttonStyles,
          ...style,
        }}
        {...props}
      >
        {/* icon */}
        {icon && (
          <Icon
            icon={icon}
            width={iconWidth}
            style={{
              marginLeft: iconPosition === "start" ? "0px" : "8px",
              marginRight: iconPosition === "end" ? "0px" : "8px",
              color: "inherit",
            }}
          />
        )}

        {/* text */}
        <Typography.Text text={text} style={{ color: "inherit" }} />

        {/* Mask */}
        <div
          style={{
            display: isLoading ? "flex" : "none",
            borderRadius: "4px",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: buttonStyles.backgroundColor,
          }}
        >
          <Icon icon="svg-spinners:270-ring-with-bg" width={24} style={{ color: "inherit" }} />
        </div>
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
