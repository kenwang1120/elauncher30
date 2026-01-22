import { svgPaths } from '@/shared/svg/paths';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function FormsIcon({ className = "size-[80px]", style }: IconProps) {
  return (
    <div className={`relative ${className}`} style={style} data-name="Forms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Forms">
          <path d={svgPaths.p305d2e80} fill="#6B3FB9" />
          <path d={svgPaths.p6e44400} fill="#6439B5" />
          <path d={svgPaths.p10248300} fill="#815BC3" />
          <path d={svgPaths.p1b3464f0} fill="#B7A2DD" />
          <g id="Icon">
            <path d={svgPaths.p3b012170} fill="white" />
            <path d={svgPaths.p10732b00} fill="white" />
            <path d={svgPaths.p90b2f00} fill="white" />
            <path d={svgPaths.p19f71200} fill="white" />
            <path d={svgPaths.p12923a80} fill="white" />
            <path d={svgPaths.p2abc4600} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default FormsIcon;
