import { svgPaths } from '@/shared/svg/paths';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function WhatsAppIcon({ className = "size-[80px]", style }: IconProps) {
  return (
    <div className={`relative bg-gradient-to-t from-[#20b038] overflow-clip rounded-[20px] to-[#60d66a] ${className}`} style={style} data-name="WhatsApp">
      <div className="absolute inset-[12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48.5268 48.5268">
          <path d={svgPaths.p27ca6d00} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p29d29570} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default WhatsAppIcon;
