import { svgPaths } from '@/shared/svg/paths';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function SheetsIcon({ className = "size-[80px]", style }: IconProps) {
  return (
    <div className={`relative ${className}`} style={style} data-name="Sheets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Sheets">
          <path d={svgPaths.p305d2e80} fill="#23A566" />
          <path d={svgPaths.p6e44400} fill="#1C995B" />
          <path d={svgPaths.p10248300} fill="#2FB673" />
          <path d={svgPaths.p1b3464f0} fill="#8FD5AD" />
          <path clipRule="evenodd" d={svgPaths.p29c33580} fill="white" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

export default SheetsIcon;
