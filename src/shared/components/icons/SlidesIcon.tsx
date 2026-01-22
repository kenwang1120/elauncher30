import { svgPaths } from '@/shared/svg/paths';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function SlidesIcon({ className = "size-[80px]", style }: IconProps) {
  return (
    <div className={`relative ${className}`} style={style} data-name="Slides">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Slides">
          <path d={svgPaths.p305d2e80} fill="#F4B70A" />
          <path d={svgPaths.p6e44400} fill="#EFA904" />
          <path d={svgPaths.p10248300} fill="#F6C028" />
          <path d={svgPaths.p1b3464f0} fill="#FADC87" />
          <path clipRule="evenodd" d={svgPaths.p29ba6700} fill="white" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

export default SlidesIcon;
