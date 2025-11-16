export interface FormLabelProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, "children"> {
    text: string;
    required?: boolean;
    disabled?: boolean;
    isError?: boolean;
    htmlFor?: string;
}
export type FormLabelRef = HTMLLabelElement;
//# sourceMappingURL=FormLabel.types.d.ts.map