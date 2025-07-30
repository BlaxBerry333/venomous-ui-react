import type { SemanticColors } from "@/utils";
import type { IconProps } from "../Icon";

export const ButtonVariantMap = {
  contained: "contained",
  outlined: "outlined",
  ghost: "ghost",
} as const;

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  text: string;
  variant?: keyof typeof ButtonVariantMap;

  isLoading?: boolean;
  isDisabled?: boolean;

  icon?: IconProps["icon"];
  iconPosition?: "start" | "end";
  iconWidth?: IconProps["width"];

  semanticColor?: keyof typeof SemanticColors;
}

export interface ButtonsIconProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: keyof typeof ButtonVariantMap;

  isLoading?: boolean;
  isDisabled?: boolean;

  icon: IconProps["icon"];
  iconWidth?: IconProps["width"];

  semanticColor?: keyof typeof SemanticColors;
}
