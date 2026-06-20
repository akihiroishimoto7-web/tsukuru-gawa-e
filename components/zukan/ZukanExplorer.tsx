"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, getItemsByCategory } from "@/lib/zukan-data";
import type { ZukanCategory } from "@/lib/types";
import { CategoryFilter } from "./CategoryFilter";
import { ZukanCard } from "./ZukanCard";

type Filter = ZukanCategory | "all";

const validCategories = new Set(categories.map((c) => c.id));

// 図鑑の一覧と絞り込みを管理する。
// トップや診断結果から ?cat=xxx で来たときは、その分類を初期選択にする。
export function ZukanExplorer() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");
  const initial: Filter =
    catParam && validCategories.has(catParam as ZukanCategory)
      ? (catParam as ZukanCategory)
      : "all";

  const [active, setActive] = useState<Filter>(initial);
  const items = useMemo(() => getItemsByCategory(active), [active]);

  return (
    <div>
      <CategoryFilter active={active} onChange={setActive} />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <ZukanCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
