interface ChildrenProps extends StylingProps {
  children?: React.ReactNode;
}
type StylingProps = {
  style?: React.CSSProperties;
  className?: string;
};
