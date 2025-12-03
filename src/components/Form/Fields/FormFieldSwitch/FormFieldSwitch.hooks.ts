"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useElementHoverEvents, useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { hexToRgba } from "@/tools";
import type { FormFieldSwitchProps } from "./FormFieldSwitch.types";

// ============================
// useFormFieldSwitchActions
// ============================
export function useFormFieldSwitchActions({
  checked,
  defaultChecked,
  onChange,
  disabled,
  externalRef,
}: Pick<FormFieldSwitchProps, "checked" | "defaultChecked" | "onChange" | "disabled"> & {
  externalRef?: React.ForwardedRef<HTMLInputElement>;
}) {
  // ========== 内部状态 ==========
  const [isFocused, setIsFocused] = React.useState(false);
  const [internalChecked, setInternalChecked] = React.useState<boolean>(defaultChecked ?? false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  // 判断是否为受控模式
  const isControlled = checked !== undefined;

  // 同步受控模式的值
  React.useEffect(() => {
    if (isControlled) {
      setInternalChecked(checked);
    }
  }, [isControlled, checked]);

  // ========== 监听 form.reset() 事件 ==========
  React.useEffect(() => {
    const inputElement = inputRef.current;
    if (!inputElement || isControlled) return;

    const form = inputElement.form;
    if (!form) return;

    const handleReset = () => {
      setInternalChecked(defaultChecked ?? false);
    };

    form.addEventListener("reset", handleReset);
    return () => form.removeEventListener("reset", handleReset);
  }, [isControlled, defaultChecked]);

  // 判断是否禁用交互
  const isInteractionDisabled = disabled;

  // ========== 事件处理 ==========
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isInteractionDisabled) return;
      const newChecked = event.target.checked;

      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onChange?.(newChecked, event);
    },
    [isInteractionDisabled, isControlled, onChange],
  );

  const handleFocus = React.useCallback(() => {
    if (!isInteractionDisabled) {
      setIsFocused(true);
    }
  }, [isInteractionDisabled]);

  const handleBlur = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleClick = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_: React.MouseEvent<HTMLDivElement>) => {
      if (isInteractionDisabled) return;
      if (inputRef.current) {
        inputRef.current.click();
      }
    },
    [isInteractionDisabled],
  );

  // 合并 ref
  const setRefs = React.useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node;
      if (typeof externalRef === "function") {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    [externalRef],
  );

  // ========== 复用全局 hooks 处理 hover ==========
  const { isHovered, MouseEnterEvent, MouseLeaveEvent } = useElementHoverEvents<HTMLDivElement>({
    disabled: isInteractionDisabled,
  });

  return React.useMemo(
    () => ({
      internalChecked,
      isFocused,
      isHovered,
      setRefs,
      handleChange,
      handleFocus,
      handleBlur,
      handleClick,
      WrapperElementEvents: {
        onMouseEnter: MouseEnterEvent,
        onMouseLeave: MouseLeaveEvent,
      },
    }),
    [
      internalChecked,
      isFocused,
      isHovered,
      setRefs,
      handleChange,
      handleFocus,
      handleBlur,
      handleClick,
      MouseEnterEvent,
      MouseLeaveEvent,
    ],
  );
}

// ============================
// useFormFieldSwitchStyles
// ============================
export function useFormFieldSwitchStyles({
  checked,
  disabled = false,
  isHovered,
  isFocused,
}: Pick<FormFieldSwitchProps, "checked" | "disabled"> & {
  isHovered: boolean;
  isFocused: boolean;
}) {
  const { PaletteColors, BackgroundColors, BorderColors } = useThemeDesigns();
  const customSwitchStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.FormFieldSwitch });
  const customHandleStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.FormFieldSwitchHandle });

  // ========== 固定尺寸配置 (medium) ==========
  const sizeConfig = { width: 44, height: 24, handleSize: 18, padding: 3 };

  // ========== 主题色 ==========
  const themeColor = PaletteColors[1];

  // ========== Track 样式 ==========
  const DynamicTrackVariantStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      width: sizeConfig.width,
      height: sizeConfig.height,
      borderRadius: sizeConfig.height / 2,
      backgroundColor: checked ? themeColor : BackgroundColors[2],
      borderColor: checked ? themeColor : BorderColors[2],
    };
  }, [checked, themeColor, sizeConfig, BackgroundColors, BorderColors]);

  const DynamicTrackStateStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled) {
      return {
        opacity: 0.5,
        cursor: "not-allowed",
      };
    }
    return {
      cursor: "pointer",
    };
  }, [disabled]);

  const DynamicTrackInteractionStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled) return {};

    if (isFocused) {
      return {
        boxShadow: `0 0 0 3px ${hexToRgba(themeColor, 0.25)}`,
        borderColor: themeColor,
        outline: "none",
      };
    }

    if (isHovered) {
      return {
        borderColor: themeColor,
        filter: "brightness(1.1)",
      };
    }

    return {};
  }, [disabled, isFocused, isHovered, themeColor]);

  const trackStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // 基础样式
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default styles --
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      flexShrink: 0,
      borderWidth: 1,
      borderStyle: "solid",
      transition: "all 0.2s ease-in-out",
      ...DynamicTrackVariantStyles,
      ...DynamicTrackStateStyles,
      ...DynamicTrackInteractionStyles,

      // -- custom styles --
      ...customSwitchStyle,
    }),
    [DynamicTrackVariantStyles, DynamicTrackStateStyles, DynamicTrackInteractionStyles, customSwitchStyle],
  );

  // ========== Handle 样式 ==========
  const DynamicHandleInteractionStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled) return {};

    if (isFocused) {
      return {
        borderColor: themeColor,
        boxShadow: `0 0 0 2px ${hexToRgba(themeColor, 0.3)}`,
      };
    }

    if (isHovered) {
      return {
        borderColor: themeColor,
        filter: "brightness(1.1)",
      };
    }

    return {};
  }, [disabled, isFocused, isHovered, themeColor]);

  const handleStyle = React.useMemo<React.CSSProperties>(() => {
    const translateX = checked ? sizeConfig.width - sizeConfig.handleSize - sizeConfig.padding * 2 : 0;

    return {
      // -- default styles --
      boxSizing: "border-box",
      position: "absolute",
      left: sizeConfig.padding,
      width: sizeConfig.handleSize,
      height: sizeConfig.handleSize,
      borderRadius: "50%",
      backgroundColor: "#ffffff",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: BorderColors[2],
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      transition: "all 0.2s ease-in-out",
      transform: `translateX(${translateX}px)`,
      ...DynamicHandleInteractionStyles,

      // -- custom styles --
      ...customHandleStyle,
    };
  }, [checked, sizeConfig, BorderColors, DynamicHandleInteractionStyles, customHandleStyle]);

  return {
    trackStyle,
    handleStyle,
    __: {
      DynamicTrackVariantStyles,
      DynamicTrackStateStyles,
      DynamicTrackInteractionStyles,
      DynamicHandleInteractionStyles,
    },
  };
}
