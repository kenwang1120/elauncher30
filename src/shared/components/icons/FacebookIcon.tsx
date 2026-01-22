import { svgPaths } from '@/shared/svg/paths';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function FacebookIcon({ className = "size-[80px]", style }: IconProps) {
  return (
    <div className={`relative ${className}`} style={style} data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Facebook">
          <rect fill="#1877F2" height="80" rx="20" width="80" />
          <path d={svgPaths.p10608380} fill="white" />
        </g>
      </svg>
    </div>
  );
}

export default FacebookIcon;
