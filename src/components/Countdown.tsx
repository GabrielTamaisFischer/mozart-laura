import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Start date: 18 January 2026
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
    ["min", t.minutes],
    ["seg", t.seconds],
  ];

  const future = new Date() < START;

  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
      {units.map(([label, value], i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass border-glow flex flex-col items-center rounded-2xl px-2 py-4 sm:py-6"
        >
          <span className="font-display text-3xl font-bold text-glow tabular-nums text-[color:var(--gold)] sm:text-5xl">
            {future ? 0 : Math.max(0, value)}
          </span>
          <span className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
