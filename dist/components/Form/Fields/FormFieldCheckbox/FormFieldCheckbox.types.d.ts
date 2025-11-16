/**
 * FormFieldCheckbox Ref 类型
 */
export type FormFieldCheckboxRef = HTMLInputElement;
/**
 * FormFieldCheckbox Props
 */
export interface FormFieldCheckboxProps extends Omit<React.InputHTMLAttributes<FormFieldCheckboxRef>, "type" | "onChange" | "onMouseEnter" | "onMouseLeave"> {
    /**
     * Callback fired when the checked state changes.
     */
    onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Whether the checkbox is in error state.
     * @default false
     */
    error?: boolean;
    /**
     * Mouse enter event handler.
     */
    onMouseEnter?: React.MouseEventHandler<SVGSVGElement>;
    /**
     * Mouse leave event handler.
     */
    onMouseLeave?: React.MouseEventHandler<SVGSVGElement>;
}
//# sourceMappingURL=FormFieldCheckbox.types.d.ts.map