/* eslint-disable prettier/prettier */
import { Router, Route } from "electron-router-dom";

import { Blank } from "./pages/blank";
import { Document } from "./pages/document";
import { Default } from "./pages/layouts/default";
import { RegisterUser } from "./pages/RegisterUser/registerUser";
import { NavegationHome } from "./components/Home/navegation";
import { RegisterClient } from "./components/Home/Client/registerClient";
import { Mesas } from "./pages/Mesas/mesas";
import { Dashboard } from "./pages/Dashboard/dashboard";
import { Menu } from "./pages/Cardapio/menu";
import { Client } from "./pages/Cliente/client";
import { MesasFunction } from "./pages/Mesas/mesas-function";
import { Delivery } from "./pages/Delivery/delivery";

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/documents/:id" element={<Document />} />
          <Route path="/admin" element={<RegisterUser />} />
          <Route path="/client" element={<Client />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/mesas-function" element={<MesasFunction />} />
          <Route path="/mesas" element={<Mesas />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/clientRegister" element={<RegisterClient />} />
          <Route path="/tela-principal" element={<NavegationHome />} />
        </Route>
      }
    />
  );
}
