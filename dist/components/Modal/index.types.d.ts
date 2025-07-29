import type { BreakPointName } from "@/utils";
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    maskClosable?: boolean;
    maxBreakpoint?: BreakPointName;
}
//# sourceMappingURL=index.types.d.ts.map