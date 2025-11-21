import React from "react";
import type { ScrollToTopProps } from "./ScrollToTop.types";
export declare function useScrollToTopActions({ distance, onClick }: Pick<ScrollToTopProps, "distance" | "onClick">): {
    isVisible: boolean;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
//# sourceMappingURL=ScrollToTop.hooks.d.ts.map