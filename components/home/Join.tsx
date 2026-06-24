"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

// 交流の本体（LINEオープンチャット / Discord 等）の招待URL。
// ↓ ここに実際の招待URLを入れると、「仲間になる」ボタンが有効になります。
const COMMUNITY_URL = "#";
const COMMUNITY_READY = COMMUNITY_URL !== "#";

// 自己紹介テンプレ。書き出しを用意して、参加のハードルを下げる。
const INTRO_TEMPLATE = `はじめまして。◯◯（住んでいる地域・仕事）です。
・最近きになっていること：
・AIで作ってみたいもの：
・今日の小さな一歩：
よろしくお願いします！`;

// 「声の紹介」＝こんな自己紹介から、という例。
// 実在の証言ではなく、集まりはじめている“代表的な声”として読み取り専用で見せる。
const voices = [
  { who: "40代・介護の仕事", text: "家族向けの説明ページを作ってみたい。まずは自己紹介から。" },
  { who: "会社員・ランナー", text: "走るのが好き。練習記録を可視化するところから始めました。" },
  { who: "元・教員", text: "つまずきに寄り添う教材を作りたくて来ました。" },
  { who: "60代・これから", text: "定年後、何か始めたい。手は遅いけど、気持ちは新人です。" },
];

export function Join() {
  const [copied, setCopied] = useState(false);

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(INTRO_TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // クリップボードが使えない環境では何もしない
    }
  }

  return (
    <section className="section-pad bg-white border-y border-stone-200">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-ember">
            仲間になる
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            一人で、始めなくていい。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-stone-600">
            自己紹介して、つくりたいものを話す。作ったものを見せ合う。
            走った記録や、学びをシェアする。困ったら聞く。——気軽に、それだけ。
          </p>
        </Reveal>

        {/* 声の紹介（こんな自己紹介から） */}
        <div className="mt-10">
          <p className="mb-4 text-center text-xs font-medium text-stone-500">
            たとえば、こんな自己紹介から。
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {voices.map((v, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-stone-200 bg-[#faf9f7] p-5">
                  <p className="text-sm leading-relaxed text-stone-700">
                    「{v.text}」
                  </p>
                  <p className="mt-2 text-xs text-stone-500">— {v.who}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 自己紹介テンプレ（コピーできる） */}
        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl border border-stone-200 bg-[#faf9f7] p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-stone-900">
                自己紹介テンプレ
              </p>
              <button
                type="button"
                onClick={copyTemplate}
                className="rounded-full border border-stone-300 bg-white px-4 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
              >
                {copied ? "✓ コピーしました" : "コピーする"}
              </button>
            </div>
            <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-stone-600">
              {INTRO_TEMPLATE}
            </pre>
          </div>
        </Reveal>

        {/* 参加導線 */}
        <Reveal delay={0.15}>
          <div className="mt-8 text-center">
            {COMMUNITY_READY ? (
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-12px_rgba(28,25,23,0.5)] transition-colors hover:bg-stone-800"
              >
                仲間になる
                <span aria-hidden>→</span>
              </a>
            ) : (
              <p className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-500">
                <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                交流の場は、まもなくオープン。まずは自己紹介を準備しておきましょう。
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
