"use client";

import React from "react";

export type Handler = {
  isOpen: boolean;
  setIsOpen: (s: boolean) => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export default function useHandler(): Handler {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
