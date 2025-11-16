import { default as Footer } from "./LayoutFooter.component";
import { default as Header } from "./LayoutHeader.component";
import { default as Side } from "./LayoutSide.component";

export const Layout = {
  Header,
  Side,
  Footer,
};

export { useLayoutHeaderStyles } from "./LayoutHeader.hooks";
export type { LayoutHeaderProps, LayoutHeaderRef } from "./LayoutHeader.types";

export { useLayoutSideActions, useLayoutSideStyles } from "./LayoutSide.hooks";
export type { LayoutSideProps, LayoutSideRef } from "./LayoutSide.types";

export { useLayoutFooterStyles } from "./LayoutFooter.hooks";
export type { LayoutFooterProps, LayoutFooterRef } from "./LayoutFooter.types";
