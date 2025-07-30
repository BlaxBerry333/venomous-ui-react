import type { SemanticColors } from "@/utils";
import type { IconProps as IconifyIconProps } from "@iconify/react";

export interface IconProps extends IconifyIconProps {
  style?: React.CSSProperties;

  semanticColor?: keyof typeof SemanticColors;
}
