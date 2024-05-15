import burguer from "../../img/burguer.jpg";

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
    <div>
      <h1 className="flex px-6 py-2 items-start justify-start text-black text-xl ">
        Categorias
      </h1>
      {/* card menu */}
      <div className="border-b w-full  gap-2 flex p-4">
        {cardCategories.map(({ title, img }, i: number) => (
          <div
            key={`categories_${title}-${i}`}
            className="grid grid-cols-10 overflow-x-auto px-1 py-1 cursor-pointer bg-gray-100 hover:bg-amareloFood rounded-lg w-[11.5rem] items-center justify-center gap-2"
          >
            <div className="flex w-20 gap-3 justify-between items-center">
              <img className=" rounded-xl h-10" src={img} alt="" />
              <p className="text-black text-sm">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
