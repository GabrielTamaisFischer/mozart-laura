import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Intro } from "@/components/Intro";
import { AuroraBg } from "@/components/AuroraBg";
import { HeartParticles } from "@/components/HeartParticles";
import { MouseGlow } from "@/components/MouseGlow";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Countdown } from "@/components/Countdown";
import { Gallery } from "@/components/Gallery";
import { Videos } from "@/components/Videos";
import { Timeline } from "@/components/Timeline";
import { Section } from "@/components/Section";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mozart & Laura - Nossa História" },
      { name: "description", content: "Um presente feito de música, memória e amor - de Mozart para Laura." },
      { property: "og:title", content: "Mozart & Laura - Nossa História" },
      { property: "og:description", content: "Um presente feito de música, memória e amor - de Mozart para Laura." },
    ],
  }),
  component: LoveSite,
});

function LoveSite() {
  const [entered, setEntered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    setEntered(true);
    setPlaying(true);
    const v = heroVideoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
    setTimeout(() => {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }, 900);
  };

  useEffect(() => {
    if (entered && heroVideoRef.current) {
      heroVideoRef.current.play().catch(() => {});
    }
  }, [entered]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[color:var(--background)]">
      <AuroraBg />
      <HeartParticles />
      <MouseGlow />

      <AnimatePresence>{!entered && <Intro onEnter={handleEnter} />}</AnimatePresence>

      {entered && <MusicPlayer playing={playing} onToggle={() => setPlaying((p) => !p)} />}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="relative z-10"
      >
        <section
          id="hero"
          className="relative flex min-h-[108vh] items-center justify-center overflow-hidden px-5 pb-[22vh] pt-24 sm:min-h-[106vh] sm:px-8 sm:pb-[20vh]"
        >
          <video
            ref={heroVideoRef}
            src={heroVideo.url}
            playsInline
            loop
            muted
            autoPlay
            preload="auto"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[color:var(--background)]/52" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_12%,rgba(0,0,0,0.82)_96%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--background)]/88 via-transparent to-[color:var(--background)]/56" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34vh] bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.48)_46%,var(--background)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-[-10vh] h-[30vh] bg-[radial-gradient(ellipse_at_bottom,rgba(185,18,46,0.16)_0%,rgba(120,6,24,0.08)_38%,transparent_72%)] blur-2xl" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mb-4 font-display text-sm uppercase tracking-[0.4em] text-[color:var(--gold)] text-gold-glow sm:text-base"
            >
              Feliz Dia dos Namorados
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1.3, ease: "easeOut" }}
              className="font-display text-6xl font-light leading-none text-[color:var(--ruby)] text-glow sm:text-8xl md:text-9xl"
            >
              Mozart <span className="text-[color:var(--ruby)]">&</span> Laura
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-8 max-w-xl text-pretty font-display text-xl italic leading-relaxed text-foreground/90 sm:text-2xl"
            >
              Desde 18 de janeiro de 2026, o meu mundo ganhou outro sentido.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              Laura, este site é só uma pequena tentativa de transformar em palavras, imagens e música
              tudo aquilo que eu sinto por você. Cada memória nossa virou parte do meu lugar favorito
              no mundo.
            </motion.p>

            <motion.a
              href="#countdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="mt-16 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="font-display text-xs uppercase tracking-[0.3em]">Role para descobrir</span>
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
                className="text-[color:var(--ruby)]"
              >
                ↓
              </motion.span>
            </motion.a>
          </div>
        </section>

        <Section id="countdown" title="Estamos construindo nossa história há…" className="relative z-[2] -mt-14 sm:-mt-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-52 -translate-y-20 bg-[radial-gradient(ellipse_at_top,rgba(185,18,46,0.10)_0%,rgba(80,0,16,0.05)_36%,transparent_72%)] blur-2xl" />
          <Countdown />
          <p className="mx-auto mt-12 max-w-xl text-pretty text-center font-display text-lg italic leading-relaxed text-muted-foreground">
            E mesmo contando cada segundo, ainda parece pouco perto de tudo que eu quero viver com
            você.
          </p>
        </Section>

        <Section eyebrow="Para a minha Laura" title="Laura, você é meu mundo">
          <RomanticTextBlock>
            Laura, às vezes eu fico pensando em como algumas pessoas chegam na nossa vida e mudam
            completamente o caminho. Você chegou assim. Sem precisar forçar nada, sem precisar
            explicar muito. De repente, tudo ficou mais bonito, mais leve e mais verdadeiro. Com
            você, eu não me sinto perdido. Eu sinto que estou exatamente onde deveria estar.
          </RomanticTextBlock>
        </Section>

        <Section eyebrow="Nossa galeria" title="Cada foto, um pequeno para sempre">
          <Gallery />
        </Section>

        <Section eyebrow="Em movimento" title="Memórias que ainda se movem">
          <Videos />
        </Section>

        <Section eyebrow="Nosso lugar favorito" title="As memórias mais bonitas do meu mundo">
          <RomanticTextBlock>
            Algumas músicas falam sobre lugares, ruas, lembranças e pessoas que fazem parte da
            nossa história. Mas quando eu penso em tudo isso, eu penso em você. Porque, no fim,
            Laura, o meu lugar favorito não é uma cidade, uma rua ou uma paisagem. É qualquer lugar
            onde você esteja.
          </RomanticTextBlock>
        </Section>

        <Section eyebrow="Tempo demais" title="Dois segundos longe de você já parecem demais">
          <RomanticTextBlock>
            Eu poderia passar horas olhando para você e ainda achar que foi pouco. Poderia ouvir
            seu nome mil vezes e ainda sentir como se fosse música. Com você, até o silêncio tem
            sentido. E se a eternidade existisse só para nós dois, eu ainda acharia pouco para te
            amar.
          </RomanticTextBlock>
        </Section>

        <Section eyebrow="Nossa linha do tempo" title="Capítulos da nossa história">
          <Timeline />
        </Section>

        <Section eyebrow="Uma carta" title="Laura, essa parte é só para você">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass border-glow mx-auto max-w-3xl rounded-3xl p-8 sm:p-14"
          >
            <p className="font-display text-lg leading-relaxed text-foreground/95 sm:text-xl">
              Laura, eu não sei se algum dia vou conseguir explicar exatamente o que você significa
              para mim. Mas eu sei que, desde que você chegou, muita coisa em mim mudou. Você virou
              calma, virou saudade, virou vontade de estar perto, virou plano, virou lar. Eu amo o
              jeito que você existe na minha vida. Amo cada detalhe seu, cada risada, cada olhar,
              cada momento simples que fica gigante quando é com você.
            </p>
            <p className="mt-6 font-display text-lg leading-relaxed text-foreground/95 sm:text-xl">
              Obrigado por ser a minha Laura. Obrigado por ser a maravilha mais bonita do meu mundo.
            </p>
            <p className="mt-8 text-right font-script text-3xl text-[color:var(--gold)] text-gold-glow sm:text-4xl">
              Com amor, Mozart ♥
            </p>
          </motion.div>
        </Section>

        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">
          <div className="pointer-events-none absolute inset-0 bg-radial-ruby animate-pulse-glow" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative z-10 mb-8 text-6xl text-[color:var(--ruby)] text-glow"
            animate={{ scale: [1, 1.06, 1] }}
          >
            ♥
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative z-10 font-display text-5xl font-light leading-tight text-[color:var(--ruby)] text-glow sm:text-7xl md:text-8xl"
          >
            Eu te amo, Laura.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative z-10 mt-6 font-display text-xl italic text-muted-foreground sm:text-2xl"
          >
            E essa história ainda está só começando.
          </motion.p>

          <motion.a
            href="#hero"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="ring-glow relative z-10 mt-12 inline-flex items-center gap-3 rounded-full border border-[color:var(--ruby)]/55 bg-[color:var(--ruby)]/10 px-8 py-4 font-display text-lg tracking-wide text-foreground backdrop-blur-sm transition-colors hover:bg-[color:var(--ruby)]/25"
          >
            Voltar ao início
            <span className="text-[color:var(--ruby)]">↑</span>
          </motion.a>

          <p className="relative z-10 mt-20 font-display text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
            Mozart & Laura - 18.01.2026
          </p>
        </section>
      </motion.main>
    </div>
  );
}

function RomanticTextBlock({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="mx-auto max-w-2xl text-pretty font-display text-lg leading-relaxed text-muted-foreground sm:text-xl">
        {children}
      </div>
      <div className="mx-auto mt-10 flex items-center justify-center gap-4">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-[color:var(--ruby)]/60" />
        <span className="text-[color:var(--ruby)] animate-pulse-glow">♥</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-[color:var(--ruby)]/60" />
      </div>
    </motion.div>
  );
}
