import LayoutContent from "./LayoutContent";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import LayoutProvider from "./LayoutProvider";
import LayoutSide from "./LayoutSide";

export type {
  LayoutContentProps,
  LayoutFooterProps,
  LayoutHeaderProps,
  LayoutProviderProps,
  LayoutSideProps,
} from "./index.types";

export const Layout = {
  Provider: LayoutProvider,
  Header: LayoutHeader,
  Side: LayoutSide,
  Content: LayoutContent,
  Footer: LayoutFooter,
} as const;
