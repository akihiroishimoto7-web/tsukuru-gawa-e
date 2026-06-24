"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 上部のナビゲーション。白地に、静かで知的な佇まい。
export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/zukan", label: "つくれるもの" },
    { href: "/start", label: "はじめかた" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#faf9f7]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-display text-base font-black tracking-tight text-stone-900 sm:text-lg">
            令和の松下村塾
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                  active
                    ? "bg-stone-900 text-white"
                    : "text-stone-500 hover:text-stone-900"
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
