"use client";

import { Reveal } from "@/components/ui/Reveal";

// 世界観を「数字」で補強する細いバンド。理屈ではなく、ひと目で伝える。
const stats = [
  { value: "¥0〜", label: "はじめる費用", sub: "ほとんどのツールは無料。AIだけ月数千円。" },
  { value: "7日", label: "最初の作品まで", sub: "1日30分でも、1週間で公開できる。" },
  { value: "24h", label: "いつでも隣に", sub: "AIは、何度聞いても怒らない相棒。" },
  { value: "1人", label: "必要な人数", sub: "チームも、上司の許可もいらない。" },
];

export function Stats() {
  return (
    <section className="px-5 pb-4 pt-2 sm:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
              <p className="font-display text-3xl font-black text-gradient sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-bold text-slate-200">{s.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                {s.sub}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
