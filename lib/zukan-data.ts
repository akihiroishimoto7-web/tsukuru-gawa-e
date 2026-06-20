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
// 実在しそうな・実際に個人が作っている題材を中心に、
// 「自分にも作れそう」と思える具体性を重視している。
export const zukanItems: ZukanItem[] = [
  // ===== 医療・介護 =====
  {
    id: "med-1",
    category: "medical",
    name: "実績指数シミュレーター",
    whatChanges: "病院の意思決定を早くする。会議で『勘』だった判断に、数字の根拠を渡せる。",
    difficulty: 3,
    skills: ["表計算の基本", "簡単な計算ロジック"],
    mvp: "Excelデータを貼り付けると、実績指数を自動で計算して表示する。",
    emoji: "📈",
  },
  {
    id: "med-2",
    category: "medical",
    name: "退院後サポート説明アプリ",
    whatChanges: "退院前の不安を減らす。家族が制度や費用を、自宅でゆっくり確認できる。",
    difficulty: 2,
    skills: ["情報整理", "やさしい文章"],
    mvp: "状況を選ぶと、使える制度と費用の目安を表示するページ。",
    emoji: "🏥",
  },
  {
    id: "med-3",
    category: "medical",
    name: "アウトカム・ダッシュボード",
    whatChanges: "病棟の成果を一目で見える化。報告資料づくりの残業をなくす。",
    difficulty: 3,
    skills: ["データ集計", "グラフ表示"],
    mvp: "Excelをアップロードすると、主要指標が5つのグラフで並ぶ画面。",
    emoji: "📊",
  },
  {
    id: "med-4",
    category: "medical",
    name: "家族向け病気説明AI",
    whatChanges: "難しい病気の説明を、家族の言葉に翻訳する。深夜の不安に、そっと答える。",
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
    whatChanges: "毎月の手作業集計を一瞬に。コピペとミスチェックから解放される。",
    difficulty: 2,
    skills: ["表計算の基本"],
    mvp: "ファイルを選ぶと、合計・平均・グラフが自動で出る画面。",
    emoji: "⚙️",
  },
  {
    id: "off-2",
    category: "office",
    name: "議事録AI整形ツール",
    whatChanges: "走り書きメモを、5分で整った議事録に。会議後の30分を取り戻す。",
    difficulty: 3,
    skills: ["AI連携", "文章整形"],
    mvp: "メモを貼ると、決定事項・TODO・要約に分けて出力する。",
    emoji: "📝",
  },
  {
    id: "off-3",
    category: "office",
    name: "法人報告ダッシュボード",
    whatChanges: "部署バラバラの数字を1画面に。経営に届く資料を、現場の手で作る。",
    difficulty: 4,
    skills: ["データ集計", "グラフ表示", "デザイン感覚"],
    mvp: "各拠点のデータを読み込み、比較グラフで並べるダッシュボード。",
    emoji: "🏢",
  },
  {
    id: "off-4",
    category: "office",
    name: "申請フォーム自動チェッカー",
    whatChanges: "差し戻しを減らす。入力ミスをその場で見つけ、やり直しの往復をなくす。",
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
    whatChanges: "『勉強嫌い』を『もう一回！』に。苦手を、笑顔で何度でも練習できる。",
    difficulty: 2,
    skills: ["簡単なロジック", "演出の工夫"],
    mvp: "問題を出して採点し、連続正解でごほうびが出るアプリ。",
    emoji: "🧮",
  },
  {
    id: "edu-2",
    category: "education",
    name: "用語暗記チャットボット",
    whatChanges: "ひとりの復習に、相棒を。聞けば何度でも、やさしく教えてくれる。",
    difficulty: 3,
    skills: ["AI連携", "教材の整理"],
    mvp: "用語を入力すると、意味と例を会話で返すボット。",
    emoji: "🗣️",
  },
  {
    id: "edu-3",
    category: "education",
    name: "学習進捗の見える化アプリ",
    whatChanges: "続ける力を育てる。がんばりが目に見えると、子どもは自分から机に向かう。",
    difficulty: 3,
    skills: ["記録の保存", "グラフ表示"],
    mvp: "学習時間を記録し、カレンダーと連続日数で表示する。",
    emoji: "🌟",
  },
  {
    id: "edu-4",
    category: "education",
    name: "ゲーム化された学習アプリ",
    whatChanges: "学びを冒険に変える。育成や図鑑で、続けることが楽しみになる。",
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
    whatChanges: "迷いを確信に。膨大な選択肢から、自分に合う1足へ案内する。",
    difficulty: 2,
    skills: ["診断ロジック", "データ整理"],
    mvp: "数問に答えると、おすすめシューズを理由つきで提案する。",
    emoji: "👟",
  },
  {
    id: "hob-2",
    category: "hobby",
    name: "ランニングウォッチ診断",
    whatChanges: "ガジェット選びの後悔をなくす。使い方に合う1台を、根拠つきで選べる。",
    difficulty: 2,
    skills: ["診断ロジック", "比較データ"],
    mvp: "用途を選ぶと、最適なモデルをランキングで表示する。",
    emoji: "⌚",
  },
  {
    id: "hob-3",
    category: "hobby",
    name: "練習ログ可視化アプリ",
    whatChanges: "続ける自分を好きになる。積み上げた距離が、自信に変わる。",
    difficulty: 3,
    skills: ["記録の保存", "グラフ表示"],
    mvp: "走った距離を入力すると、週間・月間の推移をグラフで見せる。",
    emoji: "🏃",
  },
  {
    id: "hob-4",
    category: "hobby",
    name: "好きを語る趣味サイト",
    whatChanges: "情熱に住所を与える。同じ『好き』を持つ人と、検索でつながる。",
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
    whatChanges: "読者の『どれがいい？』に即答する。比較記事が、選ばれる記事になる。",
    difficulty: 2,
    skills: ["データ整理", "表のデザイン"],
    mvp: "商品データを入れると、見やすい比較表を自動生成する。",
    emoji: "📋",
  },
  {
    id: "media-2",
    category: "media",
    name: "ブログ下書き支援ツール",
    whatChanges: "『書けない日』をなくす。続ける発信の、いちばんの壁を越える。",
    difficulty: 3,
    skills: ["AI連携", "構成づくり"],
    mvp: "テーマを入れると、見出し案と書き出しを提案する。",
    emoji: "✍️",
  },
  {
    id: "media-3",
    category: "media",
    name: "静かな個人ブログ",
    whatChanges: "広告まみれの世界に、落ち着く居場所を。読む人の時間を大切にする。",
    difficulty: 2,
    skills: ["デザイン感覚", "文章"],
    mvp: "余白を生かした、読みやすさ最優先のブログ。",
    emoji: "🕊️",
  },
  {
    id: "media-4",
    category: "media",
    name: "読者参加型の診断コンテンツ",
    whatChanges: "記事を『体験』に変える。シェアされ、新しい読者を連れてくる。",
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
    whatChanges: "深夜の『誰に聞けば』をなくす。専門の入口を、24時間ひらく。",
    difficulty: 4,
    skills: ["AI連携", "対話設計"],
    mvp: "テーマを絞って、悩みに寄り添って答えるチャット。",
    emoji: "💬",
  },
  {
    id: "ai-2",
    category: "ai",
    name: "定点観測ダッシュボード",
    whatChanges: "移り変わる情報を、ひと目で。追いきれない動きを、整理して届ける。",
    difficulty: 4,
    skills: ["データ収集", "デザイン", "更新の仕組み"],
    mvp: "特定テーマの最新情報を、カードで並べて見せる画面。",
    emoji: "🗺️",
  },
  {
    id: "ai-3",
    category: "ai",
    name: "AI要約サービス",
    whatChanges: "長文を読む時間を返す。忙しい人の『あとで読む』を、今すぐに。",
    difficulty: 3,
    skills: ["AI連携"],
    mvp: "URLや文章を入れると、要点を3行でまとめる。",
    emoji: "⚡",
  },
  {
    id: "ai-4",
    category: "ai",
    name: "ニッチ特化のAIツール",
    whatChanges: "大手が手を出さない『狭い課題』を解く。あなたの現場知が、強みになる。",
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
