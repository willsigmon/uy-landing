export function TriangleMap() {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        viewBox="0 0 200 80"
        className="h-16 w-40 sm:h-20 sm:w-48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Triangle region of North Carolina highlighting Wake, Durham, Orange, Johnston, and Chatham counties"
        role="img"
      >
        {/* Simplified NC state outline */}
        <path
          d="M10 25 L30 15 L60 12 L90 10 L120 8 L150 12 L170 18 L190 30 L185 35 L175 32 L165 38 L155 42 L140 40 L125 45 L110 48 L95 50 L80 48 L65 52 L50 48 L35 45 L20 40 L10 35 Z"
          fill="var(--muted)"
          stroke="var(--border)"
          strokeWidth="1.5"
          opacity="0.5"
        />
        {/* Triangle region highlight — central NC blob for the 5 counties */}
        <ellipse
          cx="105"
          cy="32"
          rx="22"
          ry="14"
          fill="var(--primary)"
          opacity="0.35"
          stroke="var(--primary)"
          strokeWidth="1.5"
        />
        {/* Triangle pin dot */}
        <circle cx="105" cy="32" r="3" fill="var(--primary)" />
        {/* Raleigh label */}
        <text
          x="105"
          y="55"
          textAnchor="middle"
          className="fill-foreground"
          fontSize="8"
          fontWeight="700"
          fontFamily="var(--font-sans)"
        >
          THE TRIANGLE
        </text>
      </svg>
    </div>
  );
}
