"use client";

import { motion } from "framer-motion";

const changes = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "PIS, COFINS e IPI → CBS",
    description: "Os tributos federais serão unificados na Contribuição sobre Bens e Serviços (CBS), de competência federal.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "ICMS e ISS → IBS",
    description: "Os tributos estaduais e municipais serão substituídos pelo Imposto sobre Bens e Serviços (IBS), gerido por Comitê Gestor.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Alíquota unificada até 26,5%",
    description: "A soma de CBS + IBS terá teto de 26,5%, com cobrança no destino — onde o cliente está — e não mais na origem.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Transição gradual: 2026 a 2033",
    description: "A implementação é progressiva. Em 2026 começam as alíquotas-teste de CBS (0,9%) e IBS (0,1%). O sistema antigo é extinto em 2033.",
  },
];

export default function TaxReform() {
  return (
    <section className="py-24 bg-[#0f2244]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              className="inline-block bg-[#C41E3A] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Atenção: Nova Legislação
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Reforma Tributária:<br />o que muda para<br />a sua empresa?
            </motion.h2>
          </div>
          <motion.p
            className="text-white/60 max-w-sm text-base leading-relaxed md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A maior mudança no sistema tributário brasileiro em décadas está em vigor. Sua empresa precisa de um contador preparado para essa transição.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {changes.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            >
              <div className="shrink-0 w-10 h-10 bg-[#C41E3A]/20 rounded-xl flex items-center justify-center text-[#C41E3A]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1.5 text-sm">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex gap-4 items-start">
            <div className="shrink-0 w-10 h-10 bg-[#C41E3A] rounded-full flex items-center justify-center text-white mt-0.5">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Não deixe para a última hora</p>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                As alíquotas-teste entram em vigor em 2026. Empresas que se planejarem agora evitam surpresas fiscais, multas e impactos no fluxo de caixa durante a transição.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5544991643393"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-[#0f2244] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Quero me preparar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
