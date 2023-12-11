"use client";
import React, { useState } from "react";
import { Div, Figure } from "./semantics";
import { game } from "./constants/constants";
import Image from "next/image";
import Link from "next/link";

const Game_preview = () => {
  const [price, setPrice] = useState(game.prices[0].price);
  function handlePrice(value: number) {
    setPrice(value);
  }
  return (
    <Div className="game_preview_div">
      <Link href={"/pages/game_details"}>
        <Div className=" h-full w-full flex overflow-hidden justify-end ">
          <Figure className="p-0 game_preview_div_img bg-auto">
            <Image
              src={`/images/covers/${game.cover}`}
              alt={game.name}
              width={195}
              height={241}
              className="game_preview_img"
            />
          </Figure>
          <Div className="absolute bg-red-500 mr-[10px] mt-[14px]">
            <span className="m-2">{game.type}</span>
          </Div>
        </Div>
        <Div>
          <span>{game.name}</span>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handlePrice(+e.target.value)
            }
          >
            {game.prices.map((price) => {
              return (
                <option key={price.platform} value={price.price}>
                  {price.platform}
                </option>
              );
            })}
          </select>
        </Div>
        <Div>
          <span>{price}</span>
        </Div>{" "}
      </Link>
    </Div>
  );
};

export default Game_preview;
