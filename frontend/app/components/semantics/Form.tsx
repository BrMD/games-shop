import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionForm } from "../constants/semantic-props";
import { cn } from "../../utils/functions/globals";

const Form: React.FC<SemanticProps> = (props) => {
  const {
    framer,
    onSubmit,
    children,
    className,
    style,
    framerProps,
    attributes,
    key,
  } = props;
  type SectionMotionProps = typeof MotionForm extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionForm
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionForm>
      ) : (
        <form
          {...attributes}
          onSubmit={onSubmit}
          className={cn("", className)}
          style={style}
        >
          {children}
        </form>
      )}
    </>
  );
};
export default Form;
