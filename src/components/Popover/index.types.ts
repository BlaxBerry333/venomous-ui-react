export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "top" | "bottom" | "left" | "right";
  trigger?: "click" | "hover"; // 触发的方式
  renderTrigger: (isOpen: boolean) => React.ReactNode;
  contentStyle?: React.CSSProperties;
  onClickOutside?: () => void;
}
