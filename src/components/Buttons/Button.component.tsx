"use client";

import React from "react";

import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
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
        disabled: propDisabled,
        loading: propLoading,
        variant: propVariant,
        color: propColor,
        fullWidth: propFullWidth,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<ButtonProps>({
        displayName: COMPONENT_DISPLAY_NAMES.Button,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const disabled = propDisabled ?? customComponentProps.disabled ?? false;
      const loading = propLoading ?? customComponentProps.loading ?? false;
      const variant = propVariant ?? customComponentProps.variant ?? BUTTON_VARIANT_MAP.CONTAINED;
      const color = propColor ?? customComponentProps.color;
      const fullWidth = propFullWidth ?? customComponentProps.fullWidth ?? false;

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
