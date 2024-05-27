import { useState } from "react";
import burguer from "../../img/burguer.jpg";
import cerveja from "../../img/cerveja.png";
import refri from "../../img/refrigerante.png";
import batata from "../../img/batata.jpeg";
import acai from "../../img/acai.png";
import agua from "../../img/agua.png";
import notfound from "../../img/fallback.jpeg";

import { TextHeader } from "../utils/text-header";
import { StarsNowMenu } from "./stars-now-menu";
import { Search } from "../Sidebar/Search";
import { useSidebarStore } from "../../hooks/ModalCardShopping/useSidebar";

export type TCategories = {
  title: string;
  img: string;
};

export const cardCategories: TCategories[] = [
  { title: "Todos", img: notfound },
  { title: "Burguer", img: burguer },
  { title: "Porções", img: batata },
  { title: "Agua", img: agua },
  { title: "Açai", img: acai },
  { title: "Refrigerante", img: refri },
  { title: "Cerveja", img: cerveja },
];

export function CategoriesMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const { expanded } = useSidebarStore();

  const handleCategorySelection = (title: string) => {
    setSelectedCategory(title);
  };

  return (
    <div className="py-1 px-1 w-full flex-1 -mt-4">
      <TextHeader title="Categorias" />
      <div className="border-b-2 overflow-x-auto flex w-full py-2">
        <div
          className={`w-full px-2 gap-2 ${
            expanded ? "md:grid grid-cols-6" : "md:grid grid-cols-6"
          } sm:flex sm:flex-col lg:px-4 lg:gap-4`}
        >
          {cardCategories.map(({ title, img }, index) => (
            <div
              key={`categories_${title}-${index}`}
              onClick={() => handleCategorySelection(title)}
              className="flex bg-gray-100 p-1 hover:bg-gray-300 cursor-pointer rounded-lg items-center justify-start w-full lg:w-full xl:w-full"
            >
              <div className="flex items-center gap-1 py-1 px-1">
                {img && (
                  <img className="rounded-xl w-8 h-8" src={img} alt={title} />
                )}
                <p className="text-black text-sm truncate">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Search setFilter={(value: string) => setSelectedCategory(value)} />
      <StarsNowMenu title={selectedCategory} filter={selectedCategory} />
    </div>
  );
}
