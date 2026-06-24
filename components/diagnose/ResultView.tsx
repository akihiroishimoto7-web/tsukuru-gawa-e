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

  const shareText = `私は「${result.name}」でした。あなたは何を作り変える人？──令和の松下村塾`;
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
        className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-[0_20px_60px_-30px_rgba(28,25,23,0.2)] sm:p-12"
      >
        <p className="relative text-xs font-semibold uppercase tracking-widest text-stone-500">
          あなたのタイプ
        </p>
        <h1
          className={`relative mt-3 bg-gradient-to-r ${result.gradient} bg-clip-text font-display text-3xl font-black leading-tight text-transparent sm:text-5xl`}
        >
          {result.name}
        </h1>
        <p className="relative mx-auto mt-5 max-w-xl font-display text-lg font-bold text-stone-900 sm:text-xl">
          「{result.catchphrase}」
        </p>
        <p className="relative mx-auto mt-5 max-w-xl text-sm leading-relaxed text-stone-600">
          {result.description}
        </p>

        {wantLabel && (
          <p className="relative mt-6 inline-block rounded-full border border-stone-200 bg-[#faf9f7] px-4 py-1.5 text-xs text-stone-600">
            作ってみたいもの：
            <span className="font-bold text-stone-900">{wantLabel}</span>
          </p>
        )}
      </motion.div>

      {/* ===== 3か月後 / 1年後 / 3年後（立志のスケール） ===== */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Reveal>
          <div className="glass-card h-full p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-ember">
              3か月後に作れるもの
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-700">
              {result.inThreeMonths}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-card h-full p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-ember">
              1年後に頼られはじめる
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-700">
              {result.inOneYear}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="glass-card card-glow h-full p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gradient">
              3年後に見えている景色
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-900">
              {result.inThreeYears}
            </p>
          </div>
        </Reveal>
      </div>

      {/* ===== 最初の7日間ロードマップ ===== */}
      <Reveal>
        <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-stone-900">
            最初の7日間ロードマップ
          </h2>
          <p className="mt-1 text-sm text-stone-500">
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
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-stone-300 bg-white text-[11px] font-bold text-stone-600">
                    {i + 1}
                  </span>
                  {i < result.roadmap.length - 1 && (
                    <span className="my-1 w-px flex-1 bg-gradient-to-b from-stone-300 to-transparent" />
                  )}
                </div>
                <div className="pb-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ember">
                    {day.day}
                  </p>
                  <p className="font-display text-base font-bold text-stone-900">
                    {day.title}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-stone-600">
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
        <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-stone-900">
            あなたの道具箱
          </h2>
          <p className="mt-1 text-sm text-stone-500">
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
                    className="group inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-[#faf9f7] px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-ember/50 hover:bg-ember/5 hover:text-stone-900"
                  >
                    {tool}
                    <span
                      className="text-xs text-stone-400 transition-colors group-hover:text-ember"
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
                  className="rounded-full border border-stone-200 bg-[#faf9f7] px-4 py-2 text-sm font-medium text-stone-700"
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
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-[#faf9f7] p-8 text-center">
          <p className="relative font-display text-lg font-bold leading-relaxed text-stone-900 sm:text-xl">
            {result.encouragement}
          </p>
          {timeLine && (
            <p className="relative mt-4 text-sm text-stone-500">{timeLine}</p>
          )}
        </div>
      </Reveal>

      {/* ===== 結果をシェア ===== */}
      <Reveal>
        <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 text-center sm:p-8">
          <h2 className="font-display text-lg font-bold text-stone-900">
            この結果を、誰かの一歩に。
          </h2>
          <p className="mx-auto mt-1 max-w-md text-sm text-stone-500">
            あなたのタイプをシェアすると、まだ迷っている誰かの背中を押せるかもしれません。
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              𝕏 でシェアする
            </a>
            <button
              type="button"
              onClick={copyLink}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
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
              {recommendedCat.emoji} 「{recommendedCat.label}」のテーマを見る
              <span aria-hidden>→</span>
            </CTAButton>
          )}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onRetake}
              className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-600 transition-colors hover:border-stone-400 hover:bg-stone-50"
            >
              もう一度診断する
            </button>
            <Link
              href="/zukan"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-600 transition-colors hover:border-stone-400 hover:bg-stone-50"
            >
              挑むテーマを見る
            </Link>
          </div>
        </div>
      </Reveal>

      <p className="mt-8 text-center text-xs leading-relaxed text-stone-500">
        この診断結果は、あなたの可能性のほんの入り口です。
        <br />
        本当の答えは、最初の1行を書いたときに見つかります。
      </p>
    </div>
  );
}
