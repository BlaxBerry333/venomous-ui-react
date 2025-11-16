import type { TableBodyProps } from "./TableBody.types";
import type { TABLE_CELL_SORT_ORDER_MAP, TableCellProps } from "./TableCell.types";
import type { TableHeadProps } from "./TableHead.types";
import type { TableRowProps } from "./TableRow.types";

export type TableContainerRef = HTMLTableElement;

export interface TableContainerProps<T>
  extends Omit<React.TableHTMLAttributes<TableContainerRef>, "children" | "bordered" | "width" | "height"> {
  /**
   * Column configuration
   */
  columns: TableColumnData<T>[];

  /**
   * Data rows
   */
  rows: T[];

  /**
   * Row unique identifier
   * Can be a key of the object, or a function
   * @default (row, index) => index
   */
  rowKey?: keyof T | ((row: T, index: number) => string | number);

  /**
   * Whether to show borders
   * @default false
   */
  bordered?: boolean;

  /**
   * Table head style
   */
  TableHeadStyle?: TableHeadProps["style"];

  /**
   * Table body style
   */
  TableBodyStyle?: TableBodyProps["style"];

  /**
   * Table head row style
   */
  TableHeadRowStyle?: TableRowProps["style"];

  /**
   * Table body row style
   */
  TableBodyRowStyle?: TableRowProps["style"];

  /**
   * Table head cell style
   */
  TableHeadCellStyle?: TableCellProps["style"];

  /**
   * Table body cell style
   */
  TableBodyCellStyle?: TableCellProps["style"];
}

export interface TableColumnData<T> {
  /**
   * Column key, can be a key of the object, or a custom string (e.g. "actions")
   */
  key: keyof T | string;

  /**
   * Column label
   */
  label: string;

  /**
   * Custom cell render function
   */
  renderCell?: (row: T, rowIndex: number) => React.ReactNode;

  /**
   * Column width
   */
  width?: string | number;

  /**
   * Text alignment
   * @default "left"
   */
  align?: TableCellProps["align"];

  /**
   * Whether the column is sortable
   * @default false
   */
  sortable?: boolean;

  /**
   * Custom sort function
   * @param a - First row data
   * @param b - Second row data
   * @param sortOrder - Current sort order
   * @returns Comparison result (negative, zero, or positive)
   */
  onSort?: (
    a: T,
    b: T,
    sortOrder: (typeof TABLE_CELL_SORT_ORDER_MAP)[keyof typeof TABLE_CELL_SORT_ORDER_MAP],
  ) => number;

  /**
   * Table head cell style for this column
   */
  TableHeadCellStyle?: TableCellProps["style"];

  /**
   * Table body cell style for this column
   */
  TableBodyCellStyle?: TableCellProps["style"];
}
