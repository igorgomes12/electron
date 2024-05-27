import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Product {
  titleCard: string;
  icon: ReactElement;
  link: string;
  id?: string;
}

interface MainCardsNavigationProps {
  products: Product[];
}

export function MainCardsNavigation({ products }: MainCardsNavigationProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Link
          key={product.titleCard}
          to={product.id ? `${product.link}/${product.id}` : product.link}
          className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:bg-gray-100"
        >
          {product.icon}
          <h2 className="mt-2 text-xl font-semibold">{product.titleCard}</h2>
        </Link>
      ))}
    </div>
  );
}
