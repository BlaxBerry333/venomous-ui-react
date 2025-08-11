export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: VoidFunction;
    direction?: "left" | "right" | "top" | "bottom";
    width?: number | string;
    height?: number | string;
    maskClosable?: boolean;
}
//# sourceMappingURL=index.types.d.ts.map