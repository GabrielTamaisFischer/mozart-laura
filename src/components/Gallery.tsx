import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import p1 from "@/assets/p1.jpeg.asset.json";
import p2 from "@/assets/p2.jpeg.asset.json";
import p3 from "@/assets/p3.jpeg.asset.json";
import p4 from "@/assets/p4.jpeg.asset.json";
import p5 from "@/assets/p5.jpeg.asset.json";
import p6 from "@/assets/p6.jpeg.asset.json";
import p7 from "@/assets/p7.jpeg.asset.json";
import p8 from "@/assets/p8.jpeg.asset.json";

const PHOTOS = [
  { src: p1.url, title: "Nosso beijo na ponte", caption: "Uma lembrança que eu guardaria para sempre." },
  { src: p2.url, title: "Pertinho de você", caption: "Você transforma qualquer lugar em lar." },
  { src: p3.url, title: "Nosso reflexo", caption: "Meu momento favorito sempre tem você." },
  { src: p7.url, title: "Seu sorriso", caption: "O mundo fica mais bonito quando é com você." },
  { src: p6.url, title: "À noite, com você", caption: "Pequenos instantes, memória eterna." },
  { src: p8.url, title: "Nosso cantinho", caption: "Aqui o tempo decidiu parar por nós." },
  { src: p4.url, title: "Só nós dois", caption: "Você cabe inteira no meu mundo." },
  { src: p5.url, title: "Manhãs com você", caption: "Acordar e te ver — meu lugar favorito." },
];

const TILTS = [-4, 3, -2, 4, -3, 2, -5, 3];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [auto, setAuto] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setAuto((v) => (v + 1) % PHOTOS.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-10">
        {PHOTOS.map((p, i) => (
          <motion.button
            key={p.title}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 40, rotate: TILTS[i] - 8, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, rotate: TILTS[i], scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.8, type: "spring", stiffness: 80 }}
            whileHover={{ rotate: 0, scale: 1.06, y: -8, zIndex: 10 }}
            className={`group relative block bg-white p-3 pb-14 text-left shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] transition-shadow sm:p-4 sm:pb-16 ${
              auto === i ? "ring-2 ring-[color:var(--ruby)] ring-offset-2 ring-offset-black" : ""
            }`}
            style={{ background: "linear-gradient(180deg, #fafafa 0%, #ececec 100%)" }}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, transparent 40%, oklch(0.62 0.26 25 / 0.35) 55%, transparent 75%)" }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-2 px-3 text-center sm:bottom-3">
              <p className="font-script text-xl text-neutral-800 sm:text-2xl">{p.title}</p>
              <p className="line-clamp-1 text-[10px] italic text-neutral-600 sm:text-xs">{p.caption}</p>
            </div>
            <span className="absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-3 bg-[color:var(--ruby)]/30 backdrop-blur-sm" />
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotate: -3 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white p-4 pb-20 shadow-[0_30px_80px_-10px_rgba(229,9,20,0.4)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img src={PHOTOS[active].src} alt={PHOTOS[active].title} className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-4 px-6 text-center">
                <p className="font-script text-3xl text-neutral-800">{PHOTOS[active].title}</p>
                <p className="mt-1 italic text-neutral-600">{PHOTOS[active].caption}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/80 text-white hover:bg-[color:var(--ruby)]"
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
