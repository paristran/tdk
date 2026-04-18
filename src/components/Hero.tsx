"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-muted mb-6"
          >
            Software Development Studio
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]">
            We build software
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted">
              that scales.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            From concept to launch, we craft premium digital experiences that
            drive business growth. Clean architecture. Beautiful interfaces.
            Reliable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-foreground text-background rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10 hover:scale-[1.02]"
            >
              Start Your Project
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="#work"
              className="px-8 py-4 text-muted hover:text-foreground transition-colors duration-300 border border-white/10 rounded-full hover:border-white/20"
            >
              View Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full mt-1.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
