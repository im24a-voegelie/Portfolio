"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-violet-900/30 bg-zinc-50/80 backdrop-blur-sm dark:border-violet-800/50 dark:bg-black/80"
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="text-lg font-semibold bg-gradient-to-r from-violet-900 to-violet-700 bg-clip-text text-transparent hover:opacity-75 transition-opacity"
        >
          EV
        </Link>

        <div className="flex gap-1 sm:gap-2">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.1, duration: 0.3 }}
            >
              <Link
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? "bg-violet-200 text-violet-900 dark:bg-violet-900 dark:text-violet-100"
                    : "text-zinc-600 hover:text-violet-700 dark:text-zinc-400 dark:hover:text-violet-400"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
