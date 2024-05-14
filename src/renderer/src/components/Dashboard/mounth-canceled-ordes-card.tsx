/* eslint-disable prettier/prettier */
import { CurrencyDollar } from "phosphor-react";

export function MonthCancelOrderAmountCard() {
  return (
    <div className="bg-red-400 rounded-lg w-full py-2 px-4 flex flex-col items-start ">
      <div className="flex gap-2 items-center justify-between space-y-0 pb-2">
        <div className="text-base text-black font-semibold">
          Cancelamentos (mês)
        </div>
        <CurrencyDollar className="h-4 w-4 text-black" />
      </div>
      <div className="space-y-1">
        <span className="text-2xl font-bold text-black tracking-tight">32</span>
        <p className="text-xs text-black">
          <span className="text-emerald-400 dark:text-emerald-400">-2%</span> em
          relação ao mês passado
        </p>
      </div>
    </div>
  );
}
