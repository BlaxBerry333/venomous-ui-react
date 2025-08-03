"use client";

import React from "react";

import type { FormFieldCheckboxProps } from "./index.types";

export function useToggleFormFieldChecked({
  checked = false,
  disabled = false,
  onChange,
}: Pick<FormFieldCheckboxProps, "checked" | "disabled" | "onChange">) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = React.useState<boolean>(checked);
  React.useEffect(() => {
    setIsChecked(Boolean(checked));
  }, [checked]);
  const toggleOriginalIsChecked: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      setIsChecked(e.target.checked);
      onChange?.(e);
    },
    [onChange],
  );
  const toggleCustomIsChecked: React.MouseEventHandler<HTMLDivElement | SVGSVGElement> = React.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled && inputRef.current) {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        const changeEvent = new Event("change", { bubbles: true });
        Object.defineProperty(changeEvent, "target", {
          writable: false,
          value: { ...inputRef.current, checked: newChecked },
        });
        onChange?.(changeEvent as unknown as React.ChangeEvent<HTMLInputElement>);
      }
    },
    [disabled, isChecked, onChange],
  );

  return {
    inputRef,
    isChecked,
    toggleOriginalIsChecked,
    toggleCustomIsChecked,
  };
}
