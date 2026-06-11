import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
      { title: "Mozart & Laura — Nossa História" },
      { name: "description", content: "Um presente feito de música, memória e amor — de Mozart para Laura." },
      { property: "og:title", content: "Mozart & Laura — Nossa História" },
      { property: "og:description", content: "Um presente feito de música, memória e amor — de Mozart para Laura." },
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
    // start the hero background video right away, muted so autoplay is allowed
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
    <div className="relative min-h-screen overflow-hidden">
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
        {/* HERO */}
        <section id="hero" className="relative flex min-h-screen items-center justify-center px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-script text-3xl text-[color:var(--gold)] text-gold-glow sm:text-4xl"
            >
              Dia dos Namorados
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-4 font-display text-6xl font-bold leading-[0.95] text-glow sm:text-8xl md:text-9xl"
            >
              <span className="gradient-text">Mozart</span>
              <br />
              <span className="my-2 inline-block text-[color:var(--ruby)] text-glow">&</span>
              <br />
              <span className="gradient-text">Laura</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mx-auto mt-8 max-w-2xl font-display text-lg italic text-foreground/90 sm:text-2xl"
            >
              Desde 18 de janeiro de 2026, o meu mundo ganhou outro sentido.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mx-auto mt-6 max-w-2xl text-base text-foreground/75 sm:text-lg"
            >
              Laura, este site é só uma pequena tentativa de transformar em palavras, imagens e
              música tudo aquilo que eu sinto por você. Cada memória nossa virou parte do meu lugar
              favorito no mundo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-12"
            >
              <a
                href="#countdown"
                className="font-script text-2xl text-[color:var(--gold)] underline-offset-8 hover:underline"
              >
                role para baixo ↓
              </a>
            </motion.div>
          </div>
        </section>

        {/* COUNTDOWN */}
        <Section
          id="countdown"
          eyebrow="nosso tempo"
          title="Estamos construindo nossa história há…"
        >
          <Countdown />
          <p className="mx-auto mt-10 max-w-2xl text-center text-base italic text-foreground/80 sm:text-lg">
            E mesmo contando cada segundo, ainda parece pouco perto de tudo que eu quero viver com
            você.
          </p>
        </Section>

        {/* YOU ARE MY WORLD */}
        <Section eyebrow="para a minha Laura" title="Laura, você é meu mundo">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass border-glow mx-auto max-w-3xl rounded-3xl p-8 sm:p-12"
          >
            <p className="font-display text-lg leading-relaxed text-foreground/90 sm:text-xl">
              Laura, às vezes eu fico pensando em como algumas pessoas chegam na nossa vida e mudam
              completamente o caminho. Você chegou assim. Sem precisar forçar nada, sem precisar
              explicar muito. De repente, tudo ficou mais bonito, mais leve e mais verdadeiro. Com
              você, eu não me sinto perdido. Eu sinto que estou exatamente onde deveria estar.
            </p>
          </motion.div>
        </Section>

        {/* GALLERY */}
        <Section eyebrow="nossa galeria" title="Cada foto, um pequeno para sempre">
          <Gallery />
        </Section>

        {/* VIDEOS */}
        <Section eyebrow="em movimento" title="Memórias que ainda se movem">
          <Videos />
        </Section>

        {/* HOMETOWN GLORY */}
        <Section eyebrow="hometown glory" title="As memórias mais bonitas do meu mundo">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass border-glow mx-auto max-w-3xl rounded-3xl p-8 sm:p-12"
          >
            <p className="font-display text-lg leading-relaxed text-foreground/90 sm:text-xl">
              Algumas músicas falam sobre lugares, ruas, lembranças e pessoas que fazem parte da
              nossa história. Mas quando eu penso em tudo isso, eu penso em você. Porque, no fim,
              Laura, o meu lugar favorito não é uma cidade, uma rua ou uma paisagem. É qualquer
              lugar onde você esteja.
            </p>
          </motion.div>
        </Section>

        {/* 2 MUCH */}
        <Section eyebrow="2 much" title="Dois segundos longe de você já parecem demais">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass border-glow mx-auto max-w-3xl rounded-3xl p-8 sm:p-12"
          >
            <p className="font-display text-lg leading-relaxed text-foreground/90 sm:text-xl">
              Eu poderia passar horas olhando para você e ainda achar que foi pouco. Poderia ouvir
              seu nome mil vezes e ainda sentir como se fosse música. Com você, até o silêncio tem
              sentido. E se a eternidade existisse só para nós dois, eu ainda acharia pouco para te
              amar.
            </p>
          </motion.div>
        </Section>

        {/* TIMELINE */}
        <Section eyebrow="nossa linha do tempo" title="Capítulos da nossa história">
          <Timeline />
        </Section>

        {/* LETTER */}
        <Section eyebrow="uma carta" title="Laura, essa parte é só para você">
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

        {/* FINALE */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-24 text-center">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="animate-aurora absolute left-1/2 top-1/2 h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
              style={{ background: "oklch(0.55 0.26 22 / 0.45)" }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="font-display text-5xl font-bold leading-tight text-glow sm:text-8xl">
              <span className="gradient-text">Eu te amo, Laura.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-display text-lg italic text-foreground/85 sm:text-2xl">
              E essa história ainda está só começando.
            </p>
            <a
              href="#hero"
              className="ruby-glow animate-pulse-glow mt-12 inline-block rounded-full bg-gradient-to-r from-[color:var(--ruby)] via-[color:var(--neon)] to-[color:var(--ruby)] px-8 py-4 font-display text-lg font-semibold text-white sm:text-xl"
            >
              Voltar ao início ↑
            </a>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="relative z-10 border-t border-[color:var(--ruby)]/20 py-10 text-center">
          <p className="font-script text-2xl text-[color:var(--gold)]">Mozart & Laura</p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            feito com amor · 2026
          </p>
        </footer>
      </motion.main>
    </div>
  );
}
