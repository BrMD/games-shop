import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionSection } from "../constants/semantic-props";
import { cn } from "../../utils/functions/globals";

const Section: React.FC<SemanticProps> = (props) => {
  const { framer, children, className, style, framerProps, attributes, key } =
    props;
  type SectionMotionProps = typeof MotionSection extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionSection
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionSection>
      ) : (
        <section {...attributes} className={cn("", className)} style={style}>
          {children}
        </section>
      )}
    </>
  );
};
export default Section;
