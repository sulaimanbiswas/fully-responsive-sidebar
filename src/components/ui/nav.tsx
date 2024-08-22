"use client";

import { ChevronDown, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    href: string;
    dropdownItems?: {
      title: string;
      href: string;
      label?: string;
      icon: LucideIcon;
      variant: "default" | "ghost";
    }[];
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  // State to track which dropdown is open
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  // Function to handle dropdown toggle
  const handleToggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => (
          <div key={index} className="relative">
            {isCollapsed ? (
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      buttonVariants({ variant: link.variant, size: "icon" }),
                      "h-9 w-9",
                      link.variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <>
                <div
                  onClick={() => handleToggleDropdown(index)}
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "sm" }),
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white rounded-none",
                    "flex justify-start items-center cursor-pointer"
                  )}
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.title}
                  {link.label && (
                    <span
                      className={cn(
                        "ml-auto",
                        link.variant === "default" &&
                          "text-background dark:text-white"
                      )}
                    >
                      {link.label}
                    </span>
                  )}
                  {link.dropdownItems && (
                    <ChevronDown
                      className={cn("ml-2 h-4 w-4 transition-transform", {
                        "rotate-180": openDropdownIndex === index,
                      })}
                    />
                  )}
                </div>
                {link.dropdownItems && (
                  <div
                    className={cn(
                      "mt-1 space-y-1 border-l-2 border-primary transition-all duration-300 ease-in-out bg-background",
                      openDropdownIndex === index
                        ? "opacity-100 transform translate-y-0"
                        : "max-h-0 opacity-0 transform -translate-y-2"
                    )}
                  >
                    {link.dropdownItems.map((dropdownItem, i) => (
                      <Link
                        key={i}
                        href={dropdownItem.href}
                        className={cn(
                          buttonVariants({
                            variant: dropdownItem.variant,
                            size: "sm",
                          }),
                          "flex items-center gap-2 rounded-none pl-6"
                        )}
                      >
                        <dropdownItem.icon className="h-4 w-4" />
                        {dropdownItem.title}
                        {dropdownItem.label && (
                          <span
                            className={cn(
                              "ml-auto",
                              dropdownItem.variant === "default" &&
                                "text-background dark:text-white"
                            )}
                          >
                            {dropdownItem.label}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
