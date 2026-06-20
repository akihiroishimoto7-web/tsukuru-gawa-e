import Link from "next/link";

// フッター。最後にもう一度、そっと背中を押す。
export function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-lg font-bold text-slate-200">
          受け手から、つくる側へ<span className="text-gradient">。</span>
        </p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
          このサイト自体も、AIと一緒に作られています。
          あなたが次に置くものは、誰かの一日を少し軽くするかもしれません。
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">ホーム</Link>
          <Link href="/diagnose" className="hover:text-white">未来診断</Link>
          <Link href="/zukan" className="hover:text-white">作れるもの図鑑</Link>
        </div>

        <p className="mt-8 text-xs text-slate-600">
          © {new Date().getFullYear()} つくる側へ。— アイデアとAIがあればいい。
        </p>
      </div>
    </footer>
  );
}
