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
  title: "令和の松下村塾 | AIを使って、何かを始める場所",
  description:
    "AIを学ぶ場所ではない。AIを使って、人生・仕事・挑戦を面白くする仲間が集まる場。走る。語る。学ぶ。つくる。会社も年齢も関係ない。小さく始めて、仲間と育てる。",
  keywords: ["AI", "Claude Code", "松下村塾", "志", "個人開発", "地方", "仲間", "実験場"],
  openGraph: {
    title: "令和の松下村塾",
    description:
      "AIを学ぶ場所ではない。AIを使って、何かを始める場所。面白いと思った人が集まり、学び、語り、つくる。",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f7",
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
