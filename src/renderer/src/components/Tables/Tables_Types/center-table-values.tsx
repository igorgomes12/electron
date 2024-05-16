import { Clock, Person } from "phosphor-react";
import { useNavigate } from "react-router-dom";

type TValuesTable = {
  tableNumber: string;
  personsTable: number;
  time: string;
};

const contentTable: TValuesTable[] = [
  { tableNumber: "# 001", personsTable: 4, time: "agora" },
];

export function CenterTableValues() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/mesas-function")}
      className="cursor-pointer"
    >
      {contentTable.map(({ personsTable, tableNumber, time }, i: number) => (
        <div
          key={`contentTable_${tableNumber}-${i}`}
          className="bg-gray-300 border rounded-xl px-16 py-6"
        >
          <span className="text-lg text-black">{tableNumber}</span>
          <span className="flex items-center gap-1">
            <Person className="text-black" size={12} weight="bold" />
            <p className="text-sm text-black">{personsTable}</p>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="text-black" size={12} weight="bold" />
            <p className="text-sm text-black">{time}</p>
          </span>
        </div>
      ))}
    </button>
  );
}
