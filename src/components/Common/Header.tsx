import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

type Props = {
  setIsCollapsed: (isCollapsed: boolean) => void;
  isCollapsed: boolean;
};

export default function Header({ setIsCollapsed, isCollapsed }: Props) {
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="flex h-12 items-center justify-between border-b border-gray-200 bg-primary px-3 text-primary-foreground">
        {/* sidebar toggle button x and --- svg */}

        <button
          onClick={() => handleToggle()}
          className="flex h-8 w-8 transform items-center justify-center rounded-md ring-1 ring-white/10 transition-colors duration-200 ease-in-out hover:bg-white/10"
        >
          {isCollapsed ? (
            <>
              {<PanelLeftOpen className="hidden h-5 w-5 md:block" />}
              <PanelLeftClose className="block h-5 w-5 md:hidden" />
            </>
          ) : (
            <>
              <PanelLeftClose className="hidden h-5 w-5 md:block" />
              <PanelLeftOpen className="block h-5 w-5 md:hidden" />
            </>
          )}
        </button>

        <span className="text-lg font-semibold">Inventory</span>
      </div>
    </>
  );
}
