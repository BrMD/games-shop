import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionNav } from "../constants/Motion";
import { cn } from "../../utils/classes";

const Nav: React.FC<SemanticProps> = (props) => {
  const { framer, children, className, style, framerProps, attributes, key } =
    props;
  type SectionMotionProps = typeof MotionNav extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionNav
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionNav>
      ) : (
        <nav {...attributes} className={cn("", className)} style={style}>
          {children}
        </nav>
      )}
    </>
  );
};
export default Nav;
