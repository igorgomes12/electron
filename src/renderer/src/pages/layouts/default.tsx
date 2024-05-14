/* eslint-disable prettier/prettier */
import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";

import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function Default() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Collapsible.Root
      defaultOpen
      onOpenChange={setIsSidebarOpen}
      className={`h-screen w-screen bg-white text-rotion-100 flex`}
    >
      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  );
}
