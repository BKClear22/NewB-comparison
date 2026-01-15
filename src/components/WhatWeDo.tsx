"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const activities = [
  "Yoga and meditation",
  "Art therapy",
  "Weekly support groups",
  "Alumni meetings",
  "Family education workshops",
  "Peer mentoring opportunities",
  "Community outreach events",
  "Monthly wellness check-ins",
];

export default function WhatWeDo() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/a-day.webp"
                alt="Our caring staff"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <span className="text-[#5F7A8C] text-lg font-semibold uppercase tracking-wider">
              Your Daily Experience
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6">
              Recovery Without the Chaos
            </h2>
            <p className="text-xl text-[#374151] leading-relaxed mb-8">
              No crowded common rooms. No fighting for your therapist&apos;s time.
              With just 6 residents, every day is structured around your needs—
              chef-prepared meals, meaningful therapy sessions, and activities
              that actually fit your recovery plan.
            </p>
            <div className="bg-[#F7F3EA] rounded-2xl p-6 md:p-8 border border-[#E6E1D6]">
              <h3 className="text-xl font-bold text-[#1F2937] mb-4">
                Activities You&apos;ll Actually Attend (Not Just Sign Up For)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activities.map((activity, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-[#5F7A8C] rounded-full p-1 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[#374151]">{activity}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
