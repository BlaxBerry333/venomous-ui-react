import type { BoxProps, BoxRef } from "../../components/Box/Box.types";
export declare const AVATAR_SHAPE_MAP: {
    readonly CIRCLE: "circle";
    readonly SQUARE: "square";
};
export type AvatarRef = BoxRef;
export interface AvatarProps extends Omit<BoxProps, "children" | "as" | "maxWidth"> {
    /**
     * Avatar shape.
     * @default "circle"
     */
    shape?: (typeof AVATAR_SHAPE_MAP)[keyof typeof AVATAR_SHAPE_MAP];
    /**
     * Avatar width and height ( px )
     * @default 40
     */
    width?: number;
    /**
     * Image source URL.
     */
    src?: string;
    /**
     * Alt text for image.
     */
    alt?: string;
    /**
     * Text to be rendered when src is not provided or fails to load.
     */
    text?: string;
}
//# sourceMappingURL=Avatar.types.d.ts.map