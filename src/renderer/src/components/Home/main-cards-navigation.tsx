/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import { Link } from "react-router-dom";
import { ReactElement } from "react";

type TMainCards = {
  products: {
    titleCard: string;
    icon: ReactElement;
    link: string;
  }[];
};

export function MainCardsNavigation({ products }: TMainCards) {
  return (
    <div className="bg-gray-200 w-full p-2">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 justify-center">
        {products.map((cards, i) => (
          <Link
            key={`cards_${cards.titleCard}-${i}`}
            to={cards.link}
            className="flex items-center justify-center"
          >
            <div className="flex flex-col hover:scale-105 items-center gap-8 lg:gap-10 justify-center p-5 bg-white rounded-lg w-36 sm:w-40 md:w-48 lg:w-56 h-40 sm:h-44 md:h-52 lg:h-60">
              <span className="text-amareloFood">{cards.icon}</span>
              <h2 className="text-black font-normal text:sm sm:text-md md:text-lg lg:text-xl">
                {cards.titleCard}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
