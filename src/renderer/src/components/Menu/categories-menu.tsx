import burguer from "../../img/burguer.jpg";
import { TextHeader } from "../utils/text-header";

type TCategories = {
  title: string;
  img: string;
};

const cardCategories: TCategories[] = [
  {
    title: "Todos",
    img: burguer,
  },
  {
    title: "burguer",
    img: burguer,
  },
  {
    title: "Pizza",
    img: burguer,
  },
  {
    title: "Açai",
    img: burguer,
  },
  {
    title: "Refrigerante",
    img: burguer,
  },
  {
    title: "Cerveja",
    img: burguer,
  },
];

export function CategoriesMenu() {
  return (
    <div className="py-1 px-2 w-full overflow-x-auto flex-col flex -mt-4">
      <TextHeader title="Categorias" />
      <div className="border-b-2 px-1 w-full gap-2 flex py-1">
        {cardCategories.map(({ title, img }, i: number) => (
          <div
            key={`categories_${title}-${i}`}
            className="flex cursor-pointer bg-gray-100 hover:bg-amareloFood rounded-lg w-full items-center justify-center gap-1"
          >
            <div className="flex p-1 w-full gap-3 justify-start items-center">
              <img className="rounded-xl w-8 h-8" src={img} alt="" />
              <p className="text-black text-sm">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
