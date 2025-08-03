"use client";

import React from "react";

export default function useElementFocus<T>() {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const handleFocus: React.FocusEventHandler<T> = React.useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur: React.FocusEventHandler<T> = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  return {
    isFocused,
    setIsFocused,
    handleFocus,
    handleBlur,
  };
}
