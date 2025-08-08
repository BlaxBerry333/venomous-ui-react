export type Handler = {
    isOpen: boolean;
    setIsOpen: (s: boolean) => void;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
export default function useHandler(): Handler;
//# sourceMappingURL=index.d.ts.map