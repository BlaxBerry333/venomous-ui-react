import type { ButtonsIconProps } from "../Button/index.types";
export declare const MediaFileTypeMap: {
    readonly ".txt": "text/plain";
    readonly ".html": "text/html";
    readonly ".css": "text/css";
    readonly ".js": "application/javascript";
    readonly ".json": "application/json";
    readonly ".pdf": "application/pdf";
    readonly ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    readonly ".xls": "application/vnd.ms-excel";
    readonly ".csv": "text/csv";
    readonly ".doc": "application/msword";
    readonly ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    readonly ".jpg": "image/jpeg";
    readonly ".jpeg": "image/jpeg";
    readonly ".png": "image/png";
    readonly ".svg": "image/svg+xml";
    readonly ".webp": "image/webp";
    readonly ".gif": "image/gif";
    readonly ".mp3": "audio/mpeg";
    readonly ".mp4": "video/mp4";
    readonly ".avi": "video/x-msvideo";
};
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
//# sourceMappingURL=index.types.d.ts.map