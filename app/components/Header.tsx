"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="topbar">
      <div ref={containerRef} className="container topbar-inner">
        <Link href="/" className="brand" aria-label="Modern Marketing Associates home">
          <span className="brand-mark">MMA</span>
          <span>
            <strong>Modern Marketing Associates</strong>
            <small>Hyderabad Building Materials</small>
          </span>
        </Link>

        <button
          type="button"
          className={menuOpen ? "nav-toggle nav-toggle--open" : "nav-toggle"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" className="nav-toggle__bar" />
          <span aria-hidden="true" className="nav-toggle__bar" />
          <span aria-hidden="true" className="nav-toggle__bar" />
        </button>

        <nav
          id="primary-navigation"
          className={menuOpen ? "nav nav--open" : "nav"}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
