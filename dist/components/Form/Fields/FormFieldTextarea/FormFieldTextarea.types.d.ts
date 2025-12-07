import type { FormFieldBaseProps } from "../../../../components/Form/_";
export type FormFieldTextareaRef = HTMLTextAreaElement;
export interface FormFieldTextareaProps extends Omit<FormFieldBaseProps, "prefix" | "suffix" | "prefixClassName" | "prefixStyle" | "suffixClassName" | "suffixStyle">, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange"> {
    /**
     * The name attribute for the textarea element.
     * Used to identify the form data after submission.
     */
    name?: string;
    /**
     * The value of the textarea.
     */
    value?: string;
    /**
     * Callback fired when the value changes.
     */
    onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * Number of rows to display. When autoSize is enabled, this is ignored.
     * @default 3
     */
    rows?: number;
    /**
     * Whether to auto-resize height based on content.
     * @default false
     */
    autoSize?: boolean;
    /**
     * Minimum number of rows when autoSize is enabled.
     */
    minRows?: number;
    /**
     * Maximum number of rows when autoSize is enabled.
     */
    maxRows?: number;
}
//# sourceMappingURL=FormFieldTextarea.types.d.ts.map