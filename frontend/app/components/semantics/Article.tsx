import React from "react";
import { SemanticProps } from "../../types/semantic-props";
import { MotionArticle } from "../constants/Motion";
import { cn } from "../../utils/classes";

const Article: React.FC<SemanticProps> = (props) => {
  const { framer, children, className, style, framerProps, attributes, key } =
    props;
  type SectionMotionProps = typeof MotionArticle extends React.FC<infer P>
    ? P
    : never;
  return (
    <>
      {framer ? (
        <MotionArticle
          {...(framerProps as SectionMotionProps)}
          className={cn("", className)}
          style={style}
          key={key}
        >
          {children}
        </MotionArticle>
      ) : (
        <article {...attributes} className={cn("", className)} style={style}>
          {children}
        </article>
      )}
    </>
  );
};
export default Article;
