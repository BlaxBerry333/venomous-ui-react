import { type MediaFileExtension, type MediaFileMimeType } from "./index.types";
/**
 * MIME 类型 -> 扩展名
 */
export declare function mimeTypeToExtension(mimeType: MediaFileMimeType): MediaFileExtension;
/**
 * 扩展名 -> MIME 类型
 */
export declare function extensionToMimeType(fileExtension: MediaFileExtension): MediaFileMimeType;
export declare function getMediaFileTypeColor(fileExtension: MediaFileExtension): "#B91C1C" | "#EA580C" | "#FACC15" | "#059669" | "#10B981" | "#06B6D4" | "#2563EB" | "#7E22CE" | "#5c5c5c";
//# sourceMappingURL=tools.d.ts.map