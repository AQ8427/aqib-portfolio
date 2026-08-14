import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FoxCaseStudy() {
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

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
              Healthcare · Mobile · Product Design
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-6xl text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              FOX Rehabilitation
              <span className="block text-zinc-500">
                Provider App
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
              A mobile provider experience designed to help rehabilitation
              teams manage assignments, patient cases, requests, issues,
              and day-to-day operational workflows.
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
                  Mobile UX · UI · Product Design
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Platform
                </p>
                <p className="mt-3 text-sm text-zinc-300">
                  Mobile Application
                </p>
              </div>

            </div>
          </Reveal>

          {/* Hero Screens */}
          <Reveal delay={0.32}>
            <div className="mt-20 flex flex-wrap items-end justify-center gap-6 sm:gap-8 lg:gap-10">

              <Image
                src="/images/projects/Fox/Dashboard.png"
                alt="FOX Rehabilitation dashboard"
                width={260}
                height={520}
                className="h-auto w-[180px] sm:w-[220px] lg:w-[260px]"
              />

              <Image
                src="/images/projects/Fox/Pending Assignments.png"
                alt="FOX Rehabilitation pending assignments"
                width={260}
                height={520}
                className="h-auto w-[180px] sm:w-[220px] lg:w-[260px]"
              />

              <Image
                src="/images/projects/Fox/Active Cases.png"
                alt="FOX Rehabilitation active cases"
                width={260}
                height={520}
                className="h-auto w-[180px] sm:w-[220px] lg:w-[260px]"
              />

            </div>
          </Reveal>

        </div>
      </section>


      {/* ========================================================= */}
      {/* OVERVIEW */}
      {/* ========================================================= */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
              Overview
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                A connected mobile workspace for rehabilitation providers.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                FOX Rehabilitation Provider App brings essential provider
                workflows into one mobile experience. Providers can review
                assignments, manage active cases, monitor issues, submit
                requests, and track their weekly activity.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-500">
                The product was structured around quick scanning and
                action-oriented workflows so providers can understand
                what needs attention without navigating through multiple
                disconnected experiences.
              </p>
            </div>
          </Reveal>

        </div>
      </section>


      {/* ========================================================= */}
      {/* CHALLENGE */}
      {/* ========================================================= */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
                  The Challenge
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                  Turning multiple provider workflows into one clear,
                  actionable mobile experience.
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                  Providers manage a wide range of activities throughout
                  their day — from reviewing assignments and patient cases
                  to handling issues, PTO requests, and weekly tracking.
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-500">
                  The challenge was to organize these workflows in a way
                  that made important information immediately visible while
                  keeping the overall experience simple enough for frequent
                  mobile use.
                </p>
              </div>
            </Reveal>

          </div>


          {/* Challenge Cards */}
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">

            <Reveal>
              <div className="bg-[#0A0A0A] p-8">
                <span className="text-xs text-zinc-600">01</span>
                <h3 className="mt-8 text-xl font-medium">
                  Multiple Workflows
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  Assignments, cases, issues, requests, and tracking needed
                  to live inside one connected experience.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="bg-[#0A0A0A] p-8">
                <span className="text-xs text-zinc-600">02</span>
                <h3 className="mt-8 text-xl font-medium">
                  Information Density
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  Important operational information had to remain visible
                  without overwhelming users.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="bg-[#0A0A0A] p-8">
                <span className="text-xs text-zinc-600">03</span>
                <h3 className="mt-8 text-xl font-medium">
                  Quick Decisions
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  Providers needed to quickly identify what required
                  attention and take action.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="bg-[#0A0A0A] p-8">
                <span className="text-xs text-zinc-600">04</span>
                <h3 className="mt-8 text-xl font-medium">
                  Mobile Constraints
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  Frequent workflows needed to remain clear and usable
                  across smaller screens.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* DESIGN APPROACH */}
      {/* ========================================================= */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
                  Design Approach
                </p>

                <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-600">
                  Structuring the product around provider priorities,
                  visibility, and fast action.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                  One mobile workspace for the moments that matter most.
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                  The experience was designed around the tasks providers
                  perform most frequently. Primary information appears
                  first, while secondary workflows remain accessible when
                  needed.
                </p>
              </div>
            </Reveal>

          </div>


          {/* Principles */}
          <div className="mt-20 divide-y divide-white/10 border-y border-white/10">

            <Reveal>
              <div className="grid gap-6 py-10 lg:grid-cols-[0.7fr_1.3fr]">
                <div className="flex gap-5">
                  <span className="text-xs text-zinc-600">01</span>
                  <h3 className="text-xl font-medium">
                    Prioritize the Day
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                  Surface assignments, active work, and important actions
                  at the beginning of the provider journey.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-6 py-10 lg:grid-cols-[0.7fr_1.3fr]">
                <div className="flex gap-5">
                  <span className="text-xs text-zinc-600">02</span>
                  <h3 className="text-xl font-medium">
                    Make Status Visible
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                  Use clear visual states to distinguish active, pending,
                  on-hold, and issue-related work.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-6 py-10 lg:grid-cols-[0.7fr_1.3fr]">
                <div className="flex gap-5">
                  <span className="text-xs text-zinc-600">03</span>
                  <h3 className="text-xl font-medium">
                    Reduce Friction
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                  Keep actions close to the information they relate to,
                  reducing unnecessary navigation.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-6 py-10 lg:grid-cols-[0.7fr_1.3fr]">
                <div className="flex gap-5">
                  <span className="text-xs text-zinc-600">04</span>
                  <h3 className="text-xl font-medium">
                    Design for Scanning
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                  Cards, grouping, typography, spacing, and concise labels
                  help providers scan information quickly.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* PROVIDER DASHBOARD */}
      {/* ========================================================= */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
              01 · Dashboard
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              A focused starting point for the provider&apos;s day.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
              The dashboard brings the most important activities into a
              single view, helping providers quickly understand what is
              happening and where attention is needed.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-16 flex justify-center rounded-3xl border border-white/10 bg-[#111111] p-6 sm:p-10 lg:p-14">
              <Image
                src="/images/projects/Fox/Dashboard.png"
                alt="FOX Rehabilitation Dashboard"
                width={420}
                height={840}
                className="h-auto w-full max-w-[420px] rounded-2xl"
              />
            </div>
          </Reveal>

        </div>
      </section>


      {/* ========================================================= */}
      {/* ASSIGNMENTS */}
      {/* ========================================================= */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
              02 · Assignments
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Making pending work easy to identify and act on.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
              Pending assignments give providers a clear view of upcoming
              work, helping them understand what requires attention before
              moving into active cases.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-16 flex justify-center">
              <Image
                src="/images/projects/Fox/Pending Assignments.png"
                alt="FOX Rehabilitation Pending Assignments"
                width={380}
                height={760}
                className="h-auto w-[260px] sm:w-[320px] lg:w-[380px]"
              />
            </div>
          </Reveal>

        </div>
      </section>


      {/* ========================================================= */}
      {/* CASE MANAGEMENT */}
      {/* ========================================================= */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
              Case Management
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Giving providers a clear view of every case state.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
              Different case states are separated into focused experiences
              so providers can quickly understand active work, paused work,
              and cases that need attention.
            </p>
          </Reveal>


          {/* Active Cases */}
          <Reveal delay={0.24}>
            <div className="mt-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

              <div>
                <span className="text-xs text-zinc-600">03</span>

                <h3 className="mt-5 text-2xl font-medium">
                  Active Cases
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
                  Active cases provide a focused view of current patient
                  work, helping providers quickly return to ongoing care.
                </p>
              </div>

              <div className="flex justify-center rounded-3xl border border-white/10 bg-[#111111] p-8">
                <Image
                  src="/images/projects/Fox/Active Cases.png"
                  alt="FOX Rehabilitation Active Cases"
                  width={380}
                  height={760}
                  className="h-auto w-[280px] sm:w-[340px] lg:w-[380px]"
                />
              </div>

            </div>
          </Reveal>


          {/* Cases on Hold */}
          <Reveal delay={0.24}>
            <div className="mt-28 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

              <div className="order-2 flex justify-center rounded-3xl border border-white/10 bg-[#111111] p-8 lg:order-1">
                <Image
                  src="/images/projects/Fox/Cases on Hold.png"
                  alt="FOX Rehabilitation Cases on Hold"
                  width={380}
                  height={760}
                  className="h-auto w-[280px] sm:w-[340px] lg:w-[380px]"
                />
              </div>

              <div className="order-1 lg:order-2 lg:pl-10">
                <span className="text-xs text-zinc-600">04</span>

                <h3 className="mt-5 text-2xl font-medium">
                  Cases on Hold
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
                  Separating paused cases from active work helps providers
                  understand what is currently progressing and what has
                  temporarily stopped.
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>


      {/* ========================================================= */}
      {/* OPERATIONAL WORKFLOWS */}
      {/* ========================================================= */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
              Operational Workflows
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Bringing requests, issues, and availability into the same
              provider experience.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
              Beyond patient cases, providers also need to manage operational
              workflows. These screens make those activities easier to find
              and understand.
            </p>
          </Reveal>


          {/* Open Issues */}
          <Reveal delay={0.24}>
            <div className="mt-20">

              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

                <div>
                  <span className="text-xs text-zinc-600">05</span>

                  <h3 className="mt-5 text-2xl font-medium">
                    Open Issues
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
                    Open issues provide visibility into items that require
                    follow-up, helping providers identify unresolved work.
                  </p>
                </div>

                <div className="flex justify-center rounded-3xl border border-white/10 bg-[#111111] p-8">
                  <Image
                    src="/images/projects/Fox/Open Issues.png"
                    alt="FOX Rehabilitation Open Issues"
                    width={380}
                    height={760}
                    className="h-auto w-[280px] sm:w-[340px] lg:w-[380px]"
                  />
                </div>

              </div>

            </div>
          </Reveal>


          {/* PTO Requests */}
          <Reveal delay={0.24}>
            <div className="mt-28">

              <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

                <div className="flex justify-center rounded-3xl border border-white/10 bg-[#111111] p-8">
                  <Image
                    src="/images/projects/Fox/Manage PTO Requests.png"
                    alt="FOX Rehabilitation Manage PTO Requests"
                    width={380}
                    height={760}
                    className="h-auto w-[280px] sm:w-[340px] lg:w-[380px]"
                  />
                </div>

                <div className="lg:pl-10">
                  <span className="text-xs text-zinc-600">06</span>

                  <h3 className="mt-5 text-2xl font-medium">
                    PTO Requests
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
                    PTO requests are kept within the same experience so
                    providers can manage availability without leaving the
                    application.
                  </p>
                </div>

              </div>

            </div>
          </Reveal>

        </div>
      </section>


      {/* ========================================================= */}
      {/* WEEKLY TRACKING */}
      {/* ========================================================= */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
              07 · Weekly Tracking
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Helping providers understand their activity over time.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
              Weekly tracking provides a broader view of provider activity,
              helping users understand their workload and maintain awareness
              of their progress.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-16 flex justify-center rounded-3xl border border-white/10 bg-[#111111] p-8 sm:p-12">
              <Image
                src="/images/projects/Fox/Weekly Tracking.png"
                alt="FOX Rehabilitation Weekly Tracking"
                width={440}
                height={880}
                className="h-auto w-full max-w-[440px]"
              />
            </div>
          </Reveal>

        </div>
      </section>


      {/* ========================================================= */}
      {/* OUTCOME */}
      {/* ========================================================= */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
              Outcome
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div>

              <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                A more connected provider experience built around daily
                healthcare workflows.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                The FOX Rehabilitation Provider App brings assignments,
                cases, issues, requests, and weekly activity into one
                structured mobile experience.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-500">
                The result is a product experience designed to make
                frequently used workflows easier to scan, navigate, and
                act on throughout the provider&apos;s day.
              </p>


              <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Visibility
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Quickly understand what needs attention.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Workflow
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Manage daily provider activities in one place.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Usability
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Scan and act with less friction on mobile.
                  </p>
                </div>

              </div>

            </div>
          </Reveal>

        </div>
      </section>


      {/* ========================================================= */}
      {/* CASE STUDY NAVIGATION */}
      {/* ========================================================= */}

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
              href="/work/super-bill-automation"
              className="group inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              <span>Next Project</span>

              <span className="text-white">
                Super Bill Automation
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