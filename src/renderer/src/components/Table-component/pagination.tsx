/* eslint-disable prettier/prettier */
import {
  CaretLeft,
  CaretRight,
  CaretDoubleLeft,
  CaretDoubleRight,
} from "phosphor-react";

export interface IPaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
}

export default function Pagination({
  perPage,
  totalCount,
  pageIndex,
}: IPaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500 ">
        Total de {totalCount} item(s)
      </span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm text-gray-500 font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <button className="h-8 w-8 p-0">
            <CaretDoubleLeft className="h-4 w-4 text-gray-800" />
            <span className="sr-only text-gray-500">Primeira página</span>
          </button>
          <button className="h-8 w-8 p-0">
            <CaretLeft className="h-4 w-4 text-gray-800" />
            <span className="sr-only text-gray-500">Página anterior</span>
          </button>
          <button className="h-8 w-8 p-0">
            <CaretRight className="h-4 w-4 text-gray-800" />
            <span className="sr-only text-gray-500">Próxima página</span>
          </button>
          <button className="h-8 w-8 p-0">
            <CaretDoubleRight className="h-4 w-4 text-gray-800" />
            <span className="sr-only text-gray-500">Última página</span>
          </button>
        </div>
      </div>
    </div>
  );
}
