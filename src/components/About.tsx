export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="container-k grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5" data-reveal>
          <p className="eyebrow">About</p>
          <h2
            id="about-title"
            className="mt-4 text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            Built to build.
          </h2>
        </div>
        <div className="min-w-0 lg:col-span-6 lg:col-start-7" data-reveal="80">
          <p className="text-xl leading-relaxed tracking-[-0.01em] sm:text-2xl sm:leading-snug">
            Kapeta Labs is a technology company focused on building digital products that make everyday experiences
            simpler, smarter and more accessible.
          </p>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-graphite">
            We create, launch and operate products across different categories — from consumer platforms to focused
            digital tools.
          </p>

          <dl className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-3">
            {[
              ["Create", "Our own ideas, built in-house."],
              ["Launch", "Products we bring to market."],
              ["Operate", "Products we own and run."],
            ].map(([term, desc]) => (
              <div key={term} className="border-b border-line py-5 sm:border-b-0 sm:pr-6 sm:pt-6">
                <dt className="text-[0.9375rem] font-semibold">{term}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-graphite">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
