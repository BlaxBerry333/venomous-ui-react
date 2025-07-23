"use client";

import React from "react";

import { useThemeColor, useThemeMode } from "@/hooks";
import { BorderColors, ButtonColors, IconColors, ShadowColors, TextColors, TypographySize } from "@/utils";
import { Icon } from "../Icon";
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
    iconColor = "auto",
    ...props
  }) => {
    const { isDarkThemeMode } = useThemeMode();
    const { themeColor } = useThemeColor();

    const buttonColor = color !== "auto" ? ButtonColors[color] : themeColor;

    return (
      <button
        type={type}
        disabled={isLoading || isDisabled}
        style={{
          height: "40px",
          width: "40px",
          padding: "0px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: TypographySize.text,
          fontWeight: "bold",
          borderRadius: "8px",
          borderColor: isDarkThemeMode ? BorderColors.darkMode : BorderColors.lightMode,
          cursor: "pointer",

          ...(variant === "contained"
            ? {
                backgroundColor: buttonColor,
                color: TextColors.white,
                boxShadow: isDarkThemeMode ? ShadowColors.darkMode : ShadowColors.lightMode,
              }
            : {}),
          ...(variant === "outline"
            ? {
                color: buttonColor,
                backgroundColor: "transparent",
                border: `1px solid ${buttonColor}`,
              }
            : {}),
          ...(variant === "ghost"
            ? {
                color: buttonColor,
                backgroundColor: "transparent",
              }
            : {}),
          ...style,
        }}
        {...props}
      >
        <Icon
          icon={icon}
          width={iconWidth}
          style={{
            color: variant === "contained" ? IconColors.white : IconColors[iconColor] || "inherit",
          }}
        />
      </button>
    );
  },
);

ButtonsIcon.displayName = "Buttons.Icon";
export default ButtonsIcon;

{
  /* <Button />
<Button text="Test" />
<Button text="Test" color="error" />
<Button text="Test" variant="outline" />
<Button text="Test" icon="solar:info-square-line-duotone" />
<Button text="Test" icon="solar:info-square-line-duotone" variant="outline" />
<Button text="Test" icon="solar:info-square-line-duotone" iconPosition="end" />
<Button icon="solar:info-square-line-duotone" />
<Button icon="solar:info-square-line-duotone" variant="ghost" />
<Button icon="solar:info-square-line-duotone" variant="outline" />
<Button text="Test" variant="ghost" />
<Button text="Test" variant="ghost" color="error" />
<Button text="Test" variant="outline" color="error" />
<Button text="Test" icon="solar:info-square-line-duotone" color="error" />
<Button text="Test" icon="solar:info-square-line-duotone" variant="outline" color="error" />
<Button icon="solar:info-square-line-duotone" variant="ghost" color="error" />
<Button icon="solar:info-square-line-duotone" variant="outline" color="error" />  
  */
}
