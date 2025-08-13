export interface TransitionsCollapseProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    direction?: "left" | "right" | "up" | "down";
}
export interface TransitionsCollapseSideProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    storageKey?: string;
    expandSideWidth: number;
    collapsedSideWidth: number;
    renderContent: (params: {
        isCollapsed: boolean;
        className: string;
        baseStyles: React.CSSProperties;
    }) => React.ReactNode;
}
//# sourceMappingURL=index.types.d.ts.map