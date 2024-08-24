"use client";

import Header from "@/components/Common/Header";
import Sidebar from "@/components/Common/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

type Props = {};

export default function InventoryLayout({
  children,
}: Props & { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <>
      <div className={"flex h-screen w-screen overflow-hidden"}>
        <div
          className={cn(
            "h-screen border-r border-muted transition-all duration-300 ease-in-out",
            isCollapsed ? "w-16" : "w-0 md:w-64",
          )}
        >
          <Link
            href="/"
            className="flex h-12 items-center justify-center bg-primary text-primary-foreground"
          >
            {isCollapsed ? (
              <span className="text-lg font-semibold">In</span>
            ) : (
              <span className="text-lg font-semibold">Inventory</span>
            )}
          </Link>
          <ScrollArea className="h-[calc(100vh-48px)]">
            <Sidebar isCollapsed={isCollapsed} />
          </ScrollArea>
        </div>
        <div className="flex-1 transition-all duration-300 ease-in-out">
          <Header setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
          <ScrollArea className="h-[calc(100vh-48px)] p-3">
            {children}
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
