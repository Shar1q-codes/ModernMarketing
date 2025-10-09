"use client";

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteContent } from "@/data/siteContent";

const nav = siteContent.navigation;

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-zinc-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 via-sky-500 to-emerald-500 text-lg font-semibold text-white shadow-lg">
            {nav.shortBrand}
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">{nav.tagline}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-zinc-600 md:flex md:gap-6">
          {nav.links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 transition-colors hover:text-teal-600 ${
                  isActive ? "text-teal-600" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-teal-400 hover:text-teal-600 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M6 18L18 6" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>

        <a
          href="tel:+919392995580"
          className="hidden rounded-full border border-teal-500 px-4 py-2 text-sm font-semibold text-teal-600 transition hover:bg-teal-500 hover:text-white sm:inline-flex"
        >
          Call +91 9392995580
        </a>
      </div>

      <div
        className={`md:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} transition-opacity duration-200`}
      >
        <div className="border-t border-zinc-200 bg-white/95 px-6 pb-6 pt-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-sm font-medium text-zinc-700">
            {nav.links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-full px-4 py-3 transition-colors hover:bg-teal-50 hover:text-teal-600 ${
                    isActive ? "bg-teal-50 text-teal-600" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+919392995580"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-teal-500 px-4 py-3 text-sm font-semibold text-teal-600 transition hover:bg-teal-500 hover:text-white sm:hidden"
            >
              Call +91 9392995580
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
