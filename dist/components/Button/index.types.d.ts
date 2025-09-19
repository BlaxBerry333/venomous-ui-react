import type { SemanticColorName } from "../../utils";
import type { IconProps } from "../Icon";
export declare const ButtonVariantMap: {
    readonly contained: "contained";
    readonly outlined: "outlined";
    readonly ghost: "ghost";
    readonly transparent: "transparent";
};
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color"> {
    text: string;
    variant?: keyof typeof ButtonVariantMap;
    isLoading?: boolean;
    isDisabled?: boolean;
    icon?: IconProps["icon"];
    iconPosition?: "start" | "end";
    iconWidth?: IconProps["width"];
    iconStyle?: IconProps["style"];
    semanticColor?: SemanticColorName;
}
export interface ButtonsIconProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color"> {
    variant?: keyof typeof ButtonVariantMap;
    isLoading?: boolean;
    isDisabled?: boolean;
    icon: IconProps["icon"];
    iconWidth?: IconProps["width"];
    iconStyle?: IconProps["style"];
    semanticColor?: SemanticColorName;
}
//# sourceMappingURL=index.types.d.ts.map