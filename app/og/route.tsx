import { ImageResponse } from "next/og";
import { decodeAnswers, diagnose, resultTypes } from "@/lib/diagnosis";
import type { ResultTypeId } from "@/lib/types";

// 共有時のリンクプレビュー画像（1200×630）を、診断タイプごとに動的生成する。
export const runtime = "edge";

// タイプごとのアクセントグラデーション（2色）
const gradientHex: Record<ResultTypeId, [string, string]> = {
  practical: ["#38bdf8", "#8b5cf6"],
  education: ["#34d399", "#06b6d4"],
  media: ["#f472b6", "#fb7185"],
  founder: ["#fbbf24", "#fb7185"],
  explorer: ["#818cf8", "#a855f7"],
};

// 描画する文字だけを含む軽量フォントを Google Fonts から取得する。
// （日本語フルセットは重いので、&text= でサブセット化するのが定石）
async function loadJpFont(text: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&text=${encodeURIComponent(
    text
  )}`;
  const css = await (
    await fetch(url, {
      headers: {
        // woff2 ではなく ttf を返してもらうため、古めの UA を送る
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    })
  ).text();
  const match = css.match(/src: url\((.+?)\) format\((.+?)\)/);
  if (!match) throw new Error("font url not found");
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // ?a=<回答コード> から、または ?type=<タイプID> からタイプを決定。
  // どちらも無ければ explorer（誰でも歓迎の入口）を既定にする。
  let type = resultTypes.explorer;
  const code = searchParams.get("a");
  const typeParam = searchParams.get("type") as ResultTypeId | null;
  if (code) {
    type = diagnose(decodeAnswers(code));
  } else if (typeParam && resultTypes[typeParam]) {
    type = resultTypes[typeParam];
  }

  const brand = "つくる側へ。";
  const label = "AI 未来診断";
  const heading = "あなたのタイプ";
  const tagline = "あなたは、何を変えられる人？ ── つくる側へ。";

  // 画像内に出る全文字を集めてフォントをサブセット取得
  const allText =
    brand + label + heading + tagline + type.name + "「" + type.catchphrase + "」";

  let fontData: ArrayBuffer | null = null;
  try {
    fontData = await loadJpFont(allText);
  } catch {
    // フォント取得に失敗しても画像生成自体は続行（最悪、英数のみ既定フォントで描画）
    fontData = null;
  }

  const [c1, c2] = gradientHex[type.id];

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#070a18",
          backgroundImage:
            "radial-gradient(60% 80% at 80% 0%, rgba(168,85,247,0.25), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(255,138,92,0.18), transparent 60%)",
          padding: "72px 80px",
          justifyContent: "space-between",
          fontFamily: fontData ? "NotoSansJP" : "sans-serif",
        }}
      >
        {/* 上段：ブランド + ラベル */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 36, color: "#e2e8f0", fontWeight: 700 }}>
            {brand}
          </div>
          <div style={{ marginLeft: 24, fontSize: 26, color: "#ff8a5c" }}>
            {label}
          </div>
        </div>

        {/* 中段：あなたのタイプ + タイプ名 + アクセント線 + キャッチ */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#94a3b8", marginBottom: 18 }}>
            {heading}
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#f8fafc",
              lineHeight: 1.1,
            }}
          >
            {type.name}
          </div>
          <div
            style={{
              display: "flex",
              width: 220,
              height: 10,
              marginTop: 28,
              borderRadius: 9999,
              backgroundImage: `linear-gradient(90deg, ${c1}, ${c2})`,
            }}
          />
          <div style={{ fontSize: 38, color: "#cbd5e1", marginTop: 34 }}>
            {`「${type.catchphrase}」`}
          </div>
        </div>

        {/* 下段：問いかけ */}
        <div style={{ fontSize: 30, color: "#64748b" }}>{tagline}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontData
        ? [{ name: "NotoSansJP", data: fontData, weight: 700, style: "normal" }]
        : [],
    }
  );
}
