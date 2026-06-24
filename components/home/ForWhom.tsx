"use client";

import { Reveal } from "@/components/ui/Reveal";

// 「こんな人に来てほしい」＝対象者を明確に。
// 地方から挑戦する人、何かを始めたい人、AI初心者に刺さるように。
const people = [
  "AIに興味はあるけど、何から始めればいいか分からない人",
  "地方にいて、ここから何かを始めてみたい人",
  "会社や肩書きの外で、自分の手で動かしてみたい人",
  "走るのが好きで、体を動かしながら考えたい人",
  "「いつか」を「今日」に変えたい人",
  "一人だと続かない。仲間と火を絶やさず進みたい人",
];

export function ForWhom() {
  return (
    <section className="section-pad bg-white border-y border-stone-200">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            こんな人に、来てほしい。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-stone-600">
            経験も、肩書きも要りません。面白がる気持ちひとつで十分です。
          </p>
        </Reveal>

        <ul className="mx-auto mt-10 max-w-xl space-y-3">
          {people.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <li className="flex items-start gap-3 rounded-xl border border-stone-200 bg-[#faf9f7] px-5 py-4">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ember/10 text-xs font-bold text-ember"
                >
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-stone-700 sm:text-base">
                  {p}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
