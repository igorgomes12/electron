/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import { ReactElement } from "react";
import { MainCardsNavigation } from "./main-cards-navigation";
import { Cardholder, Notebook, Table, Truck, Users } from "phosphor-react";
import { MainGraphics } from "./main-grafics";

const cardProducts: { titleCard: string; icon: ReactElement; link: string }[] =
  [
    {
      titleCard: "Dashboard",
      icon: <Cardholder size={80} />,
      link: "/dashboard",
    },
    {
      titleCard: "Cardápio",
      icon: <Notebook size={80} />,
      link: "/menu",
    },
    {
      titleCard: "Delivery",
      icon: <Truck size={80} />,
      link: "/delivery",
    },
    {
      titleCard: "Mesas",
      icon: <Table size={80} />,
      link: "/mesas",
    },
    {
      titleCard: "Clientes",
      icon: <Users size={80} />,
      link: "/client",
    },
  ];

export function NavegationHome() {
  return (
    <div className="h-[50rem] overflow-y-auto">
      {/* <MainNavigation /> */}
      <MainCardsNavigation products={cardProducts} />
      <MainGraphics />
    </div>
  );
}

// todo list
// 1- preciso vericar o meio de abrir um menu lateral
// 2- menu Sidebar nao esta com necessidade verificar
