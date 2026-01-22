import { useState, useEffect, useRef } from 'react';
import svgPaths from "./svg-lycamlyao6";
const imgMacosSierraMountainPeakSunsetEveningStock5K5120X368439871 = "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2670&auto=format&fit=crop";
import eLauncherButtonImg from '@/assets/E-Launcher button.png';

function Group24() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
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
  );
}

function AppsIcon() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1" data-name="Apps icon">
      <Group24 />
    </div>
  );
}

function Icon() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1" data-name="icon">
      <AppsIcon />
    </div>
  );
}

function AppMenuIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="App menu icon">
      <Icon />
    </div>
  );
}

function AppsMenu({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Apps Menu"
      onClick={onClick}
    >
      <AppMenuIcon />
    </div>
  );
}

function NavButton({ onAppsMenuClick }: { onAppsMenuClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[53px] items-center relative shrink-0 w-[355px]" data-name="Nav button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[34px] relative w-[26px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 34">
              <path d="M0 0L26 17L0 34V0Z" fill="var(--fill-0, #FAFAFA)" fillOpacity="0.76" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[34px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="var(--fill-0, #FAFAFA)" fillOpacity="0.76" id="Ellipse 1" r="17" />
        </svg>
      </div>
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[40px]">
            <div className="absolute inset-[-5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 5">
                <line id="Line 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="5" x1="2.5" x2="37.5" y1="2.5" y2="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <AppsMenu onClick={onAppsMenuClick} />
    </div>
  );
}

function Group27() {
  return (
    <div className="col-1 h-[21.7px] ml-0 mt-0 relative row-1 w-[31px]">
      <div className="absolute inset-[-9.22%_-6.45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 25.7005">
          <g id="Group 1115">
            <path d={svgPaths.p4ce03e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p1c4fad80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p23fe9680} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Group">
      <Group27 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative h-[22px] shrink-0 w-[50px]">
      {/* Battery icon */}
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 44 22">
          <g id="Group">
            <path d={svgPaths.pafcc300} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3a8ecc00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
      {/* 68% text overlaid on battery */}
      <div className="absolute inset-0 flex items-center justify-center font-['ABeeZee:Regular',sans-serif] text-[#797a7c] text-[12px] tracking-[-0.5px]" style={{ fontFeatureSettings: "'dlig', 'lnum', 'tnum'" }}>
        <p className="leading-none">68%</p>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0" data-name="Status">
      <Group />
      <div className="relative shrink-0 size-[25px]" data-name="data">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <path d={svgPaths.p283c6000} fill="var(--fill-0, white)" id="data" />
        </svg>
      </div>
      <Frame />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[88px]" data-name="Time">
      <div className="flex flex-col font-['Allerta:Regular',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[rgba(255,255,255,0.94)] text-center tracking-[-2.16px] w-full" style={{ fontFeatureSettings: "'ordn', 'dlig', 'lnum', 'tnum'" }}>
        <p className="css-4hzbpn leading-[176px]">15:28</p>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1 size-[38.937px]">
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[19.469px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "6.65625" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="bg-[#d4d2d2] h-[9.178px] rounded-[2px] w-[18.355px]" />
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[19.44px] mt-0 relative row-1 size-[25.195px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "6.671875" } as React.CSSProperties}>
        <div className="flex-none rotate-[135deg]">
          <div className="bg-[#d4d2d2] h-[8.098px] rounded-[2px] w-[27.533px]" />
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-[10.32px] relative row-1 size-[25.147px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "6.671875" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="bg-[#d4d2d2] h-[17.208px] rounded-[2px] w-[18.355px]" />
        </div>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group25 />
    </div>
  );
}

function ELauncherButton() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="E-Launcher button">
      <img src={eLauncherButtonImg} alt="E-Launcher" className="size-[45px] object-contain" />
    </div>
  );
}

function DevicesStatusBar() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Devices Status Bar">
      <Status />
      <Time />
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[40px]">
            <div className="absolute inset-[-5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 5">
                <line id="Line 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="5" x1="2.5" x2="37.5" y1="2.5" y2="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ELauncherButton />
    </div>
  );
}

function TaskBar({ onAppsMenuClick }: { onAppsMenuClick?: () => void }) {
  return (
    <div className="absolute backdrop-blur-[30px] bg-[rgba(105,103,108,0.7)] content-stretch flex h-[77px] items-center justify-between left-[14.77px] px-[18px] py-[5px] rounded-[12px] top-[991.58px] w-[1890px]" data-name="Task Bar">
      <NavButton onAppsMenuClick={onAppsMenuClick} />
      <DevicesStatusBar />
    </div>
  );
}

// Define different apps for each folder
const FOLDER_APPS: Record<number, string[]> = {
  1: [
    'Facebook', 'Spotify', 'Google', 'Docs',
    'WhatsApp', 'Slides', 'Forms', 'Sheets',
    'Google', 'Facebook', 'Docs', 'Spotify',
    'Forms', 'Sheets', 'WhatsApp', 'Slides',
    'Spotify', 'Docs', 'Google', 'Facebook',
    'Sheets', 'Slides', 'Forms', 'WhatsApp',
    'Facebook', 'WhatsApp', 'Spotify', 'Docs',
    'Google', 'Forms', 'Slides', 'Sheets',
    'Docs', 'Facebook', 'Sheets', 'Google',
    'WhatsApp', 'Spotify', 'Forms', 'Slides',
    'Slides', 'Google', 'Facebook', 'Docs',
    'Spotify', 'Forms', 'WhatsApp', 'Sheets',
  ],
  2: ['WhatsApp', 'Spotify', 'Facebook', 'Google'],
  3: ['Spotify', 'Facebook', 'Docs'],
  4: ['Docs', 'Slides', 'Sheets', 'Forms', 'Google'],
  5: ['Spotify', 'Facebook', 'WhatsApp', 'Google', 'Sheets', 'Forms', 'Slides'],
};

function FolderTab({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <div
      className={`backdrop-blur-[2px] content-stretch flex h-[25px] items-center justify-center overflow-clip px-[5px] py-0 relative rounded-[16px] shrink-0 w-[100px] cursor-pointer transition-all duration-200 hover:scale-105 ${isActive
        ? 'bg-[rgba(255,255,255,0.39)]'
        : 'bg-[rgba(201,201,201,0.16)]'
        }`}
      onClick={onClick}
    >
      <div
        className={`css-g0mm18 flex flex-col font-['ABeeZee:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] ${isActive ? 'text-white' : 'text-[rgba(255,255,255,0.35)]'
          }`}
        style={{ fontFeatureSettings: "'ordn', 'dlig', 'lnum', 'tnum'" }}
      >
        <p className="css-ew64yg leading-[61px]">{label}</p>
      </div>
    </div>
  );
}

function Frame8({ activeFolder, onFolderChange }: { activeFolder: number; onFolderChange: (folder: number) => void }) {
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

function Forms() {
  return (
    <div className="absolute left-[140px] size-[80px] top-[280px]" data-name="Forms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Forms">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #6B3FB9)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #6439B5)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #815BC3)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_950)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #B7A2DD)" id="Fold" />
          <g id="Icon">
            <path d={svgPaths.p3b012170} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10732b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p90b2f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19f71200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12923a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2abc4600} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_950" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#6B3FB9" />
            <stop offset="1" stopColor="#5B3DA3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Forms1() {
  return (
    <div className="absolute left-[140px] size-[80px] top-[700px]" data-name="Forms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Forms">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #6B3FB9)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #6439B5)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #815BC3)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_950)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #B7A2DD)" id="Fold" />
          <g id="Icon">
            <path d={svgPaths.p3b012170} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10732b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p90b2f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19f71200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12923a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2abc4600} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_950" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#6B3FB9" />
            <stop offset="1" stopColor="#5B3DA3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Forms2() {
  return (
    <div className="absolute left-[140px] size-[80px] top-[1120px]" data-name="Forms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Forms">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #6B3FB9)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #6439B5)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #815BC3)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_950)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #B7A2DD)" id="Fold" />
          <g id="Icon">
            <path d={svgPaths.p3b012170} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10732b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p90b2f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19f71200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12923a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2abc4600} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_950" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#6B3FB9" />
            <stop offset="1" stopColor="#5B3DA3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Forms3() {
  return (
    <div className="absolute left-[140px] size-[80px] top-[980px]" data-name="Forms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Forms">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #6B3FB9)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #6439B5)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #815BC3)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_950)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #B7A2DD)" id="Fold" />
          <g id="Icon">
            <path d={svgPaths.p3b012170} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10732b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p90b2f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19f71200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12923a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2abc4600} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_950" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#6B3FB9" />
            <stop offset="1" stopColor="#5B3DA3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Forms4() {
  return (
    <div className="absolute left-[140px] size-[80px] top-[1400px]" data-name="Forms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Forms">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #6B3FB9)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #6439B5)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #815BC3)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_950)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #B7A2DD)" id="Fold" />
          <g id="Icon">
            <path d={svgPaths.p3b012170} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10732b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p90b2f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19f71200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12923a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2abc4600} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_950" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#6B3FB9" />
            <stop offset="1" stopColor="#5B3DA3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[18.43%_19.67%_20.91%_19.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5268 48.5268">
        <g id="Group">
          <path d={svgPaths.p27ca6d00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f19c9f0} fill="url(#paint0_linear_1_940)" id="Vector_2" />
          <path d={svgPaths.p27ca6d00} fill="url(#paint1_linear_1_940)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p29d29570} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_940" x1="24.268" x2="24.268" y1="47.6826" y2="0.840159">
            <stop stopColor="#20B038" />
            <stop offset="1" stopColor="#60D66A" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_940" x1="24.2681" x2="24.2681" y1="48.5222" y2="0">
            <stop stopColor="#F9F9F9" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function WhatsApp() {
  return (
    <div className="absolute bg-gradient-to-t from-[#20b038] left-0 overflow-clip rounded-[20px] size-[80px] to-[#60d66a] to-full top-[280px]" data-name="WhatsApp">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[18.43%_19.67%_20.91%_19.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5268 48.5268">
        <g id="Group">
          <path d={svgPaths.p27ca6d00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f19c9f0} fill="url(#paint0_linear_1_940)" id="Vector_2" />
          <path d={svgPaths.p27ca6d00} fill="url(#paint1_linear_1_940)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p29d29570} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_940" x1="24.268" x2="24.268" y1="47.6826" y2="0.840159">
            <stop stopColor="#20B038" />
            <stop offset="1" stopColor="#60D66A" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_940" x1="24.2681" x2="24.2681" y1="48.5222" y2="0">
            <stop stopColor="#F9F9F9" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function WhatsApp1() {
  return (
    <div className="absolute bg-gradient-to-t from-[#20b038] left-0 overflow-clip rounded-[20px] size-[80px] to-[#60d66a] to-full top-[700px]" data-name="WhatsApp">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[18.43%_19.67%_20.91%_19.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5268 48.5268">
        <g id="Group">
          <path d={svgPaths.p27ca6d00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f19c9f0} fill="url(#paint0_linear_1_940)" id="Vector_2" />
          <path d={svgPaths.p27ca6d00} fill="url(#paint1_linear_1_940)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p29d29570} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_940" x1="24.268" x2="24.268" y1="47.6826" y2="0.840159">
            <stop stopColor="#20B038" />
            <stop offset="1" stopColor="#60D66A" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_940" x1="24.2681" x2="24.2681" y1="48.5222" y2="0">
            <stop stopColor="#F9F9F9" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function WhatsApp2() {
  return (
    <div className="absolute bg-gradient-to-t from-[#20b038] left-0 overflow-clip rounded-[20px] size-[80px] to-[#60d66a] to-full top-[1120px]" data-name="WhatsApp">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[18.43%_19.67%_20.91%_19.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5268 48.5268">
        <g id="Group">
          <path d={svgPaths.p27ca6d00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f19c9f0} fill="url(#paint0_linear_1_940)" id="Vector_2" />
          <path d={svgPaths.p27ca6d00} fill="url(#paint1_linear_1_940)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p29d29570} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_940" x1="24.268" x2="24.268" y1="47.6826" y2="0.840159">
            <stop stopColor="#20B038" />
            <stop offset="1" stopColor="#60D66A" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_940" x1="24.2681" x2="24.2681" y1="48.5222" y2="0">
            <stop stopColor="#F9F9F9" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function WhatsApp3() {
  return (
    <div className="absolute bg-gradient-to-t from-[#20b038] left-0 overflow-clip rounded-[20px] size-[80px] to-[#60d66a] to-full top-[980px]" data-name="WhatsApp">
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[18.43%_19.67%_20.91%_19.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5268 48.5268">
        <g id="Group">
          <path d={svgPaths.p27ca6d00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f19c9f0} fill="url(#paint0_linear_1_940)" id="Vector_2" />
          <path d={svgPaths.p27ca6d00} fill="url(#paint1_linear_1_940)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p29d29570} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_940" x1="24.268" x2="24.268" y1="47.6826" y2="0.840159">
            <stop stopColor="#20B038" />
            <stop offset="1" stopColor="#60D66A" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_940" x1="24.2681" x2="24.2681" y1="48.5222" y2="0">
            <stop stopColor="#F9F9F9" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function WhatsApp4() {
  return (
    <div className="absolute bg-gradient-to-t from-[#20b038] left-0 overflow-clip rounded-[20px] size-[80px] to-[#60d66a] to-full top-[1400px]" data-name="WhatsApp">
      <Group5 />
    </div>
  );
}

function Facebook() {
  return (
    <div className="absolute left-0 size-[80px] top-0" data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Facebook">
          <rect fill="var(--fill-0, #1877F2)" height="80" rx="20" width="80" x="2.33401e-10" />
          <path d={svgPaths.p10608380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Facebook1() {
  return (
    <div className="absolute left-0 size-[80px] top-[420px]" data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Facebook">
          <rect fill="var(--fill-0, #1877F2)" height="80" rx="20" width="80" x="2.33401e-10" />
          <path d={svgPaths.p10608380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[17.5%_19.15%_17.5%_17.15%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.96 52">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1bac77f0} fill="var(--fill-0, #4285F4)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p370eb0c0} fill="var(--fill-0, #34A853)" fillRule="evenodd" id="Shape_2" />
          <path clipRule="evenodd" d={svgPaths.pf10d200} fill="var(--fill-0, #FBBC05)" fillRule="evenodd" id="Shape_3" />
          <path clipRule="evenodd" d={svgPaths.p1b0b42a0} fill="var(--fill-0, #EA4335)" fillRule="evenodd" id="Shape_4" />
        </g>
      </svg>
    </div>
  );
}

function Google() {
  return (
    <div className="absolute bg-white left-[140px] overflow-clip rounded-[20px] size-[80px] top-0" data-name="Google">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[17.5%_19.15%_17.5%_17.15%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.96 52">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1bac77f0} fill="var(--fill-0, #4285F4)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p370eb0c0} fill="var(--fill-0, #34A853)" fillRule="evenodd" id="Shape_2" />
          <path clipRule="evenodd" d={svgPaths.pf10d200} fill="var(--fill-0, #FBBC05)" fillRule="evenodd" id="Shape_3" />
          <path clipRule="evenodd" d={svgPaths.p1b0b42a0} fill="var(--fill-0, #EA4335)" fillRule="evenodd" id="Shape_4" />
        </g>
      </svg>
    </div>
  );
}

function Google1() {
  return (
    <div className="absolute bg-white left-[140px] overflow-clip rounded-[20px] size-[80px] top-[420px]" data-name="Google">
      <Group7 />
    </div>
  );
}

function Spotify() {
  return (
    <div className="absolute left-[280px] size-[80px] top-0" data-name="Spotify">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Spotify">
          <rect fill="var(--fill-0, #05CD4C)" height="80" rx="20" width="80" />
          <path d={svgPaths.p368d6500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Spotify1() {
  return (
    <div className="absolute left-[280px] size-[80px] top-[420px]" data-name="Spotify">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Spotify">
          <rect fill="var(--fill-0, #05CD4C)" height="80" rx="20" width="80" />
          <path d={svgPaths.p368d6500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Docs() {
  return (
    <div className="absolute left-[420px] size-[80px] top-0" data-name="Docs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Docs">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #4E8DF5)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #417EE9)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #639AF6)" id="Highlight" />
          <path d={svgPaths.p25f46c80} fill="url(#paint0_linear_1_902)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #A6C5FA)" id="Fold" />
          <g id="Icon">
            <path d={svgPaths.p22e25c70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19680f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p234bf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p395be280} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_902" x1="56.6667" x2="56.6667" y1="40.4167" y2="20">
            <stop stopColor="#4E8DF5" />
            <stop offset="1" stopColor="#3D6ACD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Docs1() {
  return (
    <div className="absolute left-[420px] size-[80px] top-[420px]" data-name="Docs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Docs">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #4E8DF5)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #417EE9)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #639AF6)" id="Highlight" />
          <path d={svgPaths.p25f46c80} fill="url(#paint0_linear_1_902)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #A6C5FA)" id="Fold" />
          <g id="Icon">
            <path d={svgPaths.p22e25c70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19680f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p234bf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p395be280} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_902" x1="56.6667" x2="56.6667" y1="40.4167" y2="20">
            <stop stopColor="#4E8DF5" />
            <stop offset="1" stopColor="#3D6ACD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Slides() {
  return (
    <div className="absolute left-[420px] size-[80px] top-[140px]" data-name="Slides">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Slides">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #F4B70A)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #EFA904)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #F6C028)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_894)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #FADC87)" id="Fold" />
          <path clipRule="evenodd" d={svgPaths.p29ba6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_894" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#F4B70A" />
            <stop offset="1" stopColor="#E2930A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Slides1() {
  return (
    <div className="absolute left-[420px] size-[80px] top-[560px]" data-name="Slides">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Slides">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #F4B70A)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #EFA904)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #F6C028)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_894)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #FADC87)" id="Fold" />
          <path clipRule="evenodd" d={svgPaths.p29ba6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_894" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#F4B70A" />
            <stop offset="1" stopColor="#E2930A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Slides2() {
  return (
    <div className="absolute left-[420px] size-[80px] top-[840px]" data-name="Slides">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Slides">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #F4B70A)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #EFA904)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #F6C028)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_894)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #FADC87)" id="Fold" />
          <path clipRule="evenodd" d={svgPaths.p29ba6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_894" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#F4B70A" />
            <stop offset="1" stopColor="#E2930A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Slides3() {
  return (
    <div className="absolute left-[420px] size-[80px] top-[1260px]" data-name="Slides">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Slides">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #F4B70A)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #EFA904)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #F6C028)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_894)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #FADC87)" id="Fold" />
          <path clipRule="evenodd" d={svgPaths.p29ba6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_894" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#F4B70A" />
            <stop offset="1" stopColor="#E2930A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute bottom-[24.98%] left-[14.28%] right-[14.28%] top-1/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1481 40.0129">
        <g id="Group">
          <path d={svgPaths.p3f330580} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b580380} fill="var(--fill-0, #FF0000)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function YouTube() {
  return (
    <div className="absolute bg-[red] left-0 overflow-clip rounded-[20px] size-[80px] top-[140px]" data-name="YouTube">
      <Group8 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute bottom-[24.98%] left-[14.28%] right-[14.28%] top-1/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1481 40.0129">
        <g id="Group">
          <path d={svgPaths.p3f330580} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b580380} fill="var(--fill-0, #FF0000)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function YouTube1() {
  return (
    <div className="absolute bg-[red] left-0 overflow-clip rounded-[20px] size-[80px] top-[560px]" data-name="YouTube">
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[24.98%] left-[14.28%] right-[14.28%] top-1/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1481 40.0129">
        <g id="Group">
          <path d={svgPaths.p3f330580} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b580380} fill="var(--fill-0, #FF0000)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function YouTube2() {
  return (
    <div className="absolute bg-[red] left-0 overflow-clip rounded-[20px] size-[80px] top-[840px]" data-name="YouTube">
      <Group10 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute bottom-[24.98%] left-[14.28%] right-[14.28%] top-1/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.1481 40.0129">
        <g id="Group">
          <path d={svgPaths.p3f330580} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b580380} fill="var(--fill-0, #FF0000)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function YouTube3() {
  return (
    <div className="absolute bg-[red] left-0 overflow-clip rounded-[20px] size-[80px] top-[1260px]" data-name="YouTube">
      <Group11 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[15%_20.08%_15%_18.22%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.3559 55.9999">
        <g id="Group">
          <path d={svgPaths.p2efdb380} fill="var(--fill-0, #FF004F)" id="Vector" />
          <path d={svgPaths.p276e8340} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pb4f3c00} fill="var(--fill-0, #00F2EA)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function TikTok() {
  return (
    <div className="absolute bg-black left-[140px] overflow-clip rounded-[20px] size-[80px] top-[140px]" data-name="TikTok">
      <Group12 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[15%_20.08%_15%_18.22%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.3559 55.9999">
        <g id="Group">
          <path d={svgPaths.p2efdb380} fill="var(--fill-0, #FF004F)" id="Vector" />
          <path d={svgPaths.p276e8340} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pb4f3c00} fill="var(--fill-0, #00F2EA)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function TikTok1() {
  return (
    <div className="absolute bg-black left-[140px] overflow-clip rounded-[20px] size-[80px] top-[560px]" data-name="TikTok">
      <Group13 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[15%_20.08%_15%_18.22%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.3559 55.9999">
        <g id="Group">
          <path d={svgPaths.p2efdb380} fill="var(--fill-0, #FF004F)" id="Vector" />
          <path d={svgPaths.p276e8340} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pb4f3c00} fill="var(--fill-0, #00F2EA)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function TikTok2() {
  return (
    <div className="absolute bg-black left-[140px] overflow-clip rounded-[20px] size-[80px] top-[840px]" data-name="TikTok">
      <Group14 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[15%_20.08%_15%_18.22%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.3559 55.9999">
        <g id="Group">
          <path d={svgPaths.p2efdb380} fill="var(--fill-0, #FF004F)" id="Vector" />
          <path d={svgPaths.p276e8340} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pb4f3c00} fill="var(--fill-0, #00F2EA)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function TikTok3() {
  return (
    <div className="absolute bg-black left-[140px] overflow-clip rounded-[20px] size-[80px] top-[1260px]" data-name="TikTok">
      <Group15 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Layer_1-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.5714 52">
        <g id="Layer_1-2">
          <path d={svgPaths.p365f4800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p377f0ff2} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p341dbb80} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Group">
      <Layer />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Group">
      <div className="absolute inset-[25.82%_24.48%_31.24%_38.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7143 34.3572">
          <path d={svgPaths.p3d278100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group17 />
    </div>
  );
}

function Twitch() {
  return (
    <div className="absolute bg-[#9146ff] left-[280px] overflow-clip rounded-[20px] size-[80px] top-[140px]" data-name="Twitch">
      <Group16 />
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Layer_1-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.5714 52">
        <g id="Layer_1-2">
          <path d={svgPaths.p365f4800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p377f0ff2} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p341dbb80} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Group">
      <Layer1 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Group">
      <div className="absolute inset-[25.82%_24.48%_31.24%_38.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7143 34.3572">
          <path d={svgPaths.p3d278100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group19 />
    </div>
  );
}

function Twitch1() {
  return (
    <div className="absolute bg-[#9146ff] left-[280px] overflow-clip rounded-[20px] size-[80px] top-[560px]" data-name="Twitch">
      <Group18 />
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Layer_1-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.5714 52">
        <g id="Layer_1-2">
          <path d={svgPaths.p365f4800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p377f0ff2} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p341dbb80} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Group">
      <Layer2 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Group">
      <div className="absolute inset-[25.82%_24.48%_31.24%_38.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7143 34.3572">
          <path d={svgPaths.p3d278100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group21 />
    </div>
  );
}

function Twitch2() {
  return (
    <div className="absolute bg-[#9146ff] left-[280px] overflow-clip rounded-[20px] size-[80px] top-[840px]" data-name="Twitch">
      <Group20 />
    </div>
  );
}

function Layer3() {
  return (
    <div className="absolute inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Layer_1-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.5714 52">
        <g id="Layer_1-2">
          <path d={svgPaths.p365f4800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p377f0ff2} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p341dbb80} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Group">
      <Layer3 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[21.17%_19.83%_13.83%_24.45%]" data-name="Group">
      <div className="absolute inset-[25.82%_24.48%_31.24%_38.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7143 34.3572">
          <path d={svgPaths.p3d278100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group23 />
    </div>
  );
}

function Twitch3() {
  return (
    <div className="absolute bg-[#9146ff] left-[280px] overflow-clip rounded-[20px] size-[80px] top-[1260px]" data-name="Twitch">
      <Group22 />
    </div>
  );
}

function Drive() {
  return (
    <div className="absolute left-[280px] size-[80px] top-[280px]" data-name="Drive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Drive">
          <path d={svgPaths.p39836200} fill="var(--fill-0, #4285F4)" id="Blue" />
          <path d={svgPaths.p26c5c080} fill="var(--fill-0, #FBBC04)" id="Yellow" />
          <path d={svgPaths.p10383800} fill="var(--fill-0, #34A853)" id="Green" />
          <path d={svgPaths.p2af11880} fill="var(--fill-0, #EA4335)" id="Red" />
          <path d={svgPaths.p36b86300} fill="var(--fill-0, #188038)" id="Dark Green" />
          <path d={svgPaths.p16658b00} fill="var(--fill-0, #1967D2)" id="Dark Blue" />
        </g>
      </svg>
    </div>
  );
}

function Drive1() {
  return (
    <div className="absolute left-[280px] size-[80px] top-[700px]" data-name="Drive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Drive">
          <path d={svgPaths.p39836200} fill="var(--fill-0, #4285F4)" id="Blue" />
          <path d={svgPaths.p26c5c080} fill="var(--fill-0, #FBBC04)" id="Yellow" />
          <path d={svgPaths.p10383800} fill="var(--fill-0, #34A853)" id="Green" />
          <path d={svgPaths.p2af11880} fill="var(--fill-0, #EA4335)" id="Red" />
          <path d={svgPaths.p36b86300} fill="var(--fill-0, #188038)" id="Dark Green" />
          <path d={svgPaths.p16658b00} fill="var(--fill-0, #1967D2)" id="Dark Blue" />
        </g>
      </svg>
    </div>
  );
}

function Drive2() {
  return (
    <div className="absolute left-[280px] size-[80px] top-[1120px]" data-name="Drive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Drive">
          <path d={svgPaths.p39836200} fill="var(--fill-0, #4285F4)" id="Blue" />
          <path d={svgPaths.p26c5c080} fill="var(--fill-0, #FBBC04)" id="Yellow" />
          <path d={svgPaths.p10383800} fill="var(--fill-0, #34A853)" id="Green" />
          <path d={svgPaths.p2af11880} fill="var(--fill-0, #EA4335)" id="Red" />
          <path d={svgPaths.p36b86300} fill="var(--fill-0, #188038)" id="Dark Green" />
          <path d={svgPaths.p16658b00} fill="var(--fill-0, #1967D2)" id="Dark Blue" />
        </g>
      </svg>
    </div>
  );
}

function Drive3() {
  return (
    <div className="absolute left-[280px] size-[80px] top-[980px]" data-name="Drive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Drive">
          <path d={svgPaths.p39836200} fill="var(--fill-0, #4285F4)" id="Blue" />
          <path d={svgPaths.p26c5c080} fill="var(--fill-0, #FBBC04)" id="Yellow" />
          <path d={svgPaths.p10383800} fill="var(--fill-0, #34A853)" id="Green" />
          <path d={svgPaths.p2af11880} fill="var(--fill-0, #EA4335)" id="Red" />
          <path d={svgPaths.p36b86300} fill="var(--fill-0, #188038)" id="Dark Green" />
          <path d={svgPaths.p16658b00} fill="var(--fill-0, #1967D2)" id="Dark Blue" />
        </g>
      </svg>
    </div>
  );
}

function Drive4() {
  return (
    <div className="absolute left-[280px] size-[80px] top-[1400px]" data-name="Drive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Drive">
          <path d={svgPaths.p39836200} fill="var(--fill-0, #4285F4)" id="Blue" />
          <path d={svgPaths.p26c5c080} fill="var(--fill-0, #FBBC04)" id="Yellow" />
          <path d={svgPaths.p10383800} fill="var(--fill-0, #34A853)" id="Green" />
          <path d={svgPaths.p2af11880} fill="var(--fill-0, #EA4335)" id="Red" />
          <path d={svgPaths.p36b86300} fill="var(--fill-0, #188038)" id="Dark Green" />
          <path d={svgPaths.p16658b00} fill="var(--fill-0, #1967D2)" id="Dark Blue" />
        </g>
      </svg>
    </div>
  );
}

function Sheets() {
  return (
    <div className="absolute left-[420px] size-[80px] top-[280px]" data-name="Sheets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Sheets">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #20A464)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #149456)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #38AE74)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_868)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #8ED1B1)" id="Fold" />
          <path clipRule="evenodd" d={svgPaths.p29c33580} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_868" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#20A464" />
            <stop offset="1" stopColor="#207E55" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Sheets1() {
  return (
    <div className="absolute left-[420px] size-[80px] top-[700px]" data-name="Sheets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Sheets">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #20A464)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #149456)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #38AE74)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_868)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #8ED1B1)" id="Fold" />
          <path clipRule="evenodd" d={svgPaths.p29c33580} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_868" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#20A464" />
            <stop offset="1" stopColor="#207E55" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Sheets2() {
  return (
    <div className="absolute left-[420px] size-[80px] top-[1120px]" data-name="Sheets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Sheets">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #20A464)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #149456)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #38AE74)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_868)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #8ED1B1)" id="Fold" />
          <path clipRule="evenodd" d={svgPaths.p29c33580} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_868" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#20A464" />
            <stop offset="1" stopColor="#207E55" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Sheets3() {
  return (
    <div className="absolute left-[420px] size-[80px] top-[980px]" data-name="Sheets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Sheets">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #20A464)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #149456)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #38AE74)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_868)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #8ED1B1)" id="Fold" />
          <path clipRule="evenodd" d={svgPaths.p29c33580} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_868" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#20A464" />
            <stop offset="1" stopColor="#207E55" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Sheets4() {
  return (
    <div className="absolute left-[420px] size-[80px] top-[1400px]" data-name="Sheets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Sheets">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #20A464)" id="Page" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #149456)" id="Shadow" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #38AE74)" id="Highlight" />
          <path d={svgPaths.p3c667c80} fill="url(#paint0_linear_1_868)" id="Fold Shadow" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #8ED1B1)" id="Fold" />
          <path clipRule="evenodd" d={svgPaths.p29c33580} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_868" x1="57.5493" x2="57.5493" y1="40.4167" y2="20">
            <stop stopColor="#20A464" />
            <stop offset="1" stopColor="#207E55" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[737px] left-[53px] top-[68px] w-[500px]">
      <Forms />
      <Forms1 />
      <Forms2 />
      <Forms3 />
      <Forms4 />
      <WhatsApp />
      <WhatsApp1 />
      <WhatsApp2 />
      <WhatsApp3 />
      <WhatsApp4 />
      <Facebook />
      <Facebook1 />
      <Google />
      <Google1 />
      <Spotify />
      <Spotify1 />
      <Docs />
      <Docs1 />
      <Slides />
      <Slides1 />
      <Slides2 />
      <Slides3 />
      <YouTube />
      <YouTube1 />
      <YouTube2 />
      <YouTube3 />
      <TikTok />
      <TikTok1 />
      <TikTok2 />
      <TikTok3 />
      <Twitch />
      <Twitch1 />
      <Twitch2 />
      <Twitch3 />
      <Drive />
      <Drive1 />
      <Drive2 />
      <Drive3 />
      <Drive4 />
      <Sheets />
      <Sheets1 />
      <Sheets2 />
      <Sheets3 />
      <Sheets4 />
    </div>
  );
}

// Map of app names to their component functions
const APP_COMPONENTS: Record<string, React.FC<{ style?: React.CSSProperties }>> = {
  Facebook: ({ style }) => (
    <div className="relative size-[80px]" style={style} data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Facebook">
          <rect fill="var(--fill-0, #1877F2)" height="80" rx="20" width="80" />
          <path d={svgPaths.p10608380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  ),
  Google: ({ style }) => (
    <div className="relative bg-white overflow-clip rounded-[20px] size-[80px]" style={style} data-name="Google">
      <div className="absolute inset-[17.5%_19.15%_17.5%_17.15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.96 52">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p1bac77f0} fill="var(--fill-0, #4285F4)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p370eb0c0} fill="var(--fill-0, #34A853)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf10d200} fill="var(--fill-0, #FBBC05)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1b0b42a0} fill="var(--fill-0, #EA4335)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  ),
  Spotify: ({ style }) => (
    <div className="relative size-[80px]" style={style} data-name="Spotify">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Spotify">
          <rect fill="var(--fill-0, #05CD4C)" height="80" rx="20" width="80" />
          <path d={svgPaths.p368d6500} fill="var(--fill-0, white)" />
        </g>
      </svg>
    </div>
  ),
  WhatsApp: ({ style }) => (
    <div className="relative bg-gradient-to-t from-[#20b038] overflow-clip rounded-[20px] size-[80px] to-[#60d66a]" style={style} data-name="WhatsApp">
      <div className="absolute inset-[12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48.5268 48.5268">
          {/* White bubble outline */}
          <path d={svgPaths.p27ca6d00} fill="white" />
          {/* Phone icon inside */}
          <path clipRule="evenodd" d={svgPaths.p29d29570} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  ),
  Docs: ({ style }) => (
    <div className="relative size-[80px]" style={style} data-name="Docs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Docs">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #4E8DF5)" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #417EE9)" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #639AF6)" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #A6C5FA)" />
          <g id="Icon">
            <path d={svgPaths.p22e25c70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19680f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p234bf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p395be280} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  ),
  Slides: ({ style }) => (
    <div className="relative size-[80px]" style={style} data-name="Slides">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Slides">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #F4B70A)" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #EFA904)" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #F6C028)" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #FADC87)" />
          <path clipRule="evenodd" d={svgPaths.p29ba6700} fill="var(--fill-0, white)" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  ),
  Sheets: ({ style }) => (
    <div className="relative size-[80px]" style={style} data-name="Sheets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Sheets">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #23A566)" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #1C995B)" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #2FB673)" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #8FD5AD)" />
          <path clipRule="evenodd" d={svgPaths.p29c33580} fill="var(--fill-0, white)" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  ),
  Forms: ({ style }) => (
    <div className="relative size-[80px]" style={style} data-name="Forms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Forms">
          <path d={svgPaths.p305d2e80} fill="var(--fill-0, #6B3FB9)" />
          <path d={svgPaths.p6e44400} fill="var(--fill-0, #6439B5)" />
          <path d={svgPaths.p10248300} fill="var(--fill-0, #815BC3)" />
          <path d={svgPaths.p1b3464f0} fill="var(--fill-0, #B7A2DD)" />
          <g id="Icon">
            <path d={svgPaths.p3b012170} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10732b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p90b2f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19f71200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12923a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2abc4600} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  ),
};

function AppGrid({ apps, onGoogleClick }: { apps: string[]; onGoogleClick?: () => void }) {
  const COLS = 4;
  const GAP = 60;
  const ICON_SIZE = 80;

  return (
    <div className="relative w-full" style={{ height: `${Math.ceil(apps.length / COLS) * (ICON_SIZE + GAP) + 20}px` }}>
      {apps.map((appName, index) => {
        const AppComponent = APP_COMPONENTS[appName];
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
              cursor: appName === 'Google' ? 'pointer' : 'default',
            }}
            onClick={appName === 'Google' ? onGoogleClick : undefined}
            className={appName === 'Google' ? 'hover:scale-110 transition-transform' : ''}
          >
            <AppComponent />
          </div>
        );
      })}
    </div>
  );
}

function Frame9({ activeFolder, onGoogleClick }: { activeFolder: number; onGoogleClick?: () => void }) {
  const apps = FOLDER_APPS[activeFolder] || [];

  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] h-[805px] overflow-x-clip overflow-y-auto relative rounded-[16px] shrink-0 w-full modern-scrollbar px-[20px]">
      <AppGrid apps={apps} onGoogleClick={onGoogleClick} />
    </div>
  );
}

function AppsAndroidApps({ isOpen, onGoogleClick }: { isOpen: boolean; onGoogleClick?: () => void }) {
  const [activeFolder, setActiveFolder] = useState(1);

  return (
    <div
      className={`absolute backdrop-blur-[30px] bg-[rgba(124,120,129,0.7)] content-stretch flex flex-col gap-[22px] h-[920px] items-start overflow-clip px-[15px] py-[30px] rounded-[16px] top-[63.16px] w-[640px] transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      data-name="Apps - Android Apps"
      style={{ transform: isOpen ? 'translateX(14.57px)' : 'translateX(-660px)' }}
    >
      <Frame8 activeFolder={activeFolder} onFolderChange={setActiveFolder} />
      <Frame9 activeFolder={activeFolder} onGoogleClick={onGoogleClick} />
    </div>
  );
}

function LegacyIconDesignExport() {
  return (
    <div className="relative shrink-0 size-[59px]" data-name="Legacy Icon (Design & Export)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 59">
        <g clipPath="url(#clip0_1_853)" id="Legacy Icon (Design & Export)">
          <g filter="url(#filter0_d_1_853)" id="Shadow">
            <circle cx="29.5" cy="29.5" fill="var(--fill-0, #00897B)" r="27.0417" />
          </g>
          <g id="Grid">
            <mask height="55" id="mask0_1_853" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="55" x="2" y="2">
              <circle cx="29.5" cy="29.5" fill="var(--fill-0, #C4C4C4)" id="CLIP" r="27.0417" />
            </mask>
            <g mask="url(#mask0_1_853)">
              <path d={svgPaths.p11c1ae00} id="Grid_2" opacity="0.25" stroke="var(--stroke-0, #70EFDE)" />
            </g>
          </g>
          <path d={svgPaths.p10c95400} fill="var(--fill-0, white)" id="Tinted Edge" opacity="0.2" />
          <path d={svgPaths.pccddd80} fill="var(--fill-0, #263238)" id="Shaded Edge" opacity="0.2" />
          <path d={svgPaths.p29a80a40} fill="url(#paint0_linear_1_853)" id="Cast Shadow" />
          <g filter="url(#filter1_d_1_853)" id="Robot">
            <path d={svgPaths.p171a3a80} fill="var(--fill-0, #FAFAFA)" />
          </g>
          <g id="Tinted Edge_2" opacity="0.2">
            <path clipRule="evenodd" d={svgPaths.p30a2f700} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p1107b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p154ffa00} fill="var(--fill-0, white)" />
          </g>
          <g id="Shaded Edge_2" opacity="0.2">
            <path d={svgPaths.p2e0f3000} fill="var(--fill-0, #212121)" />
            <path d={svgPaths.p3bb3db0} fill="var(--fill-0, #212121)" />
            <path d={svgPaths.pe3a4c80} fill="var(--fill-0, #212121)" />
          </g>
          <circle cx="22.5859" cy="29.8073" fill="var(--fill-0, #00796B)" id="Eye" r="1.53646" />
          <circle cx="36.1068" cy="29.8073" fill="var(--fill-0, #00796B)" id="Eye_2" r="1.53646" />
          <circle cx="29.5" cy="29.5" fill="url(#paint1_radial_1_853)" id="Finishing Layer" r="27.0417" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="62.0833" id="filter0_d_1_853" width="62.0833" x="-1.54167" y="0.458333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_853" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_853" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="27.8203" id="filter1_d_1_853" width="41.8021" x="8.59896" y="15.0547">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0.196078 0 0 0 0 0.219608 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_853" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_853" mode="normal" result="shape" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_853" x1="29.5" x2="47.6918" y1="29.5" y2="49.3409">
            <stop offset="0.319987" stopColor="#263238" stopOpacity="0.15" />
            <stop offset="1" stopColor="#263238" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(10.4479 10.4479) rotate(45) scale(53.8874)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_853" r="1">
            <stop stopColor="white" stopOpacity="0.1" />
            <stop offset="0.329999" stopColor="white" stopOpacity="0.05" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <clipPath id="clip0_1_853">
            <rect fill="white" height="59" width="59" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function X({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="absolute left-[181px] size-[11px] top-[-1px] cursor-pointer hover:opacity-70 transition-opacity"
      data-name="x"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_849)" id="x">
          <path d="M11 0L0 11" id="Vector" stroke="var(--stroke-0, #A9A7A7)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0 0L11 11" id="Vector_2" stroke="var(--stroke-0, #A9A7A7)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_849">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1({ onClose }: { onClose?: () => void }) {
  return (
    <div className="h-[123px] relative shrink-0 w-[183px]">
      {/* Android System - Right Aligned */}
      <div className="absolute w-full top-[61.5px] translate-y-[-50%] text-right pr-1">
        <p className="font-['Inter:Regular',sans-serif] text-[24px] text-white leading-none">Android System</p>
      </div>

      {/* Charging Text - Right Aligned */}
      <div className="absolute w-full top-[109px] translate-y-[-50%] text-right pr-1">
        <p className="font-['Inter:Regular',sans-serif] text-[10px] text-white leading-none">Charging this device via USB</p>
      </div>

      {/* Date & Time - Right Aligned */}
      <div className="absolute w-full top-[22px] translate-y-[-50%] text-right pr-1">
        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-white leading-none">
          <span>2026/01/19</span>
          <span className="ml-2">17:55:39</span>
        </p>
      </div>

      <X onClick={onClose} />
    </div>
  );
}

function Frame2({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex gap-[22px] h-[123px] items-center relative shrink-0 w-full">
      <LegacyIconDesignExport />
      <Frame1 onClose={onClose} />
    </div>
  );
}

function BubbleNotification({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
  return (
    <div
      className={`absolute backdrop-blur-[30px] bg-[rgba(193,188,200,0.6)] content-stretch flex flex-col items-start px-[28px] py-[15px] rounded-[20px] w-[320px] top-[830.85px] transition-all duration-300 ease-in-out ${isVisible ? 'right-[20px] opacity-100' : 'right-[-340px] opacity-0 pointer-events-none'}`}
      data-name="Bubble Notification"
    >
      <Frame2 onClose={onClose} />
    </div>
  );
}

export default function ELauncher() {
  const [isAppsPanelOpen, setIsAppsPanelOpen] = useState(true);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isGooglePopupOpen, setIsGooglePopupOpen] = useState(false);

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

  const handleGoogleClick = () => {
    setIsGooglePopupOpen(true);
  };

  const handleGooglePopupClose = () => {
    setIsGooglePopupOpen(false);
  };

  return (
    <div className="backdrop-blur-[25px] relative size-full" data-name="ELauncher-3.0">
      <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-name="macos-sierra-mountain-peak-sunset-evening-stock-5k-5120x3684-3987 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[127.96%] left-[-0.02%] max-w-none top-[-27.96%] w-[100.04%]" src={imgMacosSierraMountainPeakSunsetEveningStock5K5120X368439871} />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,3,4,0.4)] h-[1080px] left-0 top-0 w-[1920px]" />
      <TaskBar onAppsMenuClick={handleAppsMenuClick} />
      <AppsAndroidApps isOpen={isAppsPanelOpen} onGoogleClick={handleGoogleClick} />
      <BubbleNotification isVisible={isNotificationVisible} onClose={handleNotificationClose} />
      <WebBrowserPopup isOpen={isGooglePopupOpen} onClose={handleGooglePopupClose} />
    </div>
  );
}

// Chrome-style Web Browser Popup
function WebBrowserPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ isDragging: boolean; startX: number; startY: number; startPosX: number; startPosY: number }>({
    isDragging: false, startX: 0, startY: 0, startPosX: 0, startPosY: 0
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