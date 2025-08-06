import MediaFileTypeImage from "./MediaFileTypeImage";
import MediaFileUploader from "./MediaFileUploader";
import { extensionToMimeType, mimeTypeToExtension } from "./tools";

export { MediaFileTypeMap } from "./index.types";

export type {
  MediaFileExtension,
  MediaFileMimeType,
  MediaFileTypeImageProps,
  MediaFileUploaderProps,
  MediaFileUploadHandler,
} from "./index.types";

export const MediaFile = {
  TypeImage: MediaFileTypeImage,
  Uploader: MediaFileUploader,
  mimeTypeToExtension,
  extensionToMimeType,
} as const;
