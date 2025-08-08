"use client";

import React from "react";

import { Icon } from "../Icon";
import { Space } from "../Space";
import FormField from "./FormField";
import type { FormFieldOption, FormFieldRadioProps } from "./index.types";
import Label from "./Label";
import { useFormFieldStyle } from "./useFormFieldStyle";

const FormFieldRadio = React.memo<FormFieldRadioProps>(
  ({
    required = false,
    disabled = false,
    name,
    label,
    labelPosition = "right",
    fullWidth,
    value,
    options,
    onChange,
  }) => {
    const [selectedValue, setSelectedValue] = React.useState<FormFieldOption["value"] | null>(value || null);
    React.useEffect(() => {
      setSelectedValue(value || null);
    }, [value]);

    const { outlineColor, borderColor } = useFormFieldStyle({
      isDisabled: disabled,
    });

    const handleRadioChange = React.useCallback(
      (newValue: FormFieldOption["value"]) => {
        if (disabled) return;
        setSelectedValue(newValue);
        // Simulate the event object for onChange
        const event = {
          target: {
            name,
            value: newValue,
          },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange?.(event);
      },
      [disabled, name, onChange],
    );

    return (
      <FormField label={label} required={required} isDisabled={disabled} fullWidth={fullWidth}>
        <Space.Flex column gap={8} style={{ marginTop: 4 }}>
          {options.map((option) => {
            const isChecked = option.value === selectedValue;
            const isOptionDisabled = disabled || option.disabled;
            return (
              <Label
                key={option.value}
                label={option.label}
                position={labelPosition}
                style={{
                  cursor: isOptionDisabled ? "not-allowed" : "pointer",
                  opacity: isOptionDisabled ? 0.6 : 1,
                }}
              >
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={isChecked}
                  disabled={isOptionDisabled}
                  onChange={() => handleRadioChange(option.value)}
                  style={{ display: "none" }}
                />
                <Icon
                  icon={isChecked ? "fluent:radio-button-24-filled" : "fluent:radio-button-24-regular"}
                  width={24}
                  onClick={() => {
                    if (!isOptionDisabled) handleRadioChange(option.value);
                  }}
                  style={{
                    color: isChecked ? outlineColor : borderColor,
                    cursor: isOptionDisabled ? "not-allowed" : "pointer",
                  }}
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
