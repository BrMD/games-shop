import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionAside } from "../constants/semantic-props";
import { cn } from "../../utils/functions/globals";

const Aside: React.FC<SemanticProps> = (props) => {
  const { framer, children, className, style, framerProps, attributes, key } =
    props;
  type SectionMotionProps = typeof MotionAside extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionAside
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionAside>
      ) : (
        <aside {...attributes} className={cn("", className)} style={style}>
          {children}
        </aside>
      )}
    </>
  );
};
export default Aside;
