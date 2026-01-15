"use client";

import Link from "next/link";

export default function StickyCallButton() {
  return (
    <>
      {/* Mobile: Full-width bar at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-[#1F2937] to-transparent md:hidden">
        <Link
          href="tel:+18447954258"
          className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-[#1F2937] py-4 rounded-full transition-colors text-lg font-bold shadow-lg"
        >
          <svg
            className="w-5 h-5"
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
          Call Now (844) 795-4258
        </Link>
      </div>

      {/* Desktop: Floating button on bottom right */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <Link
          href="tel:+18447954258"
          className="flex items-center gap-3 bg-white hover:bg-gray-100 text-[#1F2937] px-6 py-4 rounded-full transition-all text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105"
        >
          <svg
            className="w-6 h-6"
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
          Call (844) 795-4258
        </Link>
      </div>
    </>
  );
}
