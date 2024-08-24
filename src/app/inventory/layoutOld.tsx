"use client";

import Header from "@/components/Common/Header";
import Sidebar from "@/components/Common/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LayoutProps {
  defaultLayout?: number[];
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export default function InventoryLayout({
  children,
  defaultLayout = [15, 85],
  defaultCollapsed = false,
  navCollapsedSize,
}: LayoutProps & { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const minSize = isSmallScreen ? 70 : 16;
  const maxSize = isSmallScreen ? 70 : 18;
  const panelSize = isSmallScreen ? 70 : defaultLayout[0];
  const contentSize = isSmallScreen ? 40 : defaultLayout[1];

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes,
          )}`;
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={panelSize}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={minSize}
          maxSize={maxSize}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true,
            )}`;
          }}
          onResize={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false,
            )}`;
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <Link
            href="/"
            className="flex h-12 items-center justify-center bg-primary text-primary-foreground"
          >
            {isCollapsed ? (
              <span className="text-lg font-semibold">I</span>
            ) : (
              <span className="text-lg font-semibold">Inventory</span>
            )}
          </Link>

          <ScrollArea className="h-[calc(100vh-48px)]">
            <Sidebar isCollapsed={isCollapsed} />
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={contentSize}>
          <Header />
          <ScrollArea className="h-[calc(100vh-48px)]">{children}</ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
