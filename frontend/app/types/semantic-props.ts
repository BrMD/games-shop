import React from "react";
import { HTMLMotionProps } from "framer-motion";
type Semantics =
  | "article"
  | "aside"
  | "footer"
  | "header"
  | "main"
  | "nav"
  | "section"
  | "div"
  | "dialog"
  | "form"
  | "figure";
export interface SemanticProps extends ChildrenProps {
  framer?: boolean;
  framerProps?: HTMLMotionProps<Semantics>;
  attributes?: React.HTMLAttributes<HTMLElement>;
  key?: string | number;
}
