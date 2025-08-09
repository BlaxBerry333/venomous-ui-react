import type { IconProps } from "../Icon";
export interface ChipProps {
    text: string;
    isDisabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    closeIcon?: IconProps["icon"];
    closeIconPosition?: "start" | "end";
    onClose?: VoidFunction;
}
//# sourceMappingURL=index.types.d.ts.map