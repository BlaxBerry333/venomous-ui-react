import { type IconProps as IconifyIconProps } from "@iconify/react";
export type IconRef = SVGSVGElement;
export interface IconProps extends Omit<IconifyIconProps, "children" | "color"> {
    /**
     * The icon to be rendered.
     * @required
     */
    icon: string;
    /**
     * The width of the icon ( px )
     * @default 24
     */
    width?: number;
    /**
     * The color to be used as text color ( hex string ).
     * @default undefined
     */
    color?: React.CSSProperties["color"];
}
//# sourceMappingURL=Icon.types.d.ts.map