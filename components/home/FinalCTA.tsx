"use client";

import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";

// 最後の一押し。読み終えた人の背中を、そっと押す。
export function FinalCTA() {
  return (
    <section className="section-pad">
      <Reveal>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-[0_20px_60px_-30px_rgba(28,25,23,0.2)] sm:p-14">
          <h2 className="font-display text-2xl font-black leading-snug tracking-tight text-stone-900 sm:text-4xl">
            小さく始めて、
            <br />
            <span className="text-shimmer">仲間と育てる。</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-stone-600 sm:text-base">
            まだ何を作るか決まっていなくても大丈夫。
            4つの質問に答えるだけで、あなたに向いていそうなことが見えてきます。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="/diagnose">
              志を診断する
              <span aria-hidden>→</span>
            </CTAButton>
            <CTAButton href="/start" variant="ghost">
              はじめかたを見る
            </CTAButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
