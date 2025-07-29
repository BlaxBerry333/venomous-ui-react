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
    isLoading,
    isDisabled,
    icon,
    iconWidth = 20,
    semanticColor,
    ...props
  }) => {
    const { buttonStyles } = useButtonStyle({
      isLoading,
      isDisabled,
      variant,
      semanticColor,
    });

    return (
      <button
        type={type}
        disabled={isLoading || isDisabled}
        style={{
          padding: 0,
          WebkitTapHighlightColor: "transparent",
          ...buttonStyles,
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
