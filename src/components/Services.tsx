"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Personalized Detox",
    description:
      "Unlike large facilities with assembly-line detox, we create an individualized plan for your specific situation. Your dedicated medical team monitors you around the clock—not a rotating staff who barely knows your case.",
    image: "/detox.webp",
  },
  {
    title: "Intimate Residential Care",
    description:
      "With only 6 residents, you're not competing for attention. Our home-like environment and close-knit community create the trust and connection that crowded facilities can never offer.",
    image: "/residential.webp",
  },
  {
    title: "True Dual Diagnosis",
    description:
      "Many facilities claim dual diagnosis but treat mental health as an afterthought. Here, your mental health and addiction treatment are fully integrated from day one—because we have the staff ratio to do it right.",
    image: "/dual-diagnosis.webp",
  },
  {
    title: "Focused Mental Health",
    description:
      "Anxiety, depression, trauma—these need real attention, not 15-minute check-ins. Our small setting means your therapist actually knows you, tracks your progress, and adjusts your care in real-time.",
    image: "/mental-health.webp",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#F7F3EA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#5F7A8C] text-lg font-semibold uppercase tracking-wider">
            Treatment Done Right
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6">
            Quality Over Quantity
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto">
            Big facilities spread their staff thin across dozens of patients.
            We focus our expertise on just 6 people at a time—delivering the
            depth of care that actually produces lasting results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden border border-[#E6E1D6] hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-[#374151] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
