"use client";

import React from "react";

import { Space } from "../Space";
import FormField from "./FormField";
import type { FormFieldOption, FormFieldRadioProps } from "./index.types";
import Label from "./Label";

const FormFieldRadio = React.memo<FormFieldRadioProps>(
  ({
    fullWidth = false,
    required = false,
    disabled = false,
    name,
    label,
    labelPosition = "right",
    value,
    options,
    onChange,
  }) => {
    const [selectedValue, setSelectedValue] = React.useState<FormFieldOption["value"] | null>(value || null);
    React.useEffect(() => {
      setSelectedValue(value || null);
    }, [value]);
    const handleRadioChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
      (e) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        onChange?.(e);
      },
      [onChange],
    );

    return (
      <FormField label={label} required={required} disabled={disabled} isError={false} fullWidth={fullWidth}>
        <Space.Flex column gap={8}>
          {options.map((option) => {
            const inputId = `${name}-${option.value}`;
            const isOptionDisabled = disabled || option.disabled;
            return (
              <Label
                key={option.value}
                label={option.label}
                position={labelPosition}
                htmlFor={inputId}
                style={{
                  cursor: isOptionDisabled ? "not-allowed" : "pointer",
                  opacity: isOptionDisabled ? 0.6 : 1,
                }}
              >
                <input
                  id={inputId}
                  type="radio"
                  autoComplete="off"
                  name={name}
                  checked={option.value === selectedValue}
                  value={option.value}
                  disabled={isOptionDisabled}
                  onChange={handleRadioChange}
                  style={{ cursor: isOptionDisabled ? "not-allowed" : "pointer" }}
                />
              </Label>
            );
          })}
        </Space.Flex>
      </FormField>
    );
  },
);

FormFieldRadio.displayName = "FormField.Radio";
export default FormFieldRadio;
