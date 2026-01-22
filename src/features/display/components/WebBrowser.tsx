import { useState, useRef } from 'react';

interface WebBrowserProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WebBrowser({ isOpen, onClose }: WebBrowserProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{
    isDragging: boolean;
    startX: number;
    startY: number;
    startPosX: number;
    startPosY: number;
  }>({
    isDragging: false,
    startX: 0,
    startY: 0,
    startPosX: 0,
    startPosY: 0,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    dragRef.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      startPosX: position.x,
      startPosY: position.y,
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.isDragging) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setPosition({
        x: dragRef.current.startPosX + dx,
        y: dragRef.current.startPosY + dy,
      });
    };

    const handleMouseUp = () => {
      dragRef.current.isDragging = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Browser Window */}
      <div
        className="relative w-[1138px] h-[860px] bg-[#202124] rounded-[12px] overflow-hidden shadow-2xl flex flex-col"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        {/* Tab Bar - Draggable */}
        <div
          className="flex items-center h-[40px] bg-[#202124] px-2 cursor-move select-none"
          onMouseDown={handleMouseDown}
        >
          {/* Active Tab */}
          <div className="flex items-center gap-2 h-[32px] px-3 bg-[#35363A] rounded-t-lg">
            {/* Google Favicon */}
            <div className="w-4 h-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <span className="text-white text-sm">Google</span>
            <button className="ml-2 text-gray-400 hover:text-white text-xs">✕</button>
          </div>

          {/* New Tab Button */}
          <button className="ml-1 w-6 h-6 flex items-center justify-center text-gray-400 hover:bg-[#35363A] rounded">
            +
          </button>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Window Controls */}
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-white text-sm">▾</button>
            <button className="text-gray-400 hover:text-white text-sm">−</button>
            <button className="text-gray-400 hover:text-white text-sm">□</button>
            <button onClick={onClose} className="text-gray-400 hover:text-white text-sm hover:bg-red-500 px-2 py-1 rounded">✕</button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center h-[44px] bg-[#35363A] px-3 gap-3">
          {/* Nav Buttons */}
          <div className="flex items-center gap-2 text-gray-400">
            <button className="hover:bg-[#4a4b4f] p-1.5 rounded-full">←</button>
            <button className="hover:bg-[#4a4b4f] p-1.5 rounded-full">→</button>
            <button className="hover:bg-[#4a4b4f] p-1.5 rounded-full">↻</button>
          </div>

          {/* URL Bar */}
          <div className="flex-1 flex items-center h-[32px] bg-[#202124] rounded-full px-4 gap-2">
            <span className="text-green-500 text-sm">🔒</span>
            <span className="text-white text-sm">google.com</span>
          </div>

          {/* Menu */}
          <button className="text-gray-400 hover:text-white">⋮</button>
        </div>

        {/* Content Area - Google Search Page */}
        <div className="flex-1 bg-white flex flex-col items-center justify-start pt-[120px]">
          {/* Google Logo */}
          <div className="text-[92px] font-normal mb-8">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>

          {/* Search Box */}
          <div className="w-[584px] h-[46px] border border-gray-200 rounded-full flex items-center px-4 gap-3 hover:shadow-md transition-shadow">
            <span className="text-gray-400">🔍</span>
            <input type="text" className="flex-1 outline-none text-gray-700" placeholder="" />
            <span className="text-gray-400">🎤</span>
          </div>

          {/* Search Buttons */}
          <div className="flex gap-3 mt-8">
            <button className="px-4 py-2 bg-[#f8f9fa] text-sm text-gray-700 rounded hover:border hover:border-gray-200 hover:shadow-sm">
              Google Search
            </button>
            <button className="px-4 py-2 bg-[#f8f9fa] text-sm text-gray-700 rounded hover:border hover:border-gray-200 hover:shadow-sm">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebBrowser;
