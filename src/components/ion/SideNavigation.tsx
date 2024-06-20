"use client";
// Generated with Ion on 6/19/2024, 10:30:32 PM
// Figma Link: https://www.figma.com/design/kQxbDOWBPaC4KqJOhw4JvW?node-id=forced_ion/SideNavigation/default_2:3784
import {
  CaretRight,
  Gear,
  Handshake,
  House,
  Money,
  ShoppingCart,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { type MouseEvent } from "react";

import IonSideNavigationFooter from "@/components/ion/IonSideNavigationFooter";
import Sidebar from "@/components/ion/SideNavigation/Sidebar";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/Navigation";

function SideNavigation() {
  function contactClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("contactClickHandler fired");
  }

  return (
    <Sidebar>
      <div className="bg-white flex-1 h-full w-[244px] flex flex-col justify-between">
        <NavigationMenu>
          <NavigationMenuList className="w-full flex flex-col gap-1">
            <div className="text-base font-semibold text-gray-600 px-3 pt-4">
              Main
            </div>
            {[
              {
                children: "Home",
                iconLeading: <House size={16} weight={"fill"} />,
              },
              {
                children: "Buy",
                iconLeading: <ShoppingCart size={16} weight={"fill"} />,
              },
              {
                children: "Sell",
                iconLeading: <Money size={16} weight={"fill"} />,
              },
              {
                children: "Swap",
                extra: (
                  <Badge type="number" emphasis="medium" color="blue" size="sm">
                    2
                  </Badge>
                ),
                iconLeading: <Handshake size={16} weight={"fill"} />,
              },
            ].map(({ children, extra, iconLeading }, index) => (
              <NavigationMenuItem className={"px-3"} key={index}>
                <NavigationMenuLink
                  className="w-full"
                  extra={extra}
                  iconLeading={iconLeading}
                  iconTrailing={<CaretRight size={16} weight={"bold"} />}
                >
                  {children}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <div className="text-base font-semibold text-gray-600 px-3 pt-4">
              Utility
            </div>
            <NavigationMenuItem className={"px-3"}>
              <NavigationMenuLink
                iconTrailing={<CaretRight size={16} weight={"bold"} />}
                iconLeading={<Gear size={16} weight={"fill"} />}
                className="w-full"
              >
                Settings
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className={"px-3"}>
              <NavigationMenuLink
                iconTrailing={<CaretRight size={16} weight={"bold"} />}
                iconLeading={<User size={16} weight={"fill"} />}
                className="w-full"
              >
                Profiles
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full flex items-start px-5">
            <Button
              emphasis="medium"
              color="secondary"
              size="sm"
              onClick={contactClickHandler}
              className="w-full"
            >
              Contact
            </Button>
          </div>
          <IonSideNavigationFooter
            content={
              <Avatar
                subtitle="Gold Member"
                title="Samraaj"
                size="md"
                src="/images/dashboard-example/samraaj.png"
              />
            }
            collapsed={false}
            className="w-full"
          />
        </div>
      </div>
    </Sidebar>
  );
}
export default SideNavigation;
