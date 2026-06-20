"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

// トップのヒーロー。あおらず、静かに「自分にもできるかも」と思ってもらう。
export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
      {/* 背景の光：夜明け前の空のように、上からほのかに差す */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] h-[360px] w-[360px] rounded-full bg-ember/10 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* 小さなタグライン */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-slate-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse-glow" />
          AIで、普通の人が「つくる側」になる
        </motion.p>

        {/* メインコピー */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl font-black leading-[1.15] tracking-tight text-slate-50 sm:text-6xl"
        >
          見ているだけだった人が、
          <br />
          <span className="text-shimmer">つくる側</span>へ。
        </motion.h1>

        {/* サブコピー */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          少し前まで、何かを作るには
          <span className="text-slate-100">専門知識やお金</span>がいった。
          <br className="hidden sm:block" />
          今は、<span className="text-gradient font-bold">つくりたい気持ちとAI</span>があればいい。
          <br className="hidden sm:block" />
          仕事のちょっとした不便も、趣味の「あったらいいな」も、自分の手で形にできる。
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <CTAButton href="/diagnose">
            未来を診断する
            <span aria-hidden>→</span>
          </CTAButton>
          <CTAButton href="/zukan" variant="ghost">
            作れるものを見る
          </CTAButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-5 text-xs text-slate-500"
        >
          90秒・4つの質問・登録不要
        </motion.p>
      </div>
    </section>
  );
}
