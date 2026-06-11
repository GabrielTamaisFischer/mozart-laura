import { motion } from "framer-motion";

// EDIT: change dates and stories to match real moments.
const ITEMS = [
  { date: "18 de janeiro de 2026", title: "Onde tudo começou", text: "Foi quando nossa história começou — e o meu mundo mudou de eixo." },
  { date: "Em breve", title: "Nosso primeiro momento especial", text: "Aquele instante em que tudo virou nosso para sempre." },
  { date: "Em breve", title: "Uma lembrança inesquecível", text: "Um capítulo que ainda vamos escrever juntos." },
  { date: "Em breve", title: "Um dia que ficou marcado", text: "Daqueles que a gente conta com brilho nos olhos." },
  { date: "Em breve", title: "O começo de muitos sonhos", text: "Cada plano nosso é uma promessa silenciosa." },
];

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[color:var(--ruby)] to-transparent sm:left-1/2 sm:-translate-x-1/2" />
      <div className="space-y-10">
        {ITEMS.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative flex sm:items-center ${i % 2 ? "sm:flex-row-reverse" : ""}`}
          >
            <div className="ml-12 flex-1 sm:ml-0 sm:w-1/2 sm:px-8">
              <div className="glass border-glow rounded-2xl p-5">
                <p className="font-script text-2xl text-[color:var(--gold)]">{it.date}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm italic text-foreground/80">{it.text}</p>
              </div>
            </div>
            <div className="absolute left-4 -translate-x-1/2 sm:left-1/2">
              <div className="ruby-glow animate-pulse-glow grid h-5 w-5 place-items-center rounded-full bg-[color:var(--ruby)] text-[10px] text-white">
                ♥
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
