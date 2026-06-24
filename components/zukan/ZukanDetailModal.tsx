"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { ZukanItem } from "@/lib/types";
import { categories } from "@/lib/zukan-data";

// 難易度を★で表す（1〜5）
function DifficultyStars({ level }: { level: number }) {
  return (
    <span className="tracking-wider" aria-label={`難易度 ${level} / 5`}>
      <span className="text-ember">{"★".repeat(level)}</span>
      <span className="text-slate-700">{"★".repeat(5 - level)}</span>
    </span>
  );
}

// 図鑑カードの詳細モーダル。
// 「つくり方の最初の3ステップ」を見せて、"これなら作れそう"まで踏み込ませる。
export function ZukanDetailModal({
  item,
  open,
  onClose,
}: {
  item: ZukanItem;
  open: boolean;
  onClose: () => void;
}) {
  const category = categories.find((c) => c.id === item.category);

  // 開いている間だけ：Escapeで閉じる＋背景スクロールを止める
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* 背景：クリックで閉じる */}
          <div
            className="absolute inset-0 bg-ink-950/85"
            onClick={onClose}
            aria-hidden
          />

          {/* パネル本体 */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${item.name} のつくり方`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-900/95 p-6 shadow-2xl sm:rounded-3xl sm:p-8"
          >
            {/* 上部のほのかな光 */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember/15 blur-3xl" />

            {/* 閉じるボタン */}
            <button
              type="button"
              onClick={onClose}
              aria-label="閉じる"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-colors hover:bg-white/[0.1] hover:text-white"
            >
              ✕
            </button>

            {/* ヘッダー */}
            <div className="flex items-start gap-3 pr-10">
              <span className="text-3xl">{item.emoji}</span>
              <div>
                {category && (
                  <span className="text-xs text-ember">{category.label}</span>
                )}
                <h2 className="mt-0.5 font-display text-xl font-bold text-slate-50">
                  {item.name}
                </h2>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {item.whatChanges}
            </p>

            {/* ここから育つと：到達しうる景色 */}
            <div className="mt-4 rounded-2xl border border-ember/20 bg-ember/[0.06] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ember">
                ここから育つと
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gradient">
                {item.vision}
              </p>
            </div>

            {/* つくり方の最初の3ステップ：このモーダルの主役 */}
            <div className="mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ember">
                つくり方・最初の3ステップ
              </p>
              <ol className="mt-3 space-y-3">
                {item.steps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-dawn-gradient text-sm font-bold text-ink-950">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed text-slate-200">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* 補足情報：難易度・スキル・MVP */}
            <div className="mt-6 space-y-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">難易度</span>
                <DifficultyStars level={item.difficulty} />
              </div>
              <div>
                <span className="text-xs text-slate-500">必要スキル</span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-white/[0.05] px-2 py-0.5 text-[11px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs text-slate-500">今日できる、最初の一歩</span>
                <p className="mt-1 leading-relaxed text-slate-200">{item.mvp}</p>
              </div>
            </div>

            {/* そっとした後押し */}
            <p className="mt-5 text-center text-xs leading-relaxed text-slate-500">
              完璧じゃなくていい。まずは小さく、ひとつ作ってみる。
            </p>
            <div className="mt-3 flex justify-center">
              <Link
                href="/diagnose"
                onClick={onClose}
                className="text-sm font-semibold text-ember transition-opacity hover:opacity-80"
              >
                自分に向いてるものを診断する →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
