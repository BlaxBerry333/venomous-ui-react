import type { SpaceFlexProps } from "../../../components/Space/SpaceFlex.types";
export type FormControlRef = HTMLDivElement;
export interface FormControlProps extends Pick<SpaceFlexProps, "column" | "spacing" | "className" | "style" | "onMouseEnter" | "onMouseLeave"> {
    /**
     * The label text.
     */
    label?: string;
    /**
     * Render prop for the field element.
     * Receives the auto-generated id for label association.
     */
    children: (id: string) => React.ReactNode;
    /**
     * The helper text or error message.
     */
    message?: string;
    /**
     * Whether the field is required (adds * to label).
     * @default false
     */
    required?: boolean;
    /**
     * Whether the field is in error state (red label & message).
     * @default false
     */
    isError?: boolean;
    /**
     * Whether the field is disabled (gray label & message).
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether to reverse label and field position.
     * - false: label before field (default)
     * - true: field before label
     * @default false
     */
    reverse?: boolean;
    /**
     * Whether to use vertical layout.
     * @default true
     */
    column?: boolean;
    /**
     * The spacing between elements.
     * @default 4
     */
    spacing?: number;
}
//# sourceMappingURL=FormControl.types.d.ts.map