const experiences = [
  {
    number: "01",
    company: "CareCloud / MTBC",
    role: "Product Designer",
    period: "Nov 2023 — Present",
    focus: "Healthcare · Enterprise SaaS · Revenue Cycle Management · AI",
    description:
      "Designing healthcare and revenue-cycle products that simplify complex operational workflows for healthcare and billing teams. Working across product strategy, UX/UI, design systems, and AI-powered workflows.",
  },
  {
    number: "02",
    company: "NineSol Technologies",
    role: "UI/UX Designer",
    period: "Sep 2022 — Nov 2023",
    focus: "SaaS · Web Applications · Mobile Products · Product Design",
    description:
      "Designed user-centered web and mobile experiences across multiple digital products, collaborating with product and development teams from concept through implementation.",
  },
  {
    number: "03",
    company: "AppTrick Technologies",
    role: "UI Designer",
    period: "Mar 2022 — Aug 2022",
    focus: "Web Design · Mobile UI · Responsive Design · User Experience",
    description:
      "Designed user interfaces for web and mobile products, focusing on usability, visual consistency, responsive layouts, and clear user experiences.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0A0A0A] px-6 py-28 text-white lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#FF5A00]">
            EXPERIENCE
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3rem]">
            Designing products across healthcare, SaaS, and digital experiences.
          </h2>
        </div>

        <p className="mt-10 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
          A selection of experience focused on solving complex business problems through thoughtful product strategy, UX, and visual design.
        </p>

        <div className="mt-16 space-y-8">
          {experiences.map((item) => (
            <div
              key={item.number}
              className="grid gap-8 rounded-2xl border border-white/10 bg-[#0F0F0F] p-6 transition-all duration-300 hover:border-[#FF5A00]/60 lg:grid-cols-[0.22fr_0.78fr] lg:p-8"
            >
              <div className="border-b border-white/10 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600">
                  {item.number}
                </span>

                <p className="mt-8 text-sm uppercase tracking-[0.25em] text-zinc-500 lg:mt-10">
                  {item.period}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">
                  {item.company}
                </h3>

                <p className="mt-2 text-base font-medium text-zinc-300">
                  {item.role}
                </p>

                <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#FF5A00]">
                  Focus:
                </p>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.focus}
                </p>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
