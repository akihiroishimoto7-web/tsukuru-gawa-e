"use client";

import { Reveal } from "@/components/ui/Reveal";

// AIの使い方のヒント。
// 「アプリを作る」前に、まずAIに“頼むだけ”で手に入るものを見せる。
// 高い専門サービスに頼んでいたことが、頼み方ひとつで今日手に入る——という体感。
const hints = [
  {
    emoji: "🧑‍💼",
    ask: "自社の戦略を、超一流の経営コンサルタントとして整理して。",
    gain: "コンサル級の戦略スライドのたたき台",
  },
  {
    emoji: "🎓",
    ask: "この内容で、一流の研修講師として研修スライドを作って。",
    gain: "そのまま使える研修資料一式",
  },
  {
    emoji: "📖",
    ask: "子どもに読み聞かせる絵本を、挿絵の指示つきで作って。",
    gain: "わが子のためのオリジナル絵本",
  },
  {
    emoji: "📊",
    ask: "この数字を、社長に響く1枚のスライドにまとめて。",
    gain: "意思決定を動かすエグゼクティブ資料",
  },
  {
    emoji: "📝",
    ask: "この事業アイデアを、投資家の視点で厳しくレビューして。",
    gain: "弱点が見えた事業計画",
  },
  {
    emoji: "🗣️",
    ask: "結婚式のスピーチを、このエピソードから感動的に書いて。",
    gain: "心に残るスピーチ原稿",
  },
];

export function AiHints() {
  return (
    <section className="section-pad bg-white border-y border-stone-200">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-ember">
            AIの使い方のヒント
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            たとえば、AIにこう頼める。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-stone-600">
            これまで高い専門サービスに頼んでいたことが、頼み方ひとつで手に入る。
            アプリを作る前に、まずはこんな一言から試せます。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hints.map((h, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-[#faf9f7] p-6">
                <span className="text-2xl">{h.emoji}</span>
                <p className="mt-3 flex-1 font-display text-base font-bold leading-relaxed text-stone-900">
                  「{h.ask}」
                </p>
                <p className="mt-4 flex items-start gap-2 border-t border-stone-200 pt-3 text-sm leading-relaxed">
                  <span aria-hidden className="text-ember">→</span>
                  <span className="font-semibold text-ember">{h.gain}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-stone-600">
            コツは、<span className="font-bold text-stone-900">役割を与えること</span>。
            「超一流の◯◯として」と頼むだけで、返ってくるものの質が変わります。
            <br className="hidden sm:block" />
            しかも、作るのにかかるのはAIに頼む時間だけ。
            <span className="text-stone-900">公開しても運用はほぼ¥0</span>です。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
