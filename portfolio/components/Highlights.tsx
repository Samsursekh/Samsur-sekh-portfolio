const CARDS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3v18h18M7 15l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Data-First Strategy",
    body: "Every decision is backed by rigorous analysis and market intelligence.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0 0 12 2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "High-Impact Creative",
    body: "Campaigns that stop the scroll and drive meaningful engagement.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Scale-Ready Systems",
    body: "Building acquisition engines that sustain long-term business growth.",
  },
];

export default function Highlights() {
  return (
    <section className="py-section-gap relative overflow-hidden border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-display text-[32px] md:text-headline-lg text-on-surface mb-4 font-semibold">
            Engineered for Results
          </h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">
            Foundational pillars for sustainable growth and scalable acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="glass-panel p-8 rounded-2xl border border-outline-variant/20 hover-glow transition-all duration-300 flex flex-col gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {card.icon}
              </div>
              <div>
                <h3 className="font-display text-[24px] text-on-surface mb-2 font-semibold">{card.title}</h3>
                <p className="text-on-surface-variant text-body-md">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
