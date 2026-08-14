const expertiseItems = [
  {
    number: "01",
    title: "Product Design",
    description:
      "End-to-end product experiences from problem definition to polished interfaces.",
  },
  {
    number: "02",
    title: "AI Product Design",
    description:
      "Designing intelligent workflows that make AI-powered products understandable and useful.",
  },
  {
    number: "03",
    title: "Healthcare UX",
    description:
      "Simplifying complex healthcare, clinical, and revenue-cycle workflows.",
  },
  {
    number: "04",
    title: "Enterprise SaaS",
    description:
      "Designing scalable experiences for complex business workflows and operational teams.",
  },
  {
    number: "05",
    title: "Design Systems",
    description:
      "Creating reusable components, patterns, and tokens for consistent product experiences.",
  },
  {
    number: "06",
    title: "UX Strategy & Research",
    description:
      "Using research, usability testing, and product thinking to solve the right problems.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-[#0A0A0A] px-6 py-28 text-white lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#FF5A00]">
            EXPERTISE
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3rem]">
            Designing complex products with clarity, strategy, and purpose.
          </h2>
        </div>

        <p className="mt-10 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
          I design digital products that turn complex workflows into intuitive experiences — from AI-powered healthcare platforms to enterprise SaaS and scalable design systems.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {expertiseItems.map((item) => (
            <div
              key={item.number}
              className="group rounded-2xl border border-white/10 bg-[#0F0F0F] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5A00]/60"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600">
                {item.number}
              </span>

              <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#FF5A00]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}