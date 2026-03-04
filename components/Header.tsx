"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo.png"
            alt="Victória Belli"
            width={80}
            height={80}
            className="object-contain w-10 h-10 md:w-16 md:h-16"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#1B3A6B] leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              VICTÓRIA BELLI
            </p>
            <p className="text-xs text-gray-500 leading-tight tracking-wider">PERSONAL CONTÁBIL</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-[#1B3A6B] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5544991643393"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1B3A6B] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#0f2244] transition-colors"
          >
            Fale Conosco
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-[#1B3A6B]"
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
