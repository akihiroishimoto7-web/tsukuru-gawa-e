import type { ZukanCategory, ZukanItem } from "./types";

// カテゴリの表示情報
export const categories: {
  id: ZukanCategory;
  label: string;
  emoji: string;
  blurb: string;
}[] = [
  { id: "medical", label: "医療・介護", emoji: "🩺", blurb: "現場の負担を、静かに軽くする" },
  { id: "office", label: "事務・業務改善", emoji: "🗂️", blurb: "毎日の作業を、自分の手で速くする" },
  { id: "education", label: "教育", emoji: "📚", blurb: "わかる喜びを、もっと多くの人へ" },
  { id: "hobby", label: "ランニング・趣味", emoji: "🏃", blurb: "好きを、誰かの役に立つ形に" },
  { id: "media", label: "副業・発信", emoji: "✍️", blurb: "受け手から、発信する側へ" },
  { id: "ai", label: "AIサービス", emoji: "🤖", blurb: "アイデアを、動くサービスに" },
];

// 作れるもの図鑑。
// 「完成した姿が目に浮かぶ」ことを大事にしている。
// あおらず、具体的に。読んだ人が「これなら作ってみたい」と思える題材を集めた。
export const zukanItems: ZukanItem[] = [
  // ===== 医療・介護 =====
  {
    id: "med-1",
    category: "medical",
    name: "実績指数シミュレーター",
    whatChanges: "会議で『なんとなく』で決めていた数字を、根拠のあるグラフで示せるようになる。",
    difficulty: 3,
    skills: ["表計算の基本", "簡単な計算ロジック"],
    mvp: "Excelデータを貼り付けると、実績指数を自動で計算して表示する。",
    emoji: "📈",
  },
  {
    id: "med-2",
    category: "medical",
    name: "退院後サポート説明アプリ",
    whatChanges: "退院を控えた家族が、使える制度や費用の目安を、自宅で落ち着いて確認できる。",
    difficulty: 2,
    skills: ["情報整理", "やさしい文章"],
    mvp: "状況を選ぶと、使える制度と費用の目安を表示するページ。",
    emoji: "🏥",
  },
  {
    id: "med-3",
    category: "medical",
    name: "アウトカム・ダッシュボード",
    whatChanges: "毎月の報告資料づくりに追われていた時間が、ファイルをアップロードして数秒で終わる。",
    difficulty: 3,
    skills: ["データ集計", "グラフ表示"],
    mvp: "Excelをアップロードすると、主要指標が5つのグラフで並ぶ画面。",
    emoji: "📊",
  },
  {
    id: "med-4",
    category: "medical",
    name: "家族向け病気説明AI",
    whatChanges: "医師の説明では難しかった病気のことを、家族が自分の言葉でやさしく確かめられる。",
    difficulty: 4,
    skills: ["AI連携", "医療知識の整理"],
    mvp: "病名を選ぶと、やさしい解説とよくある質問に答えるチャット。",
    emoji: "💗",
  },

  // ===== 事務・業務改善 =====
  {
    id: "off-1",
    category: "office",
    name: "Excel自動集計ツール",
    whatChanges: "毎月コピペでやっていた集計が、ファイルを選ぶだけで終わる。転記ミスもなくなる。",
    difficulty: 2,
    skills: ["表計算の基本"],
    mvp: "ファイルを選ぶと、合計・平均・グラフが自動で出る画面。",
    emoji: "⚙️",
  },
  {
    id: "off-2",
    category: "office",
    name: "議事録AI整形ツール",
    whatChanges: "会議の走り書きメモを貼るだけで、決定事項とTODOに整理された議事録になる。",
    difficulty: 3,
    skills: ["AI連携", "文章整形"],
    mvp: "メモを貼ると、決定事項・TODO・要約に分けて出力する。",
    emoji: "📝",
  },
  {
    id: "off-3",
    category: "office",
    name: "法人報告ダッシュボード",
    whatChanges: "部署ごとにバラバラだった数字が、ひとつの画面で並べて比べられるようになる。",
    difficulty: 4,
    skills: ["データ集計", "グラフ表示", "デザイン感覚"],
    mvp: "各拠点のデータを読み込み、比較グラフで並べるダッシュボード。",
    emoji: "🏢",
  },
  {
    id: "off-4",
    category: "office",
    name: "申請フォーム自動チェッカー",
    whatChanges: "入力ミスを送信前にその場で知らせるので、差し戻しの往復が減る。",
    difficulty: 2,
    skills: ["入力チェックのロジック"],
    mvp: "必須項目や形式の誤りを、送信前に赤く知らせるフォーム。",
    emoji: "✅",
  },

  // ===== 教育 =====
  {
    id: "edu-1",
    category: "education",
    name: "計算ドリルアプリ",
    whatChanges: "正解するとごほうびが出るので、子どもが自分から『もう一回』と練習する。",
    difficulty: 2,
    skills: ["簡単なロジック", "演出の工夫"],
    mvp: "問題を出して採点し、連続正解でごほうびが出るアプリ。",
    emoji: "🧮",
  },
  {
    id: "edu-2",
    category: "education",
    name: "用語暗記チャットボット",
    whatChanges: "覚えたい用語を打つと、意味と例を会話で返してくれる。何度聞いても付き合ってくれる復習相手。",
    difficulty: 3,
    skills: ["AI連携", "教材の整理"],
    mvp: "用語を入力すると、意味と例を会話で返すボット。",
    emoji: "🗣️",
  },
  {
    id: "edu-3",
    category: "education",
    name: "学習進捗の見える化アプリ",
    whatChanges: "勉強した時間がカレンダーと連続日数で見えるので、続けること自体が楽しくなる。",
    difficulty: 3,
    skills: ["記録の保存", "グラフ表示"],
    mvp: "学習時間を記録し、カレンダーと連続日数で表示する。",
    emoji: "🌟",
  },
  {
    id: "edu-4",
    category: "education",
    name: "ゲーム化された学習アプリ",
    whatChanges: "正解するとキャラクターが育ち、図鑑が埋まっていく。学びがゲームの続きになる。",
    difficulty: 4,
    skills: ["ゲーム設計", "演出", "記録の保存"],
    mvp: "正解するとキャラが育つ、コレクション要素つきの学習ゲーム。",
    emoji: "🐱",
  },

  // ===== ランニング・趣味 =====
  {
    id: "hob-1",
    category: "hobby",
    name: "ランニングシューズ診断",
    whatChanges: "いくつかの質問に答えると、自分の走り方に合うシューズを理由つきで教えてくれる。",
    difficulty: 2,
    skills: ["診断ロジック", "データ整理"],
    mvp: "数問に答えると、おすすめシューズを理由つきで提案する。",
    emoji: "👟",
  },
  {
    id: "hob-2",
    category: "hobby",
    name: "ランニングウォッチ診断",
    whatChanges: "使い方を選ぶと、自分に合うウォッチをランキングで提案してくれる。買って後悔しなくなる。",
    difficulty: 2,
    skills: ["診断ロジック", "比較データ"],
    mvp: "用途を選ぶと、最適なモデルをランキングで表示する。",
    emoji: "⌚",
  },
  {
    id: "hob-3",
    category: "hobby",
    name: "練習ログ可視化アプリ",
    whatChanges: "走った距離を入れていくと、週ごと・月ごとの積み上げがグラフで見える。",
    difficulty: 3,
    skills: ["記録の保存", "グラフ表示"],
    mvp: "走った距離を入力すると、週間・月間の推移をグラフで見せる。",
    emoji: "🏃",
  },
  {
    id: "hob-4",
    category: "hobby",
    name: "好きを語る趣味サイト",
    whatChanges: "自分の『好き』をテーマにした記事サイト。検索から、同じ趣味の人が訪ねてくる。",
    difficulty: 1,
    skills: ["文章", "ページ作成"],
    mvp: "テーマを1つに絞った、記事つきの静かな個人サイト。",
    emoji: "📷",
  },

  // ===== 副業・発信 =====
  {
    id: "media-1",
    category: "media",
    name: "比較表ジェネレーター",
    whatChanges: "商品データを入れると、見やすい比較表が自動で完成する。読者の『どれがいい？』に答えられる記事になる。",
    difficulty: 2,
    skills: ["データ整理", "表のデザイン"],
    mvp: "商品データを入れると、見やすい比較表を自動生成する。",
    emoji: "📋",
  },
  {
    id: "media-2",
    category: "media",
    name: "ブログ下書き支援ツール",
    whatChanges: "テーマを入れると見出し案と書き出しを提案してくれる。『何を書こう』で止まらなくなる。",
    difficulty: 3,
    skills: ["AI連携", "構成づくり"],
    mvp: "テーマを入れると、見出し案と書き出しを提案する。",
    emoji: "✍️",
  },
  {
    id: "media-3",
    category: "media",
    name: "静かな個人ブログ",
    whatChanges: "広告のない、余白を生かした読みやすいブログ。読む人がゆっくり過ごせる場所になる。",
    difficulty: 2,
    skills: ["デザイン感覚", "文章"],
    mvp: "余白を生かした、読みやすさ最優先のブログ。",
    emoji: "🕊️",
  },
  {
    id: "media-4",
    category: "media",
    name: "読者参加型の診断コンテンツ",
    whatChanges: "数問で結果が出る診断ページ。読んで終わりではなく、結果をシェアしてもらえる。",
    difficulty: 3,
    skills: ["診断ロジック", "コピー"],
    mvp: "数問で結果が出る、テーマに沿った診断ページ。",
    emoji: "🔮",
  },

  // ===== AIサービス =====
  {
    id: "ai-1",
    category: "ai",
    name: "相談AIチャット",
    whatChanges: "テーマを絞った相談相手。誰に聞けばいいかわからない悩みに、夜中でも答えてくれる。",
    difficulty: 4,
    skills: ["AI連携", "対話設計"],
    mvp: "テーマを絞って、悩みに寄り添って答えるチャット。",
    emoji: "💬",
  },
  {
    id: "ai-2",
    category: "ai",
    name: "定点観測ダッシュボード",
    whatChanges: "気になるテーマの最新情報を、カードで一覧にして見せる。追いきれない動きが一目でわかる。",
    difficulty: 4,
    skills: ["データ収集", "デザイン", "更新の仕組み"],
    mvp: "特定テーマの最新情報を、カードで並べて見せる画面。",
    emoji: "🗺️",
  },
  {
    id: "ai-3",
    category: "ai",
    name: "AI要約サービス",
    whatChanges: "URLや長文を入れると、要点を3行にまとめてくれる。『あとで読む』がすぐ終わる。",
    difficulty: 3,
    skills: ["AI連携"],
    mvp: "URLや文章を入れると、要点を3行でまとめる。",
    emoji: "⚡",
  },
  {
    id: "ai-4",
    category: "ai",
    name: "ニッチ特化のAIツール",
    whatChanges: "大手がやらない狭い業務に1点特化したAIツール。あなたの現場の知識が、そのまま強みになる。",
    difficulty: 4,
    skills: ["AI連携", "課題発見", "申し込み導線"],
    mvp: "特定業務に1点特化した、AI処理つきの小さなサービス。",
    emoji: "🎯",
  },
];

// カテゴリでフィルタするヘルパー
export function getItemsByCategory(category: ZukanCategory | "all"): ZukanItem[] {
  if (category === "all") return zukanItems;
  return zukanItems.filter((item) => item.category === category);
}
