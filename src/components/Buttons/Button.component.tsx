"use client";

import React from "react";

import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useButtonActions, useButtonStyles } from "./Button.hooks";
import { BUTTON_VARIANT_MAP, type ButtonProps, type ButtonRef } from "./Button.types";

const Button = React.memo(
  React.forwardRef<ButtonRef, ButtonProps>(
    (
      {
        className,
        style,
        type = "button",
        text,
        disabled = false,
        loading = false,
        variant = BUTTON_VARIANT_MAP.CONTAINED,
        color,
        fullWidth = false,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
        ...props
      },
      ref,
    ) => {
      const { isHovered, isClicked, ElementEvents } = useButtonActions({
        disabled,
        loading,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
      });
      const { componentStyle } = useButtonStyles({
        disabled,
        loading,
        variant,
        color,
        fullWidth,
        isHovered,
        isClicked,
      });

      return (
        <button
          type={type}
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.Button, className)}
          style={{ ...componentStyle, ...style }}
          disabled={disabled || loading}
          {...props}
          {...ElementEvents}
        >
          {text}

          {loading && <Icon icon="svg-spinners:270-ring-with-bg" style={__LOADING_ICON_STYLE} />}
        </button>
      );
    },
  ),
);

Button.displayName = COMPONENT_DISPLAY_NAMES.Button;
export default Button;

const __LOADING_ICON_STYLE: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "inherit",
  pointerEvents: "none",
};
