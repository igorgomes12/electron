import { ReactElement } from "react";
import { MainCardsNavigation } from "./main-cards-navigation";
import { Cardholder, Notebook, Table, Truck, Users } from "phosphor-react";
import { MainGraphics } from "./main-grafics";

const cardProducts: {
  titleCard: string;
  icon: ReactElement;
  link: string;
  id?: string;
}[] = [
  {
    titleCard: "Dashboard",
    icon: <Cardholder size={80} />,
    link: "/dashboard",
    id: "Dashboard",
  },
  {
    titleCard: "Cardápio",
    icon: <Notebook size={80} />,
    link: "/menu",
    id: "Cardápio",
  },
  {
    titleCard: "Delivery",
    icon: <Truck size={80} />,
    link: "/delivery",
    id: "Delivery",
  },
  {
    titleCard: "Mesas",
    icon: <Table size={80} />,
    link: "/mesas",
    id: "Mesas",
  },
  {
    titleCard: "Clientes",
    icon: <Users size={80} />,
    link: "/client",
    id: "Clientes",
  },
];

export function NavegationHome() {
  return (
    <div className="h-[50rem] overflow-y-auto">
      <MainCardsNavigation products={cardProducts} />
      <MainGraphics />
    </div>
  );
}
