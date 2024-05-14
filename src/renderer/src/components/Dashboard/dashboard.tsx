/* eslint-disable prettier/prettier */
import { PopularProductschart } from "../Home/Graphics/popular-products-charts";
import { RevenueChart } from "../Home/Graphics/revenue-chart";
import { Breadcrumb } from "../componentsUtils/breadcrumb";
import { DayOrderAmountCard } from "./day-order-amount-card";
import { MonthOrderAmountCard } from "./month-order-amount-card";
import { MonthCancelOrderAmountCard } from "./mounth-canceled-ordes-card";
import { MonthRevenueCard } from "./mouth-revenue-card";

export function Dashboard() {
  return (
    <div className="flex-1 p-2 overflow-y-auto">
      <div className="flex flex-col gap-4">
        <div className="flex p-3">
          <Breadcrumb
            list={{
              step1: { name: "Tela principal", navigate: "/tela-principal" },
              lastStep: "Dashboard",
            }}
          />
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          <MonthRevenueCard />
          <MonthOrderAmountCard />
          <DayOrderAmountCard />
          <MonthCancelOrderAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4 px-4 py-8">
          <RevenueChart />
          <PopularProductschart />
        </div>
      </div>
    </div>
  );
}
