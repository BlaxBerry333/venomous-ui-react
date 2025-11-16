import TableBody from "./TableBody.component";
import TableCell from "./TableCell.component";
import TableComponent from "./TableContainer.component";
import TableHead from "./TableHead.component";
import TableRow from "./TableRow.component";

export const Table = {
  Container: TableComponent,
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
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
