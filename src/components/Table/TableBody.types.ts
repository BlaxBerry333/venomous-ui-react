/**
 * TableBody type definitions
 */

export type TableBodyRef = HTMLTableSectionElement;

export interface TableBodyProps extends Omit<React.HTMLAttributes<HTMLTableSectionElement>, "style" | "className"> {
  /**
   * Custom styles for the table body
   */
  style?: React.CSSProperties;

  /**
   * Custom class name
   */
  className?: string;
}
