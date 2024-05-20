/* eslint-disable no-undef */
import { ForkKnife } from "phosphor-react";

type TTablesServices = {
  id: number;
  icon: JSX.Element;
};

const conteudo: TTablesServices[] = [
  {
    id: 10,
    icon: <ForkKnife className="text-black" size={22} weight="fill" />,
  },
  {
    id: 9,
    icon: <ForkKnife className="text-black" size={22} weight="fill" />,
  },
  {
    id: 8,
    icon: <ForkKnife className="text-black" size={22} weight="fill" />,
  },
];

export function TableComponentTablesService() {
  return (
    <div className="grid grid-cols-4 h-[24.5rem] border-b items-start gap-2 p-2 w-full">
      {conteudo.map(({ icon, id }, i: number) => (
        <div
          key={`mesas_${id}-${i}`}
          className="w-32 h-20 border rounded-xl border-gray-400 shadow-xl flex items-center bg-gray-100 cursor-pointer"
        >
          <div className="flex items-center  justify-center w-full gap-2 flex-col ">
            <div className="rounded-full bg-slate-50 border-2 border-amareloFood p-3 ">
              {icon}
            </div>
            <p className="text-black text-xl font-bold ">{id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
