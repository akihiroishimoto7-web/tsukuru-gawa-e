import type { Question } from "./types";

// 診断の質問（4問）。
// 各選択肢には「どのタイプに何点寄与するか」の重みを持たせ、
// 合計点が最も高いタイプを結果として返す（diagnosis.ts）。
export const questions: Question[] = [
  {
    id: "role",
    title: "いま、あなたはどこに立っていますか？",
    caption: "正解はありません。今日のあなたで大丈夫。",
    choices: [
      {
        id: "office",
        label: "事務・会社員",
        emoji: "🗂️",
        weights: { practical: 3, media: 1 },
      },
      {
        id: "medical",
        label: "医療・介護",
        emoji: "🩺",
        weights: { practical: 3, education: 1 },
      },
      {
        id: "teacher",
        label: "教育・子育て",
        emoji: "📚",
        weights: { education: 3, media: 1 },
      },
      {
        id: "creator",
        label: "クリエイター",
        emoji: "🎨",
        weights: { media: 3, founder: 1 },
      },
      {
        id: "hobby",
        label: "ランナー・趣味人",
        emoji: "🏃",
        weights: { media: 2, explorer: 2 },
      },
      {
        id: "founder",
        label: "起業志向",
        emoji: "🚀",
        weights: { founder: 3, media: 1 },
      },
      {
        id: "other",
        label: "その他・まだ模索中",
        emoji: "🌱",
        weights: { explorer: 3 },
      },
    ],
  },
  {
    id: "want",
    title: "もし作れるなら、何を生み出してみたい？",
    caption: "ワクワクする方を選んでください。",
    choices: [
      {
        id: "tool",
        label: "業務改善ツール",
        emoji: "⚙️",
        weights: { practical: 3, founder: 1 },
      },
      {
        id: "website",
        label: "Webサイト",
        emoji: "🌐",
        weights: { media: 2, explorer: 1 },
      },
      {
        id: "learning",
        label: "学習アプリ",
        emoji: "🧠",
        weights: { education: 3 },
      },
      {
        id: "chatbot",
        label: "AIチャットボット",
        emoji: "💬",
        weights: { founder: 2, explorer: 1 },
      },
      {
        id: "quiz",
        label: "診断アプリ",
        emoji: "🔮",
        weights: { explorer: 2, media: 1 },
      },
      {
        id: "blog",
        label: "副業・発信メディア",
        emoji: "✍️",
        weights: { media: 3 },
      },
    ],
  },
  {
    id: "experience",
    title: "プログラミングは、どれくらい近い存在？",
    caption: "「なし」でもまったく問題ありません。むしろ歓迎です。",
    choices: [
      {
        id: "none",
        label: "まったくない",
        emoji: "🐣",
        weights: { explorer: 2, practical: 1 },
      },
      {
        id: "little",
        label: "少しだけ触れた",
        emoji: "🌿",
        weights: { explorer: 1, media: 1 },
      },
      {
        id: "work",
        label: "仕事で少し使う",
        emoji: "🛠️",
        weights: { practical: 2, founder: 1 },
      },
      {
        id: "much",
        label: "かなり書ける",
        emoji: "⚡",
        weights: { founder: 2, media: 1 },
      },
    ],
  },
  {
    id: "time",
    title: "1週間のうち、どれくらい時間を使えそう？",
    caption: "週1時間でも、3か月で景色は変わります。",
    choices: [
      {
        id: "1h",
        label: "週1時間ほど",
        emoji: "🌙",
        weights: { explorer: 2, practical: 1 },
      },
      {
        id: "3h",
        label: "週3時間ほど",
        emoji: "🌤️",
        weights: { practical: 1, media: 1, education: 1 },
      },
      {
        id: "5h",
        label: "週5時間以上",
        emoji: "☀️",
        weights: { founder: 2, media: 1 },
      },
    ],
  },
];
