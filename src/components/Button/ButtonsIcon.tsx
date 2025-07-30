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
      isDisabled: isDisabled || props.disabled,
      variant,
      semanticColor,
    });

    return (
      <button
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
          }}
        />
      </button>
    );
  },
);

ButtonsIcon.displayName = "Buttons.Icon";
export default ButtonsIcon;
