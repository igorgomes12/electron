import { TwoSeaterTables } from "./two-seater-tables";
import { FourSeaterTables } from "./four-seater-tables";
import { SixSeaterTables } from "./six-seater-tables";

export function Table() {
  return (
    <div className="h-[22rem] overflow-y-auto flex border-t p-4 items-start justify-start gap-6">
      <TwoSeaterTables />
      <SixSeaterTables />
      <FourSeaterTables />
    </div>
  );
}
