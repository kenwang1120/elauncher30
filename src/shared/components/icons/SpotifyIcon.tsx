import { svgPaths } from '@/shared/svg/paths';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function SpotifyIcon({ className = "size-[80px]", style }: IconProps) {
  return (
    <div className={`relative ${className}`} style={style} data-name="Spotify">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Spotify">
          <rect fill="#05CD4C" height="80" rx="20" width="80" />
          <path d={svgPaths.p368d6500} fill="white" />
        </g>
      </svg>
    </div>
  );
}

export default SpotifyIcon;
