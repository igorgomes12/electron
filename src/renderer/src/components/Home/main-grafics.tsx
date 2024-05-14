/* eslint-disable prettier/prettier */
import { PopularProductschart } from "./Graphics/popular-products-charts";
import { RevenueChart } from "./Graphics/revenue-chart";

export function MainGraphics() {
  return (
    <div className="lg:grid grid-cols-9 md:flex-col sm:flex-col p-8 lg:h-80 overflow-y-auto gap-4">
      <RevenueChart />
      <PopularProductschart />
    </div>
  );
}
