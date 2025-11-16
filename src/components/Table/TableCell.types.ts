export const TABLE_CELL_ELEMENT_MAP = {
  TH: "th",
  TD: "td",
} as const;

export const TABLE_CELL_ALIGN_MAP = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
} as const;

export const TABLE_CELL_SORT_ORDER_MAP = {
  ASC: "asc",
  DESC: "desc",
} as const;

export type TableCellRef = HTMLTableCellElement;

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  /**
   * Cell element type
   * @default "td"
   */
  as?: (typeof TABLE_CELL_ELEMENT_MAP)[keyof typeof TABLE_CELL_ELEMENT_MAP];

  /**
   * Text alignment
   * @default "left"
   */
  align?: (typeof TABLE_CELL_ALIGN_MAP)[keyof typeof TABLE_CELL_ALIGN_MAP];

  /**
   * Cell width
   */
  width?: string | number;

  /**
   * Whether to show borders (internal use, passed from Table)
   * @internal
   */
  bordered?: boolean;

  /**
   * Whether the column is sortable (only for th)
   * @internal
   */
  sortable?: boolean;

  /**
   * Whether the column is currently sorted (only for th)
   * @internal
   */
  sorted?: boolean;

  /**
   * Current sort order (only for th)
   * @internal
   */
  sortOrder?: (typeof TABLE_CELL_SORT_ORDER_MAP)[keyof typeof TABLE_CELL_SORT_ORDER_MAP];

  /**
   * Sort change callback (only for th)
   * @internal
   */
  onSortChange?: () => void;
}
