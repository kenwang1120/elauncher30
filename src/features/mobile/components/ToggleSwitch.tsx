import { svgPaths } from '@/shared/svg/paths';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="absolute h-[24px] right-[13px] top-[50%] translate-y-[-50%] w-[36px] cursor-pointer hover:opacity-80 transition-opacity"
      aria-label={checked ? "開啟" : "關閉"}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 24">
        <g>
          <path
            d={svgPaths.p31235180}
            fill={checked ? "#4285f4" : "#676767"}
            className="transition-colors"
          />
          <path
            d={svgPaths.p21685580}
            fill="url(#paint0_linear_toggle)"
            className="transition-transform"
            style={{
              transform: checked ? "translateX(9px)" : "translateX(0)",
              transformOrigin: "center"
            }}
          />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_toggle" x1="20" x2="0.411765" y1="10.4118" y2="14.6471">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#999999" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
