import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";

// 本文用：可読性の高い Noto Sans JP
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

// 見出し用：丸みがあり温かい Zen Kaku Gothic New
const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  // 相対パスのOG画像を絶対URLに解決するための基準。
  // Vercel等では環境変数 NEXT_PUBLIC_SITE_URL に本番URLを設定すると、共有プレビューが正しく出る。
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "つくる側へ。| AIで、人生を少し変えるものを作る",
  description:
    "昔は世界を変えるのに資金・人脈・組織が必要だった。今は、アイデアとAIがあればいい。あなたが『つくる側』になる未来を診断します。",
  keywords: ["AI", "Claude Code", "個人開発", "非エンジニア", "ものづくり", "希望"],
  openGraph: {
    title: "つくる側へ。",
    description:
      "受け手から、つくる側へ。AIがあれば、普通の人でも自分の仕事・趣味・人生を変えるものを作れる。",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${zenKaku.variable}`}>
      <body className="font-sans">
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
