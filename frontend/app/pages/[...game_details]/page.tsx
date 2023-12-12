import { NextPage } from "next";
import React from "react";
import Game_details_main from "./components/Game_details_main";
import Header from "@/app/components/landing/Header";
import Footer from "@/app/components/landing/Footer";
import Image from "next/image";
import { GameTypes } from "@/app/types/global";
const page: NextPage = () => {
  return (
    <>
      <Header />
      <Game_details_main>
        {/* <Image
          alt={game.name}
          src={`/images/covers/${game.cover}`}
          width={200}
          height={300}
        ></Image> */}
      </Game_details_main>

      <Footer />
    </>
  );
};

export default page;
