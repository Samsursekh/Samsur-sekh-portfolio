import GrowthFunnel from "./GrowthFunnel";

export default function GrowthArchitecture() {
  return (
    <section className="py-section-gap relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-display text-[32px] md:text-headline-lg text-on-surface mb-4 font-semibold">
            The Growth Architecture
          </h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">
            Systematic scaling through full-funnel optimization.
          </p>
        </div>

        <GrowthFunnel />
      </div>
    </section>
  );
}
