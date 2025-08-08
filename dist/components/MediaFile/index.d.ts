import { extensionToMimeType, mimeTypeToExtension } from "./tools";
export { MediaFileTypeMap } from "./index.types";
export type { MediaFileExtension, MediaFileMimeType, MediaFileTypeImageProps, MediaFileUploaderProps, MediaFileUploadHandler, } from "./index.types";
export declare const MediaFile: {
    readonly TypeImage: import("react").NamedExoticComponent<import("./index.types").MediaFileTypeImageProps>;
    readonly Uploader: import("react").NamedExoticComponent<import("./index.types").MediaFileUploaderProps>;
    readonly mimeTypeToExtension: typeof mimeTypeToExtension;
    readonly extensionToMimeType: typeof extensionToMimeType;
};
//# sourceMappingURL=index.d.ts.map