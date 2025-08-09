/* cSpell:disable */

"use client";

import { ThemeColor } from "@/utils";
import { MediaFileTypeMap, type MediaFileExtension, type MediaFileMimeType } from "./index.types";

/**
 * MIME 类型 -> 扩展名
 */
export function mimeTypeToExtension(mimeType: MediaFileMimeType): MediaFileExtension {
  const entry = Object.entries(MediaFileTypeMap).find(([, value]) => value === mimeType);
  if (!entry) {
    throw new Error(`Unsupported mime type: ${mimeType}`);
  }
  return entry[0] as MediaFileExtension;
}

/**
 * 扩展名 -> MIME 类型
 */
export function extensionToMimeType(fileExtension: MediaFileExtension): MediaFileMimeType {
  return MediaFileTypeMap[fileExtension];
}

export function getMediaFileTypeColor(fileExtension: MediaFileExtension) {
  switch (fileExtension) {
    case ".jpg":
    case ".jpeg":
    case ".png":
    case ".webp":
    case ".gif":
      return ThemeColor.TurquoiseFerDeLance; // 蓝色
    case ".svg":
    case ".js":
    case ".json":
      return ThemeColor.TopazMamushi; // 金色
    case ".pdf":
      return ThemeColor.GarnetViper; // 红色
    case ".html":
    case ".mp4":
    case ".avi":
      return ThemeColor.TopazCoral; // 橙色
    case ".css":
      return ThemeColor.AlexandriteAnaconda; // 紫色
    case ".xls":
    case ".xlsx":
    case ".csv":
      return ThemeColor.EmeraldMamba; // 绿色
    case ".doc":
    case ".docx":
      return ThemeColor.SapphireCobra; // 蓝色
    case ".mp3":
      return ThemeColor.MalachitePython; // 绿色
    case ".txt":
    default:
      return "#5c5c5c"; // 灰色
  }
}
