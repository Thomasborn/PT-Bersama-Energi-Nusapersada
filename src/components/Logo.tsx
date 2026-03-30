export function BenLogo({ className = "h-10", light = false }: { className?: string, light?: boolean }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      <div className="h-full flex items-center overflow-visible">
        <img 
          src="/ben_exact.png" 
          alt="PT. Bersama Energi Nusapersada" 
          className="h-full w-auto object-contain scale-[1.5] transition-transform origin-center"
        />
      </div>
      <div 
        className={`flex flex-col justify-center leading-[1.0] font-bold text-[10px] md:text-[12px] tracking-tight transition-colors duration-300 ${light ? 'text-white' : 'text-[#333333]'}`}
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        <span>BERSAMA</span>
        <span>ENERGI</span>
        <span>NUSAPERSADA</span>
      </div>
    </div>
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
