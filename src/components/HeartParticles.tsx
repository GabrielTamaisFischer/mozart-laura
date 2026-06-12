import { useEffect, useState } from "react";

type Heart = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
};

export function HeartParticles({ count = 18 }: { count?: number }) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const total = window.innerWidth < 768 ? Math.min(10, count) : count;
    setHearts(
      Array.from({ length: total }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 18,
        duration: 13 + Math.random() * 17,
        size: 10 + Math.random() * 20,
        opacity: 0.14 + Math.random() * 0.32,
      })),
    );
  }, [count]);

  if (!hearts.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="animate-float-heart absolute bottom-[-40px] text-[color:var(--ruby)]"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            filter: "drop-shadow(0 0 8px oklch(0.55 0.25 22 / 0.65))",
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
