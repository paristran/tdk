"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "AI Chatbots &",
    subtitle: "Agents",
    description:
      "Custom AI assistants powered by large language models. Intelligent chatbots that understand context, handle complex queries, and integrate seamlessly into your workflow — from customer support to internal operations.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a8 8 0 0 0-8 8c0 3.4 2.1 6.3 5 7.5V20h6v-2.5c2.9-1.2 5-4.1 5-7.5a8 8 0 0 0-8-8z" />
        <path d="M9 22h6M10 12h4M10 8h4" />
      </svg>
    ),
  },
  {
    title: "AI Tutor &",
    subtitle: "Education Tools",
    description:
      "Adaptive learning platforms that personalize content in real time. Built with the same technology behind tools like ChatGPT and Claude — tailored for education, training, and knowledge assessment.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered",
    subtitle: "SaaS Products",
    description:
      "Full-stack SaaS applications with AI at their core. Document analysis, content generation, intelligent search — we build production-grade platforms that turn cutting-edge AI into real business value.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Custom Software",
    subtitle: "Development",
    description:
      "Bespoke applications built from the ground up with AI-enhanced development workflows. Clean architecture, beautiful interfaces, and solutions engineered to scale with your business.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative p-8 lg:p-10 bg-card-bg border border-card-border rounded-2xl hover:border-white/10 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative">
        <div className="mb-6 text-muted group-hover:text-accent transition-colors duration-500">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
        <h3 className="text-xl font-semibold text-muted mb-4">
          {service.subtitle}
        </h3>
        <p className="text-muted leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            AI-native development.
            <br />
            Real-world impact.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
