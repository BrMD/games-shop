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
    <Div className="">
      <Div className="grid relative">
        <Div className="game_preview_div">
          <Div className="border-b-4 border-solid border-blue-900 h-[70%] w-full overflow-hidden bg-center justify-end">
            <Figure className="game_preview_div_img">
              <Image
                src={`/images/covers/${game.cover}`}
                alt={game.name}
                width={620}
                height={765}
                className="game_preview "
              />
              <Div className="absolute bg-red-500 m-[7px]">
                <span className="m-2">{game.type}</span>
              </Div>
            </Figure>
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
            <span>{price}</span>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Game_preview;
