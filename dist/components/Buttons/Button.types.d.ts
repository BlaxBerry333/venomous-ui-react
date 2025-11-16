export declare const BUTTON_VARIANT_MAP: {
    readonly CONTAINED: "contained";
    readonly OUTLINED: "outlined";
    readonly TEXT: "text";
};
export type ButtonRef = HTMLButtonElement;
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<ButtonRef>, "children" | "color"> {
    /**
     * The text to be rendered as children of the button.
     * @required
     */
    text: string | undefined;
    /**
     * Whether the button is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the button is loading.
     * @default false
     */
    loading?: boolean;
    /**
     * The variant to be used.
     * @default "contained"
     */
    variant?: (typeof BUTTON_VARIANT_MAP)[keyof typeof BUTTON_VARIANT_MAP];
    /**
     * The color to be used as background color.
     * @default undefined
     */
    color?: React.CSSProperties["color"];
    /**
     * Whether the button should take full width of its container.
     * @default false
     */
    fullWidth?: boolean;
}
//# sourceMappingURL=Button.types.d.ts.map