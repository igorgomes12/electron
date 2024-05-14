/* eslint-disable prettier/prettier */
import { Router, Route } from "electron-router-dom";

import { Blank } from "./pages/blank";
import { Document } from "./pages/document";
import { Default } from "./pages/layouts/default";
import { RegisterUser } from "./pages/RegisterUser/registerUser";
import { NavegationHome } from "./components/Home/navegation";
import { Client } from "./components/Home/Client/client";
import { RegisterClient } from "./components/Home/Client/registerClient";
import { Dashboard } from "./components/Dashboard/dashboard";

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
          <Route path="/clientRegister" element={<RegisterClient />} />
          <Route path="/tela-principal" element={<NavegationHome />} />
        </Route>
      }
    />
  );
}
