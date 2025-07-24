import type { ButtonColors } from "@/utils";
import type { IconProps } from "../Icon";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  text: string;
  variant?: "contained" | "outline" | "ghost";
  color?: keyof typeof ButtonColors;

  isLoading?: boolean;
  isDisabled?: boolean;

  icon?: IconProps["icon"];
  iconPosition?: "start" | "end";
  iconWidth?: IconProps["width"];
}

export interface ButtonsIconProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: "contained" | "outline" | "ghost";
  color?: keyof typeof ButtonColors;

  isLoading?: boolean;
  isDisabled?: boolean;

  icon: IconProps["icon"];
  iconWidth?: IconProps["width"];
}
