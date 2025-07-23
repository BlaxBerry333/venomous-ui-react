import React from "react";
export default function useHandler(): {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
//# sourceMappingURL=index.d.ts.map