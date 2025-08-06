import type { ButtonsIconProps } from "../Button/index.types";

/* cSpell:disable */
export const MediaFileTypeMap = {
  ".txt": "text/plain",
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".pdf": "application/pdf",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".xls": "application/vnd.ms-excel",
  ".csv": "text/csv",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".avi": "video/x-msvideo",
} as const;

export type MediaFileExtension = keyof typeof MediaFileTypeMap;
export type MediaFileMimeType = (typeof MediaFileTypeMap)[MediaFileExtension];

export interface MediaFileTypeImageProps extends React.SVGProps<SVGSVGElement> {
  fileExtension: MediaFileExtension;
  width?: number;
}

export type MediaFileUploadHandler = (files: File[]) => void;

export interface MediaFileUploaderProps extends Pick<ButtonsIconProps, "style" | "isLoading" | "isDisabled"> {
  handleFileUpload: MediaFileUploadHandler;
  multiple?: React.InputHTMLAttributes<HTMLInputElement>["multiple"];
  accept?: React.InputHTMLAttributes<HTMLInputElement>["accept"];
}
