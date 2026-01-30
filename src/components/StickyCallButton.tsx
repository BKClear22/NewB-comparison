"use client";

import Link from "next/link";

export default function StickyCallButton() {
  return (
    <>
      {/* Mobile: Full-width bar at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent md:hidden">
        <Link
          href="tel:+18449893190"
          className="flex items-center justify-center gap-2 w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white py-4 rounded-full transition-colors text-lg font-bold shadow-lg animate-pulse"
        >
          <svg
            className="w-5 h-5 animate-bounce"
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
          Call Now (844) 989-3190
        </Link>
      </div>

      {/* Desktop: Floating button on bottom right */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Attention-grabbing pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#4CAF50] animate-ping opacity-30"></span>
          <Link
            href="tel:+18449893190"
            className="relative flex items-center gap-3 bg-[#4CAF50] hover:bg-[#388E3C] text-white px-6 py-4 rounded-full transition-all text-lg font-bold shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-110"
          >
            <svg
              className="w-6 h-6 animate-bounce"
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
            Call (844) 989-3190
          </Link>
        </div>
      </div>
    </>
  );
}
