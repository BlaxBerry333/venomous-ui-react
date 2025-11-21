import React from "react";
export default function useFullScreen(elementRef?: React.RefObject<HTMLElement | null>, options?: {
    onEnter?: () => void;
    onExit?: () => void;
    onError?: (error: Error) => void;
}): {
    isFullscreen: boolean;
    isSupported: boolean;
    enterFullscreen: () => Promise<void>;
    exitFullscreen: () => Promise<void>;
    toggleFullscreen: () => Promise<void>;
};
//# sourceMappingURL=index.d.ts.map