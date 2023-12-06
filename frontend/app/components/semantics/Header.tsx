import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionHeader } from "../constants/Motion";
import { cn } from "../../utils/classes";

const Header: React.FC<SemanticProps> = (props) => {
  const { framer, children, className, style, framerProps, attributes, key } =
    props;
  type SectionMotionProps = typeof MotionHeader extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionHeader
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionHeader>
      ) : (
        <header {...attributes} className={cn("", className)} style={style}>
          {children}
        </header>
      )}
    </>
  );
};
export default Header;
