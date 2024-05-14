/* eslint-disable prettier/prettier */
import { Sidebar } from "../Sidebar";
import { Profile } from "../Sidebar/Profile";

export function MainNavigation() {
  return (
    <div className="flex items-center border-b p-2 justify-between w-full">
      <div className="flex gap-2 justify-between w-full items-center">
        <div className="w-full items-start text-center justify-start gap-2 flex">
          <button>
            <Sidebar />
          </button>
          <button className="w-full text-black p-2 items-center justify-center rounded-lg">
            Dashboard
          </button>
          <button className="w-full text-black p-2 items-center justify-center rounded-lg">
            Cardápio
          </button>
          <button className="w-full text-black p-2 items-center justify-center rounded-lg">
            Delivery
          </button>
          <div className="flex items-end justify-end w-full">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}
