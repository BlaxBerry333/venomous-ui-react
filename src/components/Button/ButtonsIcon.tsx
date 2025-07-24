"use client";

import React from "react";

import { Icon } from "../Icon";
import { useButtonStyle } from "./_useButtonStyle";
import type { ButtonsIconProps } from "./index.types";

const ButtonsIcon = React.memo<ButtonsIconProps>(
  ({
    type = "button",
    style,
    variant = "contained",
    color = "auto",
    isLoading,
    isDisabled,
    icon,
    iconWidth = 20,
    ...props
  }) => {
    const { buttonStyles } = useButtonStyle({
      isLoading,
      isDisabled,
      variant,
      color,
    });

    return (
      <button
        type={type}
        disabled={isLoading || isDisabled}
        style={{
          ...buttonStyles,
          padding: 0,
          ...style,
        }}
        {...props}
      >
        <Icon icon={isLoading ? "eos-icons:loading" : icon} width={iconWidth} />
      </button>
    );
  },
);

ButtonsIcon.displayName = "Buttons.Icon";
export default ButtonsIcon;
