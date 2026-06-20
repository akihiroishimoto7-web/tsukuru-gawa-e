"use client";

import { Reveal } from "@/components/ui/Reveal";

// 世界観セクション。あおらず、静かに背中を押すコピー。
const lines = [
  {
    big: "AIは、仕事を奪うだけの道具ではない。",
    small: "人の可能性を、静かに拡張する道具だ。",
  },
  {
    big: "あなたが作った小さなツールが、",
    small: "会ったこともない誰かの一日を、少し楽にするかもしれない。",
  },
  {
    big: "完璧じゃなくていい。今日のあなたで、はじめていい。",
    small: "うまくいかなければ、また直せばいい。それだけのことだ。",
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
