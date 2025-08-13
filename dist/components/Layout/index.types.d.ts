import type { ContainerProps } from "../Container";
import type { TransitionsCollapseSideProps } from "../Transition/index.types";
import type { LayoutContextValue } from "./context/index.";
export interface LayoutProviderProps extends React.PropsWithChildren {
    children: React.ReactNode;
    maxBreakpoint?: ContainerProps["maxBreakpoint"];
    headerHeight?: LayoutContextValue["headerHeight"];
    footerHeight?: LayoutContextValue["footerHeight"];
    sideWidth?: LayoutContextValue["sideWidth"];
}
export interface LayoutHeaderProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
export interface LayoutSideProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
export interface LayoutCollapseSideProps extends Omit<LayoutSideProps, "children"> {
    collapsedSideWidth: TransitionsCollapseSideProps["collapsedSideWidth"];
    renderContent: TransitionsCollapseSideProps["renderContent"];
}
export interface LayoutContentProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
export interface LayoutFooterProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
//# sourceMappingURL=index.types.d.ts.map