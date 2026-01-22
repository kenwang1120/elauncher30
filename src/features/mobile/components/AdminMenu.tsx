import { useState } from "react";
import { MenuHeader } from "./MenuHeader";
import { MenuItem } from "./MenuItem";
import { ToggleSwitch } from "./ToggleSwitch";
import { useDragScroll } from "../hooks";

interface AdminMenuProps {
  onNavigate: (page: string) => void;
}

export function AdminMenu({ onNavigate }: AdminMenuProps) {
  const [settings, setSettings] = useState({
    defaultLauncher: false,
    volumePanel: false,
    hideNotifications: false,
    safeModeLock: false,
    recentKey: false,
    blockSettings: false,
  });

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

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full">
      <MenuHeader title="Admin Mode" />

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
          label="Set to Default Launcher"
          rightElement={
            <ToggleSwitch
              checked={settings.defaultLauncher}
              onChange={() => toggleSetting("defaultLauncher")}
            />
          }
        />

        <MenuItem label="Home Page" onClick={() => {}} />

        <MenuItem label="Notification" onClick={() => {}} />

        <MenuItem label="Quick Settings and Quick Actions" onClick={() => {}} />

        <MenuItem label="Dashboard" onClick={() => {}} />

        <MenuItem label="KioskMode" onClick={() => {}} />

        <MenuItem
          label="Enable ELauncher Volume Panel"
          rightElement={
            <ToggleSwitch
              checked={settings.volumePanel}
              onChange={() => toggleSetting("volumePanel")}
            />
          }
        />

        <MenuItem label="Lockscreen Settings" onClick={() => {}} />

        <MenuItem
          label="Hide Notifications on System Screen Lock"
          rightElement={
            <ToggleSwitch
              checked={settings.hideNotifications}
              onChange={() => toggleSetting("hideNotifications")}
            />
          }
        />

        <MenuItem
          label="Enable Safe Mode Lock"
          rightElement={
            <ToggleSwitch
              checked={settings.safeModeLock}
              onChange={() => toggleSetting("safeModeLock")}
            />
          }
        />

        <MenuItem
          label="Enable Recent Key"
          rightElement={
            <ToggleSwitch
              checked={settings.recentKey}
              onChange={() => toggleSetting("recentKey")}
            />
          }
        />

        <MenuItem
          label="Block Android Settings app"
          rightElement={
            <ToggleSwitch
              checked={settings.blockSettings}
              onChange={() => toggleSetting("blockSettings")}
            />
          }
        />

        <MenuItem label="AppBlocker Settings" onClick={() => {}} />

        <MenuItem
          label="Admin PINCode setting"
          rightElement={
            <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] right-[13px] not-italic text-[#4285f4] text-[16px] top-[50%] translate-y-[-50%]">
              <button className="leading-[normal] hover:opacity-80 transition-opacity">Clear</button>
            </div>
          }
        />

        <MenuItem label="Wallpaper Setting" onClick={() => {}} />

        <MenuItem label="Setting Compliance" onClick={() => {}} />

        <MenuItem label="Second Display" onClick={() => onNavigate("secondDisplay")} />

        <MenuItem label="Import Setting" onClick={() => {}} />

        <MenuItem label="Export Setting" onClick={() => {}} />

        <MenuItem label="Reset Setting" onClick={() => {}} />

        <MenuItem label="Android Settings" onClick={() => {}} />

        <MenuItem label="About" onClick={() => {}} />

        <MenuItem label="Exit ELauncher" onClick={() => {}} />
      </div>
    </div>
  );
}
