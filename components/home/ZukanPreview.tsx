"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { zukanItems } from "@/lib/zukan-data";
import { ZukanCard } from "@/components/zukan/ZukanCard";

// トップで実際の「挑むに値するテーマ」を数点そのまま見せ、図鑑へ最短でつなぐ。
// カテゴリの抽象でワンクッション置かず、具体的なカードを直接届ける。
// 6つの志の領域から1つずつ選んでいる。
const featuredIds = [
  "care-1",
  "learn-1",
  "local-2",
  "legacy-2",
  "venture-2",
  "knowledge-1",
];

export function ZukanPreview() {
  const featured = featuredIds
    .map((id) => zukanItems.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-ember">
            挑むに値するテーマ
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-bold text-slate-100 sm:text-3xl">
            あなたは、何を作り変える人か。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-slate-400">
            小さな一歩から始められて、数年後には“分野”を動かしうるテーマ。
            便利な道具ではなく、世界の一部を作り変える問いです。
          </p>
        </Reveal>

        {/* カテゴリではなく、実物のカードを直接見せる */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <ZukanCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/zukan"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-100 transition-all hover:border-white/30 hover:bg-white/[0.07]"
            >
              図鑑をすべて見る（全{zukanItems.length}種）
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
