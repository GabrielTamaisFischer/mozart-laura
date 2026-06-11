import { useEffect, useState } from "react";

type Heart = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
};

// Floating heart particles — client-only to avoid SSR hydration mismatches.
export function HeartParticles({ count = 22 }: { count?: number }) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    setHearts(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 18,
        size: 8 + Math.random() * 18,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    );
  }, [count]);

  if (!hearts.length) return null;

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
