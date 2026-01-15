"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Real Assessment",
    description:
      "Not a 10-minute intake form. We spend real time understanding your situation—because cookie-cutter assessments lead to cookie-cutter treatment.",
  },
  {
    number: "02",
    title: "Your Plan, Not Ours",
    description:
      "Your treatment plan is built around your specific needs, not squeezed into a pre-made program. And it evolves as you do.",
  },
  {
    number: "03",
    title: "Continuous Attention",
    description:
      "With our 6:1 ratio, you're never waiting for support. Your dedicated team is there every step—not just checking boxes.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#5F7A8C] text-lg font-semibold uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6">
              Treatment That&apos;s Actually Personal
            </h2>
            <p className="text-xl text-[#374151] leading-relaxed">
              Every large facility promises &quot;individualized care.&quot; Here&apos;s
              how we actually deliver it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/path-to-recovery.webp"
                alt="Successful recovery journey"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Success badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#5F7A8C] text-white rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="text-3xl font-bold">6:1</div>
              <div className="text-white/80">Staff to Patient</div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#E6E1D6] -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-[#F7F3EA] rounded-2xl p-8 border border-[#E6E1D6] h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#5F7A8C] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                    <div className="h-px bg-[#E6E1D6] flex-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#374151] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
