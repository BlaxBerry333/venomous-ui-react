export declare const Table: {
    Container: <T>({ className, style, columns, rows, rowKey, bordered: propBordered, TableHeadStyle, TableBodyStyle, TableHeadRowStyle, TableBodyRowStyle, TableHeadCellStyle, TableBodyCellStyle, ...props }: import("./TableContainer.types").TableContainerProps<T>) => import("react/jsx-runtime").JSX.Element;
    Head: import("react").NamedExoticComponent<import("./TableHead.types").TableHeadProps & import("react").RefAttributes<HTMLTableSectionElement>>;
    Body: import("react").NamedExoticComponent<import("./TableBody.types").TableBodyProps & import("react").RefAttributes<HTMLTableSectionElement>>;
    Row: import("react").NamedExoticComponent<import("./TableRow.types").TableRowProps & import("react").RefAttributes<HTMLTableRowElement>>;
    Cell: import("react").NamedExoticComponent<import("./TableCell.types").TableCellProps & import("react").RefAttributes<HTMLTableCellElement>>;
};
export { useTableBodyStyles } from "./TableBody.hooks";
export type { TableBodyProps, TableBodyRef } from "./TableBody.types";
export { useTableCellStyles } from "./TableCell.hooks";
export { TABLE_CELL_ALIGN_MAP, TABLE_CELL_ELEMENT_MAP, TABLE_CELL_SORT_ORDER_MAP } from "./TableCell.types";
export type { TableCellProps, TableCellRef } from "./TableCell.types";
export { useTableContainerStyles, useTableSorting } from "./TableContainer.hooks";
export type { TableColumnData, TableContainerProps, TableContainerRef } from "./TableContainer.types";
export { useTableHeadStyles } from "./TableHead.hooks";
export type { TableHeadProps, TableHeadRef } from "./TableHead.types";
export { useTableRowStyles } from "./TableRow.hooks";
export type { TableRowProps, TableRowRef } from "./TableRow.types";
//# sourceMappingURL=index.d.ts.map