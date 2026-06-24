import type { Metadata } from "next";
import { Suspense } from "react";
import { ZukanExplorer } from "@/components/zukan/ZukanExplorer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "挑むに値するテーマ | 令和の松下村塾",
  description:
    "いのちと暮らし、教育、地域、消えゆくものを残す、産業、知の流れ。一人から始まり、数年で“分野”を動かしうるテーマ。運用はほぼ¥0で。",
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
            つくれるもの
          </p>
          <h1 className="mt-3 font-display text-3xl font-black text-stone-900 sm:text-4xl">
            AIで、何を作ってみる？
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-600">
            今日の小さな一歩から始められて、いつか大きく育つかもしれないテーマ。
            どれも運用はほぼ¥0で、気軽に試せます。
            気になるものを、ひとつ覗いてみてください。
          </p>
        </header>

        {/* 一覧（useSearchParams を使うため Suspense で囲む） */}
        <Suspense
          fallback={
            <p className="py-20 text-center text-sm text-stone-500">
              図鑑を開いています…
            </p>
          }
        >
          <ZukanExplorer />
        </Suspense>

        {/* 末尾のCTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 font-display text-xl font-bold text-stone-900">
            気になるものは、見つかりましたか？
          </p>
          <CTAButton href="/start">
            はじめかたを見る
            <span aria-hidden>→</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
