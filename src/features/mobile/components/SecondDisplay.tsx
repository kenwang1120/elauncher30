import { useState } from "react";
import { svgPaths } from '@/shared/svg/paths';
import { MenuHeader } from "./MenuHeader";
import { MenuItem } from "./MenuItem";
import { ToggleSwitch } from "./ToggleSwitch";
import { useDragScroll } from "../hooks";

interface SecondDisplayProps {
  onBack: () => void;
}

export function SecondDisplay({ onBack }: SecondDisplayProps) {
  const [enabled, setEnabled] = useState(false);
  const [displayMode, setDisplayMode] = useState<"Desktop" | "Mirror">("Desktop");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { containerRef, handlers } = useDragScroll();
  let scrollTimeout: ReturnType<typeof setTimeout>;

  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full">
      <MenuHeader title="Second Display" onBack={onBack} />

      <div
        ref={containerRef}
        className="flex-1 w-full overflow-y-auto overflow-x-hidden scroll-container cursor-grab"
        onScroll={handleScroll}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: isScrolling ? '#d1d5db transparent' : 'transparent transparent',
        }}
        {...handlers}
      >
        <style>{`
          .scroll-container::-webkit-scrollbar {
            width: 4px;
          }
          .scroll-container::-webkit-scrollbar-track {
            background: transparent;
          }
          .scroll-container::-webkit-scrollbar-thumb {
            background-color: ${isScrolling ? '#d1d5db' : 'transparent'};
            border-radius: 2px;
            transition: background-color 0.3s;
          }
          .scroll-container::-webkit-scrollbar-button {
            display: none;
          }
        `}</style>

        <MenuItem
          label="Enable ELauncher 2nd Display"
          rightElement={
            <ToggleSwitch
              checked={enabled}
              onChange={setEnabled}
            />
          }
        />

        <div className="bg-white h-[57px] relative shrink-0 w-full max-w-[440px]">
          <div aria-hidden="true" className="absolute border-b-[0.5px] border-gray-300 border-solid inset-0 pointer-events-none" />
          <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[22px] not-italic text-[#484848] text-[16px] top-[50%] translate-y-[-50%]">
            <p className="leading-[normal]">Display Mode</p>
          </div>

          <div className="absolute right-[13px] top-[50%] translate-y-[-50%]">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative bg-white border-[#484848] border-[0.3px] border-solid h-[30px] w-[120px] flex items-center justify-between px-[17px] py-[6px] cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#484848] text-[16px]">
                <p className="leading-[normal]">{displayMode}</p>
              </div>
              <div className="flex items-center justify-center">
                <div className={`flex-none transition-transform ${dropdownOpen ? 'rotate-0' : 'scale-y-[-100%]'}`}>
                  <div className="h-[6px] relative w-[20px]">
                    <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3205 4.5">
                        <path d={svgPaths.p874cb80} fill="#1967D2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-white border-[#484848] border-[0.3px] border-solid w-[120px] z-10 shadow-lg">
                <button
                  onClick={() => {
                    setDisplayMode("Desktop");
                    setDropdownOpen(false);
                  }}
                  className="w-full h-[30px] px-[17px] py-[6px] hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#484848] text-[16px]">
                    <p className="leading-[normal]">Desktop</p>
                  </div>
                </button>
                <button
                  onClick={() => {
                    setDisplayMode("Mirror");
                    setDropdownOpen(false);
                  }}
                  className="w-full h-[30px] px-[17px] py-[6px] hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#484848] text-[16px]">
                    <p className="leading-[normal]">Mirror</p>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
