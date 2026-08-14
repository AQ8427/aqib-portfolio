const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by learning the users, workflows, business constraints, and the real problem behind the request.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "I turn findings into clear opportunities, product priorities, and user flows that align business needs with user outcomes.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "I shape interaction patterns, user journeys, and polished interfaces that make complex systems feel clear and usable.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "I test ideas with users and stakeholders, refine the experience, and build scalable solutions ready for real product growth.",
  },
];

export default function DesignApproach() {
  return (
    <section id="design-approach" className="bg-[#0A0A0A] px-6 py-28 text-white lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#FF5A00]">
            DESIGN APPROACH
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3rem]">
            From complex problems to clear product experiences.
          </h2>
        </div>

        <p className="mt-10 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
          My process combines product thinking, UX strategy, research, and visual design to turn complex workflows into simple, scalable experiences.
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-white/10 bg-[#0F0F0F] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5A00]/60"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600">
                {step.number}
              </span>

              <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#FF5A00]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400 lg:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
