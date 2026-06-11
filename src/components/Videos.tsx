import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

const VIDEOS = [
  { src: heroVideo.url, title: "Nosso vídeo especial", caption: "Um instante que eu quero reviver para sempre." },
];

export function Videos() {
  return (
    <div className="grid place-items-center gap-6">
      {VIDEOS.map((v, i) => (
        <VideoCard key={i} {...v} index={i} />
      ))}
    </div>
  );
}

function VideoCard({ src, title, caption, index }: { src: string; title: string; caption: string; index: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="border-glow group relative w-full max-w-2xl overflow-hidden rounded-3xl bg-black"
    >
      <div className="relative aspect-[9/16] max-h-[80vh] bg-black">
        <video ref={ref} src={src} playsInline loop preload="metadata" className="h-full w-full object-cover" onClick={toggle} />
        <button
          onClick={toggle}
          className={`absolute inset-0 flex items-center justify-center transition-opacity ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
          aria-label={playing ? "Pausar" : "Reproduzir"}
        >
          <span className="ruby-glow grid h-20 w-20 place-items-center rounded-full bg-[color:var(--ruby)]/90 backdrop-blur transition-transform group-hover:scale-110">
            {playing ? <Pause size={32} className="text-white" fill="white" /> : <Play size={32} className="ml-1 text-white" fill="white" />}
          </span>
        </button>
      </div>
      <div className="p-5">
        <p className="font-display text-xl font-semibold text-[color:var(--gold)]">{title}</p>
        <p className="mt-1 text-sm italic text-foreground/80">{caption}</p>
      </div>
    </motion.div>
  );
}
