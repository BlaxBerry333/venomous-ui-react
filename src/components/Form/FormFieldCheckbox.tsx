"use client";

import clsx from "clsx";
import React from "react";

import { Icon } from "../Icon";
import { useFormFieldStyle } from "./_useFormFieldStyle";
import { useToggleFormFieldChecked } from "./_useToggleFormFieldChecked";
import type { FormFieldCheckboxProps } from "./index.types";
import Label from "./Label";

const FormFieldCheckbox = React.memo<FormFieldCheckboxProps>(
  ({
    className,
    style,
    autoComplete = "off",
    required = false,
    isError = false,
    disabled = false,
    name,
    value,
    checked = false,
    onChange,
    label,
    labelPosition = "right",
    ...props
  }) => {
    const { inputRef, isChecked, toggleOriginalIsChecked, toggleCustomIsChecked } = useToggleFormFieldChecked({
      checked,
      disabled,
      onChange,
    });

    const { outlineColor, borderColor } = useFormFieldStyle({
      isDisabled: disabled,
      isError,
    });

    return (
      <Label
        label={label}
        required={required}
        isError={isError}
        position={labelPosition}
        style={{
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          ref={inputRef}
          onChange={toggleOriginalIsChecked}
          autoComplete={autoComplete}
          disabled={disabled}
          style={{ display: "none" }}
          {...props}
        />

        <Icon
          icon={isChecked ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-regular"}
          width={24}
          onClick={toggleCustomIsChecked}
          className={clsx("Venomous-UI-React--FormField.Checkbox", className)}
          style={{
            color: isChecked ? outlineColor : borderColor,
            cursor: disabled ? "not-allowed" : "pointer",
            ...style,
          }}
        />
      </Label>
    );
  },
);

FormFieldCheckbox.displayName = "FormField.Checkbox";
export default FormFieldCheckbox;
