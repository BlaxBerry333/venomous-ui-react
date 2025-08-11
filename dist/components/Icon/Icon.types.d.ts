import type { SemanticColors } from "@/utils";
import type { IconProps as IconifyIconProps } from "@iconify/react";
export interface IconProps extends Omit<IconifyIconProps, "color"> {
    icon: IconifyIconProps["icon"];
    width?: number;
    style?: React.CSSProperties;
    className?: string;
    semanticColor?: keyof typeof SemanticColors;
}
//# sourceMappingURL=Icon.types.d.ts.map