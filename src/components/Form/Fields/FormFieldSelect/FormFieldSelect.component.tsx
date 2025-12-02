"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Icon } from "@/components/Icon";
import { Menu } from "@/components/Menu";
import { Popover } from "@/components/Popover";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useFormFieldSelectDisplay } from "./FormFieldSelect.hooks";
import type { FormFieldSelectProps, FormFieldSelectRef } from "./FormFieldSelect.types";

const FormFieldSelect = React.memo(
  React.forwardRef<FormFieldSelectRef, FormFieldSelectProps>(
    (
      {
        wrapperClassName,
        wrapperStyle,
        dropdownClassName,
        dropdownStyle,
        optionClassName,
        optionStyle,

        multiple: propMultiple,
        value,
        defaultValue,
        onChange,
        placeholder: propPlaceholder,
        // eslint-disable-next-line react-x/no-unstable-default-props
        options = [],
        maxDropdownHeight: propMaxDropdownHeight,

        variant: propVariant,
        error: propError,
        fullWidth: propFullWidth,
        disabled: propDisabled,

        name,
        form,
        required: propRequired,

        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,

        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<FormFieldSelectProps>({
        displayName: COMPONENT_DISPLAY_NAMES.FormFieldSelect,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const multiple = propMultiple ?? customComponentProps.multiple ?? false;
      const placeholder = propPlaceholder ?? customComponentProps.placeholder ?? "";
      const maxDropdownHeight = propMaxDropdownHeight ?? customComponentProps.maxDropdownHeight ?? 300;
      const variant = propVariant ?? customComponentProps.variant ?? FORM_FIELD_VARIANT_MAP.OUTLINED;
      const error = propError ?? customComponentProps.error ?? false;
      const fullWidth = propFullWidth ?? customComponentProps.fullWidth ?? false;
      const disabled = propDisabled ?? customComponentProps.disabled ?? false;
      const required = propRequired ?? customComponentProps.required ?? false;

      const [width, setWidth] = React.useState<number | undefined>(undefined);
      const selectRef = React.useRef<HTMLSelectElement>(null);

      // 合并 ref
      React.useEffect(() => {
        if (selectRef.current && ref) {
          if (typeof ref === "function") {
            ref(selectRef.current);
          } else {
            ref.current = selectRef.current;
          }
        }
      }, [ref]);

      // ========== 受控/非受控模式判断 ==========
      const isControlled = value !== undefined;

      // ========== 使用整合后的 hook ==========
      const {
        actualValue,
        computedWrapperStyle,
        displayContentData,
        dropdownContentData,
        handleKeyDown,
        WrapperElementEvents,
      } = useFormFieldSelectDisplay({
        options,
        multiple,
        value,
        defaultValue,
        onChange,
        placeholder,
        variant,
        error,
        fullWidth,
        disabled,
        maxDropdownHeight,
        width,
        autoCloseOnSelect: true,
        isControlled,
        selectRef,
        dropdownClassName,
        dropdownStyle,
        optionClassName,
        optionStyle,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
      });

      // ========== 渲染显示内容 ==========
      const displayContent = React.useMemo(() => {
        // 获取选中项的 StartIcon（单选取第一个，多选不显示图标）
        const selectedStartIcon = !displayContentData.multiple && displayContentData.selectedOption?.StartIcon;

        return (
          <Space.Flex spacing={8} style={{ flex: 1, color: "inherit", alignItems: "center", minWidth: 0 }}>
            {selectedStartIcon}
            <Typography.Paragraph
              text={displayContentData.text}
              ellipsis={1}
              style={{
                flex: 1,
                color: "inherit",
                opacity: displayContentData.opacity,
              }}
            />
          </Space.Flex>
        );
      }, [displayContentData]);

      // ========== 渲染下拉内容 ==========
      const dropdownContent = React.useMemo(() => {
        if (dropdownContentData.filteredOptions.length === 0) return null;

        return (
          <Menu.List
            className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldSelectDropdown, dropdownContentData.dropdownClassName)}
            style={dropdownContentData.mergedDropdownStyle}
          >
            {dropdownContentData.filteredOptions.map((option) => {
              const isSelected = dropdownContentData.multiple
                ? (dropdownContentData.selectedValuesSet?.has(option.value) ?? false)
                : dropdownContentData.selectedOption?.value === option.value;
              const isDisabled = option.disabled || false;

              // StartIcon 逻辑：始终显示用户自定义
              const startIconElement = option.StartIcon;

              // EndIcon 逻辑：选中时显示勾选图标，多选未选中时显示空方框
              const endIconElement = isSelected ? (
                <Icon icon="solar:check-read-linear" />
              ) : (
                (option.EndIcon ?? (dropdownContentData.multiple ? <Icon icon="solar:square-outline" /> : undefined))
              );

              return (
                <Menu.Item
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  key={`${option.value}`}
                  className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldSelectOption, dropdownContentData.optionClassName)}
                  style={dropdownContentData.mergedOptionStyle}
                  StartIcon={startIconElement}
                  EndIcon={endIconElement}
                  label={option.label}
                  LabelProps={{ ellipsis: 1, ...option.LabelProps }}
                  subLabel={option.subLabel}
                  SubLabelProps={option.SubLabelProps}
                  selected={isSelected}
                  disabled={isDisabled}
                  onClick={() => !isDisabled && dropdownContentData.handleSelect(option)}
                />
              );
            })}
          </Menu.List>
        );
      }, [dropdownContentData]);

      // ========== 原生 select 的 value props ==========
      const selectValueProps = isControlled ? { value: actualValue } : { defaultValue };

      return (
        <>
          {/* 隐藏原生 select */}
          <select
            ref={selectRef}
            name={name}
            {...selectValueProps}
            form={form}
            required={required}
            disabled={disabled}
            multiple={multiple}
            aria-hidden="true"
            tabIndex={-1}
            onChange={undefined}
            style={__HIDDEN_STYLE}
            {...props}
          >
            {multiple ? (
              options.map((opt) => (
                <option key={String(opt.value)} value={String(opt.value)}>
                  {opt.label}
                </option>
              ))
            ) : (
              <>
                <option value="" hidden />
                {options.map((opt) => (
                  <option key={String(opt.value)} value={String(opt.value)}>
                    {opt.label}
                  </option>
                ))}
              </>
            )}
          </select>

          {/* 自定义 UI */}
          <Popover
            defaultOpen={false}
            placement="bottom"
            triggerEvent="click"
            autoCloseOnClickOutside
            trigger={({ ref: triggerRef, isOpen }) => (
              <Space.Flex
                as="div"
                ref={(node) => {
                  if (typeof triggerRef === "function") {
                    triggerRef(node);
                  } else if (triggerRef && "current" in triggerRef) {
                    triggerRef.current = node as HTMLElement | null;
                  }
                  if (node) {
                    setWidth(node.getBoundingClientRect().width);
                  }
                }}
                className={clsx(COMPONENT_CLASSNAME_NAMES.FormFieldSelect, wrapperClassName)}
                style={{ ...computedWrapperStyle, ...wrapperStyle }}
                tabIndex={disabled ? -1 : 0}
                onKeyDown={handleKeyDown}
                spacing={8}
                {...WrapperElementEvents}
              >
                {/* Display Content */}
                {displayContent}

                {/* Dropdown Icon */}
                <Box
                  as="div"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    transition: "transform 0.25s ease-in-out",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    color: "inherit",
                  }}
                >
                  <Icon icon="solar:alt-arrow-down-linear" />
                </Box>
              </Space.Flex>
            )}
          >
            {dropdownContent}
          </Popover>
        </>
      );
    },
  ),
);

FormFieldSelect.displayName = COMPONENT_DISPLAY_NAMES.FormFieldSelect;
export default FormFieldSelect;

const __HIDDEN_STYLE: React.CSSProperties = {
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: 0,
  height: 0,
};
