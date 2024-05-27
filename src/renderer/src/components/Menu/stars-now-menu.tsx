import { useEffect, useState } from "react";
import burguer from "../../img/burguer.jpg";
import refri from "../../img/refrigerante.png";
import batata from "../../img/batata.jpeg";
import acai from "../../img/acai.png";
import agua from "../../img/agua.png";
import cerveja from "../../img/cerveja.png";
import { useModalCardShopping } from "../../hooks/ModalCardShopping/useModalCardShopping";
import { ModalCardShopping } from "./Shopping/modal-card-shopping";
import { useSidebarStore } from "../../hooks/ModalCardShopping/useSidebar";
import { CardItem } from "./Shopping/card-item";

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

const filterItems = (filter: string, items: TTypes[]): TTypes[] => {
  if (filter === "Todos") {
    return items;
  }
  return items.filter(
    (item) => item.title.toLowerCase() === filter.toLowerCase()
  );
};

export function StarsNowMenu({ title, filter }: TStarsNowTypes) {
  const { isOpen, onOpen } = useModalCardShopping();
  const [filteredItems, setFilteredItems] = useState<TTypes[]>([]);
  const { expanded } = useSidebarStore();

  useEffect(() => {
    setFilteredItems(filterItems(filter, cardStarsNow.Total));
  }, [filter]);

  return (
    <div className="flex-1 w-full">
      <div className="flex gap-2 items-start w-full justify-start py-2">
        <h1 className="flex px-4 border-b w-full py-1 items-start font-medium justify-start text-black text-xl">
          {title}
        </h1>
      </div>
      <div className="py-2 px-2 w-full md:w-6/12 lg:w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-2">
          {filteredItems.map((item, i) => (
            <CardItem
              key={`stars_${item.title}-${i}`}
              {...item}
              onOpen={onOpen}
              expanded={expanded}
            />
          ))}
        </div>
      </div>
      {isOpen && <ModalCardShopping />}
    </div>
  );
}
