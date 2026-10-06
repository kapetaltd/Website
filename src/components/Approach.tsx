const steps = [
  { title: "Identify", body: "We look for real problems worth solving." },
  { title: "Build", body: "We turn ideas into simple, useful digital products." },
  { title: "Grow", body: "We continuously improve products based on real-world use." },
];

export function Approach() {
  return (
    <section aria-labelledby="approach-title" className="bg-panel py-24 sm:py-32">
      <div className="container-k">
        <div data-reveal>
          <p className="eyebrow">Our approach</p>
          <h2 id="approach-title" className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            From problem to product, then better with use.
          </h2>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative" data-reveal={i * 90}>
              <div className="flex h-5 items-center gap-4">
                <span className="font-mono text-xs text-mist">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />
                {i < steps.length - 1 && (
                  <span className="hidden text-mist md:inline" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
              <h3 className="mt-8 text-3xl font-semibold tracking-[-0.025em]">{s.title}</h3>
              <p className="mt-3 max-w-[30ch] text-lg leading-relaxed text-graphite">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
