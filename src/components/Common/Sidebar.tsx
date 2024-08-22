"use client";

import { Nav } from "@/components/ui/nav";
import { BookUserIcon, House, Minus } from "lucide-react";

type SidebarProps = {
  isCollapsed: boolean;
};

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  return (
    <>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: House,
            variant: "default",
          },
          {
            title: "Contacts",
            href: "#",
            label: "25",
            icon: BookUserIcon,
            variant: "ghost",
            dropdownItems: [
              {
                title: "Suppliers",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Customers",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Customer Groups",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Import Contacts",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
        ]}
      />
      {/* <Separator />
      {!isCollapsed && (
        <h4 className="mt-3 px-4 text-base font-semibold tracking-tight">
          Discover
        </h4>
      )} */}
    </>
  );
};

export default Sidebar;
