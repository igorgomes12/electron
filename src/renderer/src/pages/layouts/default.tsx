/* eslint-disable prettier/prettier */
import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Menu/Shopping/Sidebar/sidebar";
import { SidebarItem } from "../../components/Menu/Shopping/Sidebar/sidebar-item";
import { House, Gear } from "phosphor-react";

export function Default() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Verifica se a rota atual é "/signin" ou "/admin"
  const isSigninOrAdminPage =
    location.pathname === "/" || location.pathname === "/admin";

  return (
    <Collapsible.Root
      defaultOpen
      onOpenChange={setIsSidebarOpen}
      className="h-screen w-screen bg-white text-rotion-100 flex"
    >
      {!isSigninOrAdminPage && (
        <Sidebar>
          <SidebarItem icon={<House size={25} />} text="Menu" active={true} />
          <SidebarItem
            icon={<Gear size={25} />}
            text="Configuração"
            active={false}
            alert="teste"
          />
        </Sidebar>
      )}
      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  );
}
