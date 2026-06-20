"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Answers, ResultType } from "@/lib/types";
import {
  wantLabelMap,
  timeEncouragementMap,
  encodeAnswers,
  getToolLink,
} from "@/lib/diagnosis";
import { categories } from "@/lib/zukan-data";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";

export function ResultView({
  result,
  answers,
  onRetake,
}: {
  result: ResultType;
  answers: Answers;
  onRetake: () => void;
}) {
  // 回答に基づくパーソナライズ用の文言
  const wantLabel = answers.want ? wantLabelMap[answers.want] : undefined;
  const timeLine = answers.time ? timeEncouragementMap[answers.time] : undefined;
  const recommendedCat = categories.find(
    (c) => c.id === result.recommendedCategory
  );

  // ===== 共有リンク（クライアントでのみ確定）=====
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(
        `${window.location.origin}/diagnose?a=${encodeAnswers(answers)}`
      );
    }
  }, [answers]);

  const shareText = `私は「${result.name}」でした。あなたは何を変えられる人？──つくる側へ。`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=${encodeURIComponent(shareUrl)}`;

  async function copyLink() {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // クリップボードが使えない環境では何もしない
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* ===== ヒーロー：あなたのタイプ ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-white/10 p-8 text-center sm:p-12"
      >
        {/* タイプ固有のグラデーション光 */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-[-30%] mx-auto h-[300px] w-[300px] rounded-full bg-gradient-to-br ${result.gradient} opacity-25 blur-[90px]`}
        />
        <p className="relative text-xs font-semibold uppercase tracking-widest text-slate-400">
          あなたのタイプ
        </p>
        <h1
          className={`relative mt-3 bg-gradient-to-r ${result.gradient} bg-clip-text font-display text-3xl font-black leading-tight text-transparent sm:text-5xl`}
        >
          {result.name}
        </h1>
        <p className="relative mx-auto mt-5 max-w-xl font-display text-lg font-bold text-slate-100 sm:text-xl">
          「{result.catchphrase}」
        </p>
        <p className="relative mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-300">
          {result.description}
        </p>

        {wantLabel && (
          <p className="relative mt-6 inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-slate-300">
            作ってみたいもの：
            <span className="font-bold text-white">{wantLabel}</span>
          </p>
        )}
      </motion.div>

      {/* ===== 3か月後 / 1年後 ===== */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="glass-card h-full p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-ember">
              3か月後に作れるもの
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              {result.inThreeMonths}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-card h-full p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-ember">
              1年後に実現できる未来
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              {result.inOneYear}
            </p>
          </div>
        </Reveal>
      </div>

      {/* ===== 最初の7日間ロードマップ ===== */}
      <Reveal>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-slate-100">
            最初の7日間ロードマップ
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            1週間後、あなたの作品はもうURLを持っています。
          </p>

          <ol className="mt-6 space-y-1">
            {result.roadmap.map((day, i) => (
              <motion.li
                key={day.day}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-4"
              >
                {/* タイムラインの軸 */}
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/15 bg-ink-800 text-[11px] font-bold text-slate-300">
                    {i + 1}
                  </span>
                  {i < result.roadmap.length - 1 && (
                    <span className="my-1 w-px flex-1 bg-gradient-to-b from-white/20 to-transparent" />
                  )}
                </div>
                <div className="pb-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ember">
                    {day.day}
                  </p>
                  <p className="font-display text-base font-bold text-slate-100">
                    {day.title}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-400">
                    {day.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* ===== 必要ツール（公式サイトへのリンク） ===== */}
      <Reveal>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-slate-100">
            あなたの道具箱
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            クリックで公式サイトへ。すべて無料、または少額で始められます。
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {result.tools.map((tool) => {
              const link = getToolLink(tool);
              if (link) {
                return (
                  <a
                    key={tool}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-ember/50 hover:bg-ember/10 hover:text-white"
                  >
                    {tool}
                    <span
                      className="text-xs text-slate-500 transition-colors group-hover:text-ember"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </a>
                );
              }
              return (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {tool}
                </span>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* ===== 励ましのメッセージ ===== */}
      <Reveal>
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 text-center">
          <div className="pointer-events-none absolute inset-x-0 bottom-[-50%] mx-auto h-[200px] w-[200px] rounded-full bg-ember/15 blur-[80px]" />
          <p className="relative font-display text-lg font-bold leading-relaxed text-slate-100 sm:text-xl">
            {result.encouragement}
          </p>
          {timeLine && (
            <p className="relative mt-4 text-sm text-slate-400">{timeLine}</p>
          )}
        </div>
      </Reveal>

      {/* ===== 結果をシェア ===== */}
      <Reveal>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center sm:p-8">
          <h2 className="font-display text-lg font-bold text-slate-100">
            この結果を、誰かの一歩に。
          </h2>
          <p className="mx-auto mt-1 max-w-md text-sm text-slate-400">
            あなたのタイプをシェアすると、まだ迷っている誰かの背中を押せるかもしれません。
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink-950 transition-transform hover:scale-105"
            >
              𝕏 でシェアする
            </a>
            <button
              type="button"
              onClick={copyLink}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              {copied ? "✓ コピーしました" : "🔗 リンクをコピー"}
            </button>
          </div>
        </div>
      </Reveal>

      {/* ===== 次の行動 ===== */}
      <Reveal>
        <div className="mt-8 flex flex-col items-center gap-3">
          {recommendedCat && (
            <CTAButton href={`/zukan?cat=${recommendedCat.id}`}>
              {recommendedCat.emoji} {recommendedCat.label}で作れるものを見る
              <span aria-hidden>→</span>
            </CTAButton>
          )}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onRetake}
              className="rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              もう一度診断する
            </button>
            <Link
              href="/zukan"
              className="rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              図鑑をすべて見る
            </Link>
          </div>
        </div>
      </Reveal>

      <p className="mt-8 text-center text-xs leading-relaxed text-slate-500">
        この診断結果は、あなたの可能性のほんの入り口です。
        <br />
        本当の答えは、最初の1行を書いたときに見つかります。
      </p>
    </div>
  );
}
