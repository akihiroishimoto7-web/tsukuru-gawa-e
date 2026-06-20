import type { Metadata } from "next";
import { Suspense } from "react";
import { ZukanExplorer } from "@/components/zukan/ZukanExplorer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "作れるもの図鑑 | つくる側へ。",
  description:
    "医療・介護、事務、教育、趣味、発信、AIサービス。AIと一緒なら作れるものを、カテゴリ別に集めました。",
};

// 作れるもの図鑑ページ。
export default function ZukanPage() {
  return (
    <div className="relative px-5 py-12 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[300px] bg-aurora" />

      <div className="mx-auto max-w-6xl">
        {/* 見出し */}
        <header className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-ember">
            作れるもの図鑑
          </p>
          <h1 className="mt-3 font-display text-3xl font-black text-slate-50 sm:text-4xl">
            これ、ぜんぶ「自分で」作れる。
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
            大企業の話でも、天才の話でもありません。
            現場を知る人、好きを持つ人が、AIと一緒に形にしてきたものたちです。
            気になる1つを、あなたの最初の作品にしてみませんか。
          </p>
        </header>

        {/* 一覧（useSearchParams を使うため Suspense で囲む） */}
        <Suspense
          fallback={
            <p className="py-20 text-center text-sm text-slate-500">
              図鑑を開いています…
            </p>
          }
        >
          <ZukanExplorer />
        </Suspense>

        {/* 末尾のCTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 font-display text-xl font-bold text-slate-200">
            どれが自分に合うか、まだ迷う？
          </p>
          <CTAButton href="/diagnose">
            未来を診断する
            <span aria-hidden>→</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
