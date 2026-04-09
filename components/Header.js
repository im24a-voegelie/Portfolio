"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiGithub, FiMail } from 'react-icons/fi';

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
          className="text-xl font-semibold bg-gradient-to-r from-violet-900 to-violet-700 bg-clip-text text-transparent hover:opacity-75 transition-opacity"
        >
          EV
        </Link>

        <div className="flex gap-1 sm:gap-4 items-center">
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

          <div className="hidden sm:flex gap-3 ml-4 pl-4 border-l border-violet-900/20 dark:border-violet-800/20">
            <motion.a
              href="mailto:ennio.voegeli@gmx.ch"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="p-2 rounded-lg transition-all duration-200 text-zinc-600 dark:text-zinc-400 hover:text-violet-900 hover:bg-violet-100 dark:hover:text-violet-400 dark:hover:bg-violet-950/40"
              title="E-Mail senden"
            >
              <FiMail size={18} />
            </motion.a>
            <motion.a
              href="https://github.com/im24a-voegelie"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="p-2 rounded-lg transition-all duration-200 text-zinc-600 dark:text-zinc-400 hover:text-violet-900 hover:bg-violet-100 dark:hover:text-violet-400 dark:hover:bg-violet-950/40"
              title="GitHub Profil"
            >
              <FiGithub size={18} />
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
