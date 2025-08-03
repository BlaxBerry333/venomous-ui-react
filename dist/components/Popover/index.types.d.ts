export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
    placement?: "top" | "bottom";
    trigger?: "click" | "hover";
    renderTrigger: (isOpen: boolean) => React.ReactNode;
    contentStyle?: React.CSSProperties;
    onClickOutside?: () => void;
}
export type PopoverPosition = {
    top: number;
    left: number;
};
//# sourceMappingURL=index.types.d.ts.map