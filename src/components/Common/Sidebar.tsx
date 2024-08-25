"use client";

import { Nav } from "@/components/ui/nav";
import {
  BookText,
  BookUserIcon,
  CreditCard,
  Database,
  Download,
  House,
  Mail,
  Minus,
  Package,
  Receipt,
  Settings,
  Truck,
  Upload,
  Users,
} from "lucide-react";

import { usePathname } from "next/navigation";

type SidebarProps = {
  isCollapsed: boolean;
};

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/inventory",
            icon: House,
            variant: pathname === "/inventory" ? "default" : "ghost",
          },
          {
            title: "User Management",
            href: "#",
            label: "",
            icon: Users,
            variant: "ghost",
            dropdownItems: [
              {
                title: "Users",
                href: "/inventory/users",
                label: "",
                icon: Minus,
                variant: pathname === "/inventory/users" ? "default" : "ghost",
              },
              {
                title: "Roles",
                href: "/inventory/roles",
                label: "",
                icon: Minus,
                variant: pathname === "/inventory/roles" ? "default" : "ghost",
              },
              {
                title: "Sales Commission Agents",
                href: "/inventory/sales-commission-agents",
                label: "",
                icon: Minus,
                variant:
                  pathname === "/inventory/sales-commission-agents"
                    ? "default"
                    : "ghost",
              },
            ],
          },
          {
            title: "Contacts",
            href: "#",
            label: "",
            icon: BookUserIcon,
            variant: "ghost",
            dropdownItems: [
              {
                title: "Suppliers",
                href: "/inventory/contacts?type=suppliers",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Customers",
                href: "/inventory/contacts?type=customers",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Customer Groups",
                href: "/inventory/contacts?type=customer-groups",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Import Contacts",
                href: "/inventory/contacts?type=import-contacts",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Products",
            href: "#",
            label: "",
            icon: Package,
            variant: "ghost",
            dropdownItems: [
              {
                title: "List Products",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Add Product",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Update Price",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Print Labels",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Variations",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Import Products",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Import Opening Stock",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Selling Price Group",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Units",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Categories",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Brands",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Warranties",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Purchases",
            href: "#",
            label: "",
            icon: Download,
            variant: "ghost",
            dropdownItems: [
              {
                title: "List Purchases",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Add Purchase",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "List Purchase Return",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Sell",
            href: "#",
            label: "",
            icon: Upload,
            variant: "ghost",
            dropdownItems: [
              {
                title: "All sales",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Add Sale",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "List POS",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "POS",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Add Draft",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "List Drafts",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Add Quotation",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "List quotations",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "List Sell Return",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Shipments",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Discounts",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Import Sales",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Stock Transfers",
            href: "#",
            label: "",
            icon: Truck,
            variant: "ghost",
            dropdownItems: [
              {
                title: "List Stock Transfers",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Add Stock Transfer",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Stock Adjustment",
            href: "#",
            label: "",
            icon: Database,
            variant: "ghost",
            dropdownItems: [
              {
                title: "List Stock Adjustments",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Add Stock Adjustment",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Expenses",
            href: "#",
            label: "",
            icon: Receipt,
            variant: "ghost",
            dropdownItems: [
              {
                title: "List Expenses",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Add Expense",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Expense Categories",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Payment Accounts",
            href: "#",
            label: "",
            icon: CreditCard,
            variant: "ghost",
            dropdownItems: [
              {
                title: "List Accounts",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Balance Sheet",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Trial Balance",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Cash Flow",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Payment Account Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Reports",
            href: "#",
            label: "",
            icon: BookText,
            variant: "ghost",
            dropdownItems: [
              {
                title: "Profit / Loss Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Purchase & Sale",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Tax Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Supplier & Customer Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Customer Groups Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Stock Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Stock Adjustment Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Trending Products",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Items Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Product Purchase Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Product Sell Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Purchase Payment Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Sell Payment Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Expense Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Register Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Sales Representative Report",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Activity Log",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Notification Templates",
            href: "/",
            icon: Mail,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "#",
            label: "",
            icon: Settings,
            variant: "ghost",
            dropdownItems: [
              {
                title: "Business Settings",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Business Locations",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Invoice Settings",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Barcode Settings",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Receipt Printers",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Tax Rates",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Package Subscription",
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
