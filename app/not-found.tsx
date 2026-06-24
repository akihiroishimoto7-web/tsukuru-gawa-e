import { CTAButton } from "@/components/ui/CTAButton";

// オンブランドな404。迷い込んだ人にも、希望のトーンで応える。
export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center px-5 py-20 text-center sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[300px] bg-aurora" />
      <div className="mx-auto max-w-lg">
        <p className="font-display text-6xl font-black text-gradient sm:text-7xl">
          404
        </p>
        <h1 className="mt-6 font-display text-2xl font-bold text-stone-900 sm:text-3xl">
          このページは、まだ誰も作っていません。
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-stone-500">
          でも、それはチャンスかもしれない。
          <br />
          つくる側のあなたなら、ここから始められます。
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/diagnose">
            志を診断する
            <span aria-hidden>→</span>
          </CTAButton>
          <CTAButton href="/" variant="ghost">
            ホームへ戻る
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
