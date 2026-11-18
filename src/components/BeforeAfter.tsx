"use client";
import { useState } from "react";
import Image from "next/image";

export default function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg select-none touch-pan-y">
      {/* AFTER underneath */}
      <Image src={after} alt={`${alt} - after`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      {/* BEFORE on top, clipped to the left of the handle */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`${alt} - before`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>

      <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-[0.25em] uppercase bg-black/60 text-white px-3 py-1 rounded-full">Before</span>
      <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-[0.25em] uppercase bg-apex-accent text-white px-3 py-1 rounded-full">After</span>

      {/* handle */}
      <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-apex-blue flex items-center justify-center text-sm font-bold shadow-lg">
          ⇆
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}
