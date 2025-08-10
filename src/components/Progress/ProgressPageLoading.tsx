"use client";

import React from "react";

import type { ProgressLoadingBarProps } from "./index.types";
import ProgressLoadingBar from "./ProgressLoadingBar";

const ProgressPageLoading = React.memo<ProgressLoadingBarProps>((style, ...props) => {
  return (
    <ProgressLoadingBar
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        width: "80%",
        maxWidth: "500px",
        ...style,
      }}
      {...props}
    />
  );
});

ProgressPageLoading.displayName = "Progress.PageLoading";
export default ProgressPageLoading;
