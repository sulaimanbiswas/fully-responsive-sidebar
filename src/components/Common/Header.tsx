import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

type Props = {
  setIsCollapsed: (isCollapsed: boolean) => void;
  isCollapsed: boolean;
};

export default function Header({ setIsCollapsed, isCollapsed }: Props) {
  return (
    <>
      <div className="flex h-12 items-center justify-between border-b border-gray-200 bg-primary px-3 text-primary-foreground">
        {/* sidebar toggle button x and --- svg */}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex h-8 w-8 transform items-center justify-center rounded-md ring-1 ring-white/10 transition-colors duration-200 ease-in-out hover:bg-white/10"
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )}
        </button>

        <span className="text-lg font-semibold">Inventory</span>
      </div>
    </>
  );
}
