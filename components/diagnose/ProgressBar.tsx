"use client";

import { motion } from "framer-motion";

// 診断の進捗バー。あと少し、を可視化して離脱を防ぐ。
export function ProgressBar({
  current,
  total,
}: {
  current: number; // 0始まり
  total: number;
}) {
  const percent = Math.round(((current + 1) / total) * 100);

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="mb-2 flex items-center justify-between text-xs text-stone-500">
        <span>
          質問 {current + 1} / {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
        <motion.div
          className="h-full rounded-full bg-ember"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
