import { useMemo } from "react";

// Floating heart particles in the background
export function HeartParticles({ count = 18 }: { count?: number }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 18,
        size: 8 + Math.random() * 18,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="animate-float-heart absolute bottom-0 text-[color:var(--ruby)]"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            filter: "drop-shadow(0 0 8px oklch(0.62 0.24 25 / 0.8))",
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
