"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types";

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static displayName = COMPONENT_DISPLAY_NAMES.ErrorBoundary;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      errorInfo,
    });

    this.props.onError?.(error, errorInfo);

    if (process.env.NODE_ENV === "development") {
      console.error("[ErrorBoundary] Caught an error:", error, errorInfo);
    }
  }

  reset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): React.ReactNode {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback } = this.props;

    if (hasError && error && errorInfo) {
      return fallback(error, errorInfo, this.reset);
    }

    return children;
  }
}

export default ErrorBoundary;
