import type { SemanticColors } from "@/utils";
import type { IconProps as IconifyIconProps } from "@iconify/react";

export interface IconProps extends IconifyIconProps {
  icon: IconifyIconProps["icon"];
  width?: number;
  style?: React.CSSProperties;
  className?: string;

  semanticColor?: keyof typeof SemanticColors;
}
