import type { Metadata } from "next";
import { Suspense } from "react";
import { DiagnoseFlow } from "@/components/diagnose/DiagnoseFlow";
import { decodeAnswers, diagnose, isComplete } from "@/lib/diagnosis";

// 共有リンク（?a=...）ごとに、タイトル・説明・OG画像を出し分ける。
// これでXやSNSに貼ったとき、診断タイプに応じたカードが表示される。
export function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Metadata {
  const code =
    typeof searchParams.a === "string" ? searchParams.a : undefined;

  let title = "志の診断 | 令和の松下村塾";
  let description =
    "4つの質問に答えるだけ。あなたが何を作り変える人か、3か月後・1年後・3年後にどこまで行けるかを診断します。";
  let ogUrl = "/og";

  if (code) {
    ogUrl = `/og?a=${encodeURIComponent(code)}`;
    const decoded = decodeAnswers(code);
    if (isComplete(decoded)) {
      const type = diagnose(decoded);
      title = `私は「${type.name}」でした | 令和の松下村塾`;
      description = `${type.catchphrase} あなたは何を作り変える人？`;
    }
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}

// 診断ページ。導入の一言のあと、診断フローを表示する。
export default function DiagnosePage() {
  return (
    <div className="relative">
      {/* 上部のほのかな光 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[300px] bg-aurora" />

      <div className="px-5 pt-12 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-ember">
          志の診断
        </p>
        <h1 className="mt-3 font-display text-2xl font-black text-stone-900 sm:text-4xl">
          あなたは、何を作り変える人か。
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone-600">
          正解も、間違いもありません。
          直感で選んでいくと、あなただけの未来が見えてきます。
        </p>
      </div>

      <Suspense
        fallback={
          <p className="py-20 text-center text-sm text-stone-500">
            診断を準備しています…
          </p>
        }
      >
        <DiagnoseFlow />
      </Suspense>
    </div>
  );
}
