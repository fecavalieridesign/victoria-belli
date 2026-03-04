"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      style={{ background: "linear-gradient(135deg, #0f2244 0%, #1B3A6B 60%, #2a4f8f 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-12">
        <motion.div className="mb-6 sm:mb-8 flex justify-center" {...fadeUp(0)}>
          <div className="bg-white rounded-full p-3 sm:p-4 shadow-lg">
            <Image
              src="/logo.png"
              alt="Victória Belli Personal Contábil"
              width={110}
              height={110}
              className="object-contain rounded-full w-20 h-20 sm:w-28 sm:h-28"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3 tracking-wide"
          style={{ fontFamily: "var(--font-playfair)" }}
          {...fadeUp(0.15)}
        >
          VICTÓRIA BELLI
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/60 tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8 font-medium"
          {...fadeUp(0.3)}
        >
          Personal Contábil
        </motion.p>

        <motion.div className="w-16 h-0.5 bg-[#C41E3A] mx-auto mb-6 sm:mb-8" {...fadeUp(0.4)} />

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/85 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-playfair)" }}
          {...fadeUp(0.5)}
        >
          A contabilidade personalizada para a sua empresa.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base text-white/60 mb-8 sm:mb-12 max-w-xl mx-auto"
          {...fadeUp(0.6)}
        >
          Serviços contábeis, fiscais e trabalhistas com ética, qualidade e responsabilidade — em Sorocaba-SP e Maringá-PR.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center" {...fadeUp(0.75)}>
          <a
            href="https://wa.me/5544991643393"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C41E3A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e02444] transition-all hover:scale-105 shadow-lg"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            Nossos Serviços
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
