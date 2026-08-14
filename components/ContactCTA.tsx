const emailAddress = "aqibshahzad45@gmail.com";

export default function ContactCTA() {
  const subject = "Project Inquiry — Product Design";
  const mailtoHref = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <section id="contact" className="scroll-mt-24 bg-[#0A0A0A] px-6 py-28 text-white lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0F0F0F] p-8 sm:p-10 lg:p-14">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#FF5A00]">
            LET&apos;S WORK TOGETHER
          </p>

          <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.2rem]">
            Have a complex product problem?
            <span className="block text-zinc-500">Let&apos;s make it clear.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m always interested in working on thoughtful digital products, AI experiences, healthcare platforms, and complex SaaS workflows.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5A00] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e64f00]"
            >
              Let&apos;s Talk
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="https://pk.linkedin.com/in/aqib-shahzad-b57042130"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/923153399932"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white"
            >
              WhatsApp · +92 315 3399932
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white"
            >
              View Resume
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0A0A0A] px-6 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-medium tracking-[-0.02em]">Muhammad Aqib Shahzad</p>
            <p className="mt-1 text-sm text-zinc-500">Product Designer</p>
          </div>

          <nav className="flex flex-wrap items-center gap-5 text-sm text-zinc-400">
            <a href="/#about" className="transition-colors duration-300 hover:text-white">
              About
            </a>
            <a href="/#projects" className="transition-colors duration-300 hover:text-white">
              Work
            </a>
            <a href="/#expertise" className="transition-colors duration-300 hover:text-white">
              Expertise
            </a>
            <a href="/#contact" className="transition-colors duration-300 hover:text-white">
              Contact
            </a>
            <a href="https://pk.linkedin.com/in/aqib-shahzad-b57042130" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white">
              LinkedIn
            </a>
            <a href="https://wa.me/923153399932" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white">
              WhatsApp
            </a>
            <a href="tel:+923153399932" className="transition-colors duration-300 hover:text-white">
              +92 315 3399932
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white">
              Resume
            </a>
          </nav>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-zinc-500">
          © 2026 Muhammad Aqib Shahzad
        </div>
      </footer>
    </>
  );
}
