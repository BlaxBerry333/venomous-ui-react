"use client";

import { AnimatePresence, motion } from "motion/react";
import React from "react";

import { BackgroundColors, Shadows, ThemeColor } from "@/utils";
import clsx from "clsx";
import type { FormFieldCheckboxProps } from "./index.types";
import Label from "./Label";
import { useFormFieldStyle } from "./useFormFieldStyle";
import { useToggleFormFieldChecked } from "./useToggleFormFieldChecked";

const switchWidth = 48;
const switchHeight = 24;
const knobSize = 18;
const knobPadding = 4;

const FormFieldSwitch = React.memo<FormFieldCheckboxProps>(
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

    const { backgroundColor, outlineColor, borderColor, commonStyles } = useFormFieldStyle({
      isDisabled: disabled,
      isError,
    });

    return (
      <Label label={label} required={required} isError={isError} position={labelPosition}>
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

        <div
          onClick={toggleCustomIsChecked}
          style={{
            display: "inline-flex",
            alignItems: "center",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.6 : 1,
          }}
        >
          <AnimatePresence>
            <motion.div
              initial={false}
              animate={isChecked ? "checked" : "unchecked"}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              className={clsx("Venomous-UI-React--FormField.Switch", className)}
              style={{
                width: switchWidth,
                height: switchHeight,
                position: "relative",
                display: "flex",
                alignItems: "center",
                borderRadius: switchHeight / 2,
                borderWidth: commonStyles.borderWidth,
                borderStyle: commonStyles.borderStyle,
                borderColor,
                backgroundColor: isChecked ? outlineColor : backgroundColor,
                ...style,
              }}
            >
              <motion.div
                initial={false}
                animate={isChecked ? "checked" : "unchecked"}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                variants={{
                  checked: { x: switchWidth - knobSize - knobPadding },
                  unchecked: { x: knobPadding },
                }}
                style={{
                  width: knobSize,
                  height: knobSize,
                  borderRadius: "50%",
                  position: "absolute",
                  boxShadow: Shadows.light.primary,
                  backgroundColor: isError && !isChecked ? ThemeColor.RubyCopperhead : BackgroundColors.light.secondary,
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Label>
    );
  },
);

FormFieldSwitch.displayName = "FormField.Switch";
export default FormFieldSwitch;
