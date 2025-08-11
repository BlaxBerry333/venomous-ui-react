"use client";

import clsx from "clsx";
import React from "react";

import { Icon } from "../Icon";
import { useButtonStyle } from "./_useButtonStyle";
import type { ButtonsIconProps } from "./index.types";

const ButtonsIcon = React.memo<ButtonsIconProps>(
  ({
    className,
    type = "button",
    style,
    variant = "contained",
    isLoading,
    isDisabled,
    icon,
    iconWidth = 20,
    iconStyle,
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
        className={clsx("Venomous-UI-React--Buttons.Icon", className)}
        type={type}
        disabled={isLoading || isDisabled}
        style={{
          WebkitTapHighlightColor: "transparent",
          ...buttonStyles,
          padding: 0,
          ...style,
        }}
        {...props}
      >
        <Icon
          icon={isLoading ? "eos-icons:loading" : icon}
          width={iconWidth}
          style={{
            color: buttonStyles.color,
            ...iconStyle,
          }}
        />
      </button>
    );
  },
);

ButtonsIcon.displayName = "Buttons.Icon";
export default ButtonsIcon;
