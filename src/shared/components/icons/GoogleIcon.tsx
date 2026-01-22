import { svgPaths } from '@/shared/svg/paths';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function GoogleIcon({ className = "size-[80px]", style }: IconProps) {
  return (
    <div className={`relative bg-white overflow-clip rounded-[20px] ${className}`} style={style} data-name="Google">
      <div className="absolute inset-[17.5%_19.15%_17.5%_17.15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.96 52">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p1bac77f0} fill="#4285F4" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p370eb0c0} fill="#34A853" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf10d200} fill="#FBBC05" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1b0b42a0} fill="#EA4335" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default GoogleIcon;
