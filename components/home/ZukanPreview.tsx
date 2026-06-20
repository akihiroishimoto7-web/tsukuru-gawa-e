"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { categories } from "@/lib/zukan-data";

// トップで「作れるもの」のカテゴリをちらっと見せ、図鑑へ誘導する。
export function ZukanPreview() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-ember">
            作れるもの図鑑
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-bold text-slate-100 sm:text-3xl">
            あなたの世界でも、これが作れる。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-slate-400">
            どれも、特別な人の話ではありません。
            現場を知る人、好きを持つ人が、AIと一緒に形にしてきたものです。
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.05}>
              <Link
                href={`/zukan?cat=${cat.id}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span className="mt-3 font-display text-sm font-bold text-slate-100 sm:text-base">
                  {cat.label}
                </span>
                <span className="mt-1 text-xs leading-relaxed text-slate-400">
                  {cat.blurb}
                </span>
                <span className="mt-3 text-xs font-medium text-ember opacity-0 transition-opacity group-hover:opacity-100">
                  見てみる →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
