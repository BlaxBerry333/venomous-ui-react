export type Handler = {
    isOpen: boolean;
    setIsOpen: (s: boolean) => void;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
export default function useHandler(defaultValue?: Handler["isOpen"]): Handler;
//# sourceMappingURL=index.d.ts.map