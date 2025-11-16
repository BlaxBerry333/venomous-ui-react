import React from "react";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types";
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static displayName: "ErrorBoundary";
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState>;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    reset: () => void;
    render(): React.ReactNode;
}
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.component.d.ts.map