"use client";

import { Reveal } from "@/components/ui/Reveal";

// 世界観セクション。あおらず、静かに背中を押すコピー。
const lines = [
  {
    big: "むかし、小さな塾の一室から、面白い人たちが育った。",
    small: "資金も、家柄も、学歴もいらない。あったのは、面白がる気持ちと、少しの勇気。",
  },
  {
    big: "AIは、仕事を奪うだけの道具ではない。",
    small: "普通の人の手に、ちょっとだけ「つくる力」をくれる道具だ。",
  },
  {
    big: "完璧じゃなくていい。今日のあなたで、はじめていい。",
    small: "最初の一歩は小さくていい。それを、いくつも重ねればいい。",
  },
];

export function Manifesto() {
  return (
    <section className="relative section-pad">
      <div className="mx-auto max-w-3xl space-y-14 text-center">
        {lines.map((line, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className="font-display text-2xl font-black leading-snug tracking-tight text-stone-900 sm:text-3xl">
              {line.big}
            </p>
            <p className="mt-3 text-base leading-relaxed text-stone-500 sm:text-lg">
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
