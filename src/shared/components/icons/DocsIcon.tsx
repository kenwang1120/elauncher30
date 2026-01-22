import { svgPaths } from '@/shared/svg/paths';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function DocsIcon({ className = "size-[80px]", style }: IconProps) {
  return (
    <div className={`relative ${className}`} style={style} data-name="Docs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Docs">
          <path d={svgPaths.p305d2e80} fill="#4E8DF5" />
          <path d={svgPaths.p6e44400} fill="#417EE9" />
          <path d={svgPaths.p10248300} fill="#639AF6" />
          <path d={svgPaths.p1b3464f0} fill="#A6C5FA" />
          <g id="Icon">
            <path d={svgPaths.p22e25c70} fill="white" />
            <path d={svgPaths.p19680f00} fill="white" />
            <path d={svgPaths.p234bf00} fill="white" />
            <path d={svgPaths.p395be280} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default DocsIcon;
