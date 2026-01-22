import { svgPaths } from '@/shared/svg/paths';
import eLauncherButtonImg from '@/assets/E-Launcher button.png';

function AppsMenuIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1 size-[52px]">
        <div className="bg-[rgba(250,250,250,0.49)] col-1 ml-0 mt-0 rounded-[11px] row-1 size-[52px]" />
        <div className="bg-[#fefefe] col-1 ml-[10px] mt-[10px] rounded-[18px] row-1 size-[6px]" />
        <div className="bg-[#fefefe] col-1 ml-[10px] mt-[23px] rounded-[18px] row-1 size-[6px]" />
        <div className="bg-[#fefefe] col-1 ml-[10px] mt-[36px] rounded-[18px] row-1 size-[6px]" />
        <div className="bg-[#fefefe] col-1 ml-[23px] mt-[10px] rounded-[18px] row-1 size-[6px]" />
        <div className="bg-[#fefefe] col-1 ml-[23px] mt-[23px] rounded-[18px] row-1 size-[6px]" />
        <div className="bg-[#fefefe] col-1 ml-[23px] mt-[36px] rounded-[18px] row-1 size-[6px]" />
        <div className="bg-[#fefefe] col-1 ml-[36px] mt-[10px] rounded-[18px] row-1 size-[6px]" />
        <div className="bg-[#fefefe] col-1 ml-[36px] mt-[23px] rounded-[18px] row-1 size-[6px]" />
        <div className="bg-[#fefefe] col-1 ml-[36px] mt-[36px] rounded-[18px] row-1 size-[6px]" />
      </div>
    </div>
  );
}

function AppsMenu({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      onClick={onClick}
    >
      <AppsMenuIcon />
    </div>
  );
}

function NavButton({ onAppsMenuClick }: { onAppsMenuClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[53px] items-center relative shrink-0 w-[355px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[34px] relative w-[26px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 34">
              <path d="M0 0L26 17L0 34V0Z" fill="rgba(250,250,250,0.76)" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[34px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="rgba(250,250,250,0.76)" r="17" />
        </svg>
      </div>
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[40px]">
            <div className="absolute inset-[-5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 5">
                <line stroke="white" strokeLinecap="round" strokeWidth="5" x1="2.5" x2="37.5" y1="2.5" y2="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <AppsMenu onClick={onAppsMenuClick} />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      {/* WiFi Icon */}
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
        <div className="col-1 h-[21.7px] ml-0 mt-0 relative row-1 w-[31px]">
          <div className="absolute inset-[-9.22%_-6.45%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 25.7005">
              <g>
                <path d={svgPaths.p4ce03e0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                <path d={svgPaths.p1c4fad80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                <path d={svgPaths.p23fe9680} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* Data Icon */}
      <div className="relative shrink-0 size-[25px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <path d={svgPaths.p283c6000} fill="white" />
        </svg>
      </div>
      {/* Battery */}
      <div className="relative h-[22px] shrink-0 w-[50px]">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 44 22">
            <g>
              <path d={svgPaths.pafcc300} fill="white" />
              <path d={svgPaths.p3a8ecc00} fill="white" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center font-['ABeeZee:Regular',sans-serif] text-[#797a7c] text-[12px] tracking-[-0.5px]">
          <p className="leading-none">68%</p>
        </div>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[88px]">
      <div className="flex flex-col font-['Allerta:Regular',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[rgba(255,255,255,0.94)] text-center tracking-[-2.16px]">
        <p className="leading-[176px]">15:28</p>
      </div>
    </div>
  );
}

function ELauncherButton() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <img src={eLauncherButtonImg} alt="E-Launcher" className="size-[45px] object-contain" />
    </div>
  );
}

function DevicesStatusBar() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Status />
      <Time />
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[40px]">
            <div className="absolute inset-[-5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 5">
                <line stroke="white" strokeLinecap="round" strokeWidth="5" x1="2.5" x2="37.5" y1="2.5" y2="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ELauncherButton />
    </div>
  );
}

interface TaskBarProps {
  onAppsMenuClick?: () => void;
}

export function TaskBar({ onAppsMenuClick }: TaskBarProps) {
  return (
    <div className="absolute backdrop-blur-[30px] bg-[rgba(105,103,108,0.7)] content-stretch flex h-[77px] items-center justify-between left-[14.77px] px-[18px] py-[5px] rounded-[12px] top-[991.58px] w-[1890px]">
      <NavButton onAppsMenuClick={onAppsMenuClick} />
      <DevicesStatusBar />
    </div>
  );
}

export default TaskBar;
