import React from "react";
import type { FormFieldPasswordProps } from "./FormFieldPassword.types";
export declare function useFormFieldPasswordStyles({ variant, fullWidth, error, disabled, readOnly, isFocused, isHovered, }: Partial<FormFieldPasswordProps> & {
    isFocused: boolean;
    isHovered: boolean;
}): {
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
export declare function useFormFieldPasswordActions({ value, onChange, disabled, readOnly, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, }: Partial<FormFieldPasswordProps>): {
    inputValue: string;
    isFocused: boolean;
    isHovered: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    onBlur: () => void;
    WrapperElementEvents: {
        onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
        onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
        onMouseDown: React.MouseEventHandler<HTMLDivElement>;
        onMouseUp: React.MouseEventHandler<HTMLDivElement>;
    };
    showPassword: boolean;
    togglePasswordVisibility: () => void;
};
//# sourceMappingURL=FormFieldPassword.hooks.d.ts.map