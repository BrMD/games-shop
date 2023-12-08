"use client";
import React, { useState } from "react";
import { Div, Figure } from "./semantics";
import { game } from "./constants/constants";
import Image from "next/image";

const Game_preview = () => {
  const [price, setPrice] = useState(game.prices[0].price);
  function handlePrice(value: number) {
    setPrice(value);
  }
  return (
    <Div className="h-[35vh] w-[10vw] m-2 border border-solid">
      <Figure className="border-b-4 border-solid border-blue-900 h-[70%] w-full overflow-hidden bg-center justify-end">
        <Div className="game_preview_div">
          <Image
            src={`/images/covers/${game.cover}`}
            alt={game.name}
            width={1920}
            height={1080}
            className="game_preview "
          />
        </Div>

        <Div className="absolute bg-red-500 m-[7px]">
          <span className="m-2">{game.type}</span>
        </Div>
      </Figure>
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
        <span>{price}</span>
      </Div>
    </Div>
  );
};

export default Game_preview;
