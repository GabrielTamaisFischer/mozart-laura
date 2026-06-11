import { motion } from "framer-motion";
import { Play } from "lucide-react";

// REPLACE: add `src` to each video to enable real playback.
const VIDEOS = [
  { title: "Nosso vídeo especial", caption: "Um instante que eu quero reviver para sempre." },
  { title: "Um momento nosso", caption: "Quando o tempo decide ficar mais devagar." },
  { title: "Uma memória em movimento", caption: "Pequenos detalhes, lembranças eternas." },
];

export function Videos() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {VIDEOS.map((v, i) => (
        <motion.div
          key={v.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1 }}
          className="border-glow group relative overflow-hidden rounded-3xl bg-black"
        >
          <div className="relative aspect-video bg-gradient-to-br from-[color:var(--wine)] via-black to-[color:var(--ruby)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.62_0.24_25_/_0.3),transparent_70%)]" />
            <button
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Reproduzir ${v.title}`}
            >
              <span className="ruby-glow grid h-20 w-20 place-items-center rounded-full bg-[color:var(--ruby)]/90 backdrop-blur transition-transform group-hover:scale-110">
                <Play size={32} className="ml-1 text-white" fill="white" />
              </span>
            </button>
          </div>
          <div className="p-5">
            <p className="font-display text-xl font-semibold text-[color:var(--gold)]">{v.title}</p>
            <p className="mt-1 text-sm italic text-foreground/80">{v.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
