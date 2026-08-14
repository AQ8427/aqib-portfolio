import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function MapAppCaseStudy() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* MAPApp Hero */}
            <div className="px-6 pt-8 lg:px-8 lg:pt-10">
                <div className="mx-auto max-w-7xl">
                    <Link
                        href="/#projects"
                        className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                    >
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            ←
                        </span>
                        <span>Back to Selected Work</span>
                    </Link>
                </div>
            </div>
            <section className="px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-44">
                <div className="mx-auto max-w-7xl">

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
                            Healthcare · Product Design
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                            MAPApp
                        </h1>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                            Reimagining a healthcare performance analytics platform
                            to make revenue cycle insights easier to understand,
                            compare, and act on.
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
                                    Rebrand · UX/UI · AI
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    Industry
                                </p>
                                <p className="mt-3 text-sm text-zinc-300">
                                    Healthcare / RCM
                                </p>
                            </div>

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
                                A more modern experience for understanding healthcare
                                performance.
                            </h2>

                            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                                MAPApp helps healthcare organizations monitor key
                                performance indicators, benchmark results, and identify
                                opportunities across their revenue cycle.
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
                            Turning complex performance data into a clearer product
                            experience.
                        </h2>
                    </Reveal>

                    {/* Dashboard */}
                    <Reveal delay={0.16}>
                        <div className="mt-20">
                            <div className="mb-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    01 · Dashboard
                                </p>

                                <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                                    Turning performance data into actionable insights.
                                </h3>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
                                    The dashboard brings organizational performance, strengths,
                                    opportunities, and revenue cycle scoring into one focused view.
                                </p>
                            </div>

                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-colors duration-500 hover:border-white/20">
                                <Image
                                    src="/images/projects/mapapp/Dashboard.png"
                                    alt="MAPApp Dashboard"
                                    width={1600}
                                    height={900}
                                    className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                                />
                            </div>
                        </div>
                    </Reveal>
                    {/* MAP Keys Overview */}
                    <Reveal delay={0.16}>
                        <div className="mt-24">
                            <div className="mb-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    02 · MAP Keys
                                </p>

                                <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                                    Making performance benchmarking easier to explore and compare.
                                </h3>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
                                    A centralized view for exploring MAP Key performance, peer
                                    benchmarks, trends, and organizational context.
                                </p>
                            </div>

                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-colors duration-500 hover:border-white/20">
                                <Image
                                    src="/images/projects/mapapp/MAP Keys.png"
                                    alt="MAPApp MAP Keys overview"
                                    width={1600}
                                    height={900}
                                    className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                                />
                            </div>
                        </div>
                    </Reveal>
                    {/* MAP Key Detail */}
                    <Reveal delay={0.16}>
                        <div className="mt-24">
                            <div className="mb-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    03 · MAP Key Detail
                                </p>

                                <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                                    A deeper view into the performance behind each MAP Key.
                                </h3>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
                                    The detail view brings together trends, peer benchmarks,
                                    performance values, variance, and the underlying MAP Key context.
                                </p>
                            </div>

                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-colors duration-500 hover:border-white/20">
                                <Image
                                    src="/images/projects/mapapp/MAP Keys-1.png"
                                    alt="MAPApp MAP Key detail view"
                                    width={1600}
                                    height={900}
                                    className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                                />
                            </div>
                        </div>
                    </Reveal>
                    {/* Data Submission */}
                    <Reveal delay={0.16}>
                        <div className="mt-24">
                            <div className="mb-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    04 · Data Submission
                                </p>

                                <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                                    A clearer workflow for managing MAP Key data submissions.
                                </h3>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
                                    A centralized submission history makes uploaded files,
                                    processing status, review actions, and organization data easier to manage.
                                </p>
                            </div>

                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-colors duration-500 hover:border-white/20">
                                <Image
                                    src="/images/projects/mapapp/Data Submission.png"
                                    alt="MAPApp Data Submission"
                                    width={1600}
                                    height={900}
                                    className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                                />
                            </div>
                        </div>
                    </Reveal>
                    {/* Reports */}
                    <Reveal delay={0.16}>
                        <div className="mt-24">
                            <div className="mb-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    05 · Reports
                                </p>

                                <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                                    Turning performance data into focused reporting and analysis.
                                </h3>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
                                    A reporting workspace that brings together performance analysis,
                                    peer comparison, opportunities, and detailed MAP Key reporting.
                                </p>
                            </div>

                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-colors duration-500 hover:border-white/20">
                                <Image
                                    src="/images/projects/mapapp/Reports.png"
                                    alt="MAPApp Reports"
                                    width={1600}
                                    height={900}
                                    className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>


            {/* AI Experience */}
            <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
                            AI Experience
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                            Making complex revenue cycle performance easier to understand.
                        </h2>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                            A conversational AI experience that helps users explore MAP Key
                            trends, identify early warnings, and understand revenue cycle
                            performance through plain-English insights.
                        </p>
                        <Reveal delay={0.24}>
                            <div className="mt-16">
                                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-colors duration-500 hover:border-white/20">
                                    <Image
                                        src="/images/projects/mapapp/AI Assistant.png"
                                        alt="MAPApp AI Assistant experience"
                                        width={1600}
                                        height={900}
                                        className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                                    />
                                </div>
                            </div>
                        </Reveal>
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
            Evolving MAPApp into a clearer, more intelligent performance
            experience.
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
            The redesign brings performance monitoring, benchmarking,
            reporting, data submission, and conversational insights into
            a more cohesive product experience.
          </p>

          <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Product
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Modernized healthcare analytics experience
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Experience
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Clearer performance and benchmarking workflows
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                AI
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Conversational layer for performance insights
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
    href="/work/clarity"
    className="group inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
  >
    <span>Next Project</span>

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>

    <span className="text-white">
      Clarity
    </span>
  </Link>
</Reveal>

    </div>
  </section>
        </main>
    );
}