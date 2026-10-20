import React from 'react';

/**
 * DaisyFlowerIcon
 * Exact 20-petal radiating Daisy Flower component matching the brand icon.
 * Features a solid round center disc surrounded by 20 symmetrical, rounded petals.
 */
export default function DaisyFlowerIcon({
  size = 32,
  color = 'var(--color-primary)',
  className = '',
  style = {}
}) {
  // 20 radiating petals spaced evenly at 18-degree increments (360 / 20 = 18)
  const petalAngles = [
    0, 18, 36, 54, 72, 90, 108, 126, 144, 162,
    180, 198, 216, 234, 252, 270, 288, 306, 324, 342
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`daisy-flower-icon ${className}`}
      aria-hidden="true"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style
      }}
    >
      <defs>
        {/* Exact rounded elongated petal shape matching the uploaded daisy graphic */}
        <path
          id="daisy-petal-geometry"
          d="M 50 3.5 C 54.5 3.5 55.6 15 54.6 28 C 53.8 36.5 52 42.5 50 44 C 48 42.5 46.2 36.5 45.4 28 C 44.4 15 45.5 3.5 50 3.5 Z"
          fill={color}
        />
      </defs>

      {/* 20 Petals radiating symmetrically */}
      <g>
        {petalAngles.map((angle) => (
          <use
            key={angle}
            href="#daisy-petal-geometry"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </g>

      {/* Center Circular Disc */}
      <circle cx="50" cy="50" r="14.5" fill={color} />
    </svg>
  );
}
