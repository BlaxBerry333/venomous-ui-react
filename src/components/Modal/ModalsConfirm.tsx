"use client";

import React from "react";

import { BreakPointName } from "@/utils";
import { Button } from "../Button";
import { Space } from "../Space";
import { Typography } from "../Typography";
import type { ModalsConfirmProps } from "./index.types";
import Modal from "./Modal";

const ModalsConfirm = React.memo<ModalsConfirmProps>(
  ({
    style,
    isOpen,
    onClose,
    maskClosable = false,
    maxBreakpoint = BreakPointName.xs,
    title,
    description,
    isConformLoading = false,
    cancelText = "Cancel",
    confirmText = "Confirm",
    onCancel,
    onConfirm,
  }) => {
    const handleCancel = React.useCallback(async () => {
      await onCancel();
      onClose();
    }, [onCancel, onClose]);

    const handleConfirm = React.useCallback(async () => {
      await onConfirm();
      onClose();
    }, [onConfirm, onClose]);

    return (
      <Modal isOpen={isOpen} onClose={onClose} style={style} maskClosable={maskClosable} maxBreakpoint={maxBreakpoint}>
        <Typography.Title as="h5" text={title} />

        <Typography.Paragraph style={{ padding: "8px 0 24px" }}>{description}</Typography.Paragraph>

        <Space.Flex row gap={8} style={{ justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            text={cancelText}
            onClick={() => void handleCancel()}
            isDisabled={isConformLoading}
          />
          <Button
            variant="contained"
            text={confirmText}
            onClick={() => void handleConfirm()}
            isLoading={isConformLoading}
          />
        </Space.Flex>
      </Modal>
    );
  },
);

ModalsConfirm.displayName = "Modals.Confirm";
export default ModalsConfirm;
