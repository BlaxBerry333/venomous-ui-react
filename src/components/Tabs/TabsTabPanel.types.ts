export type TabsTabPanelRef = HTMLDivElement;

export interface TabsTabPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Whether the panel is currently visible.
   * @default false
   */
  visible?: boolean;

  /**
   * Whether to keep the panel mounted when invisible.
   * @default false
   */
  keepMounted?: boolean;

  /**
   * The content to display inside.
   */
  children?: React.ReactNode;
}
