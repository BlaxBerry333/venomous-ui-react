import type { BreakPointName } from "@/utils";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;

  maskClosable?: boolean; // 是否允许点击遮罩关闭
  maxBreakpoint?: BreakPointName; // 最大宽度 ( xs | sm | md | lg | xl | xxl )
}

export interface ModalsConfirmProps extends Omit<ModalProps, "children"> {
  title: string;
  description: string;
  isConformLoading?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void | Promise<void>;
}
