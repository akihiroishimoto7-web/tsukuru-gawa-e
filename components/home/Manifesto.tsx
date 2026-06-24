"use client";

import { Reveal } from "@/components/ui/Reveal";

// 世界観セクション。あおらず、静かに背中を押すコピー。
const lines = [
  {
    big: "かつて、小さな塾の一室から、時代が変わった。",
    small: "資金も、家柄も、学歴もいらなかった。要ったのは、志だけだ。",
  },
  {
    big: "AIは、仕事を奪うだけの道具ではない。",
    small: "ひとりの人間に、世界の一部を作り変える力を渡す道具だ。",
  },
  {
    big: "完璧じゃなくていい。今日のあなたで、はじめていい。",
    small: "最初の一歩は小さくていい。向かう先さえ、大きければ。",
  },
];

export function Manifesto() {
  return (
    <section className="relative section-pad">
      {/* 中央に向かう淡いオーロラ */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[400px] max-w-3xl -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="mx-auto max-w-3xl space-y-16 text-center">
        {lines.map((line, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className="font-display text-2xl font-bold leading-snug text-slate-100 sm:text-3xl">
              {line.big}
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-400 sm:text-lg">
              {line.small}
            </p>
          </Reveal>
        ))}

        <Reveal delay={0.1}>
          <p className="font-display text-3xl font-black tracking-tight sm:text-5xl">
            <span className="text-shimmer">受け手から、つくる側へ。</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
