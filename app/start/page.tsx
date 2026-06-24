import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "はじめかた | 令和の松下村塾",
  description:
    "Claude Code を入れてから、最初の作品を公開するまで。特別な準備はいりません。順番に追うだけの、いちばん静かな最短ルート。",
  openGraph: {
    title: "はじめかた | 令和の松下村塾",
    description:
      "道具をひらく → 言葉で伝える → 小さく動かす → 直す → 世界に置く。最初の一歩は、思っているより小さい。",
    type: "article",
  },
};

// 「はじめかた」専用ページ。
// 「これやってみたい」と思った人が、次に迷わないための橋渡し。
// あおらず、具体的に。導入から公開までを5つの静かなステップで示す。
type Step = {
  title: string;
  detail: string;
  link?: { href: string; label: string; external?: boolean };
};

const steps: Step[] = [
  {
    title: "道具をひらく",
    detail:
      "まずは Claude Code を入れて、「何ができる？」と話しかけてみる。難しい設定でつまずいても、やり方はそのままAIに聞けば教えてくれます。",
    link: {
      href: "https://www.anthropic.com/claude-code",
      label: "Claude Code とは",
      external: true,
    },
  },
  {
    title: "作りたいものを、言葉で伝える",
    detail:
      "「◯◯を作りたい」と、ふだんの日本語で伝えるだけ。きれいにまとめる必要はありません。図鑑のカードにある一文を、そのまま使ってもかまいません。",
    link: { href: "/zukan", label: "図鑑から探す" },
  },
  {
    title: "小さく動くものを作ってもらう",
    detail:
      "いきなり完成を目指さないこと。まずは一番小さく動く形を、AIと一緒に作ります。「動いた」という手応えが、次への燃料になります。",
  },
  {
    title: "自分用に、少しずつ直す",
    detail:
      "動いたら「ここをこうしたい」と伝えて直していく。エラーが出ても、その文章をそのまま貼れば、直し方を教えてくれます。完璧じゃなくて大丈夫。",
  },
  {
    title: "世界に置く",
    detail:
      "できたものを Vercel などに公開すると、URLが1つ手に入ります。あなたの作品が「住所」を持つ瞬間。誰かに見せられるようになります。",
    link: { href: "https://vercel.com/", label: "Vercel とは", external: true },
  },
];

const reassurances = [
  {
    emoji: "🤝",
    text: "わからないことは、何度聞いてもいい。AIは、怒らない相棒です。",
  },
  {
    emoji: "🧩",
    text: "エラーは、失敗じゃない。その文章を貼れば、直し方が返ってきます。",
  },
  {
    emoji: "🌱",
    text: "1日30分でも、1週間あれば、最初の作品は形になります。",
  },
];

export default function StartPage() {
  return (
    <div className="relative">
      {/* 上部のほのかな光 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-aurora" />

      {/* ヘッダー */}
      <section className="px-5 pt-12 text-center sm:px-8 sm:pt-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-ember">
            はじめかた
          </p>
          <h1 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-black leading-[1.2] text-stone-900 sm:text-5xl">
            最初の一歩は、
            <br className="sm:hidden" />
            思っているより小さい。
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base">
            特別な準備はいりません。順番に追うだけで、
            <br className="hidden sm:block" />
            あなたの最初の作品が、世界に置ける場所まで行けます。
          </p>
        </Reveal>
      </section>

      {/* 5つのステップ（縦のタイムライン） */}
      <section className="section-pad pt-12">
        <div className="mx-auto max-w-2xl">
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <li className="glass-card card-glow flex gap-4 p-5 sm:p-6">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-stone-900 text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-lg font-bold text-stone-900">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      {step.detail}
                    </p>
                    {step.link &&
                      (step.link.external ? (
                        <a
                          href={step.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block text-sm font-semibold text-ember transition-opacity hover:opacity-80"
                        >
                          {step.link.label} ↗
                        </a>
                      ) : (
                        <Link
                          href={step.link.href}
                          className="mt-3 inline-block text-sm font-semibold text-ember transition-opacity hover:opacity-80"
                        >
                          {step.link.label} →
                        </Link>
                      ))}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* つまずいても大丈夫 */}
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-center font-display text-xl font-bold text-stone-900 sm:text-2xl">
              つまずいても、大丈夫。
            </h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {reassurances.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4">
                  <span className="text-2xl">{r.emoji}</span>
                  <p className="text-sm leading-relaxed text-stone-700">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 最後の一押し */}
      <section className="section-pad pt-0">
        <Reveal>
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-[0_20px_60px_-30px_rgba(28,25,23,0.2)] sm:p-12">
            <h2 className="relative font-display text-2xl font-black leading-snug text-stone-900 sm:text-3xl">
              迷ったら、ここから。
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone-600">
              何を作るか決まっていなくても大丈夫。
              まずは、自分に向いていそうなことを知ることから。
            </p>
            <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/diagnose">
                志を診断する
                <span aria-hidden>→</span>
              </CTAButton>
              <CTAButton href="/zukan" variant="ghost">
                挑むテーマを見る
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
