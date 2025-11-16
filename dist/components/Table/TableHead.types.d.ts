/**
 * TableHead type definitions
 */
export type TableHeadRef = HTMLTableSectionElement;
export interface TableHeadProps extends Omit<React.HTMLAttributes<HTMLTableSectionElement>, "style" | "className"> {
    /**
     * Custom styles for the table head
     */
    style?: React.CSSProperties;
    /**
     * Custom class name
     */
    className?: string;
}
//# sourceMappingURL=TableHead.types.d.ts.map