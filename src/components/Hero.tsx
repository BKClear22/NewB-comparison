"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/new.png"
          alt="Peaceful sunset beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F2937]/60 via-[#1F2937]/40 to-[#1F2937]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-sm sm:text-lg md:text-xl text-white/80 uppercase tracking-wider font-semibold mb-3 md:mb-4 block drop-shadow-md"
          >
            You Deserve More Than a Number
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 drop-shadow-lg"
          >
            Why We&apos;re Not Like Other Rehabs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 md:mb-10 leading-relaxed drop-shadow-md"
          >
            While other facilities pack in 50+ patients, we limit ours to just 6.
            That means real relationships with staff who know your name, your story,
            and your goals. At New Beginnings, you&apos;re not a file—you&apos;re family.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden md:flex justify-center"
          >
            <Link
              href="tel:+18447954258"
              className="bg-white hover:bg-gray-100 text-[#1F2937] px-6 py-4 md:px-12 md:py-5 rounded-full transition-colors text-lg md:text-2xl font-bold shadow-lg hover:shadow-xl inline-flex items-center gap-2 md:gap-3"
            >
              <svg
                className="w-5 h-5 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="hidden sm:inline">Call </span>(844) 795-4258
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 md:mt-16 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-6 text-white mb-20 md:mb-0"
          >
            <div className="flex items-center justify-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-5 py-2 md:py-3 rounded-full">
              <span className="text-lg md:text-2xl font-bold">6</span>
              <span className="text-sm md:text-lg">Max Residents</span>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-5 py-2 md:py-3 rounded-full">
              <span className="text-lg md:text-2xl font-bold">6:1</span>
              <span className="text-sm md:text-lg">Staff Ratio</span>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-5 py-2 md:py-3 rounded-full">
              <span className="text-lg md:text-2xl font-bold">100%</span>
              <span className="text-sm md:text-lg">Personalized</span>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-5 py-2 md:py-3 rounded-full">
              <span className="text-lg md:text-2xl font-bold">24/7</span>
              <span className="text-sm md:text-lg">Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
