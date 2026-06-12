import { useEffect, useRef, useState } from "react";
import { Music2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import song from "@/assets/hometown-glory.mp3.asset.json";

export function MusicPlayer({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.35);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
    if (playing) a.play().catch(() => {});
    else a.pause();
  }, [playing, volume]);

  return (
    <>
      <audio ref={audioRef} src={song.url} loop preload="auto" />
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <div className={`glass ring-glow flex items-center gap-3 rounded-full px-3 py-2 shadow-lg transition-all duration-500 ${expanded ? "pr-5" : ""}`}>
          <button
            onClick={onToggle}
            aria-label={playing ? "Pausar musica" : "Tocar musica"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--ruby)] text-white transition-transform hover:scale-105 active:scale-95"
          >
            {playing ? <Pause size={19} /> : <Play size={19} className="ml-0.5" />}
          </button>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-2 text-left"
            aria-label="Mostrar controle de volume"
          >
            <Music2 className="h-4 w-4 shrink-0 text-[color:var(--gold)] animate-pulse-glow" />
            <span className="hidden whitespace-nowrap font-display text-sm italic text-foreground/90 sm:inline">
              Nossa trilha sonora
            </span>
          </button>

          {expanded && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setVolume((v) => (v > 0 ? 0 : 0.35))}
                aria-label={volume > 0 ? "Silenciar" : "Ativar som"}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {volume > 0 ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="h-1 w-20 cursor-pointer appearance-none rounded-full bg-[color:var(--secondary)] accent-[color:var(--ruby)]"
                aria-label="Volume"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
