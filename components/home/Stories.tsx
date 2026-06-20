"use client";

import { Reveal } from "@/components/ui/Reveal";

// 「普通の人が、つくる側にいる」ことを物語で見せる。
// 特定個人の証言ではなく、各分野で実際に生まれている“代表的な姿”として描く。
const stories = [
  {
    emoji: "🗂️",
    who: "事務職・30代",
    made: "月末の集計を自動化するツール",
    outcome: "「毎月の残業が、3時間からゼロになった」",
  },
  {
    emoji: "🩺",
    who: "介護の現場で働く人",
    made: "家族向けの退院サポート説明アプリ",
    outcome: "「不安そうな家族に、はじめて『よくわかった』と言われた」",
  },
  {
    emoji: "🏃",
    who: "走るのが好きな人",
    made: "自分のためのシューズ診断サイト",
    outcome: "「会ったこともない人から、ありがとうが届いた」",
  },
  {
    emoji: "📚",
    who: "教える仕事の人",
    made: "苦手をくり返せる学習ドリル",
    outcome: "「『もう一回』が口ぐせになった子がいる」",
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
          <h2 className="mt-3 text-center font-display text-2xl font-bold text-slate-100 sm:text-3xl">
            たとえば、こんな人が、
            <br className="sm:hidden" />
            つくる側にいる。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-slate-400">
            すごい人の話ではありません。
            あなたと同じように、目の前の「ちょっと困った」から始めた人たちです。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {stories.map((s, i) => (
            <Reveal key={s.who} delay={i * 0.08}>
              <div className="glass-card card-glow flex h-full gap-4 p-6">
                <span className="text-3xl">{s.emoji}</span>
                <div>
                  <p className="text-xs font-medium text-slate-500">{s.who}</p>
                  <p className="mt-1 font-display text-base font-bold text-slate-100">
                    {s.made}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ember/90">
                    {s.outcome}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-slate-400">
            あなたの「ちょっと困った」も、
            <span className="text-gradient font-bold">きっと、何かの入口</span>
            になります。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
