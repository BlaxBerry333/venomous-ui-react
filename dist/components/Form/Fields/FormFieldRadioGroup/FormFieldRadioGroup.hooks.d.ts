import React from "react";
import { type FormFieldRadioGroupProps } from "./FormFieldRadioGroup.types";
export declare function useFormFieldRadioGroupActions<T = string>({ value, defaultValue, onChange, disabled, }: Pick<FormFieldRadioGroupProps<T>, "value" | "defaultValue" | "onChange" | "disabled">): {
    internalValue: T | undefined;
    handleChange: (optionValue: T, event: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare function useFormFieldRadioItemActions({ disabled }: {
    disabled?: boolean;
}): {
    isFocused: boolean;
    isHovered: boolean;
    handleFocus: () => void;
    handleBlur: () => void;
    LabelElementEvents: {
        onMouseEnter: React.MouseEventHandler<HTMLLabelElement>;
        onMouseLeave: React.MouseEventHandler<HTMLLabelElement>;
    };
};
export declare function useFormFieldRadioGroupStyles({ direction, spacing, }: Pick<FormFieldRadioGroupProps, "direction" | "spacing">): {
    groupStyle: React.CSSProperties;
};
export declare function useFormFieldRadioItemStyles({ checked, disabled, isHovered, isFocused, }: {
    checked: boolean;
    disabled?: boolean;
    isHovered: boolean;
    isFocused: boolean;
}): {
    labelStyle: React.CSSProperties;
    radioStyle: React.CSSProperties;
    radioDotStyle: React.CSSProperties;
    __: {
        DynamicRadioVariantStyles: React.CSSProperties;
        DynamicRadioInteractionStyles: React.CSSProperties;
    };
};
//# sourceMappingURL=FormFieldRadioGroup.hooks.d.ts.map