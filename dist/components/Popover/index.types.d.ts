export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: "top" | "bottom" | "left" | "right";
    alignment?: "start" | "center" | "end";
    trigger?: "click" | "hover";
    renderTrigger: (params: {
        isOpen: boolean;
        close: VoidFunction;
        toggle: VoidFunction;
    }) => React.ReactNode;
    contentStyle?: React.CSSProperties;
    onClickOutside?: () => void;
}
//# sourceMappingURL=index.types.d.ts.map