import React from "react";
import type { DialogProps } from "./Dialog.types";
export declare function useDialogStyles(): {
    componentStyle: React.CSSProperties;
};
export declare function useDialogActions({ autoCloseOnClickBackdrop, onClickBackdrop }: Partial<DialogProps>): {
    handleBackdropClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};
//# sourceMappingURL=Dialog.hooks.d.ts.map