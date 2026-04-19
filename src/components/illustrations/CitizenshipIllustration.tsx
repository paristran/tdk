"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CitizenshipIllustration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.12,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="cit-progress-fill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="cit-accent-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <clipPath id="cit-clip">
          <rect x="30" y="20" width="340" height="210" rx="12" />
        </clipPath>
      </defs>

      {/* Browser frame */}
      <motion.rect
        x="30"
        y="20"
        width="340"
        height="210"
        rx="12"
        stroke="#1d1d1f"
        strokeWidth="1.5"
        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
        animate={
          isInView
            ? { pathLength: 1, pathOffset: 0, opacity: 1 }
            : {}
        }
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Browser chrome dots */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <circle cx="52" cy="35" r="3.5" fill="#ef4444" opacity="0.6" />
        <circle cx="65" cy="35" r="3.5" fill="#eab308" opacity="0.6" />
        <circle cx="78" cy="35" r="3.5" fill="#22c55e" opacity="0.6" />
      </motion.g>

      {/* Chrome divider line */}
      <motion.line
        x1="30"
        y1="50"
        x2="370"
        y2="50"
        stroke="#1d1d1f"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <g clipPath="url(#cit-clip)">
        {/* Progress bar background */}
        <motion.rect
          x="55"
          y="62"
          width="290"
          height="6"
          rx="3"
          fill="#1d1d1f"
          custom={0}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Progress bar fill */}
        <motion.rect
          x="55"
          y="62"
          width="175"
          height="6"
          rx="3"
          fill="url(#cit-progress-fill)"
          custom={1}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Progress text */}
        <motion.text
          x="345"
          y="67"
          textAnchor="end"
          fill="#86868b"
          fontSize="8"
          fontFamily="sans-serif"
          custom={1}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          60%
        </motion.text>

        {/* Question label */}
        <motion.text
          x="55"
          y="92"
          fill="#f5f5f7"
          fontSize="10"
          fontFamily="sans-serif"
          fontWeight="600"
          custom={2}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Question 12 of 20
        </motion.text>

        {/* Question text lines */}
        <motion.rect
          x="55"
          y="102"
          width="260"
          height="5"
          rx="2.5"
          fill="#f5f5f7"
          opacity="0.12"
          custom={3}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.rect
          x="55"
          y="112"
          width="190"
          height="5"
          rx="2.5"
          fill="#f5f5f7"
          opacity="0.08"
          custom={3}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Answer option A - unselected */}
        <motion.rect
          x="55"
          y="130"
          width="290"
          height="24"
          rx="6"
          stroke="#1d1d1f"
          strokeWidth="1"
          strokeDasharray="4 3"
          fill="transparent"
          custom={4}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.rect
          x="67"
          y="139"
          width="140"
          height="5"
          rx="2.5"
          fill="#86868b"
          opacity="0.2"
          custom={4}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.circle
          cx="68"
          cy="142"
          r="6"
          stroke="#1d1d1f"
          strokeWidth="1"
          fill="transparent"
          custom={4}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Answer option B - selected / highlighted */}
        <motion.rect
          x="55"
          y="160"
          width="290"
          height="24"
          rx="6"
          fill="#2563eb"
          opacity="0.12"
          stroke="#2563eb"
          strokeWidth="1"
          custom={5}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.rect
          x="67"
          y="169"
          width="160"
          height="5"
          rx="2.5"
          fill="#3b82f6"
          opacity="0.5"
          custom={5}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.circle
          cx="68"
          cy="172"
          r="6"
          stroke="#2563eb"
          strokeWidth="1"
          fill="#2563eb"
          opacity="0.3"
          custom={5}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Checkmark inside selected option */}
        <motion.path
          d="M64 172 L67 175 L73 169"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 1 }
              : {}
          }
          transition={{ delay: 1.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Answer option C - unselected */}
        <motion.rect
          x="55"
          y="190"
          width="290"
          height="24"
          rx="6"
          stroke="#1d1d1f"
          strokeWidth="1"
          strokeDasharray="4 3"
          fill="transparent"
          custom={6}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.rect
          x="67"
          y="199"
          width="120"
          height="5"
          rx="2.5"
          fill="#86868b"
          opacity="0.2"
          custom={6}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.circle
          cx="68"
          cy="202"
          r="6"
          stroke="#1d1d1f"
          strokeWidth="1"
          fill="transparent"
          custom={6}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Checkmark badge */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            delay: 1.5,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <circle cx="340" cy="210" r="16" fill="url(#cit-accent-grad)" />
          <motion.path
            d="M333 210 L337 214 L347 204"
            stroke="#f5f5f7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ delay: 1.7, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.g>
      </g>
    </svg>
  );
}
