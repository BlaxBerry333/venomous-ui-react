import React from "react";
export declare const TRANSITION_STATUS_MAP: {
    readonly ENTERING: "entering";
    readonly ENTERED: "entered";
    readonly EXITING: "exiting";
    readonly EXITED: "exited";
};
type __TransitionStatus = (typeof TRANSITION_STATUS_MAP)[keyof typeof TRANSITION_STATUS_MAP];
export declare function useTransitionState({ visible, duration, onFinish, }: {
    visible: boolean;
    duration?: number;
    onFinish?: VoidFunction;
}): __TransitionStatus;
export declare function useTransitionStateStyles({ status, duration, getBaseStyle, getEnteringStyle, getEnteredStyle, getExitingStyle, getExitedStyle, }: {
    status: __TransitionStatus;
    duration: number;
    getBaseStyle?: () => React.CSSProperties;
    getEnteringStyle?: () => React.CSSProperties;
    getEnteredStyle?: () => React.CSSProperties;
    getExitingStyle?: () => React.CSSProperties;
    getExitedStyle?: () => React.CSSProperties;
}): React.CSSProperties;
export {};
//# sourceMappingURL=useTransitionState.d.ts.map