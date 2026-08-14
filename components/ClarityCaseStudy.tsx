import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function ClarityCaseStudy() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">

            {/* Back to Selected Work */}
            <div className="px-6 pt-8 lg:px-8 lg:pt-10">
                <Reveal>
                    <Link
                        href="/#projects"
                        className="group inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                    >
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            ←
                        </span>
                        <span>Back to Selected Work</span>
                    </Link>
                </Reveal>
            </div>

            {/* Hero */}
            <section className="px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-20">
                <div className="mx-auto max-w-7xl">

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
                            SaaS · Analytics · Design Systems
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                            Clarity
                        </h1>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                            A dark SaaS analytics experience focused on turning
                            business data into clear, actionable insights.
                        </p>
                    </Reveal>

                    {/* Project Meta */}
                    <Reveal delay={0.24}>
                        <div className="mt-16 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">

                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    Role
                                </p>
                                <p className="mt-3 text-sm text-zinc-300">
                                    Product Designer
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    Focus
                                </p>
                                <p className="mt-3 text-sm text-zinc-300">
                                    SaaS · Analytics · Design System
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    Product
                                </p>
                                <p className="mt-3 text-sm text-zinc-300">
                                    Analytics Platform
                                </p>
                            </div>

                        </div>
                    </Reveal>

                    {/* Hero Visual */}
                    <Reveal delay={0.32}>
                        <div className="mt-20 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                            <Image
                                src="/images/projects/clarity.png"
                                alt="Clarity analytics dashboard"
                                width={1600}
                                height={900}
                                className="block h-auto w-full"
                            />
                        </div>
                    </Reveal>

                </div>
            </section>

            {/* Overview */}
            <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
                            Overview
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div>
                            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                                A focused analytics experience for understanding
                                business performance.
                            </h2>

                            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                                Clarity brings revenue, user activity, conversion,
                                campaign performance, and transaction data into a
                                centralized analytics experience.
                            </p>
                        </div>
                    </Reveal>

                </div>
            </section>
            {/* Product Experience */}
            <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
                            Product Experience
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                            Bringing the most important business signals into one view.
                        </h2>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                            The dashboard gives users a focused view of revenue,
                            user activity, conversion, campaign performance, and
                            recent transactions.
                        </p>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                            <Image
                                src="/images/projects/clarity.png"
                                alt="Clarity dashboard"
                                width={1600}
                                height={900}
                                className="block h-auto w-full"
                            />
                        </div>
                    </Reveal>

                </div>
            </section>
            {/* Reports */}
            <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
                            Reports
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                            Bringing performance reporting into a focused workspace.
                        </h2>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                            Reports brings performance trends, detailed breakdowns,
                            filters, export actions, and report history into one
                            structured workflow.
                        </p>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                            <Image
                                src="/images/projects/clarity/Reports.png"
                                alt="Clarity reports experience"
                                width={1600}
                                height={900}
                                className="block h-auto w-full"
                            />
                        </div>
                    </Reveal>

                </div>
            </section>
            {/* Customer Detail */}
            <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
                            Customer Detail
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                            Moving from customer lists to a clearer account view.
                        </h2>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                            A focused account view surfaces subscription details,
                            customer activity, and billing history in one place.
                        </p>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                            <Image
                                src="/images/projects/clarity/Customers.png"
                                alt="Clarity customer detail experience"
                                width={1600}
                                height={900}
                                className="block h-auto w-full"
                            />
                        </div>
                    </Reveal>

                </div>
            </section>
            {/* Analytics */}
            <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
                            Analytics
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                            A deeper view into traffic, engagement, and user behavior.
                        </h2>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                            The analytics workspace brings traffic trends, users,
                            sessions, bounce rate, time on page, and goal completions
                            into a focused performance view.
                        </p>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                            <Image
                                src="/images/projects/clarity/Analytics.png"
                                alt="Clarity analytics experience"
                                width={1600}
                                height={900}
                                className="block h-auto w-full"
                            />
                        </div>
                    </Reveal>

                </div>
            </section>
            {/* Settings */}
            <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
                            Settings
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                            Bringing account configuration into one organized workspace.
                        </h2>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                            Settings brings profile, billing, team, notifications,
                            security, and integrations into a structured account
                            management experience.
                        </p>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                            <Image
                                src="/images/projects/clarity/Settings.png"
                                alt="Clarity settings experience"
                                width={1600}
                                height={900}
                                className="block h-auto w-full"
                            />
                        </div>
                    </Reveal>

                </div>
            </section>
            {/* Outcome */}
            <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
                            Outcome
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div>
                            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                                A cohesive analytics experience built around clearer
                                access to business performance.
                            </h2>

                            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                                Clarity brings dashboards, reporting, customer management,
                                analytics, and account settings together into one
                                consistent SaaS experience.
                            </p>

                            <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                        Analytics
                                    </p>
                                    <p className="mt-3 text-sm leading-6 text-zinc-300">
                                        Performance and traffic insights
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                        Reporting
                                    </p>
                                    <p className="mt-3 text-sm leading-6 text-zinc-300">
                                        Structured reports and filtering
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                        Management
                                    </p>
                                    <p className="mt-3 text-sm leading-6 text-zinc-300">
                                        Customers and account configuration
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Reveal>

                </div>
            </section>
            {/* Case Study Navigation */}
            <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
                <div className="mx-auto flex max-w-7xl items-center justify-between">

                    <Reveal>
                        <Link
                            href="/#projects"
                            className="group inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                        >
                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                ←
                            </span>

                            <span>Back to Selected Work</span>
                        </Link>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <Link
                            href="/work/vault"
                            className="group inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                        >
                            <span>Next Project</span>

                            <span className="text-white">
                                Vault
                            </span>

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </Reveal>

                </div>
            </section>
        </main>
    );
}