import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// REPLACE: drop real photos by changing `image` to an imported asset url.
// Each photo: { title, caption, image? }
const PHOTOS = [
  { title: "Foto 1", caption: "Uma lembrança que eu guardaria para sempre." },
  { title: "Foto 2", caption: "Você transforma qualquer lugar em lar." },
  { title: "Foto 3", caption: "Meu momento favorito sempre tem você." },
  { title: "Foto 4", caption: "O mundo fica mais bonito quando é com você." },
  { title: "Nosso momento", caption: "Pequenos instantes, memória eterna." },
  { title: "Nossa lembrança", caption: "Aqui o tempo decidiu parar por nós." },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [auto, setAuto] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setAuto((v) => (v + 1) % PHOTOS.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {PHOTOS.map((p, i) => (
          <motion.button
            key={p.title}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group relative aspect-[3/4] overflow-hidden rounded-2xl text-left ${
              auto === i ? "ruby-glow" : "border-glow"
            } transition-shadow`}
          >
            {/* PLACEHOLDER — replace with <img src={p.image}/> when ready */}
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--wine)] via-black to-[color:var(--ruby)] opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.62_0.24_25_/_0.4),transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-script text-5xl text-[color:var(--gold)] text-gold-glow opacity-70 sm:text-6xl">
                ♥
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 to-transparent p-3 sm:p-4">
              <p className="font-display text-sm font-semibold text-[color:var(--gold)] sm:text-base">
                {p.title}
              </p>
              <p className="mt-1 line-clamp-2 text-xs italic text-foreground/80 sm:text-sm">
                {p.caption}
              </p>
            </div>
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                 style={{ background: "linear-gradient(135deg, transparent 40%, oklch(0.62 0.24 25 / 0.25) 60%, transparent 80%)" }} />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="border-glow relative max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[color:var(--wine)] via-black to-[color:var(--ruby)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-script text-9xl text-[color:var(--gold)] text-gold-glow">♥</span>
                </div>
              </div>
              <div className="bg-black/80 p-6">
                <p className="font-script text-3xl text-[color:var(--gold)]">{PHOTOS[active].title}</p>
                <p className="mt-2 italic text-foreground/90">{PHOTOS[active].caption}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-white hover:bg-[color:var(--ruby)]"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
