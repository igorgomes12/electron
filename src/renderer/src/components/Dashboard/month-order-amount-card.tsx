/* eslint-disable prettier/prettier */
import { ForkKnife } from "phosphor-react";

export function MonthOrderAmountCard() {
  return (
    <div className="bg-gray-100 rounded-lg w-full py-2 px-4 flex flex-col items-start ">
      <div className="flex gap-2 items-center justify-between space-y-0 pb-2">
        <div className="text-base text-black font-semibold">Pedidos (mês)</div>
        <ForkKnife className="h-4 w-4 text-black" />
      </div>
      <div className="space-y-1">
        <span className="text-2xl font-bold text-black tracking-tight">
          246
        </span>
        <p className="text-xs text-black">
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span> em
          relação ao mês passado
        </p>
      </div>
    </div>
  );
}
