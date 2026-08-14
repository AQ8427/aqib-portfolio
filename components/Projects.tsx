"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        number: "01",
        slug: "super-bill-automation",
        title: "Super Bill Automation",
        category: "Healthcare · AI · Automation",
        description:
            "An intelligent healthcare automation platform that transforms complex EOB documents into structured ERA workflows.",
        image: "/images/projects/super-bill-automation.png",
    },
    {
        number: "02",
        slug: "mapapp",
        title: "MAPApp",
        category: "Healthcare · Product Design",
        description:
            "A healthcare product experience designed to simplify complex workflows through clear information architecture and intuitive interactions.",
        image: "/images/projects/mapapp.png",
    },
    {
        number: "03",
        slug: "clarity",
        title: "Clarity",
        category: "SaaS · Analytics · Design Systems",
        description:
            "A dark SaaS analytics experience focused on turning business data into clear, actionable insights.",
        image: "/images/projects/clarity.png",
    },
    {
        number: "04",
        slug: "vault",
        title: "Vault",
        category: "FinTech · Mobile · Product Design",
        description:
            "A smart finance mobile app designed to help users manage money, track spending, send payments, and work toward savings goals.",
        image: "/images/projects/vault.png",
    },
    {
        number: "05",
        slug: "fox-rehabilitation",
        title: "FOX Rehabilitation Provider App",
        category: "Healthcare · Mobile · Provider Experience",
        description:
            "A mobile provider experience designed to help rehabilitation teams manage assignments, cases, scheduling, and day-to-day workflows.",
        image: "/images/projects/Fox/Dashboard.png",
    },

];

export default function Projects() {
    return (
        <section
            id="work"
            className="relative bg-[#0A0A0A] px-6 py-28 text-white lg:px-8 lg:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-medium uppercase tracking-[0.35em] text-[#FF5A00]"
                    >
                        Selected Work
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
                    >
                        A selection of products{" "}
                        <span className="text-zinc-500">
                            I have helped design.
                        </span>
                    </motion.h2>

                </div>

                {/* Projects */}
<div className="mt-24 space-y-28">
    {projects.map((project, index) => {
                    const isMobileProject =
                        project.slug === "vault" ||
                        project.slug === "fox-rehabilitation";

                    const isFirstMobileProject = project.slug === "vault";

                    const ProjectCard = (
                        <Link
                            key={project.number}
                            href={`/work/${project.slug}`}
                            className="block"
                        >
                            <motion.article
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                                className="group"
                            >
                                {/* Project Image */}
                                <div
                                    className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl shadow-black/20 ${isMobileProject
                                            ? "aspect-[4/5]"
                                            : "aspect-[16/9]"
                                        }`}
                                >
                                    <div
                                        className={`absolute inset-0 bg-center transition-transform duration-700 ease-out ${project.slug === "vault"
                                                ? "bg-contain bg-no-repeat scale-[1.25]"
                                                : project.slug === "fox-rehabilitation"
                                                    ? "bg-contain bg-no-repeat scale-[1.15]"
                                                    : "bg-cover group-hover:scale-[1.035]"
                                            }`}
                                        style={{
                                            backgroundImage: `url(${project.image})`,
                                        }}
                                    />

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

                                    {/* Project Number */}
                                    <span className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-medium tracking-[0.25em] text-white/60 backdrop-blur-md">
                                        {project.number}
                                    </span>

                                    {/* Arrow */}
                                    <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF5A00] group-hover:bg-[#FF5A00]">
                                        ↗
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="mt-7 grid gap-6">
                                    <div>
                                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500">
                                            {project.category}
                                        </p>

                                        <h3 className="text-3xl font-medium tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#FF5A00] sm:text-4xl">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="max-w-xl text-base leading-7 text-zinc-500">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.article>
                        </Link>
                    );

                    if (isFirstMobileProject) {
                        return (
                            <div
                                key="mobile-projects"
                                className="grid gap-10 md:grid-cols-2"
                            >
                                {projects
                                    .filter(
                                        (item) =>
                                            item.slug === "vault" ||
                                            item.slug === "fox-rehabilitation"
                                    )
                                    .map((mobileProject, mobileIndex) => {
                                        const mobileCard = (
                                            <Link
                                                key={mobileProject.number}
                                                href={`/work/${mobileProject.slug}`}
                                                className="block"
                                            >
                                                <motion.article
                                                    initial={{ opacity: 0, y: 40 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{
                                                        once: true,
                                                        amount: 0.15,
                                                    }}
                                                    transition={{
                                                        duration: 0.7,
                                                        delay: mobileIndex * 0.08,
                                                        ease: "easeOut",
                                                    }}
                                                    className="group"
                                                >
                                                    {/* Mobile Project Image */}
                                                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl shadow-black/20">
                                                        <div
                                                            className="absolute inset-0 bg-center bg-contain bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                                            style={{
                                                                backgroundImage: `url(${mobileProject.image})`,
                                                            }}
                                                        />

                                                        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

                                                        <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-medium tracking-[0.25em] text-white/60 backdrop-blur-md">
                                                            {mobileProject.number}
                                                        </span>

                                                        <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF5A00] group-hover:bg-[#FF5A00]">
                                                            ↗
                                                        </div>
                                                    </div>

                                                    <div className="mt-6">
                                                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500">
                                                            {mobileProject.category}
                                                        </p>

                                                        <h3 className="text-2xl font-medium tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#FF5A00] sm:text-3xl">
                                                            {mobileProject.title}
                                                        </h3>

                                                        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                                                            {mobileProject.description}
                                                        </p>
                                                    </div>
                                                </motion.article>
                                            </Link>
                                        );

                                        return mobileCard;
                                    })}
                            </div>
                        );
                    }

                    if (isMobileProject) {
                        return null;
                    }

                    return ProjectCard;
                })}
</div>
            </div>
        </section>
    );
}