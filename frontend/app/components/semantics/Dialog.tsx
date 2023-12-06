import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionDialog } from "../constants/Motion";
import { cn } from "../../utils/classes";

const Dialog: React.FC<SemanticProps> = (props) => {
  const { framer, children, className, style, framerProps, attributes, key } =
    props;
  type SectionMotionProps = typeof MotionDialog extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionDialog
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionDialog>
      ) : (
        <dialog {...attributes} className={cn("", className)} style={style}>
          {children}
        </dialog>
      )}
    </>
  );
};
export default Dialog;
