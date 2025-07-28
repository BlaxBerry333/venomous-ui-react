export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  placement?: "top" | "bottom";
  renderTrigger: (params?: { isOpen: boolean }) => React.ReactNode;
}

export type PopoverPosition = {
  top: number;
  left: number;
};
