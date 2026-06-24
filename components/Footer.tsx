import Link from "next/link";

// フッター。最後にもう一度、そっと背中を押す。
export function Footer() {
  return (
    <footer className="border-t border-stone-200 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-lg font-bold text-stone-900">
          令和の松下村塾を目指す、小さな実験場
        </p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-500">
          AIを学ぶ場所ではない。AIを使って、何かを始める場所。
          走る。語る。学ぶ。つくる。——小さく始めて、仲間と育てる。
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-900">ホーム</Link>
          <Link href="/diagnose" className="hover:text-stone-900">診断</Link>
          <Link href="/zukan" className="hover:text-stone-900">つくれるもの</Link>
          <Link href="/start" className="hover:text-stone-900">はじめかた</Link>
        </div>

        <p className="mt-8 text-xs text-stone-400">
          © {new Date().getFullYear()} 令和の松下村塾 — つくる側へ。
        </p>
      </div>
    </footer>
  );
}
