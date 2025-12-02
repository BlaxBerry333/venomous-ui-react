"use client";

import React from "react";

import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useButtonActions } from "./Button.hooks";
import { BUTTON_VARIANT_MAP } from "./Button.types";
import { useIconButtonStyles } from "./IconButton.hooks";
import type { IconButtonProps, IconButtonRef } from "./IconButton.types";

const IconButton = React.memo(
  React.forwardRef<IconButtonRef, IconButtonProps>(
    (
      {
        className,
        style,
        type = "button",
        icon,
        disabled: propDisabled,
        loading: propLoading,
        variant: propVariant,
        circle: propCircle,
        color: propColor,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<IconButtonProps>({
        displayName: COMPONENT_DISPLAY_NAMES.IconButton,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const disabled = propDisabled ?? customComponentProps.disabled ?? false;
      const loading = propLoading ?? customComponentProps.loading ?? false;
      const variant = propVariant ?? customComponentProps.variant ?? BUTTON_VARIANT_MAP.CONTAINED;
      const circle = propCircle ?? customComponentProps.circle ?? false;
      const color = propColor ?? customComponentProps.color;

      const { ElementEvents, isHovered, isClicked } = useButtonActions({
        disabled,
        loading,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
      });
      const { componentStyle } = useIconButtonStyles({
        disabled,
        loading,
        variant,
        circle,
        color,
        isHovered,
        isClicked,
      });

      return (
        <button
          type={type}
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.IconButton, className)}
          style={{ ...componentStyle, ...style }}
          disabled={disabled || loading}
          {...props}
          {...ElementEvents}
        >
          <Icon icon={icon} style={{ color: "inherit", opacity: loading ? 0 : 1, pointerEvents: "none" }} />

          {loading && <Icon icon="svg-spinners:270-ring-with-bg" width={20} style={__LOADING_ICON_STYLE} />}
        </button>
      );
    },
  ),
);

IconButton.displayName = COMPONENT_DISPLAY_NAMES.IconButton;
export default IconButton;

const __LOADING_ICON_STYLE: React.CSSProperties = {
  position: "absolute",
  color: "inherit",
  pointerEvents: "none",
};
