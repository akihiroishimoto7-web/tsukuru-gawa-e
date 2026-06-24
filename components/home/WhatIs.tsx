"use client";

import { Reveal } from "@/components/ui/Reveal";

// 「ここは何をする場所か」が一瞬で伝わるセクション。
// 走る・語る・学ぶ・つくる の4つが、AIでひとつにつながる——という独自性。
const pillars = [
  { verb: "走る", note: "体を動かし、頭をほぐす。走りながら、考えが整っていく。" },
  { verb: "語る", note: "仲間と話す。一人では出てこない問いが、対話から生まれる。" },
  { verb: "学ぶ", note: "AIを相棒に。わからないことは、何度でも聞ける。初心者ほど伸びる。" },
  { verb: "つくる", note: "学んだそばから、AIで小さく動くものを形にする。" },
];

export function WhatIs() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            走る。語る。学ぶ。つくる。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-stone-600 sm:text-base">
            AIスクールでも、オンラインサロンでもありません。
            この4つが、AIでひとつにつながる場所です。
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.verb} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 card-glow">
                <p className="font-display text-2xl font-black text-stone-900">
                  {p.verb}
                  <span className="text-ember">.</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {p.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-stone-700 sm:text-lg">
            ひとつの「好き」や「困った」から始めて、
            <span className="font-bold text-stone-900">仲間と一緒に育てていく</span>。
            それが、ここでの過ごし方です。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
