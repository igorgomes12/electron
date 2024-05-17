import { tableMesas } from "../../../utils/mocks";
import TableMesa from "../table-mesa";
const conteudo = {
  id: 10,
  cod: 108,
  descricao: "teste",
  quantidade: 2,
  valor: "20,00",
  total: "20,00",
  viagem: "não",
  lancamento: "não",
};

const conteudoArray = Array.from({ length: 7 }, (_, i: number) => ({
  ...conteudo,
}));
export function TableComponentComand() {
  return (
    <div className="border-b overflow-y-auto flex items-center justify-center">
      <div className="h-56 overflow-x-auto w-[50rem]">
        <TableMesa headerTitles={tableMesas} list={conteudoArray} />
      </div>
    </div>
  );
}
