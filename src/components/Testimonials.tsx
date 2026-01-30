"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mark Hagood",
    timeAgo: "3 months ago",
    text: "At New Beginnings they're very compassionate and knowledgeable and I would definitely recommend this place because I received personal one on one care. They helped me change my life for the better. I'm so grateful for the entire staff, that helped me rebuild my life. New Beginnings helped me focus on my new life of sobriety. Thank you for All your caring so much about us. You allowed us a safe place to open up. And gave me the opportunity of a life time. I thank each and everyone of you helping me change my life.",
    stars: 5,
  },
  {
    name: "Laken Reynolds",
    timeAgo: "3 months ago",
    text: "Sarkis, let me just say I have never met somebody so dedicated to help me, and from the bottom of my heart I am forever grateful! Even though I'm not getting to come to your facility which is a complete bummer, I'm so glad I picked up the phone and dialed your number. Because you were the only person that was ever serious, when they said (if they couldn't help me) they would find someone that could! And you did and I'm so thankful for all the help and hope you gave me. Thank you so much for not giving up on me.",
    stars: 5,
  },
  {
    name: "Jay Bird",
    timeAgo: "7 months ago",
    text: "This place is absolutely beautiful from the house to all the staff from the top all the way down to the bottom. This is a life changing place if you put in the work. Blessed to have been at a place where you get treated like a human and not just a number. Thank you to the owner, director, staff, therapist, group facilitator and the amazing chef. I recommend this place 100% to anyone struggling. Thank you for being caring and loving.",
    stars: 5,
  },
  {
    name: "Dennis Rivas",
    timeAgo: "7 months ago",
    text: "New Beginnings was such a blessing in my life. My life was spiraling out of control and when I thought there was no hope I found New Beginnings. They were so helpful and helped me get back on my feet. I truly have never been in any sort of treatment and they made it not only easy but so comfortable. Through them I found the tools I needed to finally be free of my addiction and find the resources I needed. Thank you so much for everything! If anyone even thinks about rehab or detox come here and only here 100/10.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#4CAF50] text-lg font-semibold uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B5E20] mt-4">
            What Our Alumni Say
          </h2>
          <p className="text-xl text-[#374151] mt-4 max-w-2xl mx-auto">
            Real stories from real people whose lives have been transformed at New Beginnings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#E0E0E0]"
            >
              {/* Quote */}
              <p className="text-lg text-[#374151] leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-bold text-[#1B5E20]">{testimonial.name}</p>
                  <p className="text-sm text-[#666]">{testimonial.timeAgo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-[#E0E0E0]">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-[#374151] font-medium">Verified Google Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
