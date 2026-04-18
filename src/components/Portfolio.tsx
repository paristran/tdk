"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Get Citizenship Australia",
    description:
      "A comprehensive citizenship preparation platform helping thousands of applicants prepare for the Australian citizenship test.",
    problem:
      "Applicants needed a reliable, user-friendly way to study for the citizenship test with real practice questions and progress tracking.",
    features: [
      "Practice test engine with real-style questions",
      "Progress tracking and performance analytics",
      "Mobile-first responsive design",
      "Subscription-based access model",
    ],
    tags: ["Web App", "Education", "SaaS"],
  },
  {
    title: "Contract Lens",
    description:
      "An intelligent contract analysis platform that helps businesses review, understand, and manage their legal agreements.",
    problem:
      "Legal contract review was time-consuming and error-prone. Businesses needed a faster, more reliable way to extract key terms and identify risks.",
    features: [
      "AI-powered contract analysis",
      "Key term extraction and summarization",
      "Risk identification and flagging",
      "Secure document management",
    ],
    tags: ["AI/ML", "Legal Tech", "SaaS"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <div className="relative bg-card-bg border border-card-border rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
        {/* Project visual header */}
        <div className="h-48 lg:h-64 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent flex items-center justify-center">
          <span className="text-5xl font-bold text-white/5 select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="p-8 lg:p-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl lg:text-3xl font-semibold mb-3">
            {project.title}
          </h3>
          <p className="text-muted leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Problem */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">
              The Challenge
            </p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Features */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-3">
              Key Features
            </p>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-foreground/70"
                >
                  <svg
                    className="w-4 h-4 text-accent mt-0.5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 lg:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Real products.
            <br />
            Real results.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
