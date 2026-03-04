"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Nossa Missão",
    text: "Executar assessoria e consultoria empresarial ou pessoal, com qualidade, responsabilidade, honestidade, lealdade e empatia — proporcionando informações para o bom direcionamento e planejamento completo do seu negócio.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Nossa Visão",
    text: "Ser reconhecida por planejar e executar contabilidade consultiva de maneira individual e direcionada, atendendo as necessidades dos clientes com desempenho personalizado, a fim de superar as expectativas.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Nossos Valores",
    text: "Ser o guardião e operador das informações de nossos clientes, utilizando a ciência contábil com ética, verdade, honestidade e lealdade — com total comprometimento e integridade em cada ação.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Mission() {
  return (
    <section className="py-24 bg-[#f8f6f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            className="text-[#C41E3A] text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            Nossos Pilares
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1B3A6B]"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            O que nos guia
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-[#1B3A6B] mb-5 group-hover:text-[#C41E3A] transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
