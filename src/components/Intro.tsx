import { motion } from "framer-motion";

export function Intro({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden px-6 bg-[color:var(--background)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.3_0.15_20_/_0.22)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_22%,rgba(0,0,0,0.88)_100%)]" />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 max-w-2xl text-center"
      >
        <p className="font-display text-sm uppercase tracking-[0.4em] text-[color:var(--gold)] text-gold-glow sm:text-base">
          Para você, Laura
        </p>
        <h1 className="mt-6 font-display text-6xl font-light leading-none text-[color:var(--ruby)] text-glow sm:text-8xl">
          Mozart & Laura
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-pretty font-display text-lg italic leading-relaxed text-muted-foreground sm:text-xl">
          Um pequeno mundo feito de música, memória e amor. Pronta para entrar?
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onEnter}
          className="ring-glow mt-12 inline-flex items-center gap-3 rounded-full border border-[color:var(--ruby)]/55 bg-[color:var(--ruby)]/10 px-8 py-4 font-display text-lg tracking-wide text-foreground backdrop-blur-sm transition-colors hover:bg-[color:var(--ruby)]/25 sm:text-xl"
        >
          Entrar na nossa história
          <span className="text-[color:var(--ruby)]">♥</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
