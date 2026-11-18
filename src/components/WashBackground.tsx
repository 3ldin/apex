// Animated before/after "soft wash" backdrop. Pure CSS + SVG, no JS, no images.
// A spray line sweeps across: dirty house -> clean house -> back again, forever.

function House({ clean }: { clean: boolean }) {
  const c = clean
    ? { roof: "#3d6a9c", roofHi: "#5b8cc2", wall: "#d9ebf9", trim: "#ffffff", win: "#8fd0ff", door: "#1E90FF", chim: "#b8cfe3", ground: "#16324f", shrub: "#2e7d5b" }
    : { roof: "#262b27", roofHi: "#33392f", wall: "#59605a", trim: "#454b45", win: "#1b2225", door: "#2c3430", chim: "#3b413b", ground: "#101a22", shrub: "#2a3a2a" };

  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {/* ground */}
      <rect x="0" y="700" width="1600" height="200" fill={c.ground} />
      {/* driveway */}
      <polygon points="760,700 900,700 1040,900 700,900" fill={clean ? "#aebfcf" : "#2b2f31"} />

      {/* chimney */}
      <rect x="930" y="230" width="70" height="140" fill={c.chim} />
      <rect x="920" y="222" width="90" height="14" fill={c.trim} />

      {/* walls */}
      <rect x="500" y="430" width="600" height="270" fill={c.wall} />
      {/* garage wing */}
      <rect x="1100" y="520" width="240" height="180" fill={c.wall} />
      <polygon points="1090,520 1220,440 1350,520" fill={c.roof} />

      {/* main roof */}
      <polygon points="440,440 800,200 1160,440" fill={c.roof} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <polyline
          key={i}
          points={`${470 + i * 8},${425 - i * 38} ${800},${215 - i * 0} ${1130 - i * 8},${425 - i * 38}`}
          fill="none"
          stroke={c.roofHi}
          strokeWidth="2"
          opacity="0.0"
        />
      ))}
      {[250, 290, 330, 370, 410].map((y) => (
        <line key={y} x1={800 - (y - 200) * 1.5} y1={y} x2={800 + (y - 200) * 1.5} y2={y} stroke={c.roofHi} strokeWidth="2" opacity="0.55" />
      ))}
      <polygon points="440,440 800,200 1160,440 1160,452 800,212 440,452" fill={c.trim} opacity={clean ? 1 : 0.7} />

      {/* windows */}
      {[560, 920].map((x) => (
        <g key={x}>
          <rect x={x} y="490" width="120" height="110" fill={c.trim} />
          <rect x={x + 8} y="498" width="104" height="94" fill={c.win} />
          <line x1={x + 60} y1="498" x2={x + 60} y2="592" stroke={c.trim} strokeWidth="5" />
          <line x1={x + 8} y1="545" x2={x + 112} y2="545" stroke={c.trim} strokeWidth="5" />
        </g>
      ))}
      {/* door */}
      <rect x="745" y="520" width="110" height="180" fill={c.trim} />
      <rect x="753" y="528" width="94" height="172" fill={c.door} />
      <circle cx="833" cy="615" r="5" fill={c.trim} />
      {/* garage door */}
      <rect x="1130" y="570" width="180" height="130" fill={clean ? "#bcd6ea" : "#3a403b"} />
      {[600, 630, 660].map((y) => (
        <line key={y} x1="1130" y1={y} x2="1310" y2={y} stroke={c.trim} strokeWidth="3" opacity="0.7" />
      ))}
      {/* shrubs */}
      {[470, 640, 1000, 1070].map((x) => (
        <ellipse key={x} cx={x} cy="690" rx="45" ry="30" fill={c.shrub} />
      ))}

      {/* GRIME - only on the dirty scene */}
      {!clean && (
        <g>
          {/* black algae streaks down the roof */}
          {[560, 620, 690, 740, 810, 870, 940, 1010, 1070].map((x, i) => (
            <path
              key={x}
              d={`M${x} ${330 + (i % 3) * 25} q ${i % 2 ? 10 : -10} 45 0 ${90 + (i % 4) * 20}`}
              stroke="#0c0f0c"
              strokeWidth={14 + (i % 3) * 6}
              strokeLinecap="round"
              fill="none"
              opacity="0.55"
            />
          ))}
          {/* moss patches */}
          {[[700, 330], [900, 300], [620, 400], [1020, 400], [820, 380]].map(([x, y], i) => (
            <ellipse key={i} cx={x} cy={y} rx={34 + i * 4} ry={14} fill="#3f5a2a" opacity="0.6" />
          ))}
          {/* wall stains */}
          {[540, 700, 880, 1040].map((x, i) => (
            <rect key={x} x={x} y={452} width={26 + i * 6} height={170 + i * 14} fill="#2a2f2a" opacity="0.28" rx="12" />
          ))}
          <rect x="500" y="640" width="600" height="60" fill="#1c211c" opacity="0.35" />
          <rect x="1100" y="640" width="240" height="60" fill="#1c211c" opacity="0.35" />
        </g>
      )}
    </svg>
  );
}

export default function WashBackground() {
  return (
    <div className="wash-bg absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* BEFORE (dirty) is always underneath */}
      <div className="absolute inset-0">
        <House clean={false} />
      </div>

      {/* AFTER (clean) is revealed by the sweeping clip */}
      <div className="wash-reveal absolute inset-0">
        <House clean />
      </div>

      {/* glowing spray line riding the reveal edge */}
      <div className="wash-line absolute top-0 bottom-0 w-24 -ml-12">
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-apex-bright shadow-[0_0_30px_12px_rgba(56,182,255,0.55)]" />
        <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-transparent via-apex-bright/25 to-transparent blur-xl" />
      </div>

      {/* labels */}
      <span className="wash-label-before absolute bottom-24 left-6 text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70 border border-white/30 rounded-full px-3 py-1">
        Before
      </span>
      <span className="wash-label-after absolute bottom-24 right-6 text-[10px] font-semibold tracking-[0.3em] uppercase text-apex-bright border border-apex-bright/50 rounded-full px-3 py-1">
        After
      </span>

      {/* readability overlay so hero text stays sharp */}
      <div className="absolute inset-0 bg-apex-blue/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,19,32,0.75)_0%,rgba(7,19,32,0.15)_70%)]" />
    </div>
  );
}
