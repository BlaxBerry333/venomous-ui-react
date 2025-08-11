export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: VoidFunction;

  direction?: "left" | "right" | "top" | "bottom";
  width?: number | string;
  height?: number | string;
  maskClosable?: boolean; // 是否允许点击遮罩关闭
}
