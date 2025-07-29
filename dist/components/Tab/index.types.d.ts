export interface TabProps {
    tabs: Array<TabItemProps>;
    defaultActiveIndex?: number;
    variant: "pills" | "underline";
    onChange: (index: number, tabItem: TabItemProps) => void;
    tabContainerStyle?: React.CSSProperties;
    tabItemContainerStyle?: React.CSSProperties;
    tabItemStyle?: React.CSSProperties;
    tabIndicatorStyle?: React.CSSProperties;
    tabContentStyle?: React.CSSProperties;
}
export interface TabItemProps {
    key: string;
    label: string;
    icon?: string;
    content: React.ReactNode;
}
//# sourceMappingURL=index.types.d.ts.map