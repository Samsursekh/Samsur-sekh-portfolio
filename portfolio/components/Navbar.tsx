"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/80 backdrop-blur-xl" : ""
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-gutter py-4 max-w-container-max mx-auto">
        <a href="#top" className="font-display text-[24px] md:text-[32px] tracking-tighter text-on-surface">
          Samsur Sekh
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[12px] font-semibold uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent border border-outline-variant/30 text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-[12px] font-semibold uppercase tracking-widest hover-glow"
        >
          Consultation
        </a>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent ${
          scrolled ? "" : "hidden"
        }`}
      />

      {menuOpen && (
        <div className="md:hidden glass-panel mx-margin-mobile rounded-xl p-6 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-on-surface-variant hover:text-primary transition-colors text-[12px] font-semibold uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-outline-variant/30 text-primary text-[12px] font-semibold uppercase tracking-widest"
          >
            Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
