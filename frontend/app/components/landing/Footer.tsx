import React from "react";
import { Div, Footer as Foot } from "../semantics";

const Footer = () => {
  return (
    <Foot className="h-[10vh] border-2 border-solid border-red-50">
      <Div>&copy; by Matheus Dorigon</Div>
    </Foot>
  );
};

export default Footer;
