"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

// ファーストビュー。白地・余白多め。
// 「ここは何をする場所か」が一瞬で伝わり、気軽に立ち寄った人の心に火が移る。
export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        {/* 小さな看板 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-medium text-stone-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          令和の松下村塾を目指す、小さな実験場
        </motion.p>

        {/* メインコピー（強いファーストビュー） */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-3xl font-black leading-[1.25] tracking-tight text-stone-900 sm:text-5xl"
        >
          AIを学ぶ場所では、ない。
          <br />
          AIを使って、
          <span className="text-shimmer">何かを始める</span>
          場所。
        </motion.h1>

        {/* サブコピー */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
        >
          会社も年齢も関係ない。AIに興味がある人が少人数で集まって、
          <br className="hidden sm:block" />
          話して、試して、作りかけを見せ合う。——まずは、最初の一歩から。
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <CTAButton href="/zukan">
            何が作れるか、見てみる
            <span aria-hidden>→</span>
          </CTAButton>
          <CTAButton href="/start" variant="ghost">
            はじめかたを見る
          </CTAButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-5 text-xs text-stone-400"
        >
          全14種のつくれるもの・登録不要・運用ほぼ¥0
        </motion.p>
      </div>
    </section>
  );
}
