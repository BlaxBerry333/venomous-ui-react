import { ThemeColor } from "@/utils";
import { type MediaFileExtension, type MediaFileMimeType } from "./index.types";
/**
 * MIME 类型 -> 扩展名
 */
export declare function mimeTypeToExtension(mimeType: MediaFileMimeType): MediaFileExtension;
/**
 * 扩展名 -> MIME 类型
 */
export declare function extensionToMimeType(fileExtension: MediaFileExtension): MediaFileMimeType;
export declare function getMediaFileTypeColor(fileExtension: MediaFileExtension): ThemeColor.GarnetViper | ThemeColor.TopazCoral | ThemeColor.TopazMamushi | ThemeColor.EmeraldMamba | ThemeColor.MalachitePython | ThemeColor.TurquoiseFerDeLance | ThemeColor.SapphireCobra | ThemeColor.AlexandriteAnaconda | "#5c5c5c";
//# sourceMappingURL=tools.d.ts.map