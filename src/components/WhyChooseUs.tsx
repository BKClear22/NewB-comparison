"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    feature: "Resident Capacity",
    others: "50-100+ patients",
    us: "Only 6 residents",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    feature: "Treatment Approach",
    others: "One-size-fits-all programs",
    us: "100% personalized care plans",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    feature: "Environment",
    others: "Clinical, hospital-like settings",
    us: "Warm, home-like atmosphere",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    feature: "Staff Attention",
    others: "Rotating staff, limited interaction",
    us: "Dedicated team who knows your name",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    feature: "Meals",
    others: "Cafeteria-style mass meals",
    us: "Chef-prepared nutritious cuisine",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    feature: "Family Involvement",
    others: "Limited or no family programs",
    us: "Comprehensive family therapy & education",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const advantages = [
  {
    stat: "6:1",
    label: "Patient to Staff Ratio",
    description: "More attention means better outcomes",
  },
  {
    stat: "24/7",
    label: "Medical Support",
    description: "Round-the-clock care when you need it",
  },
  {
    stat: "100%",
    label: "Individualized Plans",
    description: "Your recovery, your way",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#5F7A8C] text-lg font-semibold uppercase tracking-wider">
            The New Beginnings Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6">
            Why We&apos;re Not Like Other Rehabs
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto">
            Large facilities treat hundreds of patients with cookie-cutter programs.
            We believe recovery is personal—and our intimate setting proves it.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-[#5F7A8C] to-[#516A7A] rounded-2xl text-white"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">{item.stat}</div>
              <div className="text-xl font-semibold mb-2">{item.label}</div>
              <div className="text-white/80">{item.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1F2937] text-center mb-12">
            See the Difference
          </h3>

          <div className="grid gap-6">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F7F3EA] rounded-2xl p-6 md:p-8 border border-[#E6E1D6]"
              >
                <div className="grid md:grid-cols-[1fr_2fr_2fr] gap-6 items-center">
                  {/* Feature Name */}
                  <div className="flex items-center gap-4">
                    <div className="text-[#5F7A8C]">{item.icon}</div>
                    <span className="text-lg font-bold text-[#1F2937]">{item.feature}</span>
                  </div>

                  {/* Others */}
                  <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-[#6B7280] uppercase tracking-wide mb-1">Other Facilities</div>
                      <div className="text-[#374151]">{item.others}</div>
                    </div>
                  </div>

                  {/* Us */}
                  <div className="flex items-center gap-3 p-4 bg-[#5F7A8C]/10 rounded-xl border-2 border-[#5F7A8C]/30">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5F7A8C] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-[#5F7A8C] uppercase tracking-wide mb-1 font-semibold">New Beginnings</div>
                      <div className="text-[#1F2937] font-semibold">{item.us}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-[#1F2937] rounded-3xl p-10 md:p-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            You Deserve More Than a Number
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            At New Beginnings, you&apos;re family. Our intimate 6-resident setting means
            you get the attention, care, and support you truly deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18447954258"
              className="bg-[#5F7A8C] hover:bg-[#516A7A] text-white px-10 py-4 rounded-full transition-colors text-xl font-semibold inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (844) 795-4258
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-[#1F2937] px-10 py-4 rounded-full transition-colors text-xl font-semibold"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
