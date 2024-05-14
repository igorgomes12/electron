/* eslint-disable prettier/prettier */
import logo from "../../img/logo-lider-web-food.svg";
import clsx from "clsx";
import * as Collapsible from "@radix-ui/react-collapsible";
import { CaretDoubleLeft } from "phosphor-react";
import { CreatePage } from "./CreatePage";
import { Search } from "./Search";

// const main = [
//   {
//     icon: <Cardholder />,
//     name: "Dashboard",
//     link: "/",
//   },
//   {
//     icon: <ShoppingCart />,
//     name: "Orders",
//     link: "/",
//   },
//   {
//     icon: <TrendUp />,
//     name: "Analytic",
//     link: "/",
//   },
//   {
//     icon: <Folders />,
//     name: "Categories",
//     link: "/",
//   },
// ];

export function Sidebar() {
  const isMacOS = process.platform === "darwin";

  return (
    <Collapsible.Content className="bg-white flex-shrink-0 border-r h-screen relative group data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut overflow-hidden">
      <Collapsible.Trigger
        className={clsx(
          "absolute h-5 w-5 right-4 text-rotion-200 hover:text-rotion-50 inline-flex items-center justify-center",
          {
            "top-[1.125rem]": isMacOS,
            "top-6": !isMacOS,
          }
        )}
      >
        <CaretDoubleLeft className="h-5 w-5 text-black" />
      </Collapsible.Trigger>

      <div
        className={clsx("region-drag h-8", {
          block: isMacOS,
          hidden: !isMacOS,
        })}
      ></div>

      <div
        className={clsx(
          "flex-1 flex flex-col gap-8 h-full w-[240px] group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-0 transition-opacity duration-200",
          {
            "pt-6": !isMacOS,
          }
        )}
      >
        <img className="w-60 p-4 h-20" src={logo} alt="Logo" />
        <Search />

        {/* criar componente de menu lateral */}

        {/* <Navigation.Root>
          <Navigation.Section>
            <Navigation.SectionTitle>Menu</Navigation.SectionTitle>
            <Navigation.SectionContent>
              {main?.map((document) => {
                return (
                  <Navigation.Link to={document.link} key={document.name}>
                    {document.icon}
                    {document.name}
                  </Navigation.Link>
                );
              })}
            </Navigation.SectionContent>
          </Navigation.Section>
        </Navigation.Root> */}

        <CreatePage />
      </div>
    </Collapsible.Content>
  );
}
