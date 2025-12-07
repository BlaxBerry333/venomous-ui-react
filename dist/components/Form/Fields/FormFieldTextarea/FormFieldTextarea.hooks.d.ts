import React from "react";
import type { FormFieldTextareaProps } from "./FormFieldTextarea.types";
export declare function useFormFieldTextareaActions({ value, onChange, disabled, readOnly, autoSize, minRows, maxRows, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, }: Pick<FormFieldTextareaProps, "value" | "onChange" | "disabled" | "readOnly" | "autoSize" | "minRows" | "maxRows"> & {
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
}): {
    textareaRef: React.RefObject<HTMLTextAreaElement | null>;
    inputValue: string;
    isFocused: boolean;
    isHovered: boolean;
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus: () => void;
    onBlur: () => void;
    WrapperElementEvents: {
        onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
        onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
        onMouseDown: React.MouseEventHandler<HTMLDivElement>;
        onMouseUp: React.MouseEventHandler<HTMLDivElement>;
    };
};
export declare function useFormFieldTextareaStyles({ variant, fullWidth, error, disabled, readOnly, isFocused, isHovered, }: Pick<FormFieldTextareaProps, "variant" | "fullWidth" | "error" | "disabled" | "readOnly"> & {
    isFocused: boolean;
    isHovered: boolean;
}): {
    wrapperStyle: React.CSSProperties;
    textareaStyle: React.CSSProperties;
    __: {
        DynamicVariantStyles: React.CSSProperties;
        DynamicStateStyles: React.CSSProperties;
        DynamicErrorStyles: React.CSSProperties;
        DynamicInteractionStyles: React.CSSProperties;
    };
};
//# sourceMappingURL=FormFieldTextarea.hooks.d.ts.map