"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav
                className={`mx-auto flex items-center px-6 transition-all duration-500 ease-out lg:px-8 ${
                    scrolled
                        ? "mt-4 w-[calc(100%-24px)] max-w-[1000px] rounded-full border border-white/[0.08] bg-[rgba(10,10,10,0.78)] px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-[16px] md:w-[calc(100%-32px)] md:px-6"
                        : "max-w-7xl w-full py-6"
                }`}
            >
                <div className="relative flex w-full items-center">
                    <Link
                        href="/"
                        className="relative inline-flex items-center tracking-tight transition-transform duration-300 hover:scale-105"
                        aria-label="Home"
                    >
                        <img
                            src="/images/aq-logo.svg"
                            alt="AQ"
                            className="block w-[44px] md:w-[52px] h-auto"
                            loading="eager"
                        />
                    </Link>

                    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm text-zinc-400 md:flex">
                        <a href="/#about" className="relative transition-colors duration-300 hover:text-white">
                            About
                        </a>

                        <a href="/#projects" className="relative transition-colors duration-300 hover:text-white">
                            Work
                        </a>

                        <a href="/#expertise" className="relative transition-colors duration-300 hover:text-white">
                            Expertise
                        </a>

                        <a href="/#contact" className="relative transition-colors duration-300 hover:text-white">
                            Contact
                        </a>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:hidden"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span
                                className={`block h-px w-5 bg-white transition-transform duration-300 ${
                                    isOpen ? "translate-y-[4px] rotate-45" : ""
                                }`}
                            />

                            <span
                                className={`block h-px w-5 bg-white transition-opacity duration-300 ${
                                    isOpen ? "opacity-0" : ""
                                }`}
                            />

                            <span
                                className={`block h-px w-5 bg-white transition-transform duration-300 ${
                                    isOpen ? "-translate-y-[4px] -rotate-45" : ""
                                }`}
                            />
                        </div>
                    </button>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto hidden rounded-full border border-white/20 bg-white/[0.03] px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF5A00] hover:bg-[#FF5A00] hover:text-white md:block"
                    >
                        Resume
                    </a>
                </div>

                <div
                    className={`absolute left-4 right-4 top-[76px] rounded-2xl border border-white/10 bg-[#111111]/95 p-5 backdrop-blur-xl transition-all duration-300 md:hidden ${
                        isOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-3 opacity-0"
                    }`}
                >
                    <div className="flex flex-col gap-2">
                        <a
                            href="/#about"
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            About
                        </a>

                        <a
                            href="/#projects"
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            Work
                        </a>

                        <a
                            href="/#expertise"
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            Expertise
                        </a>

                        <a
                            href="/#contact"
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            Contact
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}