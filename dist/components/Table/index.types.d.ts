export interface TableProps<T> extends Omit<React.TableHTMLAttributes<HTMLTableElement>, "children"> {
    columns: TableColumnData<T>[];
    rows: T[];
    rowUnionKey: (row: T, rowIndex: number) => number | string;
    renderRowActions?: (row: T, rowIndex: number) => React.ReactNode;
    headProps?: React.HTMLAttributes<HTMLTableSectionElement>;
    bodyProps?: React.HTMLAttributes<HTMLTableSectionElement>;
    headRowProps?: Omit<TableRowProps, "children">;
    bodyRowProps?: Omit<TableRowProps, "children">;
    headRowCellProps?: Omit<TableCellProps, "children">;
    bodyRowCellProps?: Omit<TableCellProps, "children">;
}
export interface TableColumnData<T> {
    key: keyof T;
    label: string;
    renderCell?: (row: T, rowIndex: number) => React.ReactNode;
    headerCellProps?: React.HTMLAttributes<HTMLTableCellElement>;
}
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
}
export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    as?: "th" | "td";
}
//# sourceMappingURL=index.types.d.ts.map