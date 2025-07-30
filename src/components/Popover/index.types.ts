export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  placement?: "top" | "bottom";
  renderTrigger: (isOpen: boolean) => React.ReactNode;
  contentStyle?: React.CSSProperties;
}

export type PopoverPosition = {
  top: number;
  left: number;
};
