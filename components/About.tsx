"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden bg-[#0A0A0A] px-6 py-28 text-white lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-sm font-medium uppercase tracking-[0.35em] text-[#FF5A00]"
        >
          About Me
        </motion.p>

        {/* Main Content */}
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">

          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              I design product experiences for{" "}
              <span className="text-zinc-500">
                AI, healthcare, and enterprise workflows.
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="flex flex-col justify-end"
          >
            <p className="text-base leading-7 text-zinc-400 sm:text-lg">
              I’m a Product Designer focused on AI products, healthcare,
              enterprise SaaS, and design systems. I work at the intersection
              of strategy, UX, and product execution to simplify complex
              workflows and improve business and user outcomes.
            </p>

            <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg">
              My work combines research, systems thinking, interaction design,
              and scalable product experiences to turn ambiguous problems into
              clear, usable solutions.
            </p>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-white/20 pb-2 text-sm font-medium transition-colors duration-300 hover:border-[#FF5A00] hover:text-[#FF5A00]"
            >
              View Resume

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <div className="mt-24 border-t border-white/10">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">

            {/* AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="border-b border-white/10 py-8 lg:border-b-0 lg:border-r lg:pr-8"
            >
              <span className="mb-6 block text-xs text-zinc-600">
                01
              </span>

              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                Focus
              </p>

              <h3 className="text-xl font-medium">
                AI Products
              </h3>
            </motion.div>

            {/* Healthcare */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-b border-white/10 py-8 lg:border-b-0 lg:border-r lg:px-8"
            >
              <span className="mb-6 block text-xs text-zinc-600">
                02
              </span>

              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                Industry
              </p>

              <h3 className="text-xl font-medium">
                Healthcare
              </h3>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-b border-white/10 py-8 lg:border-b-0 lg:border-r lg:px-8"
            >
              <span className="mb-6 block text-xs text-zinc-600">
                03
              </span>

              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                Products
              </p>

              <h3 className="text-xl font-medium">
                Enterprise SaaS
              </h3>
            </motion.div>

            {/* Design Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="py-8 lg:pl-8"
            >
              <span className="mb-6 block text-xs text-zinc-600">
                04
              </span>

              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                Expertise
              </p>

              <h3 className="text-xl font-medium">
                Design Systems
              </h3>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}