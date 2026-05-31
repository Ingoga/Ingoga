interface DotPatternProps {
  position: 'top-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
  rotate?: boolean;
}

export default function DotPattern({ 
  position, 
  size = 'md', 
  opacity = 0.3,
  rotate = true 
}: DotPatternProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  const patternSizes = {
    sm: { width: 8, height: 8, cx: 2, cy: 2, r: 1 },
    md: { width: 4, height: 4, cx: 1.6, cy: 1.6, r: 0.8 },
    lg: { width: 4, height: 4, cx: 1.6, cy: 1.6, r: 0.8 }
  };

  const positionClasses = {
    'top-center': 'top-42 left-1/2 -translate-x-1/2',
    'top-left': 'top-32 left-20',
    'top-right': 'top-32 right-20',
    'bottom-left': 'bottom-48 left-20',
    'bottom-right': 'bottom-48 right-20',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  const patternId = `dots-${position}-${Math.random().toString(36).substring(2, 11)}`;
  const patternSize = patternSizes[size];

  return (
    <div 
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${rotate ? '-rotate-45' : ''}`}
      style={{ opacity }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <defs>
          <pattern 
            id={patternId} 
            x="0" 
            y="0" 
            width={patternSize.width} 
            height={patternSize.height} 
            patternUnits="userSpaceOnUse"
          >
            <circle 
              cx={patternSize.cx} 
              cy={patternSize.cy} 
              r={patternSize.r} 
              fill="#666" 
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
