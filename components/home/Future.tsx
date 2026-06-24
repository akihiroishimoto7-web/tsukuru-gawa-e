"use client";

import { Reveal } from "@/components/ui/Reveal";

// 参加後の未来が想像できるセクション。
// 「ここに来たら、こうなる」を、時間の流れで具体的に。
const future = [
  {
    when: "1週間後",
    scene: "AIと一緒に、初めての作品が動く。「自分にも、できた」——その手応えが、すべての始まりになる。",
  },
  {
    when: "1か月後",
    scene: "朝、走りながら「次に何をつくるか」を考えている。仲間に見せて、フィードバックをもらうのが楽しみになる。",
  },
  {
    when: "半年後",
    scene: "「どうやって作ったの？」と聞かれる側に。小さく始めた挑戦が、誰かの役に立つ形になっている。",
  },
];

export function Future() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-ember">
            参加した、その先
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            ここに来たら、こうなる。
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {future.map((f, i) => (
            <Reveal key={f.when} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-7 card-glow">
                <span className="font-display text-lg font-black text-ember">
                  {f.when}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  {f.scene}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
