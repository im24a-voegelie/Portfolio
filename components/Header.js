"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Projects", label: "Projekte" },
    { href: "/about", label: "Über mich" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-violet-900/30 bg-zinc-50/80 backdrop-blur-sm dark:border-violet-800/50 dark:bg-black/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="text-lg font-semibold bg-gradient-to-r from-violet-900 to-violet-700 bg-clip-text text-transparent hover:opacity-75 transition-opacity"
        >
          EV
        </Link>

        <div className="flex gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(link.href)
                  ? "bg-violet-200 text-violet-900 dark:bg-violet-900 dark:text-violet-100"
                  : "text-zinc-600 hover:text-violet-700 dark:text-zinc-400 dark:hover:text-violet-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
