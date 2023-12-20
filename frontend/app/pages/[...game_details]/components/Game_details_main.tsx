"use client";
import React, { PropsWithChildren } from "react";
import { Main } from "@/app/components/semantics";
import { usePathname } from "next/navigation";

const Game_details_main = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  return <Main>{children}</Main>;
};

export default Game_details_main;
