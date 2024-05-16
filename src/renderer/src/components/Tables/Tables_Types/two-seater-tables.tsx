import { Clock, Person } from "phosphor-react";
import { CenterTableValues } from "./center-table-values";

export function TwoSeaterTables() {
  return (
    <div className="border-2 border-gray-200 rounded-md w-60">
      <div className="w-full py-6 flex items-center justify-center flex-col">
        <div className="flex items-center gap-2">
          <span className="w-2 h-20 bg-gray-300 rounded-md p-1" />
          <CenterTableValues />
          <span className="w-2 h-20 bg-gray-300 rounded-md p-1" />
        </div>
      </div>
      <span className="w-[14.75rem] p-1 h-4 flex items-end border rounded-md bg-green-500" />
    </div>
  );
}
