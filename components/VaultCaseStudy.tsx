import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function VaultCaseStudy() {
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
              FinTech · Mobile · Product Design
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Vault
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
              A smart finance mobile app designed to help users
              manage money, track spending, send payments, and work
              toward savings goals.
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
                  Mobile UX · UI · Design System
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Platform
                </p>
                <p className="mt-3 text-sm text-zinc-300">
                  iOS & Android
                </p>
              </div>

            </div>
          </Reveal>

          {/* Hero Screens */}
          <Reveal delay={0.32}>
            <div className="mt-20 flex flex-wrap items-end justify-center gap-8 lg:gap-12">

              <Image
                src="/images/projects/vault/Onboarding.png"
                alt="Vault onboarding"
                width={300}
                height={620}
                className="h-auto w-[220px] sm:w-[260px] lg:w-[300px]"
              />

              <Image
                src="/images/projects/vault/Dashboard.png"
                alt="Vault dashboard"
                width={320}
                height={640}
                className="h-auto w-[240px] sm:w-[280px] lg:w-[320px]"
              />

              <Image
                src="/images/projects/vault/Transactions.png"
                alt="Vault transactions"
                width={300}
                height={620}
                className="h-auto w-[220px] sm:w-[260px] lg:w-[300px]"
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
                A modern mobile banking experience built around
                everyday financial tasks.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                Vault brings everyday financial actions into a
                connected mobile experience, from viewing balances
                and transactions to sending money, managing cards,
                exploring spending insights, and updating account
                settings.
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
              Making everyday money movement simple and accessible.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
              Vault brings transactions and money transfers into
              focused workflows, helping users review activity and
              initiate payments from a consistent mobile experience.
            </p>
          </Reveal>

          {/* Transaction Screens */}
          <div className="mt-20 grid gap-12 md:grid-cols-2 md:items-start lg:gap-20">

            <Reveal delay={0.24}>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/projects/vault/Transactions.png"
                  alt="Vault transactions"
                  width={340}
                  height={700}
                  className="h-auto w-[260px] sm:w-[300px] lg:w-[340px]"
                />

                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Transactions
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/projects/vault/Send Money.png"
                  alt="Vault send money"
                  width={340}
                  height={700}
                  className="h-auto w-[260px] sm:w-[300px] lg:w-[340px]"
                />

                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Send Money
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>
            {/* Financial Insights */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
              Financial Insights
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Helping users understand spending and manage their cards.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
              Analytics gives users a visual view of their spending,
              while the Cards experience provides quick access to card
              details and controls.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-12 md:grid-cols-2 md:items-start lg:gap-20">

            <Reveal delay={0.24}>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/projects/vault/Analytics.png"
                  alt="Vault analytics"
                  width={340}
                  height={700}
                  className="h-auto w-[260px] sm:w-[300px] lg:w-[340px]"
                />

                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Analytics
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/projects/vault/Cards.png"
                  alt="Vault cards"
                  width={340}
                  height={700}
                  className="h-auto w-[260px] sm:w-[300px] lg:w-[340px]"
                />

                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Cards
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>
            {/* Profile */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
              Account Experience
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Keeping personal account management simple and accessible.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
              The profile experience gives users a focused place to
              manage their personal account and access important
              banking settings.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-20 flex justify-center">
              <Image
                src="/images/projects/vault/Profile.png"
                alt="Vault profile"
                width={340}
                height={700}
                className="h-auto w-[260px] sm:w-[300px] lg:w-[340px]"
              />
            </div>
          </Reveal>

        </div>
      </section>
            {/* Getting Started */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF5A00]">
              Getting Started
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              A simple entry point from first interaction to secure access.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
              The onboarding and login experience introduces Vault
              before guiding users into the secure banking experience.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-12 md:grid-cols-2 md:items-start lg:gap-20">

            <Reveal delay={0.24}>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/projects/vault/Onboarding.png"
                  alt="Vault onboarding"
                  width={340}
                  height={700}
                  className="h-auto w-[260px] sm:w-[300px] lg:w-[340px]"
                />

                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Onboarding
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/projects/vault/Login.png"
                  alt="Vault login"
                  width={340}
                  height={700}
                  className="h-auto w-[260px] sm:w-[300px] lg:w-[340px]"
                />

                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Login
                </p>
              </div>
            </Reveal>

          </div>

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
                A cohesive mobile banking experience for everyday
                financial management.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                Vault brings everyday banking actions into a connected
                mobile experience, from checking transactions and
                sending money to exploring financial insights, managing
                cards, and accessing account settings.
              </p>

              <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Transactions
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Review activity and move money
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Insights
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Understand financial activity
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Management
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Manage cards and account settings
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

    {/* Back to Work */}
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

    {/* Next Project — FOX */}
    <Reveal delay={0.08}>
      <Link
        href="/work/fox-rehabilitation"
        className="group inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
      >
        <span>Next Project</span>

        <span className="text-white">
          FOX Rehabilitation
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