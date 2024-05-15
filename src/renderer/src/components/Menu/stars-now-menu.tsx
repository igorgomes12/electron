import { ShoppingCartSimple } from "phosphor-react";
import burguer from "../../img/burguer.jpg";
import { Shopping } from "./Shopping/shopping";
import { useModalCardShopping } from "../../hooks/ModalCardShopping/useModalCardShopping";
import { ModalCardShopping } from "./Shopping/modal-card-shopping";

type TStars = {
  title: string;
  img: string;
  description: string;
  price: string;
};

const cardStarsNow: TStars[] = [
  {
    title: "burguer",
    img: burguer,
    description: "Chessy Mozarella",
    price: "R$ 10,00",
  },
  {
    title: "Pizza",
    img: burguer,
    description: "Chessy Mozarella",
    price: "R$ 10,00",
  },
  {
    title: "Açai",
    img: burguer,
    description: "Chessy Mozarella",
    price: "R$ 10,00",
  },
  {
    title: "Refrigerante",
    img: burguer,
    description: "Chessy Mozarella",
    price: "R$ 10,00",
  },
  {
    title: "Cerveja",
    img: burguer,
    description: "Chessy Mozarella",
    price: "R$ 10,00",
  },
  {
    title: "Sorvete",
    img: burguer,
    description: "Chessy Mozarella",
    price: "R$ 10,00",
  },
];

export function StarsNowMenu() {
  const { isOpen, onOpen } = useModalCardShopping();

  return (
    <div className="flex-1 w-full">
      <div className="flex gap-2 items-start w-full justify-start py-2">
        <h1 className="flex px-6 border-b w-full py-4 items-start justify-start text-black text-xl">
          Populares
        </h1>
      </div>
      <div className="grid py-4 px-2 w-full gap-2 items-center justify-between grid-cols-12">
        <div className="grid grid-cols-1 w-[40rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 col-span-11 gap-4">
          {cardStarsNow.map(({ description, img, price, title }, i: number) => (
            <div
              onClick={onOpen}
              key={`stars_${title}-${i}`}
              className="relative border-2 hover:scale-105 gap-4 cursor-pointer items-center justify-center shadow-zinc-500 shadow-2xl py-8 border-gray-100 rounded-lg flex flex-col w-52 h-64"
            >
              <div className="items-center flex justify-center">
                <img className="w-52 h-40" src={img} alt={title} />
              </div>
              <div className="absolute bottom-16 right-4">
                <ShoppingCartSimple
                  className="text-black px-1 py-2 bg-white rounded-full cursor-pointer hover:scale-110"
                  size={40}
                  weight="bold"
                />
              </div>
              <div className="bg-amareloFood rounded-lg w-52 h-64 px-2 py-4 flex-1 items-start justify-start">
                <h6 className="text-black font-medium text-lg">{title}</h6>
                <div className="flex items-start justify-between w-full">
                  <p className="text-black font-extralight text-xs">
                    {description}
                  </p>
                  <p className="text-black font-extralight text-xs">{price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" -ml-96 w-[30rem] flex h-full items-start justify-center">
          <Shopping />
        </div>
      </div>
      {isOpen && <ModalCardShopping />}
    </div>
  );
}
