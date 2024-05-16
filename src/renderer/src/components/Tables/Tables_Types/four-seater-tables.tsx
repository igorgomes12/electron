import { Clock, Person } from "phosphor-react";
import { CenterTableValues } from "./center-table-values";

export function FourSeaterTables() {
  return (
    <div className="border-2 border-gray-200 rounded-md w-60">
      <div className="w-full gap-2 py-2 flex items-center justify-center flex-col">
        <span className="w-20 h-2 bg-gray-300 rounded-md p-1" />
        {/* Span acima */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-20 bg-gray-300 rounded-md p-1" />
          <CenterTableValues />
          <span className="w-2 h-20 bg-gray-300 rounded-md p-1" />
        </div>
        <span className="w-20 h-2 bg-gray-300 rounded-md p-1" />
        {/* Span abaixo */}
      </div>
      <span className="w-[14.75rem] p-1 h-4 flex items-end border rounded-md bg-amareloFood" />
    </div>
  );
}
