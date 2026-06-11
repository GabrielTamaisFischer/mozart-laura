import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Camera, Film, Heart, Sparkles, Star } from "lucide-react";
import p1 from "@/assets/p1.jpeg.asset.json";
import p2 from "@/assets/p2.jpeg.asset.json";
import p3 from "@/assets/p3.jpeg.asset.json";
import p4 from "@/assets/p4.jpeg.asset.json";
import p5 from "@/assets/p5.jpeg.asset.json";
import p6 from "@/assets/p6.jpeg.asset.json";
import p7 from "@/assets/p7.jpeg.asset.json";
import p8 from "@/assets/p8.jpeg.asset.json";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

type MemoryMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

type TimelineMoment = {
  chapter: string;
  date: string;
  title: string;
  text: string;
  vow: string;
  tags: string[];
  icon: LucideIcon;
  media: MemoryMedia;
  gallery: string[];
  glow: string;
};

const MOMENTS: TimelineMoment[] = [
  {
    chapter: "Capitulo 01",
    date: "18 de janeiro de 2026",
    title: "Onde tudo comecou",
    text: "Foi quando nossa historia comecou e o meu mundo mudou de eixo. A partir dali, qualquer lugar passou a ter mais sentido quando era com voce.",
    vow: "O dia em que meu coracao reconheceu o caminho.",
    tags: ["primeiro sim", "inicio", "destino"],
    icon: Heart,
    media: { type: "image", src: p1.url, alt: "Mozart e Laura em um beijo especial" },
    gallery: [p2.url, p3.url],
    glow: "oklch(0.58 0.25 23 / 0.48)",
  },
  {
    chapter: "Capitulo 02",
    date: "Depois daquele dia",
    title: "Tudo ficou mais nosso",
    text: "Os momentos simples ganharam brilho: uma foto, uma risada, um abraco apertado, uma vontade imensa de ficar mais um pouco.",
    vow: "Quando o comum virou lembranca bonita.",
    tags: ["risadas", "carinho", "nosso jeito"],
    icon: Camera,
    media: { type: "video", src: heroVideo.url, alt: "Video especial de Mozart e Laura" },
    gallery: [p4.url, p5.url],
    glow: "oklch(0.73 0.18 74 / 0.42)",
  },
  {
    chapter: "Capitulo 03",
    date: "Nossos detalhes",
    title: "A vida cabendo num olhar",
    text: "Eu guardo os detalhes que talvez parecam pequenos para o mundo, mas que para mim viraram prova: seu sorriso, seu jeito, sua presenca.",
    vow: "Voce transforma segundos em para sempre.",
    tags: ["sorriso", "presenca", "calma"],
    icon: Sparkles,
    media: { type: "image", src: p7.url, alt: "Laura sorrindo em uma lembranca especial" },
    gallery: [p6.url, p8.url],
    glow: "oklch(0.65 0.2 336 / 0.36)",
  },
  {
    chapter: "Capitulo 04",
    date: "Uma lembranca inesquecivel",
    title: "O mundo parando para nos dois",
    text: "Tem lembranca que parece cena de filme, daquelas que a gente volta na mente so para sentir tudo outra vez.",
    vow: "Se eu pudesse, repetia esse instante em loop.",
    tags: ["beijo", "filme", "magia"],
    icon: Film,
    media: { type: "image", src: p4.url, alt: "Mozart e Laura em um momento romantico" },
    gallery: [p1.url, p6.url],
    glow: "oklch(0.55 0.22 252 / 0.34)",
  },
  {
    chapter: "Capitulo 05",
    date: "O comeco de muitos sonhos",
    title: "Tudo que ainda vamos viver",
    text: "Cada plano nosso e uma promessa silenciosa. E eu quero estar ao seu lado em cada pagina que ainda vamos escrever.",
    vow: "A nossa historia ainda esta so florescendo.",
    tags: ["planos", "futuro", "para sempre"],
    icon: Star,
    media: { type: "image", src: p8.url, alt: "Mozart e Laura em uma memoria carinhosa" },
    gallery: [p2.url, p7.url],
    glow: "oklch(0.72 0.16 118 / 0.32)",
  },
];

const FLOATING_HEARTS = [
  { top: "7%", left: "6%", delay: 0 },
  { top: "24%", right: "4%", delay: 0.6 },
  { top: "48%", left: "2%", delay: 1.1 },
  { top: "72%", right: "7%", delay: 1.7 },
  { top: "90%", left: "10%", delay: 2.2 },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 78%", "end 28%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-6xl">
      <div className="pointer-events-none absolute inset-x-0 -top-12 h-64 overflow-hidden rounded-full opacity-70 blur-3xl">
        <motion.div
          className="h-full w-full"
          animate={{ x: ["-12%", "12%", "-12%"], opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "linear-gradient(90deg, transparent, oklch(0.58 0.25 23 / 0.4), oklch(0.78 0.16 80 / 0.35), transparent)" }}
        />
      </div>

      {FLOATING_HEARTS.map((heart) => (
        <motion.span
          key={`${heart.top}-${heart.delay}`}
          className="pointer-events-none absolute hidden font-script text-3xl text-[color:var(--ruby)]/50 sm:block"
          style={{ top: heart.top, left: heart.left, right: heart.right }}
          animate={{ y: [0, -18, 0], rotate: [-8, 8, -8], opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 4.5, delay: heart.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          ♥
        </motion.span>
      ))}

      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {MOMENTS.map((moment, index) => (
          <button
            key={moment.chapter}
            type="button"
            onClick={() => document.getElementById(`timeline-moment-${index}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
            className={`h-9 min-w-9 rounded-full border px-3 font-display text-xs uppercase tracking-[0.18em] transition sm:h-10 ${
              active === index
                ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-black shadow-[0_0_30px_oklch(0.76_0.16_80_/_0.35)]"
                : "border-white/15 bg-white/5 text-foreground/60 hover:border-[color:var(--ruby)]/70 hover:text-white"
            }`}
            aria-label={`Ir para ${moment.chapter}`}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

      <div className="absolute bottom-28 left-5 top-16 w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2">
        <motion.div
          className="h-full w-full origin-top bg-gradient-to-b from-[color:var(--ruby)] via-[color:var(--gold)] to-[color:var(--neon)] shadow-[0_0_24px_oklch(0.58_0.25_23_/_0.75)]"
          style={{ scaleY }}
        />
      </div>

      <div className="relative space-y-16 sm:space-y-24">
        {MOMENTS.map((moment, index) => {
          const flipped = index % 2 === 1;
          const Icon = moment.icon;

          return (
            <motion.article
              id={`timeline-moment-${index}`}
              key={moment.chapter}
              onViewportEnter={() => setActive(index)}
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative pl-12 lg:pl-0"
            >
              <div className="absolute left-5 top-8 z-20 -translate-x-1/2 lg:left-1/2">
                <motion.div
                  className="ruby-glow grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-xl"
                  animate={active === index ? { scale: [1, 1.14, 1], boxShadow: ["0 0 22px oklch(0.58 0.25 23 / 0.45)", "0 0 44px oklch(0.76 0.16 80 / 0.65)", "0 0 22px oklch(0.58 0.25 23 / 0.45)"] } : { scale: 1 }}
                  transition={{ duration: 1.6, repeat: active === index ? Infinity : 0 }}
                >
                  <Icon size={22} />
                </motion.div>
              </div>

              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] lg:items-center lg:gap-8">
                <MediaStage moment={moment} index={index} flipped={flipped} />
                <StoryPanel moment={moment} index={index} flipped={flipped} />
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative mt-20 pl-12 lg:pl-0"
      >
        <div className="absolute left-5 top-7 z-20 -translate-x-1/2 lg:left-1/2">
          <div className="ruby-glow animate-pulse-glow grid h-12 w-12 place-items-center rounded-full bg-[color:var(--ruby)] text-white">
            ♥
          </div>
        </div>
        <div className="glass border-glow mx-auto max-w-3xl rounded-[2rem] p-6 text-center sm:p-9">
          <p className="font-script text-3xl text-[color:var(--gold)] text-gold-glow sm:text-4xl">E ainda tem tanto pela frente</p>
          <p className="mx-auto mt-4 max-w-2xl font-display text-base italic leading-relaxed text-foreground/85 sm:text-xl">
            Laura, essa linha do tempo nao termina aqui. Ela so abre espaco para todos os proximos dias em que eu vou escolher voce de novo.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function MediaStage({ moment, index, flipped }: { moment: TimelineMoment; index: number; flipped: boolean }) {
  return (
    <motion.div
      className={`relative ${flipped ? "lg:col-start-3" : "lg:col-start-1"}`}
      whileHover={{ y: -8, rotate: flipped ? 1.5 : -1.5 }}
      transition={{ type: "spring", stiffness: 130, damping: 16 }}
    >
      <div
        className="pointer-events-none absolute -inset-5 rounded-[2.5rem] opacity-70 blur-3xl"
        style={{ background: `radial-gradient(circle at 50% 50%, ${moment.glow}, transparent 64%)` }}
      />
      <div className="border-glow relative overflow-hidden rounded-[2rem] bg-black shadow-[0_28px_90px_-32px_rgba(0,0,0,0.95)]">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/5]">
          {moment.media.type === "video" ? (
            <video
              src={moment.media.src}
              aria-label={moment.media.alt}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          ) : (
            <img src={moment.media.src} alt={moment.media.alt} loading="lazy" className="h-full w-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <motion.div
            className="absolute inset-0 opacity-0 mix-blend-screen"
            animate={{ opacity: [0, 0.32, 0], x: ["-55%", "55%", "55%"] }}
            transition={{ duration: 4.8, delay: index * 0.45, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.55) 50%, transparent 65%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/80 backdrop-blur">
                memoria {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full bg-[color:var(--ruby)]/80 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur">
                {moment.media.type === "video" ? "video" : "foto"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <MiniPhoto src={moment.gallery[0]} alt="Detalhe da nossa historia" className="-right-4 -top-5 rotate-6" />
      <MiniPhoto src={moment.gallery[1]} alt="Outra lembranca nossa" className="-bottom-6 -left-4 -rotate-6" />
    </motion.div>
  );
}

function StoryPanel({ moment, index, flipped }: { moment: TimelineMoment; index: number; flipped: boolean }) {
  return (
    <div className={`${flipped ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-3"}`}>
      <motion.div
        className="glass border-glow relative overflow-hidden rounded-[2rem] p-5 sm:p-7"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl" style={{ background: moment.glow }} />
        <div className="relative">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-[color:var(--gold)]/35 bg-[color:var(--gold)]/10 px-3 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-[color:var(--gold)]">
              {moment.chapter}
            </span>
            <span className="font-display text-xs text-foreground/50">0{index + 1}/05</span>
          </div>
          <p className="font-script text-3xl leading-tight text-[color:var(--gold)] text-gold-glow sm:text-4xl">{moment.date}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">{moment.title}</h3>
          <p className="mt-4 font-display text-base leading-relaxed text-foreground/82 sm:text-lg">{moment.text}</p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
            <p className="font-script text-2xl text-[color:var(--ruby)] sm:text-3xl">{moment.vow}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {moment.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs italic text-foreground/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MiniPhoto({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <motion.div
      className={`absolute hidden w-24 rounded-xl border border-white/20 bg-white/10 p-1 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.95)] backdrop-blur sm:block sm:w-32 ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-black">
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
}
