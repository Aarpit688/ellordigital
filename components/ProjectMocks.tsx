export function BrowserChrome() {
  return (
    <div className="flex gap-1.5 px-3 py-2.5 bg-surface-2">
      <span className="w-2 h-2 rounded-full bg-[#ef7a6c]" />
      <span className="w-2 h-2 rounded-full bg-[#f0c85b]" />
      <span className="w-2 h-2 rounded-full bg-[#6ec98f]" />
    </div>
  );
}

export function AuroraMock() {
  return (
    <div
      className="p-5 min-h-[260px]"
      style={{ background: "linear-gradient(160deg, #1b2a3a, #14151a)" }}
    >
      <div className="h-2.5 w-2/5 bg-white/10 mb-5 rounded-sm" />
      <div
        className="h-4 w-[70%] mb-2.5 rounded-sm opacity-70"
        style={{ background: "linear-gradient(90deg, var(--color-blue), var(--color-violet))" }}
      />
      <div className="h-4 w-2/5 mb-2.5 rounded-sm bg-white/10 opacity-40" />
      <div className="grid grid-cols-3 gap-2.5 mt-6">
        <div className="aspect-square rounded-sm bg-white/[0.06]" />
        <div className="aspect-square rounded-sm bg-white/[0.06]" />
        <div className="aspect-square rounded-sm bg-white/[0.06]" />
      </div>
    </div>
  );
}

export function MeridianMock() {
  return (
    <div
      className="p-5 min-h-[260px]"
      style={{ background: "linear-gradient(160deg, #1a2a24, #14151a)" }}
    >
      <div className="h-2.5 w-2/5 bg-white/10 mb-5 rounded-sm" />
      <div className="grid grid-cols-2 gap-4">
        <div
          className="rounded-sm opacity-50 min-h-[180px]"
          style={{ background: "linear-gradient(160deg, var(--color-pink), var(--color-amber))" }}
        />
        <div className="flex flex-col gap-3 justify-center">
          <div className="h-3 bg-white/10 rounded-sm" />
          <div className="h-3 w-3/5 bg-white/10 rounded-sm" />
          <div className="h-3 w-3/5 bg-white/10 rounded-sm" />
        </div>
      </div>
    </div>
  );
}

export function NorthlineMock() {
  return (
    <div
      className="p-5 min-h-[260px]"
      style={{ background: "linear-gradient(160deg, #2a2015, #14151a)" }}
    >
      <div className="h-2.5 w-2/5 bg-white/10 mb-5 rounded-sm" />
      <div className="flex flex-col gap-3.5">
        <div
          className="h-[60px] rounded-sm opacity-55"
          style={{ background: "linear-gradient(90deg, var(--color-amber), var(--color-pink))" }}
        />
        <div
          className="h-[140px] rounded-sm opacity-30"
          style={{ background: "linear-gradient(90deg, var(--color-violet), var(--color-blue))" }}
        />
      </div>
    </div>
  );
}

export function BasinMock() {
  return (
    <div
      className="p-5 min-h-[260px]"
      style={{ background: "linear-gradient(160deg, #201f2e, #14151a)" }}
    >
      <div className="h-2.5 w-2/5 bg-white/10 mb-5 rounded-sm" />
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="h-14 rounded-sm bg-white/[0.07]" />
        <div
          className="h-14 rounded-sm opacity-60"
          style={{ background: "linear-gradient(135deg, var(--color-blue), var(--color-violet))" }}
        />
        <div className="h-14 rounded-sm bg-white/[0.07]" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-2.5 w-full bg-white/[0.08] rounded-sm" />
        <div className="h-2.5 w-4/5 bg-white/[0.08] rounded-sm" />
        <div className="h-2.5 w-3/5 bg-white/[0.08] rounded-sm" />
      </div>
    </div>
  );
}

export function FernwehMock() {
  return (
    <div
      className="p-5 min-h-[260px]"
      style={{ background: "linear-gradient(160deg, #142a26, #14151a)" }}
    >
      <div className="h-2.5 w-2/5 bg-white/10 mb-5 rounded-sm" />
      <svg viewBox="0 0 220 90" width="100%" height="90" preserveAspectRatio="none">
        <polyline
          points="0,80 30,60 60,68 90,40 120,46 150,20 180,28 220,6"
          fill="none"
          stroke="var(--color-amber)"
          strokeWidth="2.5"
          opacity="0.8"
        />
        <polyline
          points="0,85 30,82 60,78 90,70 120,60 150,50 180,34 220,18"
          fill="none"
          stroke="var(--color-blue)"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
