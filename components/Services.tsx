"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Escrituração Contábil e Fiscal",
    description:
      "Registro e controle de todas as movimentações financeiras e fiscais da sua empresa, com precisão e conformidade com a legislação vigente.",
  },
  {
    number: "02",
    title: "Obrigações Acessórias",
    description:
      "Envio e acompanhamento de todas as obrigações acessórias mensais e anuais, garantindo que sua empresa esteja sempre em dia com o fisco.",
  },
  {
    number: "03",
    title: "Acompanhamento Tributário",
    description:
      "Assessoria completa no âmbito Federal, Estadual e Municipal, com análise detalhada do CNPJ e planejamento tributário personalizado.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            className="text-[#C41E3A] text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            O que oferecemos
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            className="text-gray-500 max-w-xl mx-auto"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            Soluções contábeis completas e personalizadas para o seu tipo de negócio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="group border border-gray-100 rounded-2xl p-8 hover:border-[#1B3A6B] hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-5xl font-bold text-[#f1f3f7] group-hover:text-[#C41E3A]/10 transition-colors mb-4 leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
                {service.number}
              </p>
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#1B3A6B] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <p className="text-white/60 text-sm font-medium tracking-wider uppercase mb-2">Processo de Migração</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Trocar de contador? Sem complicação.
            </h3>
            <p className="text-white/70 max-w-lg text-sm leading-relaxed">
              Realizamos uma análise detalhada do seu CNPJ — CNAE, enquadramento tributário, departamento pessoal e
              conformidade legal — para garantir uma transição tranquila e segura.
            </p>
          </div>
          <a
            href="https://wa.me/5544998017806"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#C41E3A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e02444] transition-colors whitespace-nowrap"
          >
            Quero migrar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
