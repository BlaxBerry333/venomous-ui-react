import type { SemanticColors } from "@/utils";
import type { IconProps } from "../Icon";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  text: string;
  variant?: "contained" | "outlined" | "ghost";

  isLoading?: boolean;
  isDisabled?: boolean;

  icon?: IconProps["icon"];
  iconPosition?: "start" | "end";
  iconWidth?: IconProps["width"];

  semanticColor?: keyof typeof SemanticColors;
}

export interface ButtonsIconProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: "contained" | "outlined" | "ghost";

  isLoading?: boolean;
  isDisabled?: boolean;

  icon: IconProps["icon"];
  iconWidth?: IconProps["width"];

  semanticColor?: keyof typeof SemanticColors;
}
