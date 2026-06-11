import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import song from "@/assets/hometown-glory.mp3.asset.json";

// Floating music player. To replace the soundtrack, swap the asset import above.
export function MusicPlayer({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.35);

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
        <div className="glass flex items-center gap-3 rounded-full px-3 py-2 sm:gap-4 sm:px-4 sm:py-3">
          <button
            onClick={onToggle}
            aria-label={playing ? "Pausar" : "Tocar"}
            className="ruby-glow grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--ruby)] text-white transition-transform hover:scale-110"
          >
            {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>
          <div className="hidden flex-col sm:flex">
            <span className="font-script text-base leading-none text-[color:var(--gold)]">
              Nossa trilha sonora
            </span>
            <span className="text-xs italic text-muted-foreground">Hometown Glory · Adele</span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <Volume2 size={16} className="text-[color:var(--gold)]" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="h-1 w-20 cursor-pointer appearance-none rounded-full bg-[color:var(--wine)] accent-[color:var(--ruby)]"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
    </>
  );
}
