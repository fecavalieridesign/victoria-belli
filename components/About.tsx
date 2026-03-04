"use client";

import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, delay },
});

export default function About() {
  const values = [
    { label: "Profissionalismo", icon: "⚖️" },
    { label: "Respeito", icon: "🤝" },
    { label: "Agilidade", icon: "⚡" },
    { label: "Ética", icon: "✦" },
  ];

  return (
    <section id="quem-somos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p className="text-[#C41E3A] text-sm font-semibold tracking-widest uppercase mb-4" {...inView(0)}>
              Quem Somos
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
              {...inView(0.1)}
            >
              Experiência que faz a diferença
            </motion.h2>
            <motion.div className="w-12 h-0.5 bg-[#C41E3A] mb-8" {...inView(0.2)} />
            <motion.p className="text-gray-600 text-lg leading-relaxed mb-6" {...inView(0.3)}>
              Através da experiência adquirida ao longo de anos de mercado, a Victória Belli conhece a necessidade do
              mercado. Assim, exercemos um serviço de contabilidade diferenciado, traçando um plano de trabalho para
              cada tipo de cliente.
            </motion.p>
            <motion.p className="text-gray-600 text-lg leading-relaxed" {...inView(0.4)}>
              Contamos com uma equipe de colaboradores altamente qualificados, com aperfeiçoamento constante nas áreas
              tributária, contábil, fiscal e trabalhista.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                className="bg-[#f8f6f0] rounded-2xl p-6 text-center hover:shadow-md transition-shadow border border-gray-100"
                {...inView(0.1 + i * 0.1)}
                whileHover={{ scale: 1.04 }}
              >
                <span className="text-3xl block mb-3">{value.icon}</span>
                <p className="text-[#1B3A6B] font-semibold text-sm tracking-wide">{value.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
