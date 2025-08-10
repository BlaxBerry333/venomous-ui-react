"use client";

import React from "react";

export type Handler = {
  isOpen: boolean;
  setIsOpen: (s: boolean) => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export default function useHandler(defaultValue: Handler["isOpen"] = false): Handler {
  const [isOpen, setIsOpen] = React.useState<boolean>(defaultValue);

  const open = React.useCallback(() => setIsOpen(true), []);

  const close = React.useCallback(() => setIsOpen(false), []);

  const toggle = React.useCallback(() => setIsOpen((s) => !s), []);

  return {
    isOpen,
    setIsOpen,
    open,
    close,
    toggle,
  };
}
