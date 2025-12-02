"use client";

import React from "react";

import clsx from "clsx";

import { Backdrop } from "@/components/Backdrop";
import { Box } from "@/components/Box";
import { Portal } from "@/components/Portal";
import { Transition } from "@/components/Transition";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useDialogActions, useDialogStyles } from "./Dialog.hooks";
import type { DialogProps, DialogRef } from "./Dialog.types";

const Dialog = React.memo(
  React.forwardRef<DialogRef, DialogProps>(
    (
      {
        className,
        style,
        children,
        open: propOpen,
        onClickBackdrop,
        autoCloseOnClickBackdrop: propAutoClose,
        as: propAs,
        maxWidth: propMaxWidth,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<DialogProps>({
        displayName: COMPONENT_DISPLAY_NAMES.Dialog,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const open = propOpen ?? customComponentProps.open ?? false;
      const autoCloseOnClickBackdrop = propAutoClose ?? customComponentProps.autoCloseOnClickBackdrop ?? true;
      const __as = propAs ?? customComponentProps.as ?? "div";
      const maxWidth = propMaxWidth ?? customComponentProps.maxWidth ?? "XS";

      const { componentStyle } = useDialogStyles();
      const { handleBackdropClick } = useDialogActions({ autoCloseOnClickBackdrop, onClickBackdrop });

      return (
        <Portal>
          <Backdrop open={open} onClick={handleBackdropClick}>
            <Transition.Scale visible={open}>
              <Box
                as={__as}
                maxWidth={maxWidth}
                ref={ref}
                className={clsx(COMPONENT_CLASSNAME_NAMES.Dialog, className)}
                style={{ ...componentStyle, ...style }}
                {...props}
              >
                {children}
              </Box>
            </Transition.Scale>
          </Backdrop>
        </Portal>
      );
    },
  ),
);

Dialog.displayName = COMPONENT_DISPLAY_NAMES.Dialog;
export default Dialog;
