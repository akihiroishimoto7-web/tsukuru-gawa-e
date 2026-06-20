# つくる側へ。

> 昔は、世界を変えるのに資金・人脈・組織が必要だった。今は、アイデアとAIがあればいい。

AIで普通の人が「つくる側」になれる——その希望を伝えるWebアプリです。
技術解説サイトではなく、「自分にも作れるかもしれない」と思える体験を目指しています。

## 主な機能

- **トップページ** — 強いヒーローコピー＋世界観セクション
- **未来診断** — 4つの質問で、あなたのタイプ・3か月後/1年後・7日間ロードマップ・必要ツール・励ましを提示
- **作れるもの図鑑** — 6カテゴリ・24種類の「作れるもの」をカード表示（難易度・必要スキル・最初に作るMVP付き）

## 技術構成

- **Next.js 14**（App Router）＋ **TypeScript**
- **Tailwind CSS**（濃紺ベース＋夜明けグラデーション）
- **Framer Motion**（控えめなアニメーション）
- データはすべて `lib/` 内の TypeScript 配列（DB・ログイン不要）
- 全ページ静的生成 → **Vercel にそのままデプロイ可能**

## 起動方法

```bash
# 依存パッケージのインストール（初回のみ）
npm install

# 開発サーバー起動
npm run dev
# → http://localhost:3000 を開く

# 本番ビルド（任意・デプロイ前の確認）
npm run build
npm run start
```

## Vercel へのデプロイ

1. このフォルダを GitHub にプッシュ
2. [vercel.com](https://vercel.com) で「New Project」→ リポジトリを選択
3. フレームワークは自動で Next.js が選ばれます。そのまま Deploy
4. 数十秒で、あなたの作品が URL を持ちます

## ディレクトリ構成

```
tsukuru-gawa-e/
├─ app/
│  ├─ layout.tsx          # 全体レイアウト・フォント・メタ情報
│  ├─ globals.css         # 配色・共通スタイル
│  ├─ page.tsx            # トップページ
│  ├─ diagnose/page.tsx   # 未来診断
│  └─ zukan/page.tsx      # 作れるもの図鑑
├─ components/
│  ├─ Navbar.tsx / Footer.tsx
│  ├─ ui/                 # Reveal（出現演出）・CTAButton
│  ├─ home/               # Hero / WorldShift / Manifesto / ZukanPreview / FinalCTA
│  ├─ diagnose/           # DiagnoseFlow / QuestionCard / ProgressBar / ResultView
│  └─ zukan/              # ZukanExplorer / ZukanCard / CategoryFilter
└─ lib/
   ├─ types.ts            # 型定義
   ├─ questions.ts        # 診断の質問データ
   ├─ diagnosis.ts        # 5タイプの結果＋判定ロジック
   └─ zukan-data.ts       # 図鑑のカードデータ
```

## カスタマイズのヒント

- **コピーを変える** → `lib/diagnosis.ts`（結果文）・各 `components/home/*` の文言
- **図鑑に作品を追加** → `lib/zukan-data.ts` の `zukanItems` に1件追加するだけ
- **質問を増減** → `lib/questions.ts`（判定は自動で対応）
- **色を変える** → `tailwind.config.ts` の `colors` と `app/globals.css`

---

このサイト自体も、AIと一緒に作られています。
**受け手から、つくる側へ。**
