import { MediaFileTypeMap as n } from "./index.types.esm.js";
import { ThemeColor as e } from "../../utils/design/ThemeColor.esm.js";
function o(a) {
  const r = Object.entries(n).find(([, s]) => s === a);
  if (!r)
    throw new Error(`Unsupported mime type: ${a}`);
  return r[0];
}
function i(a) {
  return n[a];
}
function p(a) {
  switch (a) {
    case ".jpg":
    case ".jpeg":
    case ".png":
    case ".webp":
    case ".gif":
      return e.TurquoiseFerDeLance;
    // 蓝色
    case ".svg":
    case ".js":
    case ".json":
      return e.GoldenLanceHead;
    // 金色
    case ".pdf":
      return e.GarnetViper;
    // 红色
    case ".html":
    case ".mp4":
    case ".avi":
      return e.TopazCoral;
    // 橙色
    case ".css":
      return e.AlexandriteAnaconda;
    // 紫色
    case ".xls":
    case ".xlsx":
    case ".csv":
      return e.EmeraldMamba;
    // 绿色
    case ".doc":
    case ".docx":
      return e.SapphireCobra;
    // 蓝色
    case ".mp3":
      return e.MalachitePython;
    // 绿色
    case ".txt":
    default:
      return e.ObsidianBlackMamba;
  }
}
export {
  i as extensionToMimeType,
  p as getMediaFileTypeColor,
  o as mimeTypeToExtension
};
