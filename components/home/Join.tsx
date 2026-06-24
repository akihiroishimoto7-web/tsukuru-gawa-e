"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

// 交流の本体（LINEオープンチャット / Discord 等）の招待URL。
// ↓ ここに実際の招待URLを入れると、「話してみる」ボタンが有効になります。
const COMMUNITY_URL = "#";
const COMMUNITY_READY = COMMUNITY_URL !== "#";

// 自己紹介テンプレ。書き出しを用意して、最初の一歩のハードルを下げる。
const INTRO_TEMPLATE = `はじめまして。◯◯（住んでいる地域・仕事）です。
・最近きになっていること：
・AIで作ってみたいもの：
・今日の小さな一歩：
よろしくお願いします！`;

// 「声の紹介」＝こんな自己紹介から、という例（実在の証言ではなく書き出しの見本）。
const voices = [
  { who: "40代・介護の仕事", text: "家族向けの説明ページを作ってみたい。まだ手探りです。" },
  { who: "会社員・ランナー", text: "走るのが好き。練習記録の可視化を、ちょっと試しています。" },
  { who: "元・教員", text: "つまずきに寄り添う練習問題を、作りかけ中。" },
  { who: "60代・これから", text: "定年後、何か始めたい。手は遅いけど、やってみたい。" },
];

// ここでやること（気軽さを言葉にする）
const doings = [
  "AIでやってみたいことを、ひとつ話す",
  "作りかけを、気軽に見せ合う",
  "試したこと・つまずいたことを共有する",
  "月1回くらい、小さく集まる（これから）",
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
            この場について
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            一人で、始めなくていい。
          </h2>
          {/* 運営も試行錯誤中、という温度感 */}
          <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-stone-600">
            正直に言うと、運営している私自身も、AIで作っては試し、失敗しながら進んでいる途中です。
            完成した人が教える場ではなく、
            <span className="font-semibold text-stone-900">作りかけを持ち寄って、一緒に面白がる場</span>
            にしたい。少人数で、ゆっくり始めています。
          </p>
        </Reveal>

        {/* ここでやること */}
        <Reveal delay={0.05}>
          <ul className="mx-auto mt-8 grid max-w-xl gap-2 sm:grid-cols-2">
            {doings.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 rounded-xl border border-stone-200 bg-[#faf9f7] px-4 py-3 text-sm text-stone-700"
              >
                <span aria-hidden className="mt-0.5 text-ember">・</span>
                {d}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-4 max-w-xl text-center text-xs text-stone-500">
            批評より、応援。初心者歓迎。でも、少しだけ手を動かす——それだけのルールです。
          </p>
        </Reveal>

        {/* 最初の一歩：自己紹介テンプレ（コピーできる） */}
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-stone-200 bg-[#faf9f7] p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-stone-900">
                まずは、自己紹介を書いてみる
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

        {/* 声の紹介（こんな自己紹介から） */}
        <div className="mt-8">
          <p className="mb-4 text-center text-xs font-medium text-stone-500">
            たとえば、こんな自己紹介から。
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {voices.map((v, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-stone-200 bg-white p-5">
                  <p className="text-sm leading-relaxed text-stone-700">
                    「{v.text}」
                  </p>
                  <p className="mt-2 text-xs text-stone-500">— {v.who}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 参加導線：弱い「まもなくオープン」をやめ、気軽な一歩に */}
        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            {COMMUNITY_READY ? (
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-12px_rgba(28,25,23,0.5)] transition-colors hover:bg-stone-800"
              >
                まずは話してみる
                <span aria-hidden>→</span>
              </a>
            ) : (
              <p className="mx-auto max-w-md text-sm leading-relaxed text-stone-600">
                <span className="font-semibold text-stone-900">小さく、始めています。</span>
                <br />
                まずは、AIでやってみたいことを一つ書くところから。
                みんなで話せる場も、これから少しずつ用意していきます。
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
