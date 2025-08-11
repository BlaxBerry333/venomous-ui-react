import React from "react";
import type { FormFieldCheckboxProps } from "./index.types";
export declare function useToggleFormFieldChecked({ checked, disabled, onChange, }: Pick<FormFieldCheckboxProps, "checked" | "disabled" | "onChange">): {
    inputRef: React.RefObject<HTMLInputElement | null>;
    isChecked: boolean;
    toggleOriginalIsChecked: React.ChangeEventHandler<HTMLInputElement>;
    toggleCustomIsChecked: React.MouseEventHandler<HTMLDivElement | SVGSVGElement>;
};
//# sourceMappingURL=_useToggleFormFieldChecked.d.ts.map