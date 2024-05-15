/* eslint-disable prettier/prettier */
import { ForkKnife } from "phosphor-react";

export function DayOrderAmountCard() {
  return (
    <div className="bg-gray-100 w-full py-2 px-4 flex flex-col items-start rounded-lg">
      <div className="flex gap-2 items-center justify-between space-y-0 pb-2">
        <div className="text-base text-black font-semibold">
          Receita Total (dia)
        </div>
        <ForkKnife className="h-4 text-black w-4" />
      </div>
      <div className="space-y-1 w-full">
        <span className="text-2xl font-bold text-black tracking-tight">12</span>
        <p className="text-xs text-black">
          <span className="text-rose-500 dark:text-rose-400">-4%</span> em
          relação a ontem
        </p>
      </div>
    </div>
  );
}
