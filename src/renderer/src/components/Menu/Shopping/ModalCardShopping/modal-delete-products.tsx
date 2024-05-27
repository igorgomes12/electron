import { useCountStore } from "~/src/renderer/src/hooks/ModalCardShopping/useListCartShopping";

export function ModalDeleteProduct() {
  const { isOpen, onClose, deleteItem, deleteProductId } = useCountStore();

  const handleDelete = () => {
    if (deleteProductId) {
      deleteItem(deleteProductId);
      console.log("item removido ", deleteProductId);
    }
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex h-auto w-3/12 flex-col gap-2 overflow-y-auto rounded-lg bg-white p-4 shadow-md">
        <h1 className="text-black py-2 font-medium text-xl">Remover Item</h1>
        <span className="text-black py-1 text-center">
          Deseja remover o item do carrinho?
        </span>
        <div className="flex py-2 items-center justify-center gap-2">
          <button
            className="px-4 py-2 text-black bg-gray-300 hover:bg-gray-400 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-red-300 hover:bg-red-400 text-black rounded"
            onClick={handleDelete}
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}
