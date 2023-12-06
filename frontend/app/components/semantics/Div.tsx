import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionDiv } from "../constants/Motion";
import { cn } from "../../utils/classes";

const Div: React.FC<SemanticProps> = (props) => {
  const { framer, children, className, style, framerProps, attributes, key } =
    props;
  type SectionMotionProps = typeof MotionDiv extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionDiv
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionDiv>
      ) : (
        <div {...attributes} className={cn("", className)} style={style}>
          {children}
        </div>
      )}
    </>
  );
};
export default Div;
