import { svgPaths } from '@/shared/svg/paths';

interface MenuHeaderProps {
  title: string;
  onBack?: () => void;
}

export function MenuHeader({ title, onBack }: MenuHeaderProps) {
  return (
    <div className="bg-[#4285f4] content-stretch flex gap-[110px] h-[57px] items-center p-[10px] relative shrink-0 w-full max-w-[440px]">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="返回"
        >
          <div className="flex-none rotate-[180deg]">
            <div className="h-0 relative w-[19px]">
              <div className="absolute inset-[-11.05px_-7.89%_-11.05px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 22.0919">
                  <path d={svgPaths.p3e470380} fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </button>
      )}
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[26px] text-white">
        <p className="leading-[normal]">{title}</p>
      </div>
    </div>
  );
}
