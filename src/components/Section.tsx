import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <p className="font-display text-sm uppercase tracking-[0.35em] text-[color:var(--gold)] text-gold-glow sm:text-base">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mx-auto mt-4 max-w-4xl text-balance font-display text-4xl font-light leading-tight text-foreground text-glow sm:text-5xl md:text-6xl">
              {title}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
