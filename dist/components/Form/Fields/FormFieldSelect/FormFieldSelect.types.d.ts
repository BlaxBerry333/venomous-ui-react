import type { FormFieldBaseProps } from "../../../../components/Form/_";
/**
 * FormFieldSelect Option 数据结构
 */
export interface FormFieldSelectOption<T = any> {
    /**
     * The label of the option.
     */
    label: string;
    /**
     * The value of the option.
     */
    value: T;
    /**
     * Whether the option is disabled.
     * @default false
     */
    disabled?: boolean;
}
/**
 * FormFieldSelect Ref 类型
 */
export type FormFieldSelectRef = HTMLSelectElement;
/**
 * 基础 Props（单选和多选共用）
 */
interface FormFieldSelectBaseProps<T = any> extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "value" | "defaultValue" | "defaultChecked" | "size" | "prefix" | "className" | "style" | "multiple">, Omit<FormFieldBaseProps, "prefix" | "prefixClassName" | "prefixStyle" | "suffix" | "suffixClassName" | "suffixStyle"> {
    /**
     * The placeholder of the select.
     */
    placeholder?: string;
    /**
     * The options of the select dropdown.
     * @default []
     */
    options: FormFieldSelectOption<T>[];
    /**
     * The maximum height of the dropdown ( px ).
     * @default 300
     */
    maxDropdownHeight?: number;
    /**
     * The className of the dropdown.
     */
    dropdownClassName?: string;
    /**
     * The style of the dropdown.
     */
    dropdownStyle?: React.CSSProperties;
    /**
     * The className of the dropdown option.
     */
    optionClassName?: string;
    /**
     * The style of the dropdown option.
     */
    optionStyle?: React.CSSProperties;
}
/**
 * 单选模式 Props
 */
export interface FormFieldSelectSingleProps<T = any> extends FormFieldSelectBaseProps<T> {
    /**
     * Enable multiple selection mode
     * @default false
     */
    multiple?: false;
    /**
     * The value of the select (controlled mode).
     */
    value?: T;
    /**
     * The default value of the select (uncontrolled mode).
     */
    defaultValue?: T;
    /**
     * The callback function that is called when the value of the select changes.
     */
    onChange?: (value: T, option: FormFieldSelectOption<T>) => void;
}
/**
 * 多选模式 Props
 */
export interface FormFieldSelectMultipleProps<T = any> extends FormFieldSelectBaseProps<T> {
    /**
     * Enable multiple selection mode
     * @default false
     */
    multiple: true;
    /**
     * The values of the select (controlled mode).
     */
    value?: T[];
    /**
     * The default values of the select (uncontrolled mode).
     */
    defaultValue?: T[];
    /**
     * The callback function that is called when the values of the select change.
     */
    onChange?: (values: T[], options: FormFieldSelectOption<T>[]) => void;
    /**
     * Whether to close dropdown after selection
     * @default false (keep open in multiple mode)
     */
    autoCloseOnSelect?: boolean;
}
/**
 * FormFieldSelect Props（联合类型）
 */
export type FormFieldSelectProps<T = any> = FormFieldSelectSingleProps<T> | FormFieldSelectMultipleProps<T>;
export {};
//# sourceMappingURL=FormFieldSelect.types.d.ts.map