export function AuroraBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[color:var(--background)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.22),transparent_22%,transparent_68%,rgba(0,0,0,0.78))]" />
      <div
        className="animate-aurora absolute -left-1/4 top-0 h-[72vh] w-[72vh] rounded-full blur-[120px]"
        style={{ background: "oklch(0.55 0.25 22 / 0.3)" }}
      />
      <div
        className="animate-aurora absolute right-0 top-1/3 h-[62vh] w-[62vh] rounded-full blur-[130px]"
        style={{ background: "oklch(0.3 0.13 18 / 0.5)", animationDelay: "4s" }}
      />
      <div
        className="animate-aurora absolute bottom-0 left-1/3 h-[55vh] w-[55vh] rounded-full blur-[120px]"
        style={{ background: "oklch(0.55 0.25 22 / 0.24)", animationDelay: "8s" }}
      />
    </div>
  );
}
