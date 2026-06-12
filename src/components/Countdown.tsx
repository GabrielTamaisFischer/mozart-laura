import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const START = new Date("2026-01-18T00:00:00");

function diff(now: Date) {
  let years = now.getFullYear() - START.getFullYear();
  let months = now.getMonth() - START.getMonth();
  let days = now.getDate() - START.getDate();
  let hours = now.getHours() - START.getHours();
  let minutes = now.getMinutes() - START.getMinutes();
  let seconds = now.getSeconds() - START.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prev = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prev; months--;
  }
  if (months < 0) { months += 12; years--; }
  return { years, months, days, hours, minutes, seconds };
}

export function Countdown() {
  const [t, setT] = useState(() => diff(new Date()));
  useEffect(() => {
    const id = setInterval(() => setT(diff(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  const units: [string, number][] = [
    ["anos", t.years],
    ["meses", t.months],
    ["dias", t.days],
    ["horas", t.hours],
    ["minutos", t.minutes],
    ["segundos", t.seconds],
  ];

  const future = new Date() < START;

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3 sm:gap-5 md:grid-cols-6">
      {units.map(([label, value], i) => {
        const display = future ? "00" : String(Math.max(0, value)).padStart(2, "0");
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass ring-glow flex flex-col items-center rounded-2xl px-2 py-5 sm:py-7"
            style={{ animation: `pulse-glow ${3 + i * 0.28}s ease-in-out infinite` }}
          >
            <span className="font-mono text-3xl font-semibold tabular-nums text-[color:var(--ruby)] text-glow sm:text-5xl">
              {display}
            </span>
            <span className="mt-2 font-display text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:text-xs">
              {label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
