"use client";

import React from "react";

import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useButtonActions } from "./Button.hooks";
import { BUTTON_VARIANT_MAP } from "./Button.types";
import { useIconButtonStyles } from "./IconButton.hooks";
import { ICON_BUTTON_SHAPE_MAP, type IconButtonProps, type IconButtonRef } from "./IconButton.types";

const IconButton = React.memo(
  React.forwardRef<IconButtonRef, IconButtonProps>(
    (
      {
        className,
        style,
        type = "button",
        icon,
        disabled = false,
        loading = false,
        variant = BUTTON_VARIANT_MAP.CONTAINED,
        shape = ICON_BUTTON_SHAPE_MAP.SQUARE,
        color,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
        ...props
      },
      ref,
    ) => {
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
        shape,
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
