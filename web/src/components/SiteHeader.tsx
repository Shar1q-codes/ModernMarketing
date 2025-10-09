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
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const links = nav.links.map((link) => {
    const isActive =
      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
    return (
      <Link
        key={link.href}
        href={link.href}
        onClick={closeMenu}
        className={`rounded-full px-3 py-2 transition-colors hover:text-teal-600 ${
          isActive ? "text-teal-600" : ""
        }`}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-zinc-900">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 via-sky-500 to-emerald-500 text-base font-semibold text-white shadow-lg">
              {nav.shortBrand}
            </div>
            <span className="text-lg font-semibold leading-tight sm:text-xl">
              {nav.tagline}
            </span>
          </Link>

          <nav className="hidden items-center gap-4 text-sm font-medium text-zinc-600 md:flex md:gap-6">
            {links}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919392995580"
              className="hidden rounded-full border border-teal-500 px-4 py-2 text-sm font-semibold text-teal-600 transition hover:bg-teal-500 hover:text-white lg:inline-flex"
            >
              Call +91 9392995580
            </a>
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
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div className="md:hidden fixed inset-0 z-40 bg-white">
            <div className="mx-auto flex h-full max-w-6xl flex-col px-6 pt-20 pb-12">
              <nav className="flex flex-col gap-4 text-base font-medium text-zinc-800">
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
                  onClick={closeMenu}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-teal-500 px-4 py-3 text-sm font-semibold text-teal-600 transition hover:bg-teal-500 hover:text-white"
                >
                  Call +91 9392995580
                </a>
              </nav>
            </div>
          </div>
          <div
            className="md:hidden fixed inset-0 z-30 bg-black/20"
            onClick={closeMenu}
          />
        </>
      )}
    </>
  );
}

