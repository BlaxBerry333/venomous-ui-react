export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  placement?: "top" | "bottom";
  trigger?: "click" | "hover"; // 触发的方式
  renderTrigger: (isOpen: boolean) => React.ReactNode;
  contentStyle?: React.CSSProperties;
  onClickOutside?: () => void;
}

export type PopoverPosition = {
  top: number;
  left: number;
};
