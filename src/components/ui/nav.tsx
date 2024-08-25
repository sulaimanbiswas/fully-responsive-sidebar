"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ChevronDown, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const pathName = usePathname();
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    // Automatically open the dropdown if one of its items is active
    links.forEach((link, index) => {
      if (link.dropdownItems) {
        const isDropdownActive = link.dropdownItems.some(
          (dropdownItem) => pathName === dropdownItem.href,
        );
        if (isDropdownActive) {
          setOpenDropdownIndex(index);
        }
      }
    });
  }, [pathName, links]);

  const handleToggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex min-h-[calc(100vh-48px)] flex-col gap-4 py-2 data-[collapsed=true]:gap-1 data-[collapsed=true]:py-2 dark:border-muted dark:bg-muted dark:text-muted-foreground"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => {
          const isLinkActive = pathName === link.href;
          const isDropdownActive = link.dropdownItems?.some(
            (dropdownItem) => pathName === dropdownItem.href,
          );

          return (
            <div key={index} className="relative">
              {isCollapsed ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        buttonVariants({
                          variant:
                            isLinkActive || isDropdownActive
                              ? "default"
                              : "ghost",
                          size: "icon",
                        }),
                        "h-9 w-9",
                        link.variant === "default" &&
                          "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                      )}
                    >
                      <link.icon className="h-4 w-4" />
                      <span className="sr-only">{link.title}</span>
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent
                    side="right"
                    className="flex w-64 flex-col gap-4 border-l-2 bg-background"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span>{link.title}</span>
                      <div className="">
                        {link.label && (
                          <span className="ml-auto font-semibold text-muted-foreground">
                            {link.label}
                          </span>
                        )}
                      </div>
                    </div>
                    {link.dropdownItems && (
                      <ScrollArea
                        className={cn(
                          link.dropdownItems.length > 5 ? "h-44" : "",
                          "space-y-1 border-l-2 border-primary bg-background",
                        )}
                      >
                        {link.dropdownItems.map((dropdownItem, i) => (
                          <Link
                            key={i}
                            href={dropdownItem.href}
                            className={cn(
                              buttonVariants({
                                variant:
                                  pathName === dropdownItem.href
                                    ? "default"
                                    : "ghost",
                                size: "sm",
                              }),
                              "flex items-center justify-start gap-2 rounded-none pl-0",
                            )}
                          >
                            <dropdownItem.icon className="h-4 w-4 text-primary" />
                            {dropdownItem.title}
                            {dropdownItem.label && (
                              <span
                                className={cn(
                                  "ml-auto",
                                  dropdownItem.variant === "default" &&
                                    "text-background dark:text-white",
                                )}
                              >
                                {dropdownItem.label}
                              </span>
                            )}
                          </Link>
                        ))}
                      </ScrollArea>
                    )}
                  </PopoverContent>
                </Popover>
              ) : (
                <>
                  <div
                    onClick={() => handleToggleDropdown(index)}
                    className={cn(
                      buttonVariants({
                        variant:
                          isLinkActive || isDropdownActive
                            ? "default"
                            : "ghost",
                        size: "sm",
                      }),
                      link.variant === "default" &&
                        "rounded-none dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                      "flex cursor-pointer items-center justify-start",
                    )}
                  >
                    <Link
                      href={link.href}
                      className="flex w-full items-center justify-between"
                    >
                      <div className="flex items-center justify-start">
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.title}
                      </div>
                      <div className="flex items-center justify-start">
                        {link.label && (
                          <span
                            className={cn(
                              "ml-auto",
                              link.variant === "default" &&
                                "text-background dark:text-white",
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
                    </Link>
                  </div>
                  {link.dropdownItems && (
                    <div
                      className={cn(
                        "ml-5 mt-1 space-y-1 border-l-2 border-primary bg-background",
                        "transition-opacity duration-300 ease-in-out",
                        openDropdownIndex === index
                          ? "block translate-y-0 opacity-100"
                          : "hidden -translate-y-2 opacity-0",
                      )}
                    >
                      {link.dropdownItems.map((dropdownItem, i) => (
                        <Link
                          key={i}
                          href={dropdownItem.href}
                          className={cn(
                            buttonVariants({
                              variant:
                                pathName === dropdownItem.href
                                  ? "default"
                                  : "ghost",
                              size: "sm",
                            }),
                            "flex items-center justify-start gap-2 rounded-none pl-0",
                          )}
                        >
                          <dropdownItem.icon className="h-4 w-4 text-primary" />
                          {dropdownItem.title}
                          {dropdownItem.label && (
                            <span
                              className={cn(
                                "ml-auto",
                                dropdownItem.variant === "default" &&
                                  "text-background dark:text-white",
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
          );
        })}
      </nav>
    </div>
  );
}
