import { ReactNode } from "react";

interface MenuItemProps {
  label: string;
  onClick?: () => void;
  rightElement?: ReactNode;
}

export function MenuItem({ label, onClick, rightElement }: MenuItemProps) {
  const content = (
    <>
      <div aria-hidden="true" className="absolute border-b-[0.5px] border-gray-300 border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[22px] not-italic text-[#484848] text-[16px] top-[50%] translate-y-[-50%]">
        <p className="leading-[normal]">{label}</p>
      </div>
      {rightElement}
    </>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="bg-white h-[57px] relative shrink-0 w-full max-w-[440px] cursor-pointer hover:bg-gray-50 transition-colors text-left"
      >
        {content}
      </button>
    );
  }

  return (
    <div className="bg-white h-[57px] relative shrink-0 w-full max-w-[440px]">
      {content}
    </div>
  );
}
