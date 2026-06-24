import { questions } from "./questions";
import type { Answers, ResultType, ResultTypeId } from "./types";

// 5つの結果タイプ。コピーライティングを最重視している。
export const resultTypes: Record<ResultTypeId, ResultType> = {
  practical: {
    id: "practical",
    name: "現場変革タイプ",
    catchphrase: "あなたの『これ、おかしい』が、現場のあたりまえを変える。",
    description:
      "毎日の現場で、小さな不合理に気づいてしまうあなた。その違和感は、現場を知る人にしか持てない宝です。AIを使えば、『誰かがやらなきゃ』を、あなたの手で形にできる。一つの職場から始まった工夫が、やがて同じ現場すべてのあたりまえを書き換えていきます。",
    inThreeMonths:
      "目の前の面倒を解く、小さなツールやガイドが動き出す。『これ、自分で作ったの？』と驚かれるものが、もう手の中にあります。",
    inOneYear:
      "それが部署やチームの標準になり、現場が目に見えて軽くなる。『困ったら、あの人』の“あの人”になっています。",
    inThreeYears:
      "同じ悩みを抱える他の現場にも広がり、あなたの工夫が“その業界のあたりまえ”になっている。現場を知る人が作ったものは、外注では届かない場所まで届きます。",
    roadmap: [
      { day: "Day 1", title: "環境をひらく", detail: "Claude Code を入れて『Hello』と話しかけてみる。それだけで第一歩。" },
      { day: "Day 2", title: "不満を1つ書き出す", detail: "毎日の作業で『これ面倒』を1つ言葉にする。それがテーマになる。" },
      { day: "Day 3", title: "小さく動かす", detail: "AIに頼んで、データを1行だけ自動で整える処理を作る。" },
      { day: "Day 4", title: "見た目を整える", detail: "ボタンと結果表示をつける。自分が毎日使いたくなる形に。" },
      { day: "Day 5", title: "本物のデータで試す", detail: "実際の業務ファイルで動かし、ズレを直す。" },
      { day: "Day 6", title: "世界に置く", detail: "Vercel に公開し、URLを1つ手に入れる。あなたの作品が住所を持つ瞬間。" },
      { day: "Day 7", title: "誰か一人に見せる", detail: "同僚に渡してみる。『助かる』の一言が、次の燃料になる。" },
    ],
    tools: ["Claude Code", "VSCode", "GitHub", "Vercel"],
    encouragement:
      "現場を一番わかっているのは、外の誰かではなく、そこにいるあなたです。あなたが作るものは、明日の誰かの定時退社になる。",
    recommendedCategory: "local",
    gradient: "from-sky-400 via-indigo-500 to-violet-500",
  },

  education: {
    id: "education",
    name: "教育変革タイプ",
    catchphrase: "『わかった』の瞬間を、もっと多くの人に。",
    description:
      "誰かが『わかった！』と顔を上げる瞬間を、あなたは知っています。教える情熱とAIが出会うと、教材は紙を飛び出して、一人ひとりのつまずきに寄り添う学びになる。つまずく子に、何度でも別のやり方を差し出せる場を、あなたは作れます。",
    inThreeMonths:
      "苦手をくり返し練習できる教材や、つまずきに合わせて教え方を変える仕組みが動き出す。『勉強嫌い』が『もう一回』に変わります。",
    inOneYear:
      "あなたの教材で学ぶ人が増え、教室や家庭の空気が変わる。塾や学校の枠を越えて、会ったことのない子の『できた！』に届きます。",
    inThreeYears:
      "環境や家庭に左右されてきた“学ぶ機会の格差”を、あなたの教材が静かに埋めている。教育は、もう一人で抱えるものではなくなります。",
    roadmap: [
      { day: "Day 1", title: "環境をひらく", detail: "Claude Code を入れて、まず1問だけのクイズを作ってもらう。" },
      { day: "Day 2", title: "教えたい相手を思い浮かべる", detail: "誰の、どんなつまずきを助けたいか。顔を1人決める。" },
      { day: "Day 3", title: "1問を出して採点する", detail: "問題を出し、正解・不正解を判定する仕組みを作る。" },
      { day: "Day 4", title: "やさしさを足す", detail: "間違えても励ます言葉、もう一度挑戦できるボタンをつける。" },
      { day: "Day 5", title: "続けたくなる工夫", detail: "連続正解の表示やごほうび演出で『もう一回』を引き出す。" },
      { day: "Day 6", title: "世界に置く", detail: "Vercel に公開し、スマホからも開けるようにする。" },
      { day: "Day 7", title: "一人に届ける", detail: "実際の子・生徒に使ってもらい、反応を見て直す。" },
    ],
    tools: ["Claude Code", "VSCode", "GitHub", "Vercel", "Supabase（記録を残すなら）"],
    encouragement:
      "あなたが昔ほしかった『わかりやすさ』を、今のあなたなら作れます。その教材は、まだ会っていない誰かの自信になる。",
    recommendedCategory: "learn",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
  },

  media: {
    id: "media",
    name: "知の解放タイプ",
    catchphrase: "あなたの言葉が、誰かの『知る』を広げる。",
    description:
      "伝えたいこと、調べ抜いたこと、難しくて誰も教えてくれなかったこと——それは、誰かが今まさに探している答えです。AIを味方につければ、専門家しか読めなかった情報を、誰もが読める形に開ける。発信は才能ではなく、続けられる仕組みを作れるかどうか。あなたは作れる側にいます。",
    inThreeMonths:
      "自分のテーマで、難しい情報をやさしく開くメディアや、偏りなく追える観測サイトが動き出す。『受け取るだけ』が『届ける側』に変わります。",
    inOneYear:
      "検索からそっと人が訪れ、『ここで初めてわかった』と言われる。あなたの整理が、ある分野の“入口”として頼られはじめます。",
    inThreeYears:
      "知識の格差を、情報の届け方の側から崩している。専門家と市民のあいだに、あなたが橋を架けています。",
    roadmap: [
      { day: "Day 1", title: "環境をひらく", detail: "Claude Code を入れて、1ページだけのサイトを出してもらう。" },
      { day: "Day 2", title: "テーマを1つに絞る", detail: "一番語れる『好き』を1つ決める。狭いほど刺さる。" },
      { day: "Day 3", title: "トップページを作る", detail: "あなたらしいヒーローコピーと、伝えたい想いを1枚に。" },
      { day: "Day 4", title: "コンテンツを置く", detail: "記事や比較表など、読者の役に立つものを1つ載せる。" },
      { day: "Day 5", title: "見た目を磨く", detail: "色・余白・文字を整え、『また来たい』空気をつくる。" },
      { day: "Day 6", title: "世界に置く", detail: "Vercel に公開。あなたの言葉が検索に乗る準備が整う。" },
      { day: "Day 7", title: "1人に届ける", detail: "SNSや知人に共有し、最初の感想をもらう。" },
    ],
    tools: ["Claude Code", "VSCode", "GitHub", "Vercel"],
    encouragement:
      "完璧な発信者を待つ必要はありません。今日のあなたの言葉で、誰かの『知る』は確かに広がります。",
    recommendedCategory: "knowledge",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
  },

  founder: {
    id: "founder",
    name: "産業創出タイプ",
    catchphrase: "一人とAIから、新しい産業は始められる。",
    description:
      "『これ、世の中にあったら絶対いいのに』——その声が、あなたの中で消えない。かつて起業には資金・人脈・チームが要りました。今は、あなた一人とAIで、動くものを今日から作り始められる。大手が手を出さない狭い課題こそ、現場を知るあなたの戦場です。",
    inThreeMonths:
      "その業界の面倒を1点で解く、申し込めるツールが動き出す。『いつかやりたい』が『もう動いている』に変わります。",
    inOneYear:
      "最初のユーザーがファンになり、フィードバックでプロダクトが育つ。あなたの名前で立ち上げたものが、誰かの仕事に欠かせなくなっています。",
    inThreeYears:
      "一人から始めたツールが、その業界の“標準”になっている。小さなニッチが、確かな事業に育っています。",
    roadmap: [
      { day: "Day 1", title: "環境をひらく", detail: "Claude Code・GitHub・Vercel を一気にそろえる。土台は1日で。" },
      { day: "Day 2", title: "解く課題を1行で", detail: "『誰の、どんな困りごとを解くか』を1文で言い切る。" },
      { day: "Day 3", title: "コア機能だけ作る", detail: "一番価値のある1機能に絞って、動くものを作る。" },
      { day: "Day 4", title: "AIを組み込む", detail: "Claude API などで、人手では大変な処理をAIに任せる。" },
      { day: "Day 5", title: "申し込み口を作る", detail: "問い合わせ・登録フォームを置き、反応を受け取れる形に。" },
      { day: "Day 6", title: "世界に置く", detail: "Vercel に公開し、SNSで告知できるURLを手に入れる。" },
      { day: "Day 7", title: "最初の1人に届ける", detail: "想定ユーザーに直接見せ、本音のフィードバックをもらう。" },
    ],
    tools: ["Claude Code", "Codex", "VSCode", "GitHub", "Vercel", "Supabase", "Claude API"],
    encouragement:
      "大きく始める必要はありません。今夜、1機能だけ動かす。その小さな一歩が、あなたのプロダクトの確かな始まりになります。",
    recommendedCategory: "venture",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
  },

  explorer: {
    id: "explorer",
    name: "探究タイプ",
    catchphrase: "何もないところから、はじめればいい。",
    description:
      "まだ進む道は決まっていない。それは弱みではなく、最高の出発点です。AIは、初心者にこそ一番やさしい相棒。わからないことを何度聞いても、怒らず、笑わず、隣で一緒に作ってくれる。今日『なし』だった経験は、3か月後には『作ったことがある』に変わります。",
    inThreeMonths:
      "身近な記録や、残しておきたい誰かの記憶を形にする——小さな作品が動き出す。『自分には無理』が、『意外とできた』に変わります。",
    inOneYear:
      "作る楽しさが習慣になり、得意が見えてくる。気づけば、人に教える側に回っています。",
    inThreeYears:
      "あなたが残したものが、家族や地域の“消えなかった記憶”になっている。『つくる側』のスタート地点に立った人だけが見られる景色が、あなたのものに。",
    roadmap: [
      { day: "Day 1", title: "こわがらず触れる", detail: "Claude Code を入れて『何ができる？』と聞いてみる。会話から始めてOK。" },
      { day: "Day 2", title: "好きなものを1つ", detail: "興味のあるテーマを1つ選ぶ。猫でも、走ることでも、なんでも。" },
      { day: "Day 3", title: "1ページ出してみる", detail: "AIに頼んで、画面に文字と色を出す。動いた感動を味わう。" },
      { day: "Day 4", title: "ボタンを足す", detail: "押すと反応するボタンを1つ。『自分で動かせた』を体験。" },
      { day: "Day 5", title: "小さな診断にする", detail: "質問に答えると結果が出る、簡単な仕組みを作ってみる。" },
      { day: "Day 6", title: "世界に置く", detail: "Vercel に公開。あなたの最初の作品がURLを持つ。" },
      { day: "Day 7", title: "誰かに見せる", detail: "家族や友だちに見せて『作ったよ』と言ってみる。" },
    ],
    tools: ["Claude Code", "VSCode", "GitHub", "Vercel"],
    encouragement:
      "経験がないことは、恥ずかしいことではありません。今日始める人が、半年後の『くわしい人』です。最初の一歩を、AIと一緒に踏み出しましょう。",
    recommendedCategory: "legacy",
    gradient: "from-indigo-400 via-violet-500 to-purple-500",
  },
};

// 回答からタイプを判定する。
// 各選択肢の weights を合計し、最も点数の高いタイプを返す。
// 同点や未回答時は explorer（誰でも歓迎の入口）を返す。
export function diagnose(answers: Answers): ResultType {
  const scores: Record<ResultTypeId, number> = {
    practical: 0,
    education: 0,
    media: 0,
    founder: 0,
    explorer: 0,
  };

  for (const question of questions) {
    const choiceId = answers[question.id];
    if (!choiceId) continue;
    const choice = question.choices.find((c) => c.id === choiceId);
    if (!choice) continue;
    for (const [typeId, weight] of Object.entries(choice.weights)) {
      if (typeId in scores && typeof weight === "number") {
        scores[typeId as ResultTypeId] += weight;
      }
    }
  }

  let best: ResultTypeId = "explorer";
  let bestScore = -1;
  // resultTypes のキー順で評価することで、同点時の結果を安定させる
  (Object.keys(resultTypes) as ResultTypeId[]).forEach((typeId) => {
    if (scores[typeId] > bestScore) {
      bestScore = scores[typeId];
      best = typeId;
    }
  });

  return resultTypes[best];
}

// 「作ってみたいもの」の選択を、結果ページで自然な言葉に変換する
export const wantLabelMap: Record<string, string> = {
  tool: "業務改善ツール",
  website: "Webサイト",
  learning: "学習アプリ",
  chatbot: "AIチャットボット",
  quiz: "診断アプリ",
  blog: "副業・発信メディア",
};

// 「使える時間」を、励ましの一言に変換する
export const timeEncouragementMap: Record<string, string> = {
  "1h": "週1時間。それでも、3か月あれば最初の作品は完成します。",
  "3h": "週3時間。続ければ、半年で『作れる人』に変わります。",
  "5h": "週5時間以上。それだけ向き合えるなら、進みはずっと早いはずです。",
};

// ===== 共有リンク用：回答 ⇄ 短い文字列 =====
// 質問順に選択肢IDを「-」で連結する（例: medical-tool-work-3h）。
// 選択肢IDにハイフンは含まれないため、安全に分解できる。

export function encodeAnswers(answers: Answers): string {
  return questions.map((q) => answers[q.id] ?? "").join("-");
}

export function decodeAnswers(code: string): Answers {
  const parts = code.split("-");
  const answers: Answers = {};
  questions.forEach((q, i) => {
    const token = parts[i];
    // 不正なトークンは無視し、壊れたURLでも落ちないようにする
    if (token && q.choices.some((c) => c.id === token)) {
      answers[q.id] = token;
    }
  });
  return answers;
}

// 全問に有効な回答が揃っているか
export function isComplete(answers: Answers): boolean {
  return questions.every((q) => Boolean(answers[q.id]));
}

// ===== 道具箱を「行動」につなげるための公式リンク =====
const toolLinks: { key: string; url: string }[] = [
  // 「Claude Code」を「Claude API」より先に並べ、startsWith の取りこぼしを防ぐ
  { key: "Claude Code", url: "https://www.anthropic.com/claude-code" },
  { key: "Claude API", url: "https://www.anthropic.com/api" },
  { key: "Codex", url: "https://openai.com/codex/" },
  { key: "VSCode", url: "https://code.visualstudio.com/" },
  { key: "GitHub", url: "https://github.com/" },
  { key: "Vercel", url: "https://vercel.com/" },
  { key: "Supabase", url: "https://supabase.com/" },
];

export function getToolLink(tool: string): string | undefined {
  return toolLinks.find((t) => tool.startsWith(t.key))?.url;
}
