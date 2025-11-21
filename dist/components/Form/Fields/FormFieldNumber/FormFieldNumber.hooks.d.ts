import React from "react";
import type { FormFieldNumberProps } from "./FormFieldNumber.types";
export declare function useFormFieldNumberStyles({ variant, fullWidth, error, disabled, readOnly, isFocused, isHovered, }: Partial<FormFieldNumberProps> & {
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
export declare function useFormFieldNumberActions({ value, onChange, min, max, step, disabled, readOnly, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, }: Partial<FormFieldNumberProps>): {
    inputValue: number | undefined;
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
    handleIncrement: () => void;
    handleDecrement: () => void;
};
//# sourceMappingURL=FormFieldNumber.hooks.d.ts.map