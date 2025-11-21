/**
 * TableRow type definitions
 */
export type TableRowRef = HTMLTableRowElement;
export interface TableRowProps extends Omit<React.HTMLAttributes<HTMLTableRowElement>, "style" | "className"> {
    /**
     * Custom styles for the table row
     */
    style?: React.CSSProperties;
    /**
     * Custom class name
     */
    className?: string;
}
//# sourceMappingURL=TableRow.types.d.ts.map