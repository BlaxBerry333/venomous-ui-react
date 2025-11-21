import React from "react";
import { type TComponentDisplayName } from "../../../constants";
/**
 * FormField 基础样式参数
 */
export interface UseFormFieldBaseStylesParams {
    /** 组件 displayName，用于自定义样式 */
    displayNames: Partial<Record<"wrapper" | "input" | "prefix" | "suffix" | "dropdown", TComponentDisplayName>>;
    /** 样式参数 */
    variant: string;
    fullWidth?: boolean;
    error?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    isFocused: boolean;
    isHovered: boolean;
    /** 可选的自定义配置 */
    customConfig?: {
        /** field 的最小宽度，默认 300 */
        minWidth?: number;
        /** field Wrapper 的额外样式 */
        wrapperExtraStyles?: React.CSSProperties;
        /** field Input 的额外样式 */
        inputExtraStyles?: React.CSSProperties;
        /** field Prefix 的额外样式 */
        prefixExtraStyles?: React.CSSProperties;
        /** field Suffix 的额外样式 */
        suffixExtraStyles?: React.CSSProperties;
        /** field Dropdown 的额外样式 */
        dropdownExtraStyles?: React.CSSProperties;
    };
}
/**
 * FormField 基础样式 Hook
 */
export declare function useFormFieldBaseStyles({ displayNames, variant, fullWidth, error, disabled, readOnly, isFocused, isHovered, customConfig, }: UseFormFieldBaseStylesParams): {
    wrapperStyle: React.CSSProperties;
    inputStyle: React.CSSProperties;
    prefixStyle: React.CSSProperties;
    suffixStyle: React.CSSProperties;
    dropdownStyle: React.CSSProperties;
    __: {
        DynamicVariantStyles: React.CSSProperties;
        DynamicStateStyles: React.CSSProperties;
        DynamicErrorStyles: React.CSSProperties;
        DynamicInteractionStyles: React.CSSProperties;
    };
};
//# sourceMappingURL=useFormFieldBaseStyles.d.ts.map