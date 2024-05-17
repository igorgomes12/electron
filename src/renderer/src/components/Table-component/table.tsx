/* eslint-disable prettier/prettier */
import React, { ReactNode, useEffect, useState } from "react";

type Trows = {
  [key: string]: ReactNode;
};

interface TableProps {
  headerTitles: string[];
  list: Trows[];
}

export default function Table({ headerTitles, list }: TableProps) {
  const [tableList, setTableList] = useState<any[][]>([]);
  useEffect(() => {
    const newArray: any[] = [];
    if (list) list.map((items) => newArray.push([...Object.values(items)]));
    setTableList(newArray);
  }, [list]);

  return (
    <div className="relative overflow-x-auto shadow-lg">
      <table className="text-md w-full text-left transition ">
        <thead className="border-b-2 bg-gray-50 text-sm uppercase text-gray-700 ">
          <tr>
            {headerTitles?.map((obj, i) => (
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 hover:bg-gray-200"
                key={+i}
              >
                {obj}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableList.map((obj, i) => (
            <tr
              key={+i}
              className="border-b bg-white hover:bg-amareloVitoriano/60"
            >
              {obj.map((content, indice) => (
                <td className="px-6 py-3 text-gray-600" key={+indice}>
                  {content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
