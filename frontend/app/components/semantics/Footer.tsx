import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionFooter } from "../constants/semantic-props";
import { cn } from "../../utils/functions/globals";

const Footer: React.FC<SemanticProps> = (props) => {
  const { framer, children, className, style, framerProps, attributes, key } =
    props;
  type SectionMotionProps = typeof MotionFooter extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionFooter
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionFooter>
      ) : (
        <footer {...attributes} className={cn("", className)} style={style}>
          {children}
        </footer>
      )}
    </>
  );
};
export default Footer;
