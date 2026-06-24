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

// 図鑑のカテゴリ ＝ 志の領域（何を作り変えるか）
export type ZukanCategory =
  | "care" // いのちと暮らしを支える（医療・介護・福祉）
  | "learn" // 人が育つ場をつくる（教育・学び）
  | "local" // 地域と暮らしを立て直す
  | "legacy" // 消えゆくものを残す（文化・技術・記憶）
  | "venture" // 一人から、産業をつくる
  | "knowledge"; // 知の流れを変える（情報・メディア）

// 図鑑の1カード ＝ 挑むに値するテーマ（志）
export interface ZukanItem {
  id: string;
  category: ZukanCategory;
  name: string; // 取り組みの名（具体的な“種”）
  whatChanges: string; // 何を作り変えるか（その分野で起こす変化）
  vision: string; // ここから育つと（数年後に到達しうる景色）
  difficulty: 1 | 2 | 3 | 4 | 5; // 最初の一歩の難易度（★の数）
  skills: string[]; // 必要スキル
  mvp: string; // 今日できる、最初の一歩
  steps: string[]; // つくり方の最初の3ステップ（AIに伝える→小さく作る→自分用に直して公開）
  emoji: string;
}

// 診断の回答（質問ID -> 選択肢ID）
export type Answers = Partial<Record<QuestionId, string>>;
