"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { questions } from "@/lib/questions";
import {
  diagnose,
  encodeAnswers,
  decodeAnswers,
  isComplete,
} from "@/lib/diagnosis";
import type { Answers, ResultType } from "@/lib/types";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";
import { ResultView } from "./ResultView";

type Phase = "question" | "result";

// 診断全体の状態を管理するクライアントコンポーネント。
export function DiagnoseFlow() {
  const searchParams = useSearchParams();
  const [phase, setPhase] = useState<Phase>("question");
  const [step, setStep] = useState(0); // 現在の質問インデックス
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<ResultType | null>(null);

  const currentQuestion = questions[step];

  // 共有リンク（?a=...）で訪れた場合は、その結果を直接表示する。
  // 初回マウント時のみ実行。
  useEffect(() => {
    const code = searchParams.get("a");
    if (code) {
      const decoded = decodeAnswers(code);
      if (isComplete(decoded)) {
        setAnswers(decoded);
        setResult(diagnose(decoded));
        setPhase("result");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 回答が出そろったら、結果へ。URLも共有可能な形に書き換える。
  function finishWith(nextAnswers: Answers) {
    setResult(diagnose(nextAnswers));
    setPhase("result");
    if (typeof window !== "undefined") {
      // 履歴を汚さずにURLだけ更新（リロード・共有しても同じ結果になる）
      window.history.replaceState(
        null,
        "",
        `/diagnose?a=${encodeAnswers(nextAnswers)}`
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // 選択肢を選んだとき：回答を記録し、少し間をおいて次へ進む
  function handleSelect(choiceId: string) {
    const nextAnswers = { ...answers, [currentQuestion.id]: choiceId };
    setAnswers(nextAnswers);

    // 選択のフィードバックが見えるよう、わずかに待ってから遷移
    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep((s) => s + 1);
      } else {
        finishWith(nextAnswers);
      }
    }, 260);
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleRetake() {
    setAnswers({});
    setStep(0);
    setResult(null);
    setPhase("question");
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/diagnose");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // ===== 結果表示 =====
  if (phase === "result" && result) {
    return (
      <div className="px-5 py-12 sm:px-8">
        <ResultView result={result} answers={answers} onRetake={handleRetake} />
      </div>
    );
  }

  // ===== 質問表示 =====
  return (
    <div className="px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-xl">
        <ProgressBar current={step} total={questions.length} />

        <div className="mt-10 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <QuestionCard
                question={currentQuestion}
                selectedId={answers[currentQuestion.id]}
                onSelect={handleSelect}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 戻るボタン（最初の質問では非表示） */}
        {step > 0 && (
          <div className="mt-2 text-center">
            <button
              type="button"
              onClick={handleBack}
              className="text-sm text-stone-500 transition-colors hover:text-stone-900"
            >
              ← 前の質問に戻る
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
