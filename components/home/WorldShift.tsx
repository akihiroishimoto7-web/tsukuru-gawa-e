"use client";

import { Reveal } from "@/components/ui/Reveal";

// 「昔」と「今」を対比して、世界が変わったことを体感させる。
export function WorldShift() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-bold text-slate-100 sm:text-3xl">
            ものを生み出すルールが、
            <br className="sm:hidden" />
            静かに書き換わった。
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* 昔 */}
          <Reveal>
            <div className="glass-card card-glow h-full p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                これまで
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-slate-300">
                作れるのは、選ばれた人だけ。
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-400">
                <li className="flex gap-3">
                  <span className="text-slate-600">✕</span>
                  まとまった資金と、投資してくれる人脈
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-600">✕</span>
                  エンジニアを雇える組織や会社
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-600">✕</span>
                  何年もかけて学ぶ、専門の技術
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-600">✕</span>
                  「自分には無理」という、見えない壁
                </li>
              </ul>
            </div>
          </Reveal>

          {/* 今 */}
          <Reveal delay={0.15}>
            <div className="glass-card card-glow relative h-full overflow-hidden p-7">
              {/* 温かい光のにじみ */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember/15 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-widest text-ember">
                いま
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-slate-100">
                作れるのは、はじめる人すべて。
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-200">
                <li className="flex gap-3">
                  <span className="text-ember">○</span>
                  必要なのは、月数千円とノートPC1台
                </li>
                <li className="flex gap-3">
                  <span className="text-ember">○</span>
                  AIが、隣で一緒にコードを書いてくれる
                </li>
                <li className="flex gap-3">
                  <span className="text-ember">○</span>
                  わからないことは、何度でも聞ける
                </li>
                <li className="flex gap-3">
                  <span className="text-ember">○</span>
                  今日のアイデアを、今夜、形にできる
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-slate-300 sm:text-lg">
            足りなかったのは才能じゃない。
            <span className="text-gradient font-bold">道具</span>
            だった。
            <br className="hidden sm:block" />
            その道具が、いま、あなたの手のひらに乗っている。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
