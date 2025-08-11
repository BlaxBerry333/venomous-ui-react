import type { SemanticColors } from "@/utils";
import type { IconProps } from "../Icon";

export const ButtonVariantMap = {
  contained: "contained",
  outlined: "outlined",
  ghost: "ghost",
  transparent: "transparent",
} as const;

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color"> {
  text: string;
  variant?: keyof typeof ButtonVariantMap;

  isLoading?: boolean;
  isDisabled?: boolean;

  icon?: IconProps["icon"];
  iconPosition?: "start" | "end";
  iconWidth?: IconProps["width"];
  iconStyle?: IconProps["style"];

  semanticColor?: keyof typeof SemanticColors;
}

export interface ButtonsIconProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color"> {
  variant?: keyof typeof ButtonVariantMap;

  isLoading?: boolean;
  isDisabled?: boolean;

  icon: IconProps["icon"];
  iconWidth?: IconProps["width"];
  iconStyle?: IconProps["style"];

  semanticColor?: keyof typeof SemanticColors;
}
