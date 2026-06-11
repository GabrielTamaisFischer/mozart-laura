import { motion } from "framer-motion";

export function Intro({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      style={{ background: "radial-gradient(ellipse at center, oklch(0.1 0.08 20) 0%, oklch(0.01 0.01 20) 70%)" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-aurora absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
             style={{ background: "oklch(0.55 0.28 22 / 0.45)" }} />
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 max-w-xl text-center"
      >
        <p className="font-script text-2xl text-[color:var(--gold)] text-gold-glow sm:text-3xl">
          Para você, Laura
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-glow sm:text-7xl">
          <span className="gradient-text">Mozart</span>
          <span className="mx-2 text-[color:var(--ruby)]">&</span>
          <span className="gradient-text">Laura</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base italic text-foreground/80 sm:text-lg">
          Um pequeno mundo feito de música, memória e amor. Pronta para entrar?
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onEnter}
          className="ruby-glow animate-pulse-glow mt-10 rounded-full bg-gradient-to-r from-[color:var(--ruby)] via-[color:var(--neon)] to-[color:var(--ruby)] px-8 py-4 font-display text-lg font-semibold tracking-wide text-white sm:text-xl"
        >
          Entrar na nossa história ♥
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
