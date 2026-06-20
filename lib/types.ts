// アプリ全体で使う型定義をまとめる

// 診断の質問ID（4問）
export type QuestionId = "role" | "want" | "experience" | "time";

// ひとつの選択肢
export interface Choice {
  id: string;
  label: string;
  emoji: string;
  // この選択肢が、各タイプにどれだけ寄与するかの重み
  weights: Partial<Record<ResultTypeId, number>>;
}

// ひとつの質問
export interface Question {
  id: QuestionId;
  title: string; // 質問本文
  caption?: string; // 補足
  choices: Choice[];
}

// 診断結果のタイプID
export type ResultTypeId =
  | "practical" // 実務改善型クリエイター
  | "education" // 教育変革型
  | "media" // 個人メディア型
  | "founder" // AI起業家型
  | "explorer"; // 探究型ビルダー

// 7日間ロードマップの1日分
export interface RoadmapDay {
  day: string; // "Day 1" など
  title: string;
  detail: string;
}

// 診断結果タイプの全情報
export interface ResultType {
  id: ResultTypeId;
  name: string; // 例: 実務改善型クリエイター
  catchphrase: string; // 一言で表す希望のコピー
  description: string; // タイプ説明
  inThreeMonths: string; // 3か月後に作れるもの
  inOneYear: string; // 1年後に実現できる未来
  roadmap: RoadmapDay[]; // 最初の7日間
  tools: string[]; // 必要ツール
  encouragement: string; // 励ましのメッセージ
  // 図鑑のどのカテゴリを薦めるか
  recommendedCategory: ZukanCategory;
  // 配色（Tailwindクラスとして使うグラデーション）
  gradient: string;
}

// 図鑑のカテゴリ
export type ZukanCategory =
  | "medical"
  | "office"
  | "education"
  | "hobby"
  | "media"
  | "ai";

// 図鑑の1カード
export interface ZukanItem {
  id: string;
  category: ZukanCategory;
  name: string; // 作れるもの名
  whatChanges: string; // 何を変えられるか
  difficulty: 1 | 2 | 3 | 4 | 5; // 難易度（★の数）
  skills: string[]; // 必要スキル
  mvp: string; // 最初に作るMVP
  emoji: string;
}

// 診断の回答（質問ID -> 選択肢ID）
export type Answers = Partial<Record<QuestionId, string>>;
