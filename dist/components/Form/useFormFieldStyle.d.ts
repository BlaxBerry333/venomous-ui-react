export declare function useFormFieldStyle({ fullWidth, isDisabled, isError, isFocused, }: {
    fullWidth?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
    isFocused?: boolean;
}): {
    backgroundColor: import("csstype").Property.BackgroundColor | undefined;
    textColor: import("csstype").Property.Color | undefined;
    borderColor: import("csstype").Property.BorderColor | undefined;
    outlineColor: import("csstype").Property.Color | undefined;
    commonStyles: {
        cursor?: string | undefined;
        outline?: string | undefined;
        outlineOffset?: number | undefined;
        outlineWidth?: number | undefined;
        outlineStyle?: string | undefined;
        outlineColor?: import("csstype").Property.Color | undefined;
        display: string;
        width: string;
        minWidth: string | number;
        minHeight: number;
        padding: string;
        backgroundColor: import("csstype").Property.BackgroundColor | undefined;
        color: import("csstype").Property.Color | undefined;
        borderRadius: string;
        borderWidth: number;
        borderStyle: string;
        borderColor: import("csstype").Property.BorderColor | undefined;
    };
};
//# sourceMappingURL=useFormFieldStyle.d.ts.map