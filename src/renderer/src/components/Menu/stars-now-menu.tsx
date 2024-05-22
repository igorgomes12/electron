import { useEffect, useState } from "react";
import burguer from "../../img/burguer.jpg";
import refri from "../../img/refrigerante.png";
import batata from "../../img/batata.jpeg";
import acai from "../../img/acai.png";
import agua from "../../img/agua.png";
import notfound from "../../img/fallback.jpeg";
import cerveja from "../../img/cerveja.png";
import { useModalCardShopping } from "../../hooks/ModalCardShopping/useModalCardShopping";
import { ModalCardShopping } from "./Shopping/modal-card-shopping";

export type TTypes = {
  title: string;
  img: string;
  description?: string;
  price: string;
  img2?: string;
};

export type TStars = {
  Total: TTypes[];
};

export const cardStarsNow: TStars = {
  Total: [
    {
      title: "Burguer",
      img: burguer,
      description:
        "2 carnes de 120g (blend da casa), 2 ovos, bacon, 2 presuntos, 2 mussarela, banana, calabresa, alface, tomate, milho e batata.",
      price: "R$ 20,00",
    },
    {
      title: "Porções",
      img: batata,

      price: "R$ 10,00",
    },
    {
      title: "Refrigerante",
      img: refri,

      price: "R$ 10,00",
    },
    {
      title: "Cerveja",
      img: cerveja,

      price: "R$ 10,00",
    },
    {
      title: "Açai",
      img: acai,

      price: "R$ 10,00",
    },
    {
      title: "Agua",
      img: agua,

      price: "R$ 10,00",
    },
    {
      title: "Sorvete",
      img: "",

      price: "R$ 10,00",
    },
  ],
};

type TStarsNowTypes = {
  title: string;
  filter: string;
};

export function StarsNowMenu({ title, filter }: TStarsNowTypes) {
  const { isOpen, onOpen } = useModalCardShopping();
  const [filteredItems, setFilteredItems] = useState<TTypes[]>([]);

  useEffect(() => {
    const allItems = [...cardStarsNow.Total];
    if (filter === "Todos") {
      setFilteredItems(allItems);
    } else {
      setFilteredItems(
        allItems.filter(
          (item) => item.title.toLowerCase() === filter.toLowerCase()
        )
      );
    }
  }, [filter]);

  return (
    <div className="flex-1 w-full">
      <div className="flex gap-2 items-start w-full justify-start py-2">
        <h1 className="flex px-4 border-b w-full py-1 items-start font-medium justify-start text-black text-xl">
          {title}
        </h1>
      </div>
      <div className="py-2 px-2 w-full md:w-6/12 lg:w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {filteredItems.map(
            ({ description, img, price, title }, i: number) => (
              <div
                onClick={onOpen}
                key={`stars_${title}-${i}`}
                className="relative border-2 bottom-2 hover:scale-105 cursor-pointer items-center justify-center shadow-zinc-300 shadow-2xl border-gray-200 rounded-lg flex flex-col bg-white w-36 md:w-36 lg:w-48 xl:w-36 h-52 "
              >
                <div className="items-center flex justify-center w-40 lg:w-40 xl:w-full h-32 overflow-hidden rounded-t-lg">
                  {img ? (
                    <img
                      className="w-28 md:w-28 lg:w-40 xl:w-full h-full object-cover"
                      src={img}
                      alt={title}
                    />
                  ) : (
                    <img
                      className="md:w-36 lg:w-full  h-full object-cover"
                      src={notfound}
                      alt={title}
                    />
                  )}
                </div>
                <div className="bg-gray-100 rounded-b-lg w-full h-20 flex flex-col py-4 px-4 items-start justify-start mt-2">
                  <h6 className="text-black font-medium text-lg">{title}</h6>
                  <div className="flex items-start flex-col justify-start w-full max-w-xs">
                    <p className="text-black truncate font-extralight text-xs max-w-full">
                      {description}
                    </p>
                    <p className="text-black font-extralight text-xs">
                      {price}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {isOpen && <ModalCardShopping />}
    </div>
  );
}
