import { useState } from 'react';
import DisplayApp from '@/features/display/DisplayApp';
import MobileApp from '@/features/mobile/MobileApp';

type DeviceMode = 'display' | 'mobile';

export default function App() {
  const [mode, setMode] = useState<DeviceMode>('display');

  return (
    <div className="size-full flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Device Mode Switcher */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setMode('display')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === 'display'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          2nd Display (1920×1080)
        </button>
        <button
          onClick={() => setMode('mobile')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === 'mobile'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Mobile (1080×1920)
        </button>
      </div>

      {/* Device Preview */}
      {mode === 'display' ? (
        <div className="w-[1920px] h-[1080px] relative">
          <DisplayApp />
        </div>
      ) : (
        <div className="w-[440px] h-[956px] relative">
          <MobileApp />
        </div>
      )}
    </div>
  );
}
