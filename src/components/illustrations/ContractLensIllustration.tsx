"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContractLensIllustration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tagVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.0 + i * 0.15,
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
        <linearGradient id="cl-scan-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
          <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cl-doc-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#111113" />
        </linearGradient>
        <linearGradient id="cl-highlight-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
        </linearGradient>
        <clipPath id="cl-doc-clip">
          <rect x="75" y="22" width="185" height="210" rx="6" />
        </clipPath>
      </defs>

      {/* Document body */}
      <motion.rect
        x="75"
        y="22"
        width="185"
        height="210"
        rx="6"
        fill="url(#cl-doc-grad)"
        stroke="#1d1d1f"
        strokeWidth="1.5"
        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, pathOffset: 0, opacity: 1 } : {}}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      />

      <g clipPath="url(#cl-doc-clip)">
        {/* Document header lines */}
        <motion.rect
          x="92"
          y="38"
          width="80"
          height="6"
          rx="3"
          fill="#f5f5f7"
          opacity="0.15"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.rect
          x="92"
          y="52"
          width="150"
          height="4"
          rx="2"
          fill="#f5f5f7"
          opacity="0.06"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.06 } : {}}
          transition={{ delay: 0.55, duration: 0.5 }}
        />

        {/* Text lines - body */}
        {[66, 78, 90, 114, 126, 138, 162, 174, 186].map((y, i) => (
          <motion.rect
            key={`line-${y}`}
            x="92"
            y={y}
            width={i % 3 === 0 ? 130 : i % 3 === 1 ? 150 : 100}
            height="4"
            rx="2"
            fill="#f5f5f7"
            opacity="0.06"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.06 } : {}}
            transition={{ delay: 0.6 + i * 0.04, duration: 0.4 }}
          />
        ))}

        {/* Highlighted segments (AI-identified) */}
        <motion.rect
          x="92"
          y="100"
          width="120"
          height="10"
          rx="2"
          fill="url(#cl-highlight-grad)"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
        />
        <motion.rect
          x="92"
          y="148"
          width="90"
          height="10"
          rx="2"
          fill="url(#cl-highlight-grad)"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
        />
        <motion.rect
          x="92"
          y="196"
          width="140"
          height="10"
          rx="2"
          fill="url(#cl-highlight-grad)"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
        />

        {/* Scanning beam */}
        <motion.rect
          x="75"
          y="22"
          width="185"
          height="2"
          fill="url(#cl-scan-grad)"
          initial={{ y: 22 }}
          animate={isInView ? { y: [22, 218, 22] } : {}}
          transition={{
            delay: 1.6,
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
        {/* Scan beam glow */}
        <motion.rect
          x="75"
          y="22"
          width="185"
          height="20"
          fill="#2563eb"
          opacity="0.04"
          initial={{ y: 12 }}
          animate={isInView ? { y: [12, 208, 12] } : {}}
          transition={{
            delay: 1.6,
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      </g>

      {/* Document fold / corner */}
      <motion.path
        d="M260 22 L275 22 Q268 22 262 16 L260 10 Z"
        fill="#1d1d1f"
        stroke="#1d1d1f"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ delay: 0.8, duration: 0.4 }}
      />

      {/* Magnifying glass */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8, x: 10, y: -10 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, x: 0, y: 0 }
            : {}
        }
        transition={{
          delay: 0.8,
          duration: 0.7,
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
      >
        {/* Lens body */}
        <circle
          cx="310"
          cy="80"
          r="30"
          stroke="#2563eb"
          strokeWidth="2"
          fill="transparent"
          opacity="0.5"
        />
        <circle
          cx="310"
          cy="80"
          r="28"
          fill="#2563eb"
          opacity="0.05"
        />
        {/* Lens shine */}
        <path
          d="M296 66 Q300 62 306 64"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        {/* Handle */}
        <motion.line
          x1="332"
          y1="102"
          x2="352"
          y2="122"
          stroke="#2563eb"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.g>

      {/* Floating tags */}
      {/* Risk tag */}
      <motion.g custom={0} variants={tagVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.g
          animate={
            isInView
              ? { y: [0, -3, 0] }
              : {}
          }
          transition={{
            delay: 1.6,
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <rect x="290" y="140" width="60" height="22" rx="4" fill="#ef4444" opacity="0.15" stroke="#ef4444" strokeWidth="0.5" strokeOpacity="0.3" />
          <text x="320" y="155" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="sans-serif" fontWeight="600" opacity="0.8">
            Risk
          </text>
        </motion.g>
      </motion.g>

      {/* Key Term tag */}
      <motion.g custom={1} variants={tagVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.g
          animate={
            isInView
              ? { y: [0, -4, 0] }
              : {}
          }
          transition={{
            delay: 1.8,
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <rect x="300" y="172" width="75" height="22" rx="4" fill="#2563eb" opacity="0.15" stroke="#2563eb" strokeWidth="0.5" strokeOpacity="0.3" />
          <text x="337" y="187" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="sans-serif" fontWeight="600" opacity="0.8">
            Key Term
          </text>
        </motion.g>
      </motion.g>

      {/* Date tag */}
      <motion.g custom={2} variants={tagVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.g
          animate={
            isInView
              ? { y: [0, -3, 0] }
              : {}
          }
          transition={{
            delay: 2.0,
            duration: 2.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <rect x="285" y="204" width="55" height="22" rx="4" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="0.5" strokeOpacity="0.3" />
          <text x="312" y="219" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="sans-serif" fontWeight="600" opacity="0.7">
            Date
          </text>
        </motion.g>
      </motion.g>

      {/* Small connection lines from tags to document */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.15 } : {}}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <line x1="260" y1="100" x2="290" y2="148" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="260" y1="152" x2="300" y2="180" stroke="#2563eb" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="260" y1="200" x2="285" y2="212" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="3 3" />
      </motion.g>
    </svg>
  );
}
