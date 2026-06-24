"use client";

import { Reveal } from "@/components/ui/Reveal";

// 「普通の人が、つくる側にいる」ことを物語で見せる。
// 特定個人の証言ではなく、各分野で実際に生まれている“代表的な姿”として描く。
const stories = [
  {
    emoji: "🩺",
    who: "介護の現場で働く人",
    made: "家族向けの説明ページ",
    outcome: "「作りかけを見せたら、『これ欲しい』と言われた。それが嬉しくて続いてる」",
  },
  {
    emoji: "📚",
    who: "元・教員",
    made: "つまずき用の練習問題",
    outcome: "「AIと試作中。まだ粗いけど、子どもが『もう一回』と言ってくれた」",
  },
  {
    emoji: "🛠️",
    who: "会社員・40代",
    made: "自分の仕事の小さな自動化",
    outcome: "「面倒な作業を一つ、AIに任せてみた。たった一つでも、毎日が軽い」",
  },
  {
    emoji: "📖",
    who: "二児の親",
    made: "親の話を聞き取るメモ",
    outcome: "「完成はまだ先。でも、聞いて残しはじめられただけで一歩」",
  },
];

export function Stories() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-ember">
            つくった人たち
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            たとえば、こんなふうに、
            <br className="sm:hidden" />
            試しはじめている。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-stone-600">
            すごい人の話でも、完成した実績の話でもありません。
            目の前の「これ、なんとかしたい」から、小さく手を動かしはじめた人たちです。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {stories.map((s, i) => (
            <Reveal key={s.who} delay={i * 0.08}>
              <div className="flex h-full gap-4 rounded-2xl border border-stone-200 bg-white p-6 card-glow">
                <span className="text-3xl">{s.emoji}</span>
                <div>
                  <p className="text-xs font-medium text-stone-500">{s.who}</p>
                  <p className="mt-1 font-display text-base font-bold text-stone-900">
                    {s.made}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {s.outcome}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-stone-500">
            完成していなくていい。
            <span className="font-bold text-ember">作りかけを見せ合う</span>
            ところから、はじめましょう。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
