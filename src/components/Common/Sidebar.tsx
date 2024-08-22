"use client";

import { Nav } from "@/components/ui/nav";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Minus,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

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
            title: "Inbox",
            href: "/",
            label: "128",
            icon: Inbox,
            variant: "default",
            dropdownItems: [
              {
                title: "All",
                href: "/",
                label: "128",
                icon: Minus,
                variant: "default",
              },
              {
                title: "Unread",
                href: "/",
                label: "23",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Drafts",
            href: "/",
            label: "9",
            icon: File,
            variant: "ghost",
            dropdownItems: [
              {
                title: "All",
                href: "/",
                label: "128",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Unread",
                href: "/",
                label: "23",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Sent",
            href: "/",
            icon: Send,
            variant: "ghost",
          },
          {
            title: "Junk",
            href: "/",
            label: "23",
            icon: ArchiveX,
            variant: "ghost",
          },
          {
            title: "Trash",
            href: "/",
            icon: Trash2,
            variant: "ghost",
          },
          {
            title: "Archive",
            href: "/",
            icon: Archive,
            variant: "ghost",
          },
        ]}
      />
      <Separator />
      {!isCollapsed && (
        <h4 className="mt-3 px-4 text-base font-semibold tracking-tight">
          Discover
        </h4>
      )}
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Social",
            href: "/",
            label: "972",
            icon: Users2,
            variant: "ghost",
          },
          {
            title: "Updates",
            href: "/",
            label: "342",
            icon: AlertCircle,
            variant: "ghost",
          },
          {
            title: "Forums",
            href: "/",
            label: "128",
            icon: MessagesSquare,
            variant: "ghost",
          },
          {
            title: "Shopping",
            href: "/",
            label: "8",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Promotions",
            href: "/",
            label: "21",
            icon: Archive,
            variant: "ghost",
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
