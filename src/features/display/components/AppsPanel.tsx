import { useState } from 'react';
import { APP_ICONS } from '@/shared/components/icons';
import { FOLDER_APPS, type AppName } from '@/shared/constants/apps';

function FolderTab({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <div
      className={`backdrop-blur-[2px] content-stretch flex h-[25px] items-center justify-center overflow-clip px-[5px] py-0 relative rounded-[16px] shrink-0 w-[100px] cursor-pointer transition-all duration-200 hover:scale-105 ${
        isActive ? 'bg-[rgba(255,255,255,0.39)]' : 'bg-[rgba(201,201,201,0.16)]'
      }`}
      onClick={onClick}
    >
      <div
        className={`flex flex-col font-['ABeeZee:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] ${
          isActive ? 'text-white' : 'text-[rgba(255,255,255,0.35)]'
        }`}
      >
        <p className="leading-[61px]">{label}</p>
      </div>
    </div>
  );
}

function FolderTabs({ activeFolder, onFolderChange }: { activeFolder: number; onFolderChange: (folder: number) => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      {[1, 2, 3, 4, 5].map((folder) => (
        <FolderTab
          key={folder}
          label={`App Folder-${folder}`}
          isActive={activeFolder === folder}
          onClick={() => onFolderChange(folder)}
        />
      ))}
    </div>
  );
}

function AppGrid({ apps, onAppClick }: { apps: AppName[]; onAppClick?: (appName: AppName) => void }) {
  const COLS = 4;
  const GAP = 60;
  const ICON_SIZE = 80;

  return (
    <div className="relative w-full" style={{ height: `${Math.ceil(apps.length / COLS) * (ICON_SIZE + GAP) + 20}px` }}>
      {apps.map((appName, index) => {
        const AppComponent = APP_ICONS[appName];
        if (!AppComponent) return null;

        const col = index % COLS;
        const row = Math.floor(index / COLS);

        return (
          <div
            key={`${appName}-${index}`}
            style={{
              position: 'absolute',
              left: `${col * (ICON_SIZE + GAP) + 30}px`,
              top: `${row * (ICON_SIZE + GAP) + 20}px`,
              cursor: 'pointer',
            }}
            onClick={() => onAppClick?.(appName)}
            className="hover:scale-110 transition-transform"
          >
            <AppComponent />
          </div>
        );
      })}
    </div>
  );
}

function AppGridContainer({ activeFolder, onAppClick }: { activeFolder: number; onAppClick?: (appName: AppName) => void }) {
  const apps = FOLDER_APPS[activeFolder] || [];

  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] h-[805px] overflow-x-clip overflow-y-auto relative rounded-[16px] shrink-0 w-full modern-scrollbar px-[20px]">
      <AppGrid apps={apps} onAppClick={onAppClick} />
    </div>
  );
}

interface AppsPanelProps {
  isOpen: boolean;
  onAppClick?: (appName: AppName) => void;
}

export function AppsPanel({ isOpen, onAppClick }: AppsPanelProps) {
  const [activeFolder, setActiveFolder] = useState(1);

  return (
    <div
      className={`absolute backdrop-blur-[30px] bg-[rgba(124,120,129,0.7)] content-stretch flex flex-col gap-[22px] h-[920px] items-start overflow-clip px-[15px] py-[30px] rounded-[16px] top-[63.16px] w-[640px] transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ transform: isOpen ? 'translateX(14.57px)' : 'translateX(-660px)' }}
    >
      <FolderTabs activeFolder={activeFolder} onFolderChange={setActiveFolder} />
      <AppGridContainer activeFolder={activeFolder} onAppClick={onAppClick} />
    </div>
  );
}

export default AppsPanel;
