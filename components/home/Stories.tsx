"use client";

import { Reveal } from "@/components/ui/Reveal";

// 「普通の人が、つくる側にいる」ことを物語で見せる。
// 特定個人の証言ではなく、各分野で実際に生まれている“代表的な姿”として描く。
const stories = [
  {
    emoji: "🩺",
    who: "介護の現場で働く人",
    made: "「どこに頼る？」に答える地域ガイド",
    outcome: "「町じゅうの家族に使われ、『助かった』の声が届くようになった」",
  },
  {
    emoji: "📚",
    who: "元・教員",
    made: "つまずきに寄り添う練習教材",
    outcome: "「塾に通えない子の成績が、3か月で変わった」",
  },
  {
    emoji: "🛠️",
    who: "会社員・40代",
    made: "自分の業界の面倒を解くツール",
    outcome: "「同業者に広まり、いつのまにか事業になっていた」",
  },
  {
    emoji: "📖",
    who: "二児の親",
    made: "親の人生を聞き取るメモリーブック",
    outcome: "「親族に配ったら、みんな泣いた。残せてよかった」",
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
            目の前の「これ、なんとかしたい」から始めて、気づけば大きく育てた人たちです。
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
            あなたの「これ、なんとかしたい」も、
            <span className="text-gradient font-bold">きっと、何かの始まり</span>
            になります。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
