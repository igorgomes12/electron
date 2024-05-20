import React, { ReactNode, useEffect, useState } from "react";

type Trows = {
  [key: string]: ReactNode;
};

interface TableProps {
  headerTitles: string[];
  list: Trows[];
}

export default function TableTransfer({ headerTitles, list }: TableProps) {
  const [tableList, setTableList] = useState<any[][]>([]);
  useEffect(() => {
    const newArray: any[] = [];
    if (list) list.map((items) => newArray.push([...Object.values(items)]));
    setTableList(newArray);
  }, [list]);

  return (
    <div className="relative overflow-x-auto shadow-lg">
      <table className="text-md w-full text-left transition ">
        <thead className="border-b-2 bg-amareloFood/70 text-sm uppercase text-black ">
          <tr>
            {headerTitles?.map((obj, i) => (
              <th
                scope="col"
                className={`cursor-pointer w-96 px-2 py-1 hover:bg-gray-200  ${
                  i === 0 && "w-10"
                } `}
                key={+i}
              >
                {obj}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableList.map((obj, i) => (
            <tr key={+i} className="border-b bg-white hover:bg-amareloFood/20">
              {obj.map((content, indice) => (
                <td
                  className={`px-1 py-1 text-center text-sm text-black ${
                    i === 3 && "w-full"
                  }`}
                  key={+indice}
                >
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
