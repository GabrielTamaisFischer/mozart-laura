import { useEffect, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -260, y: -260 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed z-[1] hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px] transition-transform duration-200 ease-out md:block"
      style={{
        left: pos.x,
        top: pos.y,
        background: "radial-gradient(circle, oklch(0.55 0.25 22 / 0.16) 0%, transparent 64%)",
      }}
    />
  );
}
