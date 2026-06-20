"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 上部のナビゲーション。控えめだが、どこにいても診断へ戻れる。
export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/diagnose", label: "未来診断" },
    { href: "/zukan", label: "図鑑" },
    { href: "/start", label: "はじめかた" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-lg font-black tracking-tight text-slate-100 sm:text-xl">
            つくる側へ<span className="text-gradient">。</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-3">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
