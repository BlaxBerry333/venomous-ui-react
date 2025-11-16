export type DividerRef = HTMLHRElement;

export interface DividerProps extends React.HTMLAttributes<DividerRef> {
  /**
   * Whether the divider is column.
   * @default false
   */
  column?: boolean;
}
