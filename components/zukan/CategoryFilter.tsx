"use client";

import { categories } from "@/lib/zukan-data";
import type { ZukanCategory } from "@/lib/types";

type Filter = ZukanCategory | "all";

// 図鑑のカテゴリ絞り込みタブ。横スクロール対応でモバイルでも快適。
export function CategoryFilter({
  active,
  onChange,
}: {
  active: Filter;
  onChange: (cat: Filter) => void;
}) {
  const tabs: { id: Filter; label: string; emoji?: string }[] = [
    { id: "all", label: "すべて" },
    ...categories.map((c) => ({ id: c.id as Filter, label: c.label, emoji: c.emoji })),
  ];

  return (
    <div className="no-scrollbar -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <div className="flex w-max gap-2 sm:flex-wrap">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`flex-none rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 bg-white text-stone-600 hover:border-stone-400 hover:text-stone-900"
              }`}
            >
              {tab.emoji && <span className="mr-1.5">{tab.emoji}</span>}
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
