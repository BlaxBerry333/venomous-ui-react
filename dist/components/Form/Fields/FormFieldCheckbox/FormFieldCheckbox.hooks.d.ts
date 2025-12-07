import React from "react";
import type { FormFieldCheckboxProps } from "./FormFieldCheckbox.types";
export declare function useFormFieldCheckboxActions({ checked, defaultChecked, onChange, disabled, onMouseEnter, onMouseLeave, externalRef, }: Pick<FormFieldCheckboxProps, "checked" | "defaultChecked" | "onChange" | "disabled" | "onMouseEnter" | "onMouseLeave"> & {
    externalRef?: React.ForwardedRef<HTMLInputElement>;
}): {
    internalChecked: boolean;
    isFocused: boolean;
    isHovered: boolean;
    setRefs: (node: HTMLInputElement | null) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleFocus: () => void;
    handleBlur: () => void;
    handleClick: (_: React.MouseEvent<SVGSVGElement>) => void;
    WrapperElementEvents: {
        onMouseEnter: React.MouseEventHandler<SVGSVGElement>;
        onMouseLeave: React.MouseEventHandler<SVGSVGElement>;
    };
};
export declare function useFormFieldCheckboxStyles({ checked, disabled, isHovered, isFocused, }: Pick<FormFieldCheckboxProps, "checked" | "disabled"> & {
    isHovered: boolean;
    isFocused: boolean;
}): {
    checkboxStyle: React.CSSProperties;
    __: {
        DynamicCheckboxVariantStyles: React.CSSProperties;
        DynamicCheckboxStateStyles: React.CSSProperties;
        DynamicCheckboxInteractionStyles: React.CSSProperties;
    };
};
//# sourceMappingURL=FormFieldCheckbox.hooks.d.ts.map