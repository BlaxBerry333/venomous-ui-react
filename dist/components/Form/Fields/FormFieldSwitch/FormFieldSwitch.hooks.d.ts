import React from "react";
import type { FormFieldSwitchProps } from "./FormFieldSwitch.types";
export declare function useFormFieldSwitchActions({ checked, defaultChecked, onChange, disabled, externalRef, }: Pick<FormFieldSwitchProps, "checked" | "defaultChecked" | "onChange" | "disabled"> & {
    externalRef?: React.ForwardedRef<HTMLInputElement>;
}): {
    internalChecked: boolean;
    isFocused: boolean;
    isHovered: boolean;
    setRefs: (node: HTMLInputElement | null) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleFocus: () => void;
    handleBlur: () => void;
    handleClick: (_: React.MouseEvent<HTMLDivElement>) => void;
    WrapperElementEvents: {
        onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
        onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
    };
};
export declare function useFormFieldSwitchStyles({ checked, disabled, isHovered, isFocused, }: Pick<FormFieldSwitchProps, "checked" | "disabled"> & {
    isHovered: boolean;
    isFocused: boolean;
}): {
    trackStyle: React.CSSProperties;
    handleStyle: React.CSSProperties;
    __: {
        DynamicTrackVariantStyles: React.CSSProperties;
        DynamicTrackStateStyles: React.CSSProperties;
        DynamicTrackInteractionStyles: React.CSSProperties;
        DynamicHandleInteractionStyles: React.CSSProperties;
    };
};
//# sourceMappingURL=FormFieldSwitch.hooks.d.ts.map