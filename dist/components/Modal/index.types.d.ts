import type { BreakPointName } from "@/utils";
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    maskClosable?: boolean;
    maxBreakpoint?: BreakPointName;
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
//# sourceMappingURL=index.types.d.ts.map