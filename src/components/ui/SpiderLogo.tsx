import React from 'react';

interface SpiderLogoProps {
  size?: number;
  className?: string;
}

export const SpiderLogo: React.FC<SpiderLogoProps> = ({ size = 32, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="spiderGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF275" />
          <stop offset="50%" stopColor="#FFD21F" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
        <filter id="spiderGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#FFD21F" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Outer Hexagonal Tech Web Shield */}
      <polygon
        points="20,2 35,10 35,30 20,38 5,30 5,10"
        stroke="url(#spiderGoldGrad)"
        strokeWidth="1.5"
        strokeOpacity="0.4"
        strokeDasharray="2 2"
        fill="rgba(255, 210, 31, 0.04)"
      />

      {/* Spider Legs - Top Left & Right (Front) */}
      <path
        d="M17 14 L9 8 L5 13"
        stroke="url(#spiderGoldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 14 L31 8 L35 13"
        stroke="url(#spiderGoldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Spider Legs - Mid Upper Left & Right */}
      <path
        d="M16 18 L6 18 L3 24"
        stroke="url(#spiderGoldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 18 L34 18 L37 24"
        stroke="url(#spiderGoldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Spider Legs - Mid Lower Left & Right */}
      <path
        d="M16 23 L7 26 L5 33"
        stroke="url(#spiderGoldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 23 L33 26 L35 33"
        stroke="url(#spiderGoldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Spider Legs - Rear Left & Right */}
      <path
        d="M18 28 L11 35 L15 38"
        stroke="url(#spiderGoldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 28 L29 35 L25 38"
        stroke="url(#spiderGoldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Spider Head & GPS Pulse */}
      <circle cx="20" cy="13" r="3" fill="url(#spiderGoldGrad)" />

      {/* Spider Thorax / Abdomen Body (Central Taxi Node) */}
      <ellipse cx="20" cy="22" rx="4.5" ry="7" fill="url(#spiderGoldGrad)" filter="url(#spiderGlow)" />

      {/* Central Core Light */}
      <circle cx="20" cy="21" r="1.8" fill="#080808" />
    </svg>
  );
};
