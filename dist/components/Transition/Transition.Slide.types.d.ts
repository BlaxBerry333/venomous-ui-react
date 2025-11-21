import type { BoxProps, BoxRef } from "../../components/Box";
export declare const TRANSITION_SLIDE_DIRECTION_MAP: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly UP: "up";
    readonly DOWN: "down";
};
export type TransitionFadeRef = BoxRef;
export interface TransitionSlideProps extends Omit<BoxProps, "children" | "as" | "maxWidth"> {
    /**
     * The content to display inside.
     */
    children: React.ReactNode;
    /**
     * Whether the content is visible.
     * @default false
     */
    visible: boolean;
    /**
     * The duration of the animation ( ms ).
     * @default 300
     */
    duration?: number;
    /**
     * The callback function to execute when the animation finishes.
     */
    onFinish?: () => void;
    /**
     * The direction of the slide animation.
     * @default "right"
     */
    direction?: (typeof TRANSITION_SLIDE_DIRECTION_MAP)[keyof typeof TRANSITION_SLIDE_DIRECTION_MAP];
    /**
     * The distance of the slide animation ( px ).
     * @default 100
     */
    distance?: number;
}
//# sourceMappingURL=Transition.Slide.types.d.ts.map