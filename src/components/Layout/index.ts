import CollapseSide from "./LayoutCollapseSide";
import Content from "./LayoutContent";
import Footer from "./LayoutFooter";
import Header from "./LayoutHeader";
import Provider from "./LayoutProvider";
import Side from "./LayoutSide";

export type {
  LayoutContentProps,
  LayoutFooterProps,
  LayoutHeaderProps,
  LayoutProviderProps,
  LayoutSideProps,
} from "./index.types";

export const Layout = {
  Provider,
  Header,
  Side,
  CollapseSide,
  Content,
  Footer,
} as const;
