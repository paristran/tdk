"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "AI-First Engineering",
    description:
      "We don't bolt AI onto legacy software — we build AI-native. Our team works with large language models, retrieval-augmented generation, and intelligent agents to create products that think, learn, and adapt.",
  },
  {
    title: "Production-Grade AI",
    description:
      "We've shipped real AI products used by thousands — from intelligent tutoring engines to contract analysis platforms. We know what it takes to move from a demo to a reliable, scalable system.",
  },
  {
    title: "Modern Toolchain",
    description:
      "We leverage the same cutting-edge tools used by the best teams in the world — Claude, Cursor, Codex, and the latest in AI-assisted development — to ship faster without sacrificing quality.",
  },
  {
    title: "Business-First Thinking",
    description:
      "Every technical decision is grounded in real business value. We understand that great AI exists to solve real problems, reduce costs, and drive measurable outcomes for your business.",
  },
];

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex gap-6 lg:gap-8"
    >
      <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-mono text-sm font-semibold">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
        <p className="text-muted leading-relaxed">{reason.description}</p>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              Why TDK
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              We ship AI products.
              <br />
              Not AI demos.
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Everyone is talking about AI. We&apos;re the team actually shipping it.
              Real products. Real users. Real revenue.
            </p>
          </motion.div>

          <div className="space-y-10 lg:space-y-12">
            {reasons.map((reason, i) => (
              <ReasonCard key={reason.title} reason={reason} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
