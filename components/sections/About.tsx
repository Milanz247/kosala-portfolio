"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-16 sm:py-32 lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl sm:rounded-[2.5rem] border border-card-border bg-card-bg p-6 sm:p-10 md:p-14"
        >
          {/* Layout: Photo + Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-[#FF7A00]/20 border-3 border-[#FF7A00]/20">
                {/* TODO: Add your photo - uncomment Image and remove placeholder */}
                {/* <Image 
                  src="/your-photo.jpg" 
                  alt="Kosala Dananjaya"
                  fill
                  className="object-cover"
                  priority
                /> */}
                {/* Placeholder - Remove once you add your photo */}
                <div className="w-full h-full bg-gradient-to-br from-[#FF7A00] to-[#CC5500] flex flex-col items-center justify-center gap-3">
                  <Camera size={48} className="text-white/80" />
                  <span className="text-white/60 text-xs font-medium">Add Photo</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-[11px] sm:text-xs font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-3 py-1 rounded-full mb-4">
                About Me
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-fg mb-2 tracking-tight">
                Kosala <span className="gradient-text">Dananjaya</span>
              </h2>
              
              <p className="text-[#FF7A00] text-sm sm:text-base font-semibold mb-5">
                Meta Ads Strategist & Social Media Manager
              </p>
              
              <p className="text-fg-muted text-sm sm:text-base leading-relaxed mb-4">
                I focus on combining content strategy with performance marketing
                to help businesses increase visibility and generate inquiries
                through social media platforms.
              </p>
              
              <p className="text-fg-subtle text-sm sm:text-base leading-relaxed mb-6">
                Experience working with{" "}
                <span className="text-fg font-medium">dental and skincare clinics</span>{" "}
                and local businesses — improving engagement, awareness, and customer
                inquiries through structured advertising strategies.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["Meta Ads", "Social Media", "Content Strategy", "Al Ain, UAE", "Sri Lanka"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#FF7A00] border border-[#FF7A00]/15 bg-[#FF7A00]/[0.06] px-3 py-1.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
