"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <motion.div
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.4,
                    ease: "easeOut",
                }}
                className="absolute inset-0 bg-cover bg-[center_25%] bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/aqib-hero.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Left Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />

            {/* Orange Glow */}
            <div className="absolute right-[12%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#FF5A00]/8 blur-[140px]" />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 pb-24 pt-16 lg:px-8 lg:pb-20 lg:pt-12">
                <div className="max-w-4xl">

                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-[#FF5A00]"
                    >
                        Product Designer
                    </motion.p>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                        className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl lg:text-[clamp(4.5rem,7vw,7.5rem)]"
                    >
                        Designing
                        <br />

                        <span className="text-zinc-500">
                            better
                        </span>{" "}
                        digital
                        <br />

                        experiences.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.35,
                            ease: "easeOut",
                        }}
                        className="mt-8 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg"
                    >
                        I design AI-powered healthcare and enterprise products
                        that simplify complex workflows and create meaningful
                        user experiences.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.5,
                            ease: "easeOut",
                        }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <a
                            href="#work"
                            className="rounded-full bg-[#FF5A00] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,90,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e64f00] hover:shadow-[0_0_35px_rgba(255,90,0,0.25)]"
                        >
                            View My Work
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/50"
                        >
                            Get In Touch
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 1.2,
                    ease: "easeOut",
                }}
                className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    Scroll
                </span>

                <motion.div
                    animate={{ scaleY: [1, 0.45, 1] }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="h-10 w-px origin-top bg-gradient-to-b from-[#FF5A00] to-transparent"
                />
            </motion.div>
        </section>
    );
}