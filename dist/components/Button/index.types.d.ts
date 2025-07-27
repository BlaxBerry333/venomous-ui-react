import type { IconProps } from "../Icon";
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    text: string;
    variant?: "contained" | "outlined" | "ghost";
    isLoading?: boolean;
    isDisabled?: boolean;
    icon?: IconProps["icon"];
    iconPosition?: "start" | "end";
    iconWidth?: IconProps["width"];
}
export interface ButtonsIconProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    variant?: "contained" | "outlined" | "ghost";
    isLoading?: boolean;
    isDisabled?: boolean;
    icon: IconProps["icon"];
    iconWidth?: IconProps["width"];
}
//# sourceMappingURL=index.types.d.ts.map