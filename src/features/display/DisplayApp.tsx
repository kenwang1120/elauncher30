import { useState, useEffect } from 'react';
import { TaskBar, AppsPanel, Notification, WebBrowser } from './components';
import type { AppName } from '@/shared/constants/apps';

const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2670&auto=format&fit=crop";

export function DisplayApp() {
  const [isAppsPanelOpen, setIsAppsPanelOpen] = useState(true);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);

  useEffect(() => {
    // Auto-popup notification every 5 seconds
    const interval = setInterval(() => {
      setIsNotificationVisible(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleAppsMenuClick = () => {
    setIsAppsPanelOpen((prev) => !prev);
  };

  const handleNotificationClose = () => {
    setIsNotificationVisible(false);
  };

  const handleAppClick = (appName: AppName) => {
    if (appName === 'Google') {
      setIsBrowserOpen(true);
    }
  };

  const handleBrowserClose = () => {
    setIsBrowserOpen(false);
  };

  return (
    <div className="backdrop-blur-[25px] relative size-full">
      {/* Background Image */}
      <div className="absolute h-[1080px] left-0 top-0 w-[1920px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt="Background"
            className="absolute h-[127.96%] left-[-0.02%] max-w-none top-[-27.96%] w-[100.04%]"
            src={BACKGROUND_IMAGE}
          />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute bg-[rgba(0,3,4,0.4)] h-[1080px] left-0 top-0 w-[1920px]" />

      {/* UI Components */}
      <TaskBar onAppsMenuClick={handleAppsMenuClick} />
      <AppsPanel isOpen={isAppsPanelOpen} onAppClick={handleAppClick} />
      <Notification isVisible={isNotificationVisible} onClose={handleNotificationClose} />
      <WebBrowser isOpen={isBrowserOpen} onClose={handleBrowserClose} />
    </div>
  );
}

export default DisplayApp;
