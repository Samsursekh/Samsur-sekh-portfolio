const SERVICES = [
  {
    title: "Paid Media Management",
    body: "Full-funnel execution across Meta, Google, and TikTok — built for efficient, profitable scale.",
    items: ["Campaign architecture", "Creative testing", "Budget & bid strategy"],
  },
  {
    title: "Conversion Rate Optimization",
    body: "Turning existing traffic into revenue through structured experimentation.",
    items: ["Landing page audits", "A/B testing roadmap", "Checkout optimization"],
  },
  {
    title: "Analytics & Attribution",
    body: "Clean data infrastructure so every decision is backed by a source of truth.",
    items: ["GA4 & GTM setup", "Looker Studio dashboards", "Incrementality testing"],
  },
  {
    title: "Growth Strategy",
    body: "A quarterly roadmap connecting acquisition, retention, and revenue targets.",
    items: ["Channel mix planning", "Competitive research", "Executive reporting"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-section-gap relative bg-surface-container-lowest/50 border-y border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-display text-[32px] md:text-headline-lg text-on-surface mb-4 font-semibold">
            Services
          </h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">
            Focused engagements designed to plug directly into your growth stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="glass-panel p-8 rounded-2xl border border-outline-variant/20 hover-glow transition-all duration-300"
            >
              <h3 className="font-display text-[22px] text-on-surface mb-3 font-semibold">{service.title}</h3>
              <p className="text-on-surface-variant text-body-md mb-6">{service.body}</p>
              <ul className="flex flex-col gap-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-on-surface-variant text-body-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
