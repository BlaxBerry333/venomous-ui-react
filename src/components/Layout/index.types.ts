import type { ContainerProps } from "../Container";
import type { LayoutContextValue } from "./context/index.";

export interface LayoutProviderProps extends React.PropsWithChildren {
  children: React.ReactNode;
  maxBreakpoint?: ContainerProps["breakpoint"];
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

export interface LayoutContentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface LayoutFooterProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
