"use client";

import React from "react";
import { Buttons } from "../Button";
import type { MediaFileUploaderProps } from "./index.types";

const MediaFileUploader = React.memo<MediaFileUploaderProps>(
  ({ handleFileUpload, multiple = false, accept, style, isLoading, isDisabled }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const triggerInput: VoidFunction = React.useCallback(() => {
      inputRef.current?.click();
    }, []);
    const onFileChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
      (e) => {
        const fileList = e.target.files;
        if (!fileList?.length) {
          return;
        }
        const files: File[] = Array.from(fileList);
        handleFileUpload(files);
        e.currentTarget.value = "";
      },
      [handleFileUpload],
    );

    return (
      <>
        <input
          type="file"
          ref={inputRef}
          onChange={onFileChange}
          multiple={multiple}
          accept={accept}
          style={{ display: "none" }}
        />

        <Buttons.Icon
          icon="solar:cloud-upload-outline"
          iconWidth={32}
          variant="ghost"
          isLoading={isLoading}
          isDisabled={isDisabled}
          onClick={triggerInput}
          style={{ padding: "32px 16px", ...style }}
        />
      </>
    );
  },
);

MediaFileUploader.displayName = "MediaFile.Uploader";
export default MediaFileUploader;
