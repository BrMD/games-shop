import React from "react";
import { Div } from "../semantics";
import { Arvo } from "next/font/google";

const arvo = Arvo({
  weight: "700",
  style: ["italic"],
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <Div className={`${arvo.className} text-[4.7rem] italic`}>Games-Shop</Div>
  );
};

export default Logo;
