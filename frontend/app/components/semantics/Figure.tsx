import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionFigure } from "../constants/Motion";
import { cn } from "../../utils/classes";

const Figure: React.FC<SemanticProps> = (props) => {
  const { framer, children, className, style, framerProps, attributes, key } =
    props;
  type SectionMotionProps = typeof MotionFigure extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionFigure
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionFigure>
      ) : (
        <figure {...attributes} className={cn("", className)} style={style}>
          {children}
        </figure>
      )}
    </>
  );
};
export default Figure;
