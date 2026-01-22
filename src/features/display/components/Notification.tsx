import { svgPaths } from '@/shared/svg/paths';

function AndroidIcon() {
  return (
    <div className="relative shrink-0 size-[59px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 59">
        <g clipPath="url(#clip0_notification)">
          <g filter="url(#filter0_d_notification)">
            <circle cx="29.5" cy="29.5" fill="#00897B" r="27.0417" />
          </g>
          <g>
            <mask height="55" id="mask0_notification" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="55" x="2" y="2">
              <circle cx="29.5" cy="29.5" fill="#C4C4C4" r="27.0417" />
            </mask>
            <g mask="url(#mask0_notification)">
              <path d={svgPaths.p11c1ae00} opacity="0.25" stroke="#70EFDE" />
            </g>
          </g>
          <path d={svgPaths.p10c95400} fill="white" opacity="0.2" />
          <path d={svgPaths.pccddd80} fill="#263238" opacity="0.2" />
          <path d={svgPaths.p29a80a40} fill="url(#paint0_linear_notification)" />
          <g filter="url(#filter1_d_notification)">
            <path d={svgPaths.p171a3a80} fill="#FAFAFA" />
          </g>
          <g opacity="0.2">
            <path clipRule="evenodd" d={svgPaths.p30a2f700} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p1107b00} fill="white" />
            <path d={svgPaths.p154ffa00} fill="white" />
          </g>
          <g opacity="0.2">
            <path d={svgPaths.p2e0f3000} fill="#212121" />
            <path d={svgPaths.p3bb3db0} fill="#212121" />
            <path d={svgPaths.pe3a4c80} fill="#212121" />
          </g>
          <circle cx="22.5859" cy="29.8073" fill="#00796B" r="1.53646" />
          <circle cx="36.1068" cy="29.8073" fill="#00796B" r="1.53646" />
          <circle cx="29.5" cy="29.5" fill="url(#paint1_radial_notification)" r="27.0417" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="62.0833" id="filter0_d_notification" width="62.0833" x="-1.54167" y="0.458333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_notification" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_notification" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="27.8203" id="filter1_d_notification" width="41.8021" x="8.59896" y="15.0547">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0.196078 0 0 0 0 0.219608 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_notification" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_notification" mode="normal" result="shape" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_notification" x1="29.5" x2="47.6918" y1="29.5" y2="49.3409">
            <stop offset="0.319987" stopColor="#263238" stopOpacity="0.15" />
            <stop offset="1" stopColor="#263238" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(10.4479 10.4479) rotate(45) scale(53.8874)" gradientUnits="userSpaceOnUse" id="paint1_radial_notification" r="1">
            <stop stopColor="white" stopOpacity="0.1" />
            <stop offset="0.329999" stopColor="white" stopOpacity="0.05" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <clipPath id="clip0_notification">
            <rect fill="white" height="59" width="59" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="absolute left-[181px] size-[11px] top-[-1px] cursor-pointer hover:opacity-70 transition-opacity"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_close)">
          <path d="M11 0L0 11" stroke="#A9A7A7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0 0L11 11" stroke="#A9A7A7" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_close">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NotificationContent({ onClose }: { onClose?: () => void }) {
  return (
    <div className="h-[123px] relative shrink-0 w-[183px]">
      <div className="absolute w-full top-[61.5px] translate-y-[-50%] text-right pr-1">
        <p className="font-['Inter:Regular',sans-serif] text-[24px] text-white leading-none">Android System</p>
      </div>
      <div className="absolute w-full top-[109px] translate-y-[-50%] text-right pr-1">
        <p className="font-['Inter:Regular',sans-serif] text-[10px] text-white leading-none">Charging this device via USB</p>
      </div>
      <div className="absolute w-full top-[22px] translate-y-[-50%] text-right pr-1">
        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-white leading-none">
          <span>2026/01/19</span>
          <span className="ml-2">17:55:39</span>
        </p>
      </div>
      <CloseButton onClick={onClose} />
    </div>
  );
}

interface NotificationProps {
  isVisible: boolean;
  onClose: () => void;
}

export function Notification({ isVisible, onClose }: NotificationProps) {
  return (
    <div
      className={`absolute backdrop-blur-[30px] bg-[rgba(193,188,200,0.6)] content-stretch flex flex-col items-start px-[28px] py-[15px] rounded-[20px] w-[320px] top-[830.85px] transition-all duration-300 ease-in-out ${
        isVisible ? 'right-[20px] opacity-100' : 'right-[-340px] opacity-0 pointer-events-none'
      }`}
    >
      <div className="content-stretch flex gap-[22px] h-[123px] items-center relative shrink-0 w-full">
        <AndroidIcon />
        <NotificationContent onClose={onClose} />
      </div>
    </div>
  );
}

export default Notification;
