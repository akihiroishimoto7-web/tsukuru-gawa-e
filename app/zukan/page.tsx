import type { Metadata } from "next";
import { Suspense } from "react";
import { ZukanExplorer } from "@/components/zukan/ZukanExplorer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "挑むに値するテーマ | つくる側へ。",
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
            挑むに値するテーマ
          </p>
          <h1 className="mt-3 font-display text-3xl font-black text-slate-50 sm:text-4xl">
            あなたは、何を作り変えるか。
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
            小さな一歩から始められて、数年後には“分野”を動かしうるテーマ。
            どれも運用はほぼ¥0で、誰でも負担なく続けられます。
            ひとつ選んで、最初の一歩を踏み出してみませんか。
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
