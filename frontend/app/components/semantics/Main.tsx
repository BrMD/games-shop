import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionMain } from "../constants/Motion";
import { cn } from "../../utils/classes";

const Main: React.FC<SemanticProps> = (props) => {
  const { framer, children, className, style, framerProps, attributes, key } =
    props;
  type SectionMotionProps = typeof MotionMain extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionMain
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionMain>
      ) : (
        <main {...attributes} className={cn("", className)} style={style}>
          {children}
        </main>
      )}
    </>
  );
};
export default MotionMain;
