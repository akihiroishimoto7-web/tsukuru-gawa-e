"use client";

import { motion } from "framer-motion";
import type { Question } from "@/lib/types";

// 1問分の表示。選択肢をタップすると onSelect が呼ばれる。
export function QuestionCard({
  question,
  selectedId,
  onSelect,
}: {
  question: Question;
  selectedId?: string;
  onSelect: (choiceId: string) => void;
}) {
  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-center font-display text-2xl font-bold leading-snug text-slate-50 sm:text-3xl">
        {question.title}
      </h2>
      {question.caption && (
        <p className="mt-3 text-center text-sm text-slate-400">
          {question.caption}
        </p>
      )}

      <div className="mt-8 grid gap-3">
        {question.choices.map((choice, i) => {
          const active = selectedId === choice.id;
          return (
            <motion.button
              key={choice.id}
              type="button"
              onClick={() => onSelect(choice.id)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileTap={{ scale: 0.98 }}
              className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all ${
                active
                  ? "border-ember/60 bg-ember/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
              }`}
            >
              <span className="text-2xl">{choice.emoji}</span>
              <span
                className={`flex-1 text-base font-medium ${
                  active ? "text-white" : "text-slate-200"
                }`}
              >
                {choice.label}
              </span>
              <span
                className={`text-lg transition-transform group-hover:translate-x-1 ${
                  active ? "text-ember" : "text-slate-600"
                }`}
                aria-hidden
              >
                →
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
