/**
 * Mobile App - 手機端 UI 主入口
 *
 * 尺寸：440 x 956 (手機螢幕尺寸)
 */

import { useState } from 'react';
import { AdminMenu, SecondDisplay } from './components';

type MobilePage = 'adminMenu' | 'secondDisplay';

export function MobileApp() {
  const [currentPage, setCurrentPage] = useState<MobilePage>('adminMenu');

  const handleNavigate = (page: string) => {
    if (page === 'secondDisplay') {
      setCurrentPage('secondDisplay');
    }
  };

  const handleBack = () => {
    setCurrentPage('adminMenu');
  };

  return (
    <div className="relative w-[440px] h-[956px] bg-white overflow-hidden mx-auto">
      {currentPage === 'adminMenu' && (
        <AdminMenu onNavigate={handleNavigate} />
      )}
      {currentPage === 'secondDisplay' && (
        <SecondDisplay onBack={handleBack} />
      )}
    </div>
  );
}

export default MobileApp;
