"use client";

import clsx from "clsx";
import React from "react";

import { useElementFocus } from "@/hooks";
import { TypographySize } from "@/utils";
import { Icon } from "../Icon";
import { Menu } from "../Menu";
import { Popover } from "../Popover";
import { Space } from "../Space";
import { Typography } from "../Typography";
import FormField from "./FormField";
import type { FormFieldOption, FormFieldSelectProps } from "./index.types";
import { useFormFieldStyle } from "./useFormFieldStyle";

const FormFieldSelect = React.memo<FormFieldSelectProps>(
  ({
    isOriginalSelect = false,
    fullWidth,
    required = false,
    isError = false,
    disabled = false,
    label,
    helpText,
    ...props
  }) => {
    const { isFocused, setIsFocused, handleFocus, handleBlur } = useElementFocus();
    const { commonStyles } = useFormFieldStyle({
      fullWidth,
      isDisabled: disabled,
      isError,
      isFocused,
    });

    return (
      <FormField
        label={label}
        required={required}
        isDisabled={disabled}
        isError={isError}
        isFocused={isFocused}
        fullWidth={fullWidth}
        helpText={helpText}
      >
        {isOriginalSelect && (
          <OriginalSelect
            commonStyles={commonStyles}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            disabled={disabled}
            {...props}
          />
        )}
        {!isOriginalSelect && (
          <CustomSelect commonStyles={commonStyles} setIsFocused={setIsFocused} disabled={disabled} {...props} />
        )}
      </FormField>
    );
  },
);

FormFieldSelect.displayName = "FormField.Select";
export default FormFieldSelect;

const OriginalSelect = React.memo<
  Omit<FormFieldSelectProps, "isOriginalSelect" | "fullWidth" | "required" | "label" | "helpText"> & {
    commonStyles: React.CSSProperties;
    handleFocus: React.FocusEventHandler<HTMLSelectElement>;
    handleBlur: React.FocusEventHandler<HTMLSelectElement>;
  }
>(
  ({
    commonStyles,
    handleFocus,
    handleBlur,
    name,
    autoComplete = "off",
    options,
    onChange,
    value,
    disabled,
    className,
    style,
    ...props
  }) => {
    return (
      <select
        name={name}
        autoComplete={autoComplete}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={value}
        className={clsx("Venomous-UI-React--FormField.Select", className)}
        style={{
          boxSizing: "border-box",
          ...commonStyles,
          ...style,
        }}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    );
  },
);

const CustomSelect = React.memo<
  Omit<FormFieldSelectProps, "isOriginalSelect" | "fullWidth" | "required" | "label" | "helpText"> & {
    commonStyles: React.CSSProperties;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  }
>(({ commonStyles, setIsFocused, disabled, name, value, options, onChange, className, style }) => {
  const [selectedValue, setSelectedValue] = React.useState<FormFieldOption["value"] | null>(value || null);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setSelectedValue(value || null);
  }, [value]);

  const handleOptionChange = React.useCallback(
    (newValue: FormFieldOption["value"]) => {
      setSelectedValue(newValue);
      setIsOpen(false);
      setIsFocused(false);
      const changeEvent = {
        target: { name, value: newValue },
        currentTarget: { name, value: newValue },
      } as unknown as React.ChangeEvent<HTMLSelectElement>;
      onChange?.(changeEvent);
    },
    [name, onChange, setIsFocused],
  );

  const handleClearSelection = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedValue(null);
      setIsFocused(false);
      const changeEvent = {
        target: { name, value: "" },
        currentTarget: { name, value: "" },
      } as unknown as React.ChangeEvent<HTMLSelectElement>;
      onChange?.(changeEvent);
    },
    [name, onChange, setIsFocused],
  );

  const displayText = React.useMemo<string>(
    () => options.find((option) => option.value === selectedValue)?.label || "",
    [selectedValue],
  );

  const selectWidth = style?.width ?? commonStyles.minWidth;

  return (
    <Popover
      placement="bottom"
      trigger="click"
      style={{ width: "100%" }}
      onClickOutside={() => setIsFocused(false)}
      renderTrigger={() => (
        <Space.Flex
          row
          onClick={() => setIsFocused(true)}
          style={{
            ...commonStyles,
            height: commonStyles.minHeight,
            width: selectWidth,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography.Paragraph ellipsis={1} style={{ flex: 1 }}>
            {displayText}
          </Typography.Paragraph>
          {selectedValue && !disabled && (
            <Icon
              icon="solar:close-circle-line-duotone"
              width={16}
              onClick={handleClearSelection}
              style={{
                cursor: "pointer",
                transition: "color 0.2s ease",
              }}
            />
          )}
          <Icon
            icon="solar:alt-arrow-down-line-duotone"
            width={16}
            style={{
              transition: "transform 0.2s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </Space.Flex>
      )}
    >
      <Menu.List
        as="ul"
        className={clsx("Venomous-UI-React--FormField.Select", className)}
        style={{ width: selectWidth }}
      >
        {options.map((option) => (
          <Menu.Item
            key={option.value}
            text={option.label}
            isDisabled={option.disabled}
            isActive={option.value === selectedValue}
            onClick={() => {
              if (!option.disabled) handleOptionChange(option.value);
            }}
            style={{ cursor: option.disabled ? "not-allowed" : "pointer", fontSize: TypographySize.small }}
          />
        ))}
      </Menu.List>
    </Popover>
  );
});

OriginalSelect.displayName = "FormField.Select.Original";
CustomSelect.displayName = "FormField.Select.Custom";
