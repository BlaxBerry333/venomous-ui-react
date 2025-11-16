export { TRANSITION_STATUS_MAP, useTransitionState } from "./useTransitionState";

import FadeComponent from "./Transition.Fade.component";
import ScaleComponent from "./Transition.Scale.component";
import SlideComponent from "./Transition.Slide.component";

export const Transition = {
  Fade: FadeComponent,
  Scale: ScaleComponent,
  Slide: SlideComponent,
};

export { useTransitionFadeStyles } from "./Transition.Fade.hooks";
export type { TransitionFadeProps } from "./Transition.Fade.types";

export { useTransitionScaleStyles } from "./Transition.Scale.hooks";
export type { TransitionScaleProps } from "./Transition.Scale.types";

export { TRANSITION_SLIDE_DIRECTION_MAP } from "./Transition.Slide.types";
export type { TransitionSlideProps } from "./Transition.Slide.types";
