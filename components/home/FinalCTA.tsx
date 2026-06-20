"use client";

import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";

// 最後の一押し。読み終えた人の背中を、そっと押す。
export function FinalCTA() {
  return (
    <section className="section-pad">
      <Reveal>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-10 text-center sm:p-14">
          {/* 中央から立ちのぼる光 */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] mx-auto h-[300px] w-[300px] rounded-full bg-dawn-gradient opacity-20 blur-[100px]" />

          <h2 className="relative font-display text-2xl font-black leading-snug text-slate-50 sm:text-4xl">
            まずは、ひとつ。
            <br />
            <span className="text-shimmer">作ってみませんか。</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            まだ何を作るか決まっていなくても大丈夫。
            4つの質問に答えるだけで、あなたに向いていそうなものが見えてきます。
          </p>
          <div className="relative mt-8 flex justify-center">
            <CTAButton href="/diagnose">
              未来を診断する
              <span aria-hidden>→</span>
            </CTAButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
