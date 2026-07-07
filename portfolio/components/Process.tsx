const STEPS = [
  {
    num: "01",
    title: "Audit & Discovery",
    body: "Deep-dive into current performance, tracking integrity, and market positioning.",
  },
  {
    num: "02",
    title: "Strategy & Architecture",
    body: "Build the channel mix, budget model, and testing roadmap tied to revenue targets.",
  },
  {
    num: "03",
    title: "Launch & Optimize",
    body: "Ship campaigns and creative, then iterate weekly against a live testing calendar.",
  },
  {
    num: "04",
    title: "Scale & Report",
    body: "Reinvest into what performs, backed by transparent, executive-ready reporting.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-section-gap relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-display text-[32px] md:text-headline-lg text-on-surface mb-4 font-semibold">
            The Process
          </h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">
            A repeatable four-stage engagement, from first audit to compounding scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
          {STEPS.map((step) => (
            <div key={step.num} className="relative flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full glass-panel border border-primary/20 flex items-center justify-center text-primary font-display text-[16px] font-bold relative z-10">
                {step.num}
              </div>
              <h3 className="font-display text-[20px] text-on-surface font-semibold">{step.title}</h3>
              <p className="text-on-surface-variant text-body-md">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
