import { default as SpaceFlex } from "./SpaceFlex.component";
import { default as SpaceGrid } from "./SpaceGrid.component";

export const Space = {
  Flex: SpaceFlex,
  Grid: SpaceGrid,
};

export { useSpaceFlexStyles } from "./SpaceFlex.hooks";
export type { SpaceFlexProps, SpaceFlexRef } from "./SpaceFlex.types";

export { useSpaceGridStyles } from "./SpaceGrid.hooks";
export type { SpaceGridProps, SpaceGridRef } from "./SpaceGrid.types";
