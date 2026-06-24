"use client";

import { Reveal } from "@/components/ui/Reveal";

// 史実の声。節目に、出典つきの一行を静かに置く。
// 仰々しくせず、余白で語らせる。気軽に通り過ぎた人の心に、そっと火を移す。
export function HistoryVoice({
  quote,
  source,
  note,
}: {
  quote: string;
  source: string;
  note?: string;
}) {
  return (
    <section className="px-5 py-16 sm:py-24">
      <Reveal>
        <figure className="mx-auto max-w-2xl text-center">
          {/* 小さな夜明けの線 */}
          <span className="mx-auto mb-7 block h-px w-10 bg-dawn-gradient opacity-60" />
          <blockquote className="font-display text-xl font-bold leading-relaxed tracking-wide text-slate-200 sm:text-2xl">
            {quote}
          </blockquote>
          <figcaption className="mt-5 text-sm text-slate-500">
            — {source}
            {note && <span className="ml-2 text-slate-600">{note}</span>}
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
