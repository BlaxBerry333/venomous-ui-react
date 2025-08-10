export interface TransitionsCollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;

  direction?: "left" | "right" | "up" | "down";
}
