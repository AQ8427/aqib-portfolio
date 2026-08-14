"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const workflow = [
  {
    number: "01",
    title: "Upload",
    text: "Ingest scanned superbills and clinical PDF documents.",
  },
  {
    number: "02",
    title: "OCR",
    text: "Read and convert information from scanned documents.",
  },
  {
    number: "03",
    title: "AI Extraction",
    text: "Identify patient, provider, diagnosis, and billing data.",
  },
  {
    number: "04",
    title: "Validation",
    text: "Review extracted information and identify potential issues.",
  },
  {
    number: "05",
    title: "Billing Ready",
    text: "Convert validated information into structured billing data.",
  },
];

const challenges = [
  {
    number: "01",
    title: "Manual Processing",
    text: "Large volumes of documents required repetitive manual processing and review.",
  },
  {
    number: "02",
    title: "Unstructured Data",
    text: "Important clinical and billing information was embedded inside inconsistent document formats.",
  },
  {
    number: "03",
    title: "Extraction Accuracy",
    text: "Automated extraction needed to remain transparent so teams could review and validate important information.",
  },
  {
    number: "04",
    title: "Limited Visibility",
    text: "Teams needed a centralized view of documents, processing status, practices, users, and operational metrics.",
  },
];

const screens = [
  {
    number: "01",
    eyebrow: "Overview",
    title: "Operational Dashboard",
    description:
      "The dashboard acts as the operational starting point for healthcare teams, bringing key activity and performance indicators into a single view.",
    image: "/images/projects/super-bill/dashboard.png",
    caption:
      "A high-level command center designed to help teams understand what is happening across practices and document workflows at a glance.",
    tag: "System visibility",
  },
  {
    number: "02",
    eyebrow: "Workflow",
    title: "Document Processing",
    description:
      "The document workspace gives users a structured way to manage incoming files, monitor processing states, and identify records that require attention.",
    image: "/images/projects/super-bill/documents.png",
    caption:
      "Instead of treating uploaded files as isolated documents, the interface presents them as part of a trackable workflow, making progress and exceptions easier to understand.",
    tag: "Workflow clarity",
  },
  {
    number: "03",
    eyebrow: "Intelligence",
    title: "Patient & Billing Analytics",
    description:
      "Analytics surfaces operational patterns and performance indicators so teams can move beyond individual documents and understand the bigger picture.",
    image: "/images/projects/super-bill/analytics.png",
    caption:
      "The analytics experience turns processing activity into understandable signals, helping operations teams monitor performance and identify areas that need attention.",
    tag: "Decision support",
  },
];

const decisions = [
  {
    number: "01",
    title: "Surface What Matters",
    text: "Important operational metrics such as document volume, processing status, patients, practices, and users are surfaced prominently so teams can understand system activity at a glance.",
  },
  {
    number: "02",
    title: "Make Processing Status Visible",
    text: "Document processing involves multiple stages. Clear statuses and visual feedback help users understand what has been processed, what is still running, and where attention may be required.",
  },
  {
    number: "03",
    title: "Reduce Cognitive Load",
    text: "Instead of presenting every available data point equally, the interface uses hierarchy, grouping, filtering, and progressive disclosure to help users focus on the information relevant to their current task.",
  },
  {
    number: "04",
    title: "Design for Operational Scale",
    text: "Filters, search, role-based access, audit information, and reporting capabilities were designed to support teams managing large volumes of documents and multiple healthcare practices.",
  },
];

const outcomes = [
  {
    number: "01",
    title: "Less Manual Work",
    text: "Automates repetitive document processing and data extraction tasks.",
  },
  {
    number: "02",
    title: "Better Visibility",
    text: "Gives teams a centralized view of processing activity, practices, users, and operational metrics.",
  },
  {
    number: "03",
    title: "Greater Control",
    text: "Makes extracted information, processing states, and validation steps easier to review.",
  },
  {
    number: "04",
    title: "Scalable Operations",
    text: "Supports healthcare teams managing growing document volumes across multiple practices.",
  },
];

export default function SuperBillCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* =========================================================
          TOP NAVIGATION
      ========================================================= */}

      <nav className="px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#projects"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            ← Back to Selected Work
          </Link>
        </div>
      </nav>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
              Healthcare · AI · Automation
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Super Bill
              <br />
              Automation
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              An AI-powered healthcare administration platform that automates
              superbill and clinical document processing through OCR, intelligent
              data extraction, validation, and centralized workflow management.
            </p>
          </Reveal>


          {/* Hero Image */}

          <Reveal delay={0.24}>
            <div className="group relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl shadow-black/40">

              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-white/[0.03]" />

              <Image
                src="/images/projects/super-bill-automation.png"
                alt="Super Bill Automation"
                width={1600}
                height={900}
                className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />

            </div>
          </Reveal>


          {/* Project Meta */}

          <Reveal delay={0.32}>
            <div className="mt-10 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">

              <div className="py-6 lg:border-r lg:border-white/10 lg:pr-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  Role
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  Product Designer
                </p>
              </div>


              <div className="border-t border-white/10 py-6 sm:pl-8 lg:border-t-0 lg:border-r lg:pl-8 lg:pr-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  Industry
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  Healthcare
                </p>
              </div>


              <div className="border-t border-white/10 py-6 lg:border-t-0 lg:border-r lg:pl-8 lg:pr-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  Focus
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  AI · OCR · Automation
                </p>
              </div>


              <div className="border-t border-white/10 py-6 lg:border-t-0 lg:pl-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  Platform
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  Web Application
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>


      {/* =========================================================
          PROJECT OVERVIEW
      ========================================================= */}

      <section className="border-t border-white/10 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <Reveal>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
                  Project Overview
                </p>
              </div>
            </Reveal>


            <Reveal delay={0.08}>
              <div>

                <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  Automating the journey from medical documents to
                  billing-ready information.
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500">
                  Super Bill Automation is a healthcare administration and
                  medical billing platform designed to automate the processing
                  of patient superbills and clinical documents.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500">
                  The platform collects uploaded PDF documents, uses OCR and
                  AI-powered extraction to identify important clinical and
                  billing information, validates the extracted data, and
                  converts unstructured records into structured information
                  for downstream billing workflows.
                </p>

              </div>
            </Reveal>

          </div>


          {/* Details */}

          <Reveal delay={0.16}>
            <div className="mt-20 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">

              <div className="border-b border-white/10 py-7 sm:border-r lg:border-b-0">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  Industry
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  Healthcare
                </p>
              </div>


              <div className="border-b border-white/10 py-7 sm:px-8 lg:border-b-0 lg:border-r">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  Product
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  Healthcare Administration
                </p>
              </div>


              <div className="border-b border-white/10 py-7 lg:border-b-0 lg:border-r lg:px-8">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  Focus
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  AI · OCR · Automation
                </p>
              </div>


              <div className="py-7 lg:pl-8">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  Users
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  Billing & Operations Teams
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>


      {/* =========================================================
          CHALLENGE
      ========================================================= */}

      <section className="border-t border-white/10 px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <Reveal>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
                  The Challenge
                </p>
              </div>
            </Reveal>


            <Reveal delay={0.08}>
              <div>

                <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  Turning a complex, manual healthcare workflow into a clear
                  and reliable digital experience.
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500">
                  Medical billing teams often work with large volumes of
                  scanned superbills and clinical documents. These documents
                  contain important patient, provider, diagnosis, and billing
                  information, but much of that information starts as
                  unstructured data inside PDFs.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500">
                  The challenge was to create an experience that could automate
                  this process while still giving healthcare operations teams
                  visibility, control, and confidence in the extracted data.
                </p>

              </div>
            </Reveal>

          </div>


          {/* Challenge Cards */}

          <div className="mt-20 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">

            {challenges.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <div
                  className="border-b border-white/10 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
                >

                  <span className="text-xs text-zinc-600">
                    {item.number}
                  </span>

                  <h3 className="mt-6 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {item.text}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          AUTOMATION WORKFLOW
      ========================================================= */}

      <section className="border-t border-white/10 px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
                Automation Workflow
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div>

                <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  From scanned documents to structured billing data.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500">
                  The product brings multiple steps of the healthcare document
                  processing workflow into one centralized experience.
                </p>

              </div>
            </Reveal>

          </div>


          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-5">

            {workflow.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <div
                  className="bg-[#0A0A0A] p-7 lg:p-8"
                >

                  <span className="text-xs text-zinc-600">
                    {item.number}
                  </span>

                  <div className="mt-12">

                    <h3 className="text-lg font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      {item.text}
                    </p>

                  </div>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          PRODUCT EXPERIENCE
      ========================================================= */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <Reveal>
              <div>

                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
                  Product Experience
                </p>

                <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-600">
                  Selected product screens showing how the experience brings
                  complex healthcare operations into one connected workspace.
                </p>

              </div>
            </Reveal>


            <Reveal delay={0.08}>
              <div>

                <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                  Designing clarity across every stage of the workflow.
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-500">
                  Each part of the product was designed around a simple
                  principle: give healthcare teams the right information at
                  the right moment, without overwhelming them with
                  unnecessary complexity.
                </p>

              </div>
            </Reveal>

          </div>


          {/* Product Screens */}

          <div className="mt-28 space-y-28">

            {screens.map((screen, index) => (
              <Reveal key={screen.number} delay={index * 0.08}>
                <div>

                  {/* Screen Context */}

                  <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

                    <div className="flex items-start gap-5">

                      <span className="mt-1 text-xs text-zinc-600">
                        {screen.number}
                      </span>

                      <div>

                        <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                          {screen.eyebrow}
                        </p>

                        <h3 className="mt-3 text-2xl font-medium tracking-tight">
                          {screen.title}
                        </h3>

                      </div>

                    </div>


                    <div>

                      <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                        {screen.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-600">

                        {screen.number === "01" && (
                          <>
                            <span>Practice visibility</span>
                            <span>Document activity</span>
                            <span>Processing metrics</span>
                          </>
                        )}

                        {screen.number === "02" && (
                          <>
                            <span>Document status</span>
                            <span>Search & filtering</span>
                            <span>Processing visibility</span>
                          </>
                        )}

                        {screen.number === "03" && (
                          <>
                            <span>Performance metrics</span>
                            <span>Operational insights</span>
                            <span>Data visualization</span>
                          </>
                        )}

                      </div>

                    </div>

                  </div>


                  {/* Image */}

                  <div className="group relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">

                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-white/[0.03]" />

                    <Image
                      src={screen.image}
                      alt={screen.title}
                      width={1600}
                      height={900}
                      className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                    />

                  </div>


                  {/* Caption */}

                  <div className="mt-6 flex flex-col gap-3 border-b border-white/10 pb-8 sm:flex-row sm:items-start sm:justify-between">

                    <p className="max-w-xl text-sm leading-7 text-zinc-500">
                      {screen.caption}
                    </p>

                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-700">
                      {screen.tag}
                    </p>

                  </div>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          DESIGN DECISIONS
      ========================================================= */}

      <section className="border-t border-white/10 px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
                Design Decisions
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div>

                <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  Designing clarity into a workflow built around complexity.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500">
                  The product handles large amounts of healthcare data and
                  multiple operational workflows. The design focused on making
                  complex information easier to understand, monitor, and act on.
                </p>

              </div>
            </Reveal>

          </div>


          <div className="mt-20 divide-y divide-white/10 border-y border-white/10">

            {decisions.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.06}>
                <div
                  className="grid gap-6 py-10 lg:grid-cols-[0.7fr_1.3fr]"
                >

                  <div className="flex items-start gap-5">

                    <span className="text-xs text-zinc-600">
                      {item.number}
                    </span>

                    <h3 className="text-xl font-medium">
                      {item.title}
                    </h3>

                  </div>

                  <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                    {item.text}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          OUTCOME
      ========================================================= */}

      <section className="border-t border-white/10 px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <Reveal>
              <div>

                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
                  Outcome
                </p>

              </div>
            </Reveal>


            <Reveal delay={0.08}>
              <div>

                <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  A more connected and transparent workflow for healthcare
                  operations teams.
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500">
                  Super Bill Automation brings document processing, data
                  extraction, validation, analytics, and operational monitoring
                  into a centralized platform.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500">
                  The experience is designed to reduce repetitive manual work,
                  improve visibility into document processing, and give teams
                  greater confidence when moving extracted information into
                  downstream billing workflows.
                </p>

              </div>
            </Reveal>

          </div>


          {/* Outcome Cards */}

          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">

            {outcomes.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.06}>
                <div
                  className="bg-[#0A0A0A] p-8"
                >

                  <p className="text-xs text-zinc-600">
                    {item.number}
                  </p>

                  <h3 className="mt-10 text-lg font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {item.text}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          CASE STUDY NAVIGATION
      ========================================================= */}

      <section className="border-t border-white/10 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">

            {/* Back */}

            <Reveal>
              <Link
                href="/#projects"
                className="group"
              >

                <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                  Back to
                </p>

                <p className="mt-3 text-xl font-medium transition-colors group-hover:text-[#FF5A00]">
                  Selected Work
                </p>

              </Link>
            </Reveal>


            {/* Next */}

            <Reveal delay={0.08}>
              <Link
                href="/work/mapapp"
                className="group text-left sm:text-right"
              >

                <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                  Next Project
                </p>

                <div className="mt-3 flex items-center gap-4 sm:justify-end">

                  <p className="text-2xl font-medium transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FF5A00]">
                    MAPApp
                  </p>

                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>

                </div>

              </Link>
            </Reveal>

          </div>

        </div>
      </section>

    </main>
  );
}