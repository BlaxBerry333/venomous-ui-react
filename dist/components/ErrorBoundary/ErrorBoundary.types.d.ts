import type React from "react";
/**
 * ErrorBoundary component props type.
 */
export interface ErrorBoundaryProps {
    /**
     * Child components to be wrapped by the error boundary.
     */
    children: React.ReactNode;
    /**
     * Fallback render function to display custom UI when an error occurs.
     * @param error - The error object that was thrown.
     * @param errorInfo - Additional error information including component stack trace.
     * @param reset - Function to reset the error boundary state and re-render children.
     * @returns React node to render as fallback UI.
     */
    fallback: (error: Error, errorInfo: React.ErrorInfo, reset: () => void) => React.ReactNode;
    /**
     * Callback function called when an error is caught.
     */
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}
/**
 * ErrorBoundary component state type.
 */
export interface ErrorBoundaryState {
    /**
     * Whether an error has occurred.
     */
    hasError: boolean;
    /**
     * The error object.
     */
    error: Error | null;
    /**
     * The error info object containing component stack.
     */
    errorInfo: React.ErrorInfo | null;
}
//# sourceMappingURL=ErrorBoundary.types.d.ts.map