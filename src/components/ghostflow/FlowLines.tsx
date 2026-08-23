export function FlowLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id="gf-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--turquoise)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--turquoise)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--turquoise)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="flow-drift" fill="none" stroke="url(#gf-line)" strokeWidth="1.2">
        <path d="M-40 180 C 220 60, 420 320, 700 200 S 1080 60, 1260 190" />
        <path d="M-40 300 C 260 200, 460 470, 760 340 S 1100 220, 1260 330" />
        <path d="M-40 430 C 240 360, 500 600, 820 470 S 1120 380, 1260 470" />
        <path d="M-40 560 C 300 500, 520 700, 860 600 S 1140 520, 1260 590" />
      </g>
      <g className="flow-dash" fill="none" stroke="var(--turquoise)" strokeOpacity="0.35" strokeWidth="1">
        <path d="M-40 240 C 300 140, 520 400, 860 270 S 1140 160, 1260 250" />
        <path d="M-40 500 C 280 430, 560 650, 900 530 S 1160 450, 1260 520" />
      </g>
      <g fill="var(--turquoise)">
        {[
          [180, 168],
          [420, 300],
          [700, 205],
          [905, 128],
          [300, 470],
          [820, 470],
          [1060, 350],
          [560, 592],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 3.4 : 2.2} opacity={0.75}>
            <animate
              attributeName="opacity"
              values="0.2;0.9;0.2"
              dur={`${4 + i * 0.7}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  );
}
