// Animated red aurora background blobs
export function AuroraBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="animate-aurora absolute -left-1/4 top-0 h-[60vh] w-[60vh] rounded-full blur-[120px]"
        style={{ background: "oklch(0.55 0.26 22 / 0.35)" }}
      />
      <div
        className="animate-aurora absolute right-0 top-1/3 h-[70vh] w-[70vh] rounded-full blur-[140px]"
        style={{ background: "oklch(0.4 0.2 18 / 0.4)", animationDelay: "4s" }}
      />
      <div
        className="animate-aurora absolute bottom-0 left-1/3 h-[50vh] w-[50vh] rounded-full blur-[120px]"
        style={{ background: "oklch(0.62 0.24 25 / 0.3)", animationDelay: "8s" }}
      />
    </div>
  );
}
