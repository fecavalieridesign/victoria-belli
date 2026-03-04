"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo.png"
            alt="Victória Belli"
            width={80}
            height={80}
            className="object-contain w-14 h-14 md:w-16 md:h-16"
          />
          <div className="hidden sm:block">
            <p
              className={`text-sm font-semibold leading-tight transition-colors duration-300 ${scrolled || open ? "text-[#1B3A6B]" : "text-white"}`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              VICTÓRIA BELLI
            </p>
            <p className={`text-xs leading-tight tracking-wider transition-colors duration-300 ${scrolled || open ? "text-gray-500" : "text-white/60"}`}>
              PERSONAL CONTÁBIL
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${scrolled ? "text-gray-600 hover:text-[#1B3A6B]" : "text-white/80 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5544991643393"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-[#1B3A6B] text-white hover:bg-[#0f2244]"
                : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            Fale Conosco
          </a>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled || open ? "text-[#1B3A6B]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100 px-6 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-gray-600 hover:text-[#1B3A6B] border-b border-gray-50 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5544991643393"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center bg-[#1B3A6B] text-white text-sm font-medium px-5 py-2.5 rounded-full"
            >
              Fale Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
