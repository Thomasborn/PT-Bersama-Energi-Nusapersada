export function BenLogo({ className = "h-10", light = false }: { className?: string, light?: boolean }) {
  return (
    <svg viewBox="0 0 360 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="ben-mask">
          <rect x="0" y="0" width="180" height="100" fill="white" />
          <rect x="0" y="38" width="180" height="4" fill="black" />
          <rect x="0" y="58" width="180" height="4" fill="black" />
        </mask>
      </defs>
      
      {/* BEN text */}
      <text x="10" y="80" fill="#F26522" fontStyle="italic" fontWeight="900" fontFamily="Arial, sans-serif" fontSize="80" mask="url(#ben-mask)">
        BEN
      </text>
      
      {/* BERSAMA ENERGI NUSAPERSADA */}
      <g fill={light ? "#FFFFFF" : "#333333"} fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" className="transition-colors duration-300">
        <text x="185" y="38">BERSAMA</text>
        <text x="185" y="60">ENERGI</text>
        <text x="185" y="82">NUSAPERSADA</text>
      </g>
    </svg>
  );
}

export function BenIcon({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 160 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="ben-icon-mask">
          <rect x="0" y="0" width="160" height="100" fill="white" />
          <rect x="0" y="38" width="160" height="4" fill="black" />
          <rect x="0" y="58" width="160" height="4" fill="black" />
        </mask>
      </defs>
      <text x="0" y="80" fill={color} fontStyle="italic" fontWeight="900" fontFamily="Arial, sans-serif" fontSize="80" mask="url(#ben-icon-mask)">
        BEN
      </text>
    </svg>
  );
}
