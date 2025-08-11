export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: "top" | "bottom" | "left" | "right";
    trigger?: "click" | "hover";
    renderTrigger: (isOpen: boolean) => React.ReactNode;
    contentStyle?: React.CSSProperties;
    onClickOutside?: () => void;
}
//# sourceMappingURL=index.types.d.ts.map