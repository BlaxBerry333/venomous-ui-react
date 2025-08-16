export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "top" | "bottom" | "left" | "right"; // 弹出的方向
  alignment?: "start" | "center" | "end"; // 对齐位置
  trigger?: "click" | "hover"; // 触发的方式
  renderTrigger: (params: { isOpen: boolean; close: VoidFunction; toggle: VoidFunction }) => React.ReactNode;
  contentStyle?: React.CSSProperties;
  onClickOutside?: () => void;
}
